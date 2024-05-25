import { Amenities } from "../components/Amenities";
import { Banner } from "../components/Banner";
import Button from "../components/Button";
import { Container } from "../components/Container";
import Text from "../components/Text";

export const Rooms = () => {
	return (
		<>
			<Banner src={"/img/rooms/banner.jpg"} />

			<section className="py-10 lg:py-16 xl:py-24">
				<Container className="text-center">
					<img src="/img/logo-menu.png" alt="icono" className="mx-auto w-[100px] mb-4" />

					<Text.Title className="mb-5">Te damos la bienvenida a</Text.Title>

					<Text className="max-w-[850px] mx-auto mb-10">
						<span className="font-bold">Casa Raco</span>, el inicio de una estancia inolvidable en Parras, Coahuila. Nuestro hotel boutique es más que sólo un lugar de hospedaje, se trata de un espacio cuidadosamente diseñado para que vivas una experiencia única.
					</Text>

					<Amenities />
				</Container>
			</section>

			<section className="py-24 bg-no-repeat bg-left-top bg-cover" style={{ backgroundImage: "url(/img/rooms/bg.png" }}>
				<Container className="max-w-7xl px-0 lg:px-4">
					<div className="relative z-[1] lg:flex lg:items-center mb-24">
						<div className="h-full w-[90%] sm:w-[80%] lg:w-full lg:h-[85%] bg-[#d6c0ac] absolute top-0 lg:top-1/2 left-1/2 lg:left-0 max-lg:-translate-x-1/2 lg:-translate-y-1/2 -z-10"></div>

						<picture className="relative lg:w-[60%]">
							<img className="w-full" src="/img/rooms/room1.jpg" alt="Habitacion doble Queen" />

							<img src="/img/rooms/sello.png" className="absolute max-lg:-bottom-[55px] lg:top-1/2 lg:-translate-y-1/2 left-1/2 lg:left-auto lg:-right-[55px] max-lg:-translate-x-1/2 w-[110px]" alt="Sello" />
						</picture>

						<main className="text-black text-center py-8 pt-20 lg:pt-8 px-6 lg:w-[40%]">
							<div className="max-w-[290px] mx-auto">
								<Text.TitleSections className="text-black mb-5">habitación doble QUEEN</Text.TitleSections>
								<Text className="mb-6">Nuestra cómoda y acogedora habitación doble es la opción perfecta para tu próxima visita.</Text>
							</div>

							<Button.Cafe>Book now</Button.Cafe>
						</main>
					</div>

					<div className="relative z-[1] lg:flex lg:items-center ">
						<div className="h-full w-[90%] sm:w-[80%] lg:w-full lg:h-[85%] bg-[#d6c0ac] absolute top-0 lg:top-1/2 left-1/2 lg:left-0 max-lg:-translate-x-1/2 lg:-translate-y-1/2 -z-10"></div>

						<picture className="relative lg:w-[60%] lg:order-2">
							<img className="w-full" src="/img/rooms/room2.jpg" alt="Habitacion doble Queen" />

							<img src="/img/rooms/sello.png" className="absolute max-lg:-bottom-[55px] lg:top-1/2 lg:-translate-y-1/2 left-1/2 lg:-left-[55px] max-lg:-translate-x-1/2 w-[110px]" alt="Sello" />
						</picture>

						<main className="text-black text-center py-8 pt-20 lg:pt-8 px-6 lg:w-[40%] lg:order-1">
							<div className="max-w-[290px] mx-auto">
								<Text.TitleSections className="text-black mb-5">habitación KING</Text.TitleSections>
								<Text className="mb-6">Nuestras habitaciones sencillas están perfectamente equipadas para garantizar una estancia cómoda y placentera.</Text>
							</div>

							<Button.Cafe>Book now</Button.Cafe>
						</main>
					</div>
				</Container>
			</section>
		</>
	);
};
