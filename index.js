const news = [
	{
		title: 'Scientists Discover New Species of Glowing Fish',
		subTitle: 'test1',
		id: 1,
		author: 'John Smith',
		date: '2023-07-31',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		category: 'Science'
	},
	{
		title: 'Tech Company Unveils Revolutionary AI Assistant',
		subTitle: 'test2',
		id: 2,
		author: 'Alice Roberts',
		date: '2023-07-30',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		category: 'Technology'
	},
	{
		title: 'World Health Organization Announces New Global Health Initiative',
		subTitle: 'test3',
		id: 3,
		author: 'Sarah Johnson',
		date: '2023-08-01',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		category: 'Health'
	},
	{
		title: 'SpaceX Successfully Launches Satellite into Orbit',
		subTitle: 'test4',
		id: 4,
		author: 'Michael Anderson',
		date: '2023-08-02',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		category: 'Space'
	},
	{
		title: 'New Research Reveals the Impact of Climate Change on Wildlife',
		subTitle: 'test5',
		id: 5,
		author: 'Emily Brown',
		date: '2023-08-03',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		category: 'Environment'
	}
];

const newsTranslations = [
	{
		title: 'ENGLISH News Update',
		subTitle: 'ENGLISH Latest News',
		language: 'english',
		news: [
			{
				title: 'Tech Company Unveils Revolutionary AI Assistant',
				subTitle: 'test2',
				id: 2,
				author: 'Alice Roberts',
				date: '2023-07-30',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				category: 'Technology'
			}
		],
		id: 1
	},
	{
		title: 'Super News Update',
		subTitle: 'Super Latest',
		language: 'danish',
		news: [
			{
				title: 'New Research Reveals the Impact of Climate Change on Wildlife',
				subTitle: 'test5',
				id: 5,
				author: 'Emily Brown',
				date: '2023-08-03',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				category: 'Environment'
			}
		],
		id: 2
	},
	{
		title: 'Filipino Update',
		subTitle: 'Filipino Latest News',
		language: 'filipino',
		news: [
			{
				title: 'Tech Company Unveils Revolutionary AI Assistant',
				subTitle: 'test2',
				id: 2,
				author: 'Alice Roberts',
				date: '2023-07-30',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				category: 'Technology'
			}
		],
		id: 3
	}
];

function replaceTitleAndSubTitle(news, newsTranslations, language) {
	const selectedLanguageNews = newsTranslations.find(
		(item) => item.language === language
	);

	// return selectedLanguageNews; // * this is from NEWS TRANSLATIONS

	if (selectedLanguageNews) {
		const translatedNewsItem = selectedLanguageNews.news.find((item) =>
			news.some((n) => n.id === item.id)
		);

		// return translatedNewsItem; // * this is from NEWS

		if (translatedNewsItem) {
			news.forEach((item) => {
				if (item.id === translatedNewsItem.id) {
					item.title = selectedLanguageNews.title;
					item.subTitle = selectedLanguageNews.subTitle;
				} else {
					item.title = '';
					item.subTitle = '';
				}
			});
		}
	}

	return news;
}

const language = 'filipino';
const updatedNews = replaceTitleAndSubTitle(news, newsTranslations, language);

console.log(updatedNews);
