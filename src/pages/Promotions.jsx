import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";
import { PromotionCard } from "./promotions/PromotionCard";

export const Promotions = () => {
	return (
		<>
			<Banner src={"/img/promociones/banner.jpg"} />

			<section className="py-10 lg:py-16 xl:py-24">
				<Container>
					<div className="mx-auto text-center">
						<Text.TitleSections className="mb-2">Ofertas Especiales</Text.TitleSections>
						<Text className="mb-10">Reserva directamente con nosotros y obtén tarifas especiales para tu estancia.</Text>
					</div>
				</Container>

				<Container className="max-w-[1200px]">
					<PromotionCard cover={"/img/promociones/1.jpg"}>
						<Text className="mb-4">
							Ahorra en grupos empresundefinedles <span className="font-semibold">hasta 50% de descuento</span> de sala de junta empresundefinedles
						</Text>
						<Text>Permítenos armar un presupuesto a tu medida para organizar tu próxima reunión de trabajo en nuestra cómoda sala de juntas con capacidad de hasta 16 personas.</Text>
					</PromotionCard>
					<PromotionCard cover={"/img/promociones/2.jpg"}>
						<Text className="mb-4">
							Recibe un <span className="font-bold">15% en reservaciones</span> de 3 noches o más
						</Text>
						<Text>Recibe un descuento especial al reservar directamente con nosotros.</Text>
					</PromotionCard>
					<PromotionCard cover={"/img/promociones/3.jpg"}>
						<Text className="mb-4">
							Necesitas <span className="font-bold">la casa completa da clic aquí,</span>
						</Text>
						<Text>Arma un paquete de estadía a la medida de tus necesidades.</Text>
					</PromotionCard>
				</Container>
			</section>
		</>
	);
};
