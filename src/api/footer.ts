import { header as routes } from './header';

export const footer = {
	routes,
	company: {
		name: 'Designo Central Office',
		address: '3886 Wellington Street',
		city: 'Toronto, Ontario M9C 3J5',
		phone: '+1 253-863-8967',
		email: 'contact@designo.co',
		socials: [
			{
				name: 'facebook',
				url: 'https://www.facebook.com'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com'
			},
			{
				name: 'twitter',
				url: 'https://www.twitter.com'
			},
			{
				name: 'pinterest',
				url: 'https://www.pinterest.com'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com'
			}
		]
	},
	cta: {
		title: 'Let’s talk about your project',
		text: 'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.',
		link: {
			text: 'Get in touch',
			url: '/contact'
		}
	}
};
