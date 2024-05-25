import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";
import { CardExperience } from "./experiences/CardExperience";

export const Experiences = () => {
	return (
		<>
			<Banner src={"/img/experiencias/banner.jpg"} />

			<section className="py-10 lg:py-16 xl:py-24">
				<Container className="max-w-7xl text-center">
					<Text.TitleSections className="mb-2">Experiencias</Text.TitleSections>
					<Text className="max-w-[860px] mx-auto mb-10">Parras está lleno de magia por ser descubierta. Acompáñanos a crear una experiencia a tu medida. Más allá del vino y la comida, Parras ofrece una variedad de actividades que enriquecerán tu estancia.</Text>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{Array.from({ length: 6 }, (_, index) => (
							<CardExperience cover={"/img/experiencias/banner.jpg"} />
						))}
					</div>
				</Container>
			</section>
		</>
	);
};
