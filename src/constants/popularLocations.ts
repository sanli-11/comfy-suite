import popular1 from "../assets/img/miami.jpg";
import popular2 from "../assets/img/switzerland.jpg";
import popular3 from "../assets/img/japan.jpg";

type locationData = {
	id: number,
	src: string,
	alt: string,
	name: string,
	location: string,
}

const popularLocationsData: locationData[] = [
	{ id: 0, src: popular1, alt: "Miami Beach", name: "Miami, Florida", location: "Miami Beach" },
	{ id: 1, src: popular2, alt: "Matterhorn", name: "Switzerland", location: "Matterhorn" },
	{ id: 2, src: popular3, alt: "Tokyo Tower", name: "Japan", location: "Tokyo Tower" },
];

export { popularLocationsData };
export type { locationData };
