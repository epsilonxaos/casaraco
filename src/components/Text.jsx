import { twMerge } from "tailwind-merge";

const Text = ({ children, className = "" }) => {
	return <p className={twMerge("text-inherit text-base md:text-lg lg:text-xl", className)}>{children}</p>;
};

const Title = ({ children, className = "" }) => {
	return <h1 className={twMerge("text-cafe uppercase text-xl md:text-2xl lg:text-3xl", className)}>{children}</h1>;
};

const TitleSections = ({ children, className = "" }) => {
	return <h2 className={twMerge("text-cafe uppercase text-xl md:text-2xl lg:text-3xl", className)}>{children}</h2>;
};

Text.Title = Title;
Text.TitleSections = TitleSections;

export default Text;
