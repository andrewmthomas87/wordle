import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { randomCommonWord } from 'words'
import { randomCommonWordRus } from 'wordsRus'
import Alphabet from './Alphabet'
import LetterRow from './LetterRow'
import LetterRowComplete from './LetterRowComplete'

interface IProps {
	lang: 'en' | 'ru'
}

const Wordle: React.FC<IProps> = ({ lang }) => {
	const [word, setWord] = useState(() => (lang === 'en' ? randomCommonWord() : randomCommonWordRus()))
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
		setWord(lang === 'en' ? randomCommonWord() : randomCommonWordRus())
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
				<LetterRow key={complete.length} lang={lang} length={word.length} onComplete={onComplete} />
			)}
			<Alphabet lang={lang} badLetters={badLetters} />
		</Container>
	)
}

export default Wordle
