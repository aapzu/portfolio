import type { PageLoad } from './$types';
import type { Page } from 'src/constants';

export const load: PageLoad = async ({ url }) => {
	const currentPage = url.searchParams.get('p');
	return { currentPage: currentPage as Page };
};
