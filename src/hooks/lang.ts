import { useEffect, useState } from 'react'

function useLang(storageKey: string): ['en' | 'ru', () => void] {
	const [lang, setLang] = useState<'en' | 'ru'>(() => (localStorage.getItem(storageKey) === 'ru' ? 'ru' : 'en'))

	useEffect(() => localStorage.setItem(storageKey, lang), [lang])

	const onToggle = () => setLang(lang === 'en' ? 'ru' : 'en')

	return [lang, onToggle]
}

export { useLang }
