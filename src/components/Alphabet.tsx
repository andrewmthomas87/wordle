import { Stack, Typography } from '@mui/material'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

interface IProps {
	badLetters: Set<string>
}

const Alphabet: React.FC<IProps> = ({ badLetters }) => (
	<Stack direction="row" justifyContent="center" flexWrap="wrap" spacing={1} mb={3}>
		{alphabet.map((c) => (
			<Typography
				key={c}
				variant="body1"
				sx={{
					opacity: badLetters.has(c) ? 0.5 : 1,
					textDecoration: badLetters.has(c) ? 'line-through' : undefined,
				}}
			>
				{c}
			</Typography>
		))}
	</Stack>
)

export default Alphabet
