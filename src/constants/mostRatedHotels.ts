import hotel1 from "../assets/img/switzerland/hotel1.jpg";
import hotel2 from "../assets/img/switzerland/hotel2.jpg";
import hotel3 from "../assets/img/miami/hotel1.jpg";
import hotel4 from "../assets/img/miami/hotel2.jpg";
import hotel5 from "../assets/img/bahrain/hotel1.jpg";

import lobby1 from "../assets/img/switzerland/lobby1.jpg";
import lobby2 from "../assets/img/switzerland/lobby2.jpg";
import lobby3 from "../assets/img/miami/lobby1.jpg";
import lobby4 from "../assets/img/miami/lobby2.jpg";
import lobby5 from "../assets/img/bahrain/lobby1.jpg";

import room1 from "../assets/img/switzerland/room1.jpg";
import room2 from "../assets/img/switzerland/room2.jpg";
import room3 from "../assets/img/miami/room1.jpg";
import room4 from "../assets/img/miami/room2.jpg";
import room5 from "../assets/img/bahrain/room1.jpg";

import bathroom1 from "../assets/img/switzerland/bathroom1.jpg";
import bathroom2 from "../assets/img/switzerland/bathroom2.jpg";
import bathroom3 from "../assets/img/miami/bathroom1.jpg";
import bathroom4 from "../assets/img/miami/bathroom2.jpg";
import bathroom5 from "../assets/img/bahrain/bathroom1.jpg";

type hotelDatatype = {
	id: number,
	src: string[],
	name: string,
	location: string,
};

const mostRatedHotels: hotelDatatype[] = [
	{ id: 0, src: [hotel1, lobby1, room1, bathroom1], location: "Switzerland", name: "La Rotisserie Hotel Strochen" },
	{ id: 1, src: [hotel2, lobby2, room2, bathroom2], location: "Switzerland", name: "Grund Hotel Orchard" },
	{ id: 2, src: [hotel3, lobby3, room3, bathroom3], location: "Miami, Florida", name: "Carlton Hotel" },
	{ id: 3, src: [hotel4, lobby4, room4, bathroom4], location: "Miami, Florida", name: "Horizon View Hotel" },
	{ id: 4, src: [hotel5, lobby5, room5, bathroom5], location: "Bahrain", name: "Emaar Royal Hotel" },
];

export type { hotelDatatype };
export { mostRatedHotels };
