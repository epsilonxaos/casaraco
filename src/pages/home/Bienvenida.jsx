import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Bienvenida = () => {
	return (
		<section className="text-center py-10">
			<Container>
				<img src="/img/logo-menu.png" alt="icono" className="mx-auto w-[100px] mb-4" />

				<Text.Title className="mb-5">Te damos la bienvenida a</Text.Title>

				<img src="/img/logotipo.png" className="mx-auto mb-9" alt="Casa Raco" />

				<Text className="max-w-[850px] mx-auto">
					El inicio de <span className="font-bold">una estancia inolvidable en Parras, Coahuila.</span> Nuestro hotel boutique es más que sólo un lugar de hospedaje, se trata de un espacio cuidadosamente diseñado para que vivas una experiencia única.
				</Text>

				<Button>Ver más</Button>
			</Container>
		</section>
	);
};
