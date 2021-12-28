import { Input } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabetRus = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'

interface IProps {
	lang: 'en' | 'ru'
	length: number
	c: string
	isInvalid: boolean
	isFocused: boolean

	onSet(c: string): void
	onEnter(): void
	onFocus(): void
}

const LetterInput: React.FC<IProps> = ({ lang, length, c, isInvalid, isFocused, onSet, onEnter, onFocus }) => {
	const ref = useRef<HTMLInputElement>()

	useEffect(() => {
		if (isFocused && ref.current) {
			ref.current.querySelector('input')?.focus()
		}
	}, [isFocused])

	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.code === 'Enter') {
			onEnter()
			return
		} else if (e.code === 'Backspace') {
			onSet(' ')
			return
		}

		const c = e.key.toUpperCase()
		if ((lang === 'en' && alphabet.indexOf(c) > -1) || (lang === 'ru' && alphabetRus.indexOf(c) > -1)) {
			onSet(c)
		}
	}

	return (
		<Input
			ref={ref}
			value={c}
			error={isInvalid}
			inputProps={{ style: { textAlign: 'center' } }}
			sx={{ fontSize: length > 5 ? 35 : 45 }}
			onKeyDown={onKeyDown}
			onFocus={onFocus}
		/>
	)
}

export default LetterInput
