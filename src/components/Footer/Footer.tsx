import React from "react";
import { FooterWrapperDesktop } from "./Footer.style";
import Link from "next/link";

export const Footer = ({ data }: { data: any }) => {
	return (
		<FooterWrapperDesktop>
			<div className="top">
				<div className="logo">
					<Link href={"/"}>Andrea Hubacek</Link>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
 {data?.legal?.map(
						(e: { label: string; icon: string; link: string }) => {
							return <Link href={e?.link}>{e?.label}</Link>;
						}
					)}
        </div>
				<div className="center">
					{data?.social?.map(
						(e: { label: string; icon: string; link: string }) => {
							return <Link href={e?.link}>{e?.label}</Link>;
						}
					)}
				</div>
				<div className="right">    {data?.copyright?.title}</div>
			</div>
		</FooterWrapperDesktop>
	);
};
