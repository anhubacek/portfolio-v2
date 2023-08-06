import styled from "styled-components";
import { HomeHero } from "@/containers/Home/HomeHero/HomeHero";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { navbarDataEs } from "@/data/navbar/es";
import { navbarDataEn } from "@/data/navbar/en";
import { footerDataEs } from "@/data/footer/es";
import { footerDataEn } from "@/data/footer/en";

const HomeWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
`;

export default function Home() {
	const router = useRouter()
	const {locale} = router

	return (
		<HomeWrapper>
			<Navbar data={locale === 'es' ? navbarDataEs : navbarDataEn}/>
			<HomeHero />
		<Footer data={locale === 'es' ? footerDataEs : footerDataEn} />
		</HomeWrapper>
	);
}
