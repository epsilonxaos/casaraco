import Button from "../../components/Button";
import Text from "../../components/Text";

export const PromotionCard = ({ cover, children, url = "", blank = true }) => {
	return (
		<article className="mt-12 flex flex-col lg:flex-row items-center lg:space-x-8 bg-white">
			<picture className="w-full lg:w-1/2">
				<img src={cover} alt="Meeting room" className="shadow-lg object-cover w-full h-[350px] md:h-[450px]" />
			</picture>
			<main className="lg:mt-0 lg:w-1/2 text-center py-10">
				<div className="max-w-[345px] mx-auto">{children}</div>
				{url ? (
					<Button.Link blank={blank} className="mt-6 block max-w-[140px] mx-auto" url={url}>
						Book Now
					</Button.Link>
				) : (
					<Button className="mt-6">Book Now</Button>
				)}
			</main>
		</article>
	);
};
