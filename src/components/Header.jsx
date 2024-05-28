import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<header className="bg-crema fixed top-0 left-0 w-full z-50">
				{/* // * Navegacion para movil */}
				<div className="flex items-center justify-between py-4 px-4 shadow-sm md:hidden">
					<Link to={"/"} onClick={() => setOpen(false)}>
						<img src="/img/logotipo.png" className="w-[180px]" alt="Casa raco" />
					</Link>
					<Button onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}</Button>
				</div>

				{/* // * Navegacion para escritorio */}
				<div className="md:items-center md:justify-between py-6 px-4 shadow-sm hidden md:flex">
					<Button onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}</Button>
					<Link to={"/"} onClick={() => setOpen(false)}>
						<img src="/img/logotipo.png" className="w-[180px]" alt="Casa raco" />
					</Link>

					<div className="relative">
						<div className="flex items-center justify-center text-black absolute -left-[75px] font-instrumentSans font-sm">
							<span className="font-bold">Es</span>
							<span className="mx-2 block">|</span>
							<span>En</span>
						</div>
						<Button.Link url={""}>Book now</Button.Link>
					</div>
				</div>
			</header>

			{open && <div className="bg-black fixed z-30 w-full h-svh bg-opacity-20 backdrop-blur-sm" onClick={() => setOpen(false)}></div>}
			{open && (
				<nav className="uppercase bg-crema w-full pt-[100px] pb-8 fixed z-40 top-0 left-0 h-svh flex items-center justify-center flex-wrap flex-row md:min-h-[665px] md:h-auto overflow-auto">
					<ul className="text-center w-full">
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"casa-raco"}>
								Nosotros
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"promociones"}>
								Ofertas especiales
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"habitaciones"}>
								Habitaciones
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"experiencias"}>
								Experiencias
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"/gastronomia"}>
								Gastronomía
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"/sala-de-juntas"}>
								Sala de juntas
							</Link>
						</li>
						<li>
							<Link onClick={() => setOpen(false)} to={"/parras-coahuila"}>
								Parras coahuila
							</Link>
						</li>
					</ul>

					<div className="w-full text-center py-10 md:hidden">
						<Button.Link url={""}>Book now</Button.Link>
					</div>

					<div className="flex items-center justify-center text-black font-instrumentSans font-sm md:hidden">
						<span className="font-bold">Es</span>
						<span className="mx-2 block">|</span>
						<span>En</span>
					</div>

					<picture className="block w-full pt-10 md:p-0">
						<img src="/img/logo-menu.png" className="w-[80px] mx-auto md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2" alt="Icono" />
					</picture>
				</nav>
			)}
		</>
	);
};

export default Header;
