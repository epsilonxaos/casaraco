import Button from "./Button";
import { Container } from "./Container";
import Text from "./Text";

const Footer = () => {
	return (
		<footer className="w-full py-5 font-instrumentSans text-white">
			<div className="bg-black">
				<Container>
					<img src="/public/img/logo-menu.png" alt="icono" className="mx-auto w-[100px] mb-4 invert" />
					<img src="/img/logotipo.png" className="mx-auto mb-9 invert" alt="Casa Raco" />

					<div className="border border-white py-10 px-4 md:px-6">
						<Text.TitleSections>Suscríbete a nuestro newsletter</Text.TitleSections>
						<Text>Para mantenerte informado de todas nuestras novedades y promociones.</Text>
						<Button.Cafe>Déjanos tu correo</Button.Cafe>
					</div>

					<Text>Casa Raco Casa, C. Francisco I. Madero 99, Centro, 27980 Parras de la Fuente, Coah., México, Parras de la Fuente</Text>
					<u className="">
						<li>
							<Text>+52 1 842 423 9902</Text>
						</li>
						<li>
							<Text>reservaciones@casaraco.mx</Text>
						</li>
						<li>
							<Text>@casa.raco</Text>
						</li>
					</u>
				</Container>
			</div>

			<div className="bg-cafe">
				<Container>
					<ul className="mx-auto flex w-full flex-col items-center justify-between md:flex-row lg:text-sm xl:text-base">
						<li className="mb-4 lg:mb-0">Casa Raco</li>
						<li className="mb-4 lg:mb-0">
							<ul className="flex items-center justify-center flex-wrap text-center">
								<li className="w-full lg:w-auto">Políticas de reservación</li>
								<li className="mx-3 hidden lg:block lg:w-auto">|</li>
								<li className="w-full lg:w-auto">Cookies</li>
								<li className="mx-3 hidden">|</li>
								<li className="w-full lg:w-auto">Cancelar Reserva</li>
								<li className="mx-3 hidden lg:w-auto lg:block">|</li>
								<li className="w-full lg:w-auto">Derechos Reservados</li>
							</ul>
						</li>
						<li>
							Diseño y desarrollo x <span className="font-bold">MadebyPartners®</span>
						</li>
					</ul>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
