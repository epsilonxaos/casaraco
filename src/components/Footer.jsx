import Button from "./Button";
import { Container } from "./Container";
import Text from "./Text";

import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="w-full text-white">
			<div className="bg-black py-16 text-center">
				<Container>
					<img src="/img/logo-menu.png" alt="icono" className="mx-auto w-[100px] mb-4 invert" />
					<img src="/img/logotipo.png" className="mx-auto mb-10 invert" alt="Casa Raco" />
					<div className="border border-white max-w-[780px] py-9 px-4 md:px-6 mx-auto mb-10">
						<Text.TitleSections className="text-white">Suscríbete a nuestro newsletter</Text.TitleSections>
						<Text className="mb-8">
							Para mantenerte informado de todas <span className="font-bold">nuestras novedades y promociones.</span>
						</Text>
						<Button.Cafe className="rounded-none">Déjanos tu correo</Button.Cafe>
					</div>

					<address>
						<Text className="mb-6">Casa Raco Casa, C. Francisco I. Madero 99, Centro, 27980 Parras de la Fuente, Coah., México, Parras de la Fuente</Text>

						<ul className="sm:flex sm:items-center sm:justify-center sm:gap-10">
							<li className="mb-4 sm:mb-0">
								<TbPhoneCall className="inline-block text-cafe" /> <a href="tel:+5218424239902">+52 1 842 423 9902</a>
							</li>
							<li className="mb-4 sm:mb-0">
								<MdOutlineEmail className="inline-block text-cafe" />{" "}
								<a className="underline" href="mailto:reservaciones@casaraco.mx">
									reservaciones@casaraco.mx
								</a>
							</li>
							<li>
								<FiFacebook className="inline-block text-cafe" />
								<FaInstagram className="inline-block text-cafe" /> @casa.raco
							</li>
						</ul>
					</address>
				</Container>
			</div>

			<div className="bg-cafe py-5 font-instrumentSans">
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
