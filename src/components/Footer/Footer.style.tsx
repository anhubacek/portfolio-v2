import styled from "styled-components";

export const FooterWrapperDesktop = styled.footer`
	width: 100%;
	height: 140px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	color: ${(props) => props.theme.color.beigeLight};
	padding: 0px 2%;
	position: absolute;
	bottom: 0;
		 background: ${(props) => props.theme.color.greenDark};
		  background: linear-gradient(to top, ${(props) => props.theme.color.greenDark} 60%, rgba(0, 128, 0, 0) 100%);
	.top {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		.logo {
			width: 25%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			a {
				text-decoration: none;
				color: ${(props) => props.theme.color.beigeLight};
				font-family: ${(props) => props.theme.font.marny};
				font-size: 30px;
				text-shadow: 2px 2px 5px #00000090;
				transition: 0.4s ease;
			}
		}
	}
	.bottom {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-between;
		.left {
			heigth: 100%;
			width: 30%;
			font-size: 11px;
			display: flex;
			align-items: center;
			a {
				text-decoration: none;
				margin: 0px 20px;
				color: ${(props) => props.theme.color.beigeLight};
				font-size: 12px;
				text-shadow: 2px 2px 5px #00000090;
				transition: 0.4s ease;
				&:hover {
					color: ${(props) => props.theme.color.whiteOff};
				}
			}
		}
		.center {
			heigth: 100%;
			width: 20%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			a {
				text-decoration: none;
				margin: 0px 20px;
				color: ${(props) => props.theme.color.beigeLight};
				font-size: 12px;
				text-shadow: 2px 2px 5px #00000090;
				transition: 0.4s ease;
				&:hover {
					color: ${(props) => props.theme.color.whiteOff};
				}
			}
		}
		.right {
			heigth: 100%;
			width: 30%;
						font-size: 11px;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
`;
