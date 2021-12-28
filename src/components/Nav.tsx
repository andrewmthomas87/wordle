import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'

interface IProps {
	lang: 'en' | 'ru'
	colorMode: 'dark' | 'light'

	onToggleLang(): void
	onToggleColorMode(): void
}

const Nav: React.FC<IProps> = ({ lang, colorMode, onToggleLang, onToggleColorMode }) => (
	<AppBar position="static" elevation={0}>
		<Toolbar>
			<Typography variant="h4" mt="-0.25em" component="div" fontFamily="'Shizuru', cursive" sx={{ flexGrow: 1 }}>
				Wordle
			</Typography>
			<Stack direction="row" spacing={1}>
				<Button color="inherit" onClick={onToggleLang}>
					{lang === 'en' ? 'EN' : 'RU'}
				</Button>
				<IconButton color="inherit" onClick={onToggleColorMode}>
					{colorMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
				</IconButton>
			</Stack>
		</Toolbar>
	</AppBar>
)

export default Nav
