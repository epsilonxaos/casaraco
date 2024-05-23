import { Banner } from "../components/Banner";
import { PromotionCard } from "./promotions/PromotionCard";

export const Promotions = () => {
	return (
		<>
			<Banner src={""} />

			<section className="bg-zinc-100 dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-base font-semibold tracking-wide text-brown-600 dark:text-brown-400 uppercase">Ofertas Especiales</h2>
					<p className="mt-2 text-lg leading-6 text-zinc-600 dark:text-zinc-300">Reserva directamente con nosotros y obtén tarifas especiales para tu estancia.</p>
				</div>

				<PromotionCard />
				<PromotionCard />
				<PromotionCard />
			</section>
		</>
	);
};
