import React from 'react'
import Image from 'next/image'

import { Container, Button, Title, Description, Infos, ProfilePicDiv,  } from "./styled"

import links from '../links.json'
import profilePic from '../public/fotoPerfil.jpg'

import { BsWhatsapp, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { ThemeProvider } from 'styled-components'

export default function Home() {
console.log(links)

  const getAllLinks = links?.map((e) => {
    return(
      <div>
        <a href={e.link}>          
          <Button key={e} style={{color: `${e.bg}`}} >
            {e.type =='github' ? <BsGithub color='#333' fontSize={20}/> : ''}
            {e.type =='linkedin' ? <BsLinkedin color='#0077b5' fontSize={20}/>  : ''}
            {e.type =='wts' ? <BsWhatsapp color='#075e54' fontSize={20}/> : ''}
            {e.type =='twitter' ? <BsTwitter color='#1da1f2' fontSize={20}/> : ''}
            {e.content}
          </Button>          
        </a>
      </div>
    )
  })

  return (
   <Container>
     <Infos>  
       <ProfilePicDiv>
        <Image
          style={{borderRadius: '150%'}} 
          src={profilePic}
          width={240} 
          height={240}
        />
       </ProfilePicDiv>
      <Title>Edson Malagodi</Title>
      <Description>Desenvolvedor Front-End</Description>
     </Infos>
     {getAllLinks}     
   </Container>
  )
}