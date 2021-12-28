import { CssBaseline, ThemeProvider } from '@mui/material'
import { useColorMode } from 'hooks/colorMode'
import { useLang } from 'hooks/lang'
import { useMemo } from 'react'
import { darkTheme, lightTheme } from 'theme'
import Nav from './Nav'
import Wordle from './Wordle'

const App: React.FC = () => {
	const [lang, onToggleLang] = useLang('wordle-lang')
	const [colorMode, onToggleColorMode] = useColorMode('wordle-color-mode')
	const theme = useMemo(() => (colorMode === 'dark' ? darkTheme : lightTheme), [colorMode])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Nav lang={lang} colorMode={colorMode} onToggleLang={onToggleLang} onToggleColorMode={onToggleColorMode} />
			<Wordle key={lang} lang={lang} />
		</ThemeProvider>
	)
}

export default App
