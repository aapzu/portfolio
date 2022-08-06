import { type Page, PAGES } from './constants';

export const isPage = (page: unknown): page is Page =>
	typeof page === 'string' && PAGES.includes(page as Page);
