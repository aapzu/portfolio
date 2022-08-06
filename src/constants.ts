export const PAGES = ['about', 'experience', 'contact'] as const;
export type Page = typeof PAGES[number];
