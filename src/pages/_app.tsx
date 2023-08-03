import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from '@/styles/Global.style';
import '@/styles/globals.css';
import { MainTheme } from '@/theme/mainTheme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
	return(
	<ThemeProvider theme={MainTheme}>
		<GlobalStyle />
		<Component {...pageProps} />
	</ThemeProvider>);
}
