import { createTheme, PaletteOptions } from '@mui/material'

const palette: PaletteOptions = {
	primary: { main: '#5f27cd' },
}

const darkTheme = createTheme({
	palette: { ...palette, mode: 'dark' },
})

const lightTheme = createTheme({
	palette: { ...palette, mode: 'light' },
})

export { darkTheme, lightTheme }
