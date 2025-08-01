import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";
import React from "react";

const Text = ({ children, className = "" }) => {
	try {
		return <p className={twMerge("text-inherit text-base md:text-lg lg:text-xl", className)}>{parse(children)}</p>;
	} catch (error) {}
};

const Title = ({ children, className = "" }) => {
	return <h1 className={twMerge("text-cafe uppercase text-xl md:text-2xl lg:text-3xl", className)}>{parse(children)}</h1>;
};

const TitleSections = ({ children, className = "" }) => {
	return <h2 className={twMerge("text-cafe uppercase text-xl md:text-2xl lg:text-3xl", className)}>{parse(children)}</h2>;
};

Text.Title = Title;
Text.TitleSections = TitleSections;

export default Text;
