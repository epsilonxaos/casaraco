import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Offers = () => {
	return (
		<section className="py-10 text-center">
			<Container>
				<Text.TitleSections className="mb-6">Ofertas Especiales</Text.TitleSections>

				<Text className="mb-10">Reserva directamente con nosotros y obtén tarifas especiales para tu estancia.</Text>
			</Container>

			<div className="relative">
				<div className="bg-cafe w-full h-[160px] absolute top-1/2 -translate-y-1/2 hidden lg:block" />

				<div className="max-w-[1500px] grid lg:grid-cols-3 grid-cols-1 pt-10 relative z-10 mx-auto">
					<CardOffer cover="/img/home/imagen1.jpg">
						<Text className="text-black mb-4">
							Ahorra en grupos empresariales <span className="font-bold">hasta 50% Descuento</span> de sala de junta empresariales
						</Text>
					</CardOffer>
					<CardOffer cover="/img/home/imagen2.jpg">
						<Text className="text-black mb-4">
							Recibe un <span className="font-bold">15% de descuento en reservaciones</span> de 3 noches o más
						</Text>
					</CardOffer>
					<CardOffer cover="/img/home/imagen3.jpg">
						<Text className="text-black mb-4">Necesitas la casa completa da clic aquí</Text>
					</CardOffer>
				</div>
			</div>
		</section>
	);
};

const CardOffer = ({ cover, url, children }) => {
	return (
		<div className="col-span-1 px-4 mb-8">
			<article className="shadow-lg sm:flex sm:items-center lg:flex-col h-full">
				<picture className="bg-slate-100 mb-3 sm:mb-0 lg:mb-4 sm:w-1/2 lg:w-full">
					<img className="w-full h-[345px] object-cover" src={cover} alt="Imagen" />
				</picture>

				<main className="sm:w-1/2 lg:w-auto p-4 lg:flex lg:flex-col lg:justify-between lg:h-full">
					{children}

					<Button className="py-2 max-w-[140px] mx-auto">Ver más</Button>
				</main>
			</article>
		</div>
	);
};
