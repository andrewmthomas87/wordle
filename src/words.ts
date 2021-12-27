import commonRaw from './common-words.txt?raw'
import raw from './words.txt?raw'

const words = raw
	.split('\n')
	.filter((word) => word.length >= 3 && word.length <= 6)
	.map((word) => word.toUpperCase())

const wordsSet = new Set<string>()
words.forEach((word) => wordsSet.add(word))

function isValidWord(word: string): boolean {
	return wordsSet.has(word)
}

const commonWords = commonRaw
	.split('\n')
	.map((word) => word.toUpperCase())
	.filter((word) => wordsSet.has(word))

function randomCommonWord(): string {
	return commonWords[Math.floor(Math.random() * commonWords.length)]
}

export { commonWords, isValidWord, randomCommonWord }
