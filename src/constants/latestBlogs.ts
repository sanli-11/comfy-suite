import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";
import blog3 from "../assets/img/blog3.jpg";

type latestBlogDatatype = {
	id: number,
	src: string,
	name: string,
	location: string,
	type: string
}

const latestBlogs: latestBlogDatatype[] = [
	{ id: 0, src: blog1, name: "Crystal Hotel", location: "New York", type: "Blog" },
	{ id: 1, src: blog2, name: "Snöig himmel", location: "Sweden", type: "Blog" },
	{ id: 2, src: blog3, name: "Bali Mari", location: "Indonesia", type: "Testimony" },
];

export type { latestBlogDatatype };
export { latestBlogs };
