import styled from "styled-components";

export const HomeHeroWrapper = styled.section`
	width: 100%;
	min-height: 100vh;
	background-size: cover;
	background-position: 50%;
	background: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		color: ${(props) => props.theme.color.beigeLight};
		font-family: ${(props) => props.theme.font.marny};
		font-size: 150px;
		text-shadow: 2px 2px 5px #00000090;
		transition: 0.4s ease;
		font-weight: 100;
		margin-bottom: 10px;
	}
	h2 {
		color: ${(props) => props.theme.color.beigeLight};
		font-family: ${(props) => props.theme.font.mainRegular};
		letter-spacing: 1px;
		font-size: 25px;
		font-weight: 100;
		text-align: center;
		text-transform: uppercase;
		text-shadow: 2px 2px 5px #00000090;
	}
`;
