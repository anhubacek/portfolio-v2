import styled from "styled-components";

export const NavbarWrapper = styled.nav`
	width: 100%;
	height: 15vh;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	backdrop-filter: blur(5px);
	.logo {
		width: 30%;
		height: 100%;
		padding: 10px 30px;
		a {
			text-decoration: none;
			color: ${(props) => props.theme.color.beigeLight};
			font-family: ${(props) => props.theme.font.marny};
			font-size: 60px;
			text-shadow: 2px 2px 5px black;
			transition: 0.4s ease;
			&:hover {
				color: ${(props) => props.theme.color.whiteOff};
				font-size: 61px;
			}
		}
	}
	.links {
		width: 40%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		a {
			text-decoration: none;
			color: ${(props) => props.theme.color.beigeLight};
			font-family: ${(props) => props.theme.font.amtenaryos};
			font-size: 16px;
			font-weight: 500;
			text-transform: uppercase;
			text-shadow: 2px 2px 5px black;
			&:hover {
				color: ${(props) => props.theme.color.whiteOff};
			}
		}
		.underline {
			position: relative;
		}

		.underline::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 100%;
			height: 1.5px;
			background-color: ${(props) => props.theme.color.whiteOff};
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.4s ease-in-out;
		}

		.underline:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	}
	.language {
		width: 10%;
	}
	.mobile_trigger {
		width: 10%;
		height: 100%;
		display: none;
	}
	@media screen and (max-width: 850px) {
		mobile_trigger {
			display: flex;
			width: 10%;
			height: 100%;
		}
	}
`;
