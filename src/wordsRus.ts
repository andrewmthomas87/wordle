import commonRaw from './common-words-rus.txt?raw'
import raw from './words-rus.txt?raw'

const wordsRus = raw
	.split('\n')
	.map((word) => word.replaceAll('\r', ''))
	.filter((word) => word.length >= 4 && word.length <= 8)
	.map((word) => word.toUpperCase())

const wordsSet = new Set<string>()
wordsRus.forEach((word) => wordsSet.add(word))

function isValidWordRus(word: string): boolean {
	return wordsSet.has(word)
}

const commonWordsRus = commonRaw
	.split('\n')
	.map((word) => word.toUpperCase())
	.filter((word) => wordsSet.has(word))

function randomCommonWordRus(): string {
	return commonWordsRus[Math.floor(Math.random() * commonWordsRus.length)]
}

export { commonWordsRus, isValidWordRus, randomCommonWordRus }
