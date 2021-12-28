import { Input, Stack } from '@mui/material'
import { useMemo } from 'react'

const resultBackgroundColor = ['', '#00b894', '#fdcb6e']

interface IProps {
	target: string
	guess: string
}

const LetterRowComplete: React.FC<IProps> = ({ target, guess }) => {
	const result = useMemo(() => {
		const result = Array(target.length).fill(0)

		for (let i = 0; i < target.length; i++) {
			if (guess.charAt(i) === target.charAt(i)) {
				result[i] = 1
			}
		}

		for (let i = 0; i < target.length; i++) {
			if (result[i] === 1) {
				continue
			}

			const c = target.charAt(i)
			for (let j = 0; j < target.length; j++) {
				if (result[j] === 0 && guess.charAt(j) === c) {
					result[j] = 2
					break
				}
			}
		}

		return result
	}, [target, guess])

	return (
		<Stack direction="row" mb={2}>
			{result.map((r, i) => (
				<Input
					key={i}
					value={guess.charAt(i)}
					readOnly
					inputProps={{ style: { textAlign: 'center' } }}
					sx={{
						fontSize: target.length > 5 ? 35 : 45,
						backgroundColor: resultBackgroundColor[r],
					}}
				/>
			))}
		</Stack>
	)
}

export default LetterRowComplete
