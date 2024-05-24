import { Banenr } from "../components/Banner";
import { Bienvenida } from "./home/Bienvenida";
import { Croquis } from "./home/Croquis";
import { Habitaciones } from "./home/Habitaciones";
import { Offers } from "./home/Offers";
import { Video } from "./home/Video";

export default function Home() {
	return (
		<>
			<Video />
			<Bienvenida />
			<Banenr src={"/img/home/banner3.jpg"} className="h-[275px]" />
			<Croquis />
			<Offers />
			<Habitaciones />
		</>
	);
}
