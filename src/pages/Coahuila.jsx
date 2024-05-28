import { Banner } from "../components/Banner";
import { SectionBrownAndWhite } from "../components/SectionBrownAndWhite";
import Text from "../components/Text";

export const Coahuila = () => {
	return (
		<>
			<Banner src={"/img/coahuila/banner.jpg"} />

			<SectionBrownAndWhite
				header={
					<>
						<Text.TitleSections className="max-w-[610px] mx-auto mb-12 md:mb-16">Te damos la bienvenida a Parras</Text.TitleSections>
						<Text className="mb-6 font-bold">Al sur de Coahuila se encuentra Parras de la fuente, un pueblo mágico lleno de tradiciones, nogales y viñedos. Se trata de un oasis entre el desierto lleno de magia para aquellos amantes del vino y de la aventura listos para descubrir nuevos horizontes.</Text>
						<Text>Situado en el corazón de Coahuila, este pueblo mágico es un verdadero tesoro para aquellos que desean sumergirse en la historia y disfrutar de la belleza de la naturaleza y la arquitectura. Con más de 400 años de historia, Parras no es solo un destino, sino una experiencia viva de tradición y cultura mexicana.</Text>
					</>
				}
				cover={"/img/coahuila/foto.jpg"}
				bg={"/img/coahuila/bg.jpg"}
				main={
					<>
						<Text className="mb-3 uppercase">Un viaje al pasado con sabor a vino.</Text>
						<Text className="mb-3">Parras de la Fuente es renombrado por su rica historia vinícola, que se remonta al siglo XVI. La Vinícola San Lorenzo, fundada en 1597, y Casa Madero, desde 1893, son testigos de la tradición y excelencia en la producción de vinos que han posicionado a Parras en el mapa mundial. </Text>
						<Text className="mb-3 uppercase">Arquitectura y naturaleza: Un paisaje de ensueño.</Text>
						<Text className="mb-3">El centro histórico de Parras es un mosaico de construcciones que datan de los primeros siglos de la conquista española. Pasear por sus calles es como caminar a través de un lienzo pintado con historia: casas antiguas, huertas exuberantes, haciendas majestuosas, y una serie de acueductos y molinos que narran una historia de ingenio y adaptación. La integración de la arquitectura con la naturaleza hace de Parras un lugar donde cada rincón ofrece una postal perfecta.</Text>
						<Text className="mb-3 uppercase">Un legado de fe y cultura.</Text>
						<Text className="mb-3">Más allá del vino, Parras es hogar de sitios emblemáticos como el Santuario de nuestra señora de Guadalupe y la capilla del Santo Madero. Cada edificio y plaza cuenta una historia, cada festival y celebración muestra la vibrante vida comunitaria que hace de Parras un lugar especial.</Text>
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
