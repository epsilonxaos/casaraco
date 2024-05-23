import Button from "../../components/Button";
import Text from "../../components/Text";

export const PromotionCard = () => {
	return (
		<article className="mt-10 flex flex-col lg:flex-row items-center justify-center lg:space-x-8">
			<picture className="lg:w-1/2">
				<img src="https://placehold.co/600x400" alt="Meeting room" className="rounded-lg shadow-lg" />
			</picture>
			<main className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
				<Text className="mb-4">
					Ahorra en grupos empresundefinedles <span className="font-semibold">hasta 50% de descuento</span> de sala de junta empresundefinedles
				</Text>
				<Text>Permítenos armar un presupuesto a tu medida para organizar tu próxima reunión de trabajo en nuestra cómoda sala de juntas con capacidad de hasta 16 personas.</Text>
				<Button className="mt-6">Book Now</Button>
			</main>
		</article>
	);
};
