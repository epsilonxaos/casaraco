import { Banner } from "../components/Banner";
import { SectionBrownAndWhite } from "../components/SectionBrownAndWhite";
import Text from "../components/Text";

export const Gastronomy = () => {
	return (
		<>
			<Banner src={"/img/gastronomy/banner.jpg"} />

			<SectionBrownAndWhite
				header={
					<>
						<Text.TitleSections className="max-w-[510px] mx-auto mb-10 md:mb-12">ASÓMBRATE CON LA GASTRONOMÍA DE LA REGIÓN</Text.TitleSections>
						<Text className="mb-6">Acompáñanos a vivir una experiencia gastronómica única con los mejores productos de la región.</Text>
						<Text>
							<span className="font-bold">Bienvenidos a Parras, Coahuila</span>, un rincón mágico en el norte de México donde la historia y la naturaleza se entrelazan para ofrecer una experiencia única a sus visitantes. Reconocido por ser la cuna del vino más antiguo de América, Parras no sólo seduce a los amantes del buen vino, sino también a aquellos que buscan deleitarse con sabores auténticos en cada bocado.
						</Text>
					</>
				}
				cover={"/img/gastronomy/foto.jpg"}
				bg={"/img/gastronomy/bg.jpg"}
				main={
					<>
						<Text className="mb-3">Un destino imprescindible para los amantes del vino.</Text>
						<Text className="mb-3">Si te consideras un entusiasta del vino, no puedes dejar de visitar los viñedos de Parras. Aquí las vides florecen bajo el sol generoso, creando el escenario perfecto para descubrir los secretos de la viticultura que se ha perfeccionado a lo largo de los siglos. Te recomendamos explorar lugares como Casa Raco, un emblemático hotel en Parras que ofrece sus habitaciones para los que desean conocer Parras.</Text>
						<Text className="uppercase">Gastronomía local: </Text>
						<Text className="mb-3 uppercase">Un festival para los sentidos</Text>
						<Text className="mb-3">La riqueza de Coahuila también se manifiesta en su cocina y Parras no es la excepción, pues cuenta con una oferta gastronómica que va más allá de lo convencional. Desde el tradicional dulce de nuez, preparado meticulosamente por manos locales, hasta las innovadoras campechanas, cada plato y cada dulce te cuentan una historia de tradición y creatividad culinaria.</Text>
						<Text className="mb-3">Las campechanas, delgadas y crujientes, son una especialidad que no puedes dejar de probar, perfectas para acompañar un café de olla al atardecer.</Text>
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
