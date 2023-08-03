import React from "react";
import { HomeHeroWrapper } from "./HomeHero.style";
import Image from "next/image";

export const HomeHero = () => {
	return (
		<HomeHeroWrapper>
			<div className="background">
				<Image
					src={"/assets/images/home/background.jpg"}
					fill
					alt="Background"
				/>
			</div>
            
		</HomeHeroWrapper>
	);
};
