import { Footer } from "@/components/Footer/Footer";
import { ContactHero } from "@/containers/Contact/ContactHero/ContactHero";
import styled from "styled-components";

const ContactWrapper = styled.main`
	width: 100%;
	min-height: 100vh;
`;

export default function Contact() {
	return (
		<ContactWrapper>
            <ContactHero/>
			<Footer/>
		</ContactWrapper>
	);
}
