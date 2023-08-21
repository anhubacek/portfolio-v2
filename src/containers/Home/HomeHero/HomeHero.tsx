import React from "react";
import { HomeHeroWrapper } from "./HomeHero.style";
import Image from "next/image";

export const HomeHero = ({ data }: { data: any }) => {
	return (
		<HomeHeroWrapper>
			<h1>{data?.title}</h1>
			<h2>{data?.subtitle_1}</h2>
		</HomeHeroWrapper>
	);
};
