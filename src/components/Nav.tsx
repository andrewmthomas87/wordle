import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

interface IProps {
	colorMode: 'dark' | 'light'

	onToggleColorMode(): void
}

const Nav: React.FC<IProps> = ({ colorMode, onToggleColorMode }) => (
	<AppBar position="sticky" elevation={0}>
		<Toolbar>
			<Typography variant="h4" mt="-0.25em" component="div" fontFamily="'Shizuru', cursive" sx={{ flexGrow: 1 }}>
				Wordle
			</Typography>
			<IconButton color="inherit" onClick={onToggleColorMode}>
				{colorMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
			</IconButton>
		</Toolbar>
	</AppBar>
)

export default Nav
