import { Stack } from '@mui/material'
import { useState } from 'react'
import { isValidWord } from 'words'
import LetterInput from './LetterInput'

interface IProps {
	lang: 'en' | 'ru'
	length: number

	onComplete(value: string): void
}

const LetterRow: React.FC<IProps> = ({ lang, length, onComplete }) => {
	const [value, setValue] = useState('')
	const [isInvalid, setIsInvalid] = useState(false)
	const [focused, setFocused] = useState(0)

	const onSet = (i: number, c: string) => {
		let nextValue: string
		if (value.length > i) {
			nextValue = value
		} else {
			nextValue = value + ' '.repeat(i - value.length)
		}

		nextValue = nextValue.slice(0, i) + c + nextValue.slice(i + 1)

		let nextFocused: number
		if (c === ' ') {
			if (value.length > i && value.charAt(i) !== ' ') {
				nextFocused = focused
			} else {
				nextFocused = Math.max(0, focused - 1)

				if (i > 0) {
					nextValue = nextValue.slice(0, i - 1) + ' ' + nextValue.slice(i)
				}
			}
		} else {
			nextFocused = Math.min(length - 1, focused + 1)
		}

		setValue(nextValue)
		setFocused(nextFocused)
	}

	const onEnter = () => {
		if (value.length === length && isValidWord(value)) {
			onComplete(value)
		} else {
			setIsInvalid(true)
		}
	}

	return (
		<Stack direction="row" spacing={2} mb={3}>
			{Array(length)
				.fill(0)
				.map((_, i) => (
					<LetterInput
						key={i}
						lang={lang}
						length={length}
						c={value.length > i ? value.charAt(i) : ''}
						isInvalid={isInvalid}
						isFocused={focused === i}
						onSet={(c) => onSet(i, c)}
						onEnter={onEnter}
						onFocus={() => setFocused(i)}
					/>
				))}
		</Stack>
	)
}

export default LetterRow
