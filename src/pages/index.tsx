import styled from "styled-components";
import { HomeHero } from "@/containers/Home/HomeHero/HomeHero";
import { Footer } from "@/components/Footer/Footer";

const HomeWrapper = styled.main`
	width: 100%;
	min-height: 100vh;
`;

export default function Home() {
	return (
		<HomeWrapper>
			<HomeHero />
			<Footer/>
		</HomeWrapper>
	);
}
