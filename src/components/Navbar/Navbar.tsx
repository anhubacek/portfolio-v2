import React from "react";
import { NavbarWrapper } from "./Navbar.style";
import Link from "next/link";

export const Navbar = ({data}: {data: any}) => {
	return (
		<NavbarWrapper>
			<div className="logo">
                <Link href={'/'}>
                 
                    Andrea Hubacek
                  
                </Link>
            </div>
			<div className="links">
                {
                    data?.pages?.map((page: {label: string, link: string}) =>{
                        return(
                            <Link href={page?.link} className="underline" key={page?.label}>
                                {page?.label}
                            </Link>
                        )
                    })
                }
            </div>
            <div className="language"></div>
			<div className="mobile_trigger"></div>
		</NavbarWrapper>
	);
};
