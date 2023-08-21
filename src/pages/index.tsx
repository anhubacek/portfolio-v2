import styled from "styled-components";
import { HomeHero } from "@/containers/Home/HomeHero/HomeHero";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { navbarDataEs } from "@/data/navbar/es";
import { navbarDataEn } from "@/data/navbar/en";
import { footerDataEs } from "@/data/footer/es";
import { footerDataEn } from "@/data/footer/en";
import { HomeContent } from "@/containers/Home/HomeContent/HomeContent";
import { homeDataEs } from "@/data/home/es";
import { homeDataEn } from "@/data/home/en";

const HomeWrapper = styled.main`
	width: 100%;
	min-height: 100vh;
	background-image: url("/assets/images/home/background.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 10%;
`;

export default function Home() {
	const router = useRouter();
	const { locale } = router;

	return (
		<HomeWrapper>
			<Navbar data={locale === "es" ? navbarDataEs : navbarDataEn} />
			<HomeHero  data={locale === "es" ? homeDataEs : homeDataEn}  />
			<HomeContent />
			<Footer data={locale === "es" ? footerDataEs : footerDataEn} />
		</HomeWrapper>
	);
}
