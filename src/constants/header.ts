interface listItems {
	id: number,
	name: string,
	href: string,
}

const navigationItemsList: listItems[] = [
	{
		id: 0,
		name: "Home",
		href: "/",
	},
	{
		id: 1,
		name: "About",
		href: "/about",
	}, {
		id: 2,
		name: "Rooms",
		href: "/rooms",
	}, {
		id: 3,
		name: "Suites",
		href: "/suites",
	},
	{
		id: 4,
		name: "Blogs",
		href: "/blogs",
	},
	{
		id: 5,
		name: "Contact",
		href: "/contact",
	}
];

export { navigationItemsList };
