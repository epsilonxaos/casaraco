import { twMerge } from "tailwind-merge";

export const Banenr = ({ src, className = "" }) => {
	return (
		<section>
			<img src={src} alt="Banner seccion" className={twMerge("h-auto w-full max-h-[645px] object-cover object-center", className)} />
		</section>
	);
};
