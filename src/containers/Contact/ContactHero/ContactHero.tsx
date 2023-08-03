import React from 'react'
import { ContactHeroWrapper } from './ContactHero.style'
import Image from 'next/image'

export const ContactHero = () => {
  return (
    <ContactHeroWrapper>
        		<div className="background">
				<Image
					src={"/assets/images/home/background.jpg"}
					fill
					alt="Background"
				/>
			</div>
    </ContactHeroWrapper>
  )
}
