import Button from "../../components/Button";
import Text from "../../components/Text";

export const Boardroom = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2">
			<picture className="col-span-1 order-2">
				<img src="/img/home/imagen1.jpg" className="max-h-[700px] h-full w-full object-center object-cover" alt="Sala corporativa" />
			</picture>

			<div className="col-span-1 px-4 min-h-[350px] bg-no-repeat py-20 bg-cover bg-right-bottom text-center flex items-center order-1" style={{ backgroundImage: "url(/img/home/bg-sala.jpg)" }}>
				<div className="max-w-[460px] mx-auto">
					<Text.TitleSections className="mb-3">Planea con nosotros tu estancia corporativa</Text.TitleSections>
					<Text className="mb-5">y permítenos encargarnos de todo. Concentra a tu equipo de trabajo en nuestra cómoda sala de juntas con capacidad de hasta 16 personas.</Text>
					<Button className="bg-transparent">Ver más</Button>
				</div>
			</div>
		</section>
	);
};
