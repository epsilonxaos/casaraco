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

				<Text className="max-w-[850px] mx-auto mb-6">
					El inicio de <span className="font-bold">una estancia inolvidable en Parras, Coahuila.</span> Nuestro hotel boutique es más que sólo un lugar de hospedaje, se trata de un espacio cuidadosamente diseñado para que vivas una experiencia única.
				</Text>

				<ul className="flex flex-wrap lg:items-start lg:justify-center lg:gap-8 mb-8">
					<li className="w-1/2 md:w-1/3 lg:w-auto lg:mb-0 mb-8">
						<img src="/img/icons/sala-juntas.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
						<Text className="text-black leading-3">
							Sala de juntas <br /> 16 personas
						</Text>
					</li>
					<li className="w-1/2 md:w-1/3 lg:w-auto lg:mb-0 mb-8">
						<img src="/img/icons/aire-ac.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
						<Text className="text-black leading-3">
							Aire <br /> Acondicionado
						</Text>
					</li>
					<li className="w-1/2 md:w-1/3 lg:w-auto lg:mb-0 mb-8">
						<img src="/img/icons/desayuno.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
						<Text className="text-black leading-3">
							Desayuno <br /> incluido
						</Text>
					</li>
					<li className="w-1/2 md:w-1/3 lg:w-auto md:mb-0 mb-8">
						<img src="/img/icons/maquina-cafe.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
						<Text className="text-black leading-3">
							Maquina de Café <br /> en habitación
						</Text>
					</li>
					<li className="w-1/2 md:w-1/3 lg:w-auto md:mb-0 mb-8">
						<img src="/img/icons/zona-jardin.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
						<Text className="text-black leading-3">Zona Jardín</Text>
					</li>
					<li className="w-1/2 md:w-1/3 lg:w-auto md:mb-0">
						<img src="/img/icons/comedor.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
						<Text className="text-black leading-3">Comedor</Text>
					</li>
				</ul>

				<Button>Ver más</Button>
			</Container>
		</section>
	);
};
