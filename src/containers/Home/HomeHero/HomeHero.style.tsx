import { styled } from "styled-components";

export const HomeHeroWrapper = styled.section`
	width: 100%;
	height: 100vh;
	.background {
		position: relative;
		width: 100%;
		height: 100%;
        z-index: 1;
        img{
            object-fit: cover;
        }
	}
`;
