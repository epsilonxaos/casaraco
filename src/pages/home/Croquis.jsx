import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Croquis = () => {
	return (
		<section className="py-10">
			<Container>
				<div className="max-w-[660px] mx-auto text-center mb-8">
					<Text.TitleSections className="lg:inline font-medium">“El hotel mejor situado en Parras”</Text.TitleSections>
					<Text className="lg:inline">
						… disfruta <br className="hidden lg:block" /> los mejores lugares de interés en Parras caminando desde Casa Raco.
					</Text>
				</div>
			</Container>

			<img src="/public/img/home/croquis.svg" alt="Ubicacion" className="bg-no-repeat bg-contain" style={{ backgroundImage: "url(/img/home/bg-croquis.png)" }} />

			<div className="mx-auto max-w-[600px] text-center bg-[#d6c0ac] py-3 px-4 md:px-10 md:relative lg:-top-6">
				<Text> C. Francisco I. Madero 99, Centro, 27980 Parras de la Fuente, Coah., México, Parras de la Fuente</Text>
			</div>
		</section>
	);
};
