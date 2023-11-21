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
		language: 'french',
		translation: 'Bonjour',
		description: 'A common greeting in French',
		author: 'Unknown'
	},
	{
		language: 'German',
		translation: 'Hallo',
		description: 'A common greeting in German',
		author: 'Unknown'
	}
];

translations.sort((a, b) => {
	const languageA = a.language.toUpperCase(); // Convert language names to uppercase for case-insensitive comparison
	const languageB = b.language.toUpperCase();

	if (languageA < languageB) return -1;
	if (languageA > languageB) return 1;
	return 0;
});

console.log(translations);
