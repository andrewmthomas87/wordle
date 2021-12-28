import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { randomCommonWord } from 'words'
import Alphabet from './Alphabet'
import LetterRow from './LetterRow'
import LetterRowComplete from './LetterRowComplete'

const Wordle: React.FC = () => {
	const [word, setWord] = useState(() => randomCommonWord())
	const [complete, setComplete] = useState<string[]>([])
	const [badLetters, setBadLetters] = useState<Set<string>>(() => new Set())
	const [isWon, setIsWon] = useState(false)

	const onComplete = (guess: string) => {
		const nextBadLetters = new Set(badLetters)
		for (let i = 0; i < guess.length; i++) {
			const c = guess.charAt(i)
			if (word.indexOf(c) === -1) {
				nextBadLetters.add(c)
			}
		}

		setComplete([...complete, guess])
		setBadLetters(nextBadLetters)

		if (guess === word) {
			setIsWon(true)
		}
	}

	const onReset = () => {
		setWord(randomCommonWord())
		setComplete([])
		setBadLetters(new Set())
		setIsWon(false)
	}

	return (
		<Container maxWidth="sm" sx={{ py: 3 }}>
			<Box mb={3} textAlign="right">
				<Button variant="outlined" onClick={onReset}>
					Reset
				</Button>
			</Box>
			{complete.map((guess, i) => (
				<LetterRowComplete key={i} guess={guess} target={word} />
			))}
			{isWon ? (
				<Typography variant="h5" gutterBottom textAlign="center">
					You won after {complete.length} guesses!
				</Typography>
			) : (
				<LetterRow key={complete.length} length={word.length} onComplete={onComplete} />
			)}
			<Alphabet badLetters={badLetters} />
		</Container>
	)
}

export default Wordle
