import { Container } from '@mui/material'
import { useState } from 'react'
import { randomCommonWord } from 'words'
import Alphabet from './Alphabet'
import LetterRow from './LetterRow'
import LetterRowComplete from './LetterRowComplete'

const Wordle: React.FC = () => {
	const [word, _] = useState(() => randomCommonWord())
	const [complete, setComplete] = useState<string[]>([])
	const [badLetters, setBadLetters] = useState<Set<string>>(() => new Set())

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
	}

	return (
		<Container maxWidth="sm" sx={{ py: 3 }}>
			<Alphabet badLetters={badLetters} />
			{complete.map((guess, i) => (
				<LetterRowComplete key={i} guess={guess} target={word} />
			))}
			<LetterRow key={complete.length} length={word.length} onComplete={onComplete} />
		</Container>
	)
}

export default Wordle
