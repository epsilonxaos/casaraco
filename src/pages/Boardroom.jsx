import { Banner } from "../components/Banner";
import { SectionBrownAndWhite } from "../components/SectionBrownAndWhite";
import Text from "../components/Text";

export const Boardroom = () => {
	return (
		<>
			<Banner src={"/img/boardroom/banner.jpg"} />

			<SectionBrownAndWhite
				header={
					<>
						<Text.TitleSections className="max-w-[850px] mx-auto mb-10 md:mb-12">Planea con nosotros tu estancia corporativa y permítenos encargarnos de todo.</Text.TitleSections>
						<Text className="mb-6">Concentra a tu equipo de trabajo en nuestra cómoda sala de juntas con capacidad de hasta 16 personas.</Text>
					</>
				}
				cover={"/img/boardroom/foto.jpg"}
				bg={"/img/boardroom/bg.jpg"}
				main={
					<>
						<Text className="mb-3">En Casa Raco, ofrecemos una sala ejecutiva para satisfacer las necesidades de tu empresa. Nuestra sala ejecutiva está equipada con instalaciones y servicios útiles para garantizar que sus reuniones sean productivas y exitosas.</Text>
						<Text className="mb-3">Características:</Text>
						<ul className="list-disc pl-5">
							<li>
								<Text className="mb-3">Pantalla LED de 58” Samsung: Disfrute de presentaciones y videoconferencias con una claridad impresionante en una pantalla grande y de alta calidad.</Text>
							</li>
							<li>
								<Text className="mb-3">Baños independientes: Para mayor comodidad y privacidad, nuestra sala ejecutiva cuenta con baños independientes.</Text>
							</li>
							<li>
								<Text className="mb-3">Mesa de trabajo para juntas: Una espaciosa mesa de trabajo diseñada para acomodar hasta 16 personas, ideal para reuniones estratégicas y colaboraciones en equipo.</Text>
							</li>
							<li>
								<Text className="mb-3">Área de coffee break: Un área dedicada para pausas de café, permitiendo a los participantes relajarse y recargar energías durante sus sesiones de trabajo.</Text>
							</li>
						</ul>
					</>
				}
				footer={
					<>
						<Text.TitleSections className="text-white mb-4">Un destino imprescindible</Text.TitleSections>
						<Text>Parras de la Fuente es más que un destino turístico, es un encuentro con la historia, la cultura y la hospitalidad mexicana. Si estás buscando un lugar donde cada paso te cuenta una historia, donde cada sabor te lleva a una tradición y cada vista te deja sin aliento, entonces Parras te espera con los brazos abiertos.</Text>
					</>
				}
			/>
		</>
	);
};
