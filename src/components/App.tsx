import { CssBaseline, ThemeProvider } from '@mui/material'
import { useColorMode } from 'hooks/colorMode'
import { useMemo } from 'react'
import { darkTheme, lightTheme } from 'theme'
import Nav from './Nav'
import Wordle from './Wordle'

const App: React.FC = () => {
	const [colorMode, onToggleColorMode] = useColorMode('wordle-color-mode')
	const theme = useMemo(() => (colorMode === 'dark' ? darkTheme : lightTheme), [colorMode])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Nav colorMode={colorMode} onToggleColorMode={onToggleColorMode} />
			<Wordle />
		</ThemeProvider>
	)
}

export default App
