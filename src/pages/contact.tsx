import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ContactHero } from "@/containers/Contact/ContactHero/ContactHero";
import styled from "styled-components";
import { useRouter } from "next/router";
import { navbarDataEs } from "@/data/navbar/es";
import { navbarDataEn } from "@/data/navbar/en";

const ContactWrapper = styled.main`
	width: 100%;
	min-height: 100vh;
`;

export default function Contact() {
	const router = useRouter();
	const { locale } = router;

	return (
		<ContactWrapper>
			<Navbar data={locale === "es" ? navbarDataEs : navbarDataEn} />
			<ContactHero />
			<Footer />
		</ContactWrapper>
	);
}
