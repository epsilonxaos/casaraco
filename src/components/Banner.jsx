export const Banner = ({ src }) => {
	return (
		<section>
			<picture className="w-full max-h-[645px]">
				<img src={src} alt="Banner" className="w-full max-h-[645px] object-cover object-center" />
			</picture>
		</section>
	);
};
