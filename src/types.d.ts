export type DOMEvent<Ev extends Event, El extends HTMLElement> = Ev & {
	currentTarget: El & EventTarget;
};

export type Item = {
	title?: string | undefined;
	href?: string | undefined;
	secondary?: boolean | undefined;
	info?: string | undefined;
};
