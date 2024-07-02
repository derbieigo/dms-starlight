import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DMS Starlight',
			favicon: '/favicon.ico',
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Installations', link: '/starter/installation/' },
						{ label: 'DMS Overview', link: '/starter/overview/' },
					],
				},
				{
					label: 'Modules',
					items: [
						{ label: 'Dashboard', link: '/modules/dashboard/' },
						{ label: 'Collections', link: '/modules/collections/' },
						{ label: 'Contracts', link: '/modules/contracts/' },
						{ label: 'Customers', link: '/modules/customers/' },
						{ label: 'Inventory', link: '/modules/inventory/' },
						{ label: 'Lots', link: '/modules/lots/' },
						{ label: 'Make a Payment', link: '/modules/make-a-payment/' },
						{ label: 'Payments', link: '/modules/payments/' },
						{ label: 'Test Drives', link: '/modules/test-drives/' },
						{ label: 'Vendors', link: '/modules/vendors/' },
						{ label: 'Vehicles', link: '/modules/vehicles/' },
						{ label: 'Recon', link: '/modules/recon/' },
						{ label: 'Reports', link: '/modules/reports/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			// Set English as the default language for this site.
			defaultLocale: 'en',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English (US)',
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
				// Arabic docs in `src/content/docs/ar/`
				ar: {
					label: 'العربية',
					dir: 'rtl',
				},
			},
		}),
	],
});
