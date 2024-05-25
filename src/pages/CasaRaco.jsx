import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";

export const CasaRaco = () => {
	return (
		<>
			<Banner src={"/img/casa-raco/banner.jpg"} />

			<section className="pt-10 lg:pt-16 xl:pt-24">
				<div className="relative">
					<Container className="max-w-6xl text-center">
						<Text.TitleSections className="max-w-[610px] mx-auto mb-12 md:mb-16">
							<span className="font-bold">Ubicado</span> en el encantador enclave de <span className="font-bold">Parras de la Fuente</span>
						</Text.TitleSections>
						<Text className="mb-6 font-bold">Casa Raco te invita a disfrutar de una experiencia única y llena de comodidades. Nuestro hotel de 5 estrellas te ofrece una estancia inolvidable.</Text>
						<Text>Relájate y disfruta de nuestra terraza, sumérgete en la serenidad de nuestro jardín y descubre el confort de nuestras habitaciones equipadas con aire acondicionado, Wi-Fi gratuita y baño privado. Además, para tu conveniencia, contamos con una cocina compartida, servicio de habitaciones y la posibilidad de organizar tours para explorar la región.</Text>

						<div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:items-center gap-[80px] md:gap-6 pb-8 md:pb-0">
							<picture className="col-span-1 relative top-[45px]">
								<img src="/img/casa-raco/1.jpg" className="mx-auto w-max md:min-h-[550px] object-cover" alt="Relajacion" />
							</picture>
							<div className="col-span-1 text-center md:text-left">
								<Text className="mb-3">Cada una de nuestras habitaciones está meticulosamente diseñada para tu confort, con detalles que incluyen una cafetera para disfrutar de tu bebida favorita y una TV de pantalla plana. Además, te proporcionamos artículos de aseo gratuitos para que te sientas completamente mimado durante tu estancia. </Text>
								<Text className="mb-3">Comienza tu día con energía gracias a nuestro delicioso desayuno continental o americano, preparado con ingredientes frescos y seleccionados. </Text>
								<Text className="mb-3">En Casa Raco, nos esforzamos por ofrecerte una experiencia hotelera que te haga sentir como en casa desde el momento en que cruzas nuestras puertas.</Text>
							</div>
						</div>

						<div className="bg-cafe h-[40px] hidden md:block w-full md:absolute bottom-0 left-0 -z-10"></div>
					</Container>
				</div>

				<div className="bg-cafe h-[100px] w-full"></div>

				<blockquote className="bg-cafe text-white pb-10 lg:pb-16 xl:pb-24">
					<Container className="max-w-6xl text-center">
						<Text className="italic mb-10">Construimos al lado de nuestros huéspedes recuerdos positivos que durarán para siempre. En nuestros espacios no solo encontrarás un lugar para hospedarte, sino una experiencia integral que te permitirá disfrutar al máximo tu visita a Parras, Coahuila y sus alrededores.</Text>
						<Text className="font-bold">¡Esperamos poder darte la bienvenida pronto!</Text>
					</Container>
				</blockquote>
			</section>

			<Banner src={"/img/casa-raco/banner2.jpg"} className="max-h-[600px]" />
		</>
	);
};
