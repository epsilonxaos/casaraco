import { Banner } from "../components/Banner";
import { Bienvenida } from "./home/Bienvenida";
import { Boardroom } from "./home/Boardroom";
import { Coahuila } from "./home/Coahuila";
import { Croquis } from "./home/Croquis";
import { Experiences } from "./home/Experinces";
import { Gastronomy } from "./home/Gastronomy";
import { Habitaciones } from "./home/Habitaciones";
import { Offers } from "./home/Offers";
import { Video } from "./home/Video";
import Video2 from "./home/Video2";

export default function Home() {
	return (
		<>
			{/* <Video /> */}
			<Video2 src={"/video/video.mp4"} />
			<Bienvenida />
			<Banner src={"/img/home/banner3.jpg"} className="h-[275px]" />
			<Croquis />
			<Offers />
			<Habitaciones />
			<Experiences />
			<Gastronomy />
			<Boardroom />
			<Coahuila />
		</>
	);
}
