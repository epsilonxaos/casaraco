import { Container } from "./Container";

const Footer = () => {
	return (
		<footer className="w-full px-4 py-5 font-instrumentSans bg-cafe text-white">
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
		</footer>
	);
};

export default Footer;
