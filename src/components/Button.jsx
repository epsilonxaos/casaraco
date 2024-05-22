const Button = ({ children, onClick }) => {
	return (
		<button {...(onClick && { onClick })} type="button" className="py-3 uppercase bg-crema border-2 px-4 min-w-[80px] md:min-w-[120px] xl:min-w-[140px] md:text-sm lg:text-base border-cafe rounded-xl text-cafe hover:bg-cafe hover:text-white transition-colors">
			{children}
		</button>
	);
};

const Link = ({ children, url }) => {
	return (
		<a className="py-3 uppercase bg-crema border-2 px-4 min-w-[80px] md:min-w-[120px] xl:min-w-[140px] md:text-sm lg:text-base border-cafe rounded-xl text-cafe hover:bg-cafe hover:text-white transition-colors" href={url} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};

Button.Link = Link;

export default Button;
