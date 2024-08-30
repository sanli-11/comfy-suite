interface listItems {
	id: number,
	name: string,
	href: string,
	haveChevron: boolean,
}

const navigationItemsList: listItems[] = [
	{
		id: 0,
		name: "Home",
		href: "/",
		haveChevron: false,
	},
	{
		id: 1,
		name: "About",
		href: "/about",
		haveChevron: false,
	},
	{
		id: 2,
		name: "Locations",
		href: "/locations",
		haveChevron: true,
	},
	{
		id: 3,
		name: "Hotels",
		href: "/hotels",
		haveChevron: true,
	},
	{
		id: 4,
		name: "Blogs",
		href: "/blogs",
		haveChevron: true,
	},
	{
		id: 5,
		name: "Contact",
		href: "/contact",
		haveChevron: false,
	}
];

export { navigationItemsList };
