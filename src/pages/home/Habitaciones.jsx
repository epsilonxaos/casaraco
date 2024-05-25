import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Habitaciones = () => {
	return (
		<section className="bg-no-repeat bg-right-top bg-cover py-10 lg:py-16 xl:py-24" style={{ backgroundImage: "url(/img/home/fondo-habitaciones.jpg)" }}>
			<Container className="max-w-[1500px] px-0">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-60 md:gap-2 relative">
					<picture className="col-span-1">
						<img src="/img/home/imagen2.jpg" className="md:h-[640px] object-cover" alt="" />
					</picture>

					<CardHabitacion />

					<picture className="col-span-1">
						<img src="/img/home/imagen2-1.jpg" className="md:h-[640px] object-cover" alt="" />
					</picture>
				</div>
			</Container>
		</section>
	);
};

const CardHabitacion = () => {
	return (
		<div className="absolute bg-[#d6c0ac] text-center w-full md:max-w-[365px] py-10 px-5 md:px-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:min-h-[515px]">
			<img src="/img/home/Sello.png" alt="Sello" className="size-[118px] mx-auto mb-4" />

			<Text.TitleSections className="text-black mb-4">Conoce nuestras habitaciones</Text.TitleSections>
			<Text className="text-black mb-8">Nuestras cómodas habitaciones tienen todo lo necesario para que tengas una estancia placentera de acuerdo a tus necesidades.</Text>

			<Button className="bg-transparent border-black text-black hover:bg-black hover:text-white">Ver más</Button>
		</div>
	);
};
