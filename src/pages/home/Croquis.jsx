import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Croquis = () => {
	const { t } = useTranslation();

	return (
		<section className="pt-10 lg:pt-16 xl:pt-24">
			<Container>
				<div className="max-w-[660px] mx-auto text-center mb-8">
					<Text.TitleSections className="lg:inline font-medium">{t("home.croquis.title")}</Text.TitleSections>
					<Text className="lg:inline">{t("home.croquis.desc")}</Text>
				</div>
			</Container>

			<a href="https://www.google.com/maps/d/embed?mid=1Om9XTjhAbpwM18sVeAc-d3kyqazea5g&ehbc=2E312F" target="_blank" rel="noopener noreferrer">
				<img src="/img/home/croquis.svg" alt="Ubicacion" className="bg-no-repeat bg-contain" style={{ backgroundImage: "url(/img/home/bg-croquis.png)" }} />
			</a>

			<div className="mx-auto max-w-[600px] text-center bg-[#d6c0ac] py-3 px-4 md:px-10 md:relative lg:-top-6">
				<Text> C. Francisco I. Madero 99, Centro, 27980 Parras de la Fuente, Coah., México, Parras de la Fuente</Text>
			</div>
		</section>
	);
};
