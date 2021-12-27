import { useEffect, useState } from 'react'

function useColorMode(storageKey: string): ['dark' | 'light', () => void] {
	const [colorMode, setColorMode] = useState<'dark' | 'light'>(() =>
		localStorage.getItem(storageKey) === 'dark' ? 'dark' : 'light'
	)

	useEffect(() => localStorage.setItem(storageKey, colorMode), [colorMode])

	const onToggle = () => setColorMode(colorMode === 'dark' ? 'light' : 'dark')

	return [colorMode, onToggle]
}

export { useColorMode }
