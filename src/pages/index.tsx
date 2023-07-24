import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

const HomeWrapper = styled.main`
	width: 100%;
	min-height: 100vh;
  	height: 100vh;
	margin: 0;
	--x: calc(var(--posX, 0) * 1px);
	--y: calc(var(--posY, 0) * 1px);
	background-image: linear-gradient(115deg, rgb(211 255 215), rgb(0, 0, 0)),
		radial-gradient(
			90% 100% at calc(50% + var(--x)) calc(0% + var(--y)),
			rgb(154, 27, 118),
			rgb(91, 56, 128)
		),
		radial-gradient(
			100% 100% at calc(80% - var(--x)) calc(0% - var(--y)),
			rgb(235, 235, 204),
			rgb(204, 192, 192)
		),
		radial-gradient(
			150% 210% at calc(50% + var(--x)) calc(0% + var(--y)),
			rgb(020 175 125),
			rgb(211, 76, 238)
		),
		radial-gradient(
			100% 100% at calc(80% - var(--x)) calc(20% - var(--y)),
			rgb(215, 166, 144),
			rgb(000 200 255)
		),
		linear-gradient(60deg, rgb(255 000 000), rgb(219, 42, 204));
	background-blend-mode: overlay, overlay, difference, difference, difference,
		normal;
	backdrop-filter: saturate(50%);
	backdrop-filter: brightness(200%);
	backdrop-filter: opacity(10%);
`;

export default function Home() {
	const homeRef = useRef(null);
	const [vantaEffect, setVantaEffect] = useState(0);

	useEffect(() => {
		if (!vantaEffect) {
			// setVantaEffect(
			// 	FOG({
			// 		el: homeRef?.current,
			// 		THREE: THREE,
			// 		mouseControls: true,
			// 		touchControls: true,
			// 		gyroControls: false,
			// 		minHeight: 1000.0,
			// 		minWidth: 1000.0,
			// 		highlightColor: 0xfce641,
			// 		midtoneColor: 0xbe0d79,
			// 		lowlightColor: 0x7b00d2,
			// 		baseColor: 0xFFFFFF,
			// 		speed: 0.7,
			// 		zoom: 0.6,
			// 	})
			// );

      document.body.addEventListener("pointermove", (e : any)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})
		}
	}, [vantaEffect]);
	return <HomeWrapper ref={homeRef}></HomeWrapper>;
}
