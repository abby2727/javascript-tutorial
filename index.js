const translations = [
	{
		language: 'English',
		translation: 'Hello',
		description: 'A common greeting',
		author: 'Unknown'
	},
	{
		language: 'Spanish',
		translation: 'Hola',
		description: 'A common greeting in Spanish',
		author: 'Unknown'
	},
	{
		language: 'French',
		translation: 'Bonjour',
		description: 'A common greeting in French',
		author: 'Unknown',
		nativeLanguage: ['lang 1', 'lang 2', 'lang 3']
	},
	{
		language: 'German',
		translation: 'Hallo',
		description: 'A common greeting in German',
		author: 'Unknown'
	}
];

const despLengths = translations.map((t) => {
	return t.description.length;
});
const longestDesp = Math.max(...despLengths);
const longestDespObj = translations.find(
	(t) => t.description.length === longestDesp
);
const findLang = longestDespObj.language;
const findDesp = longestDespObj.description;
console.log(`${findLang}: ${findDesp}`);
