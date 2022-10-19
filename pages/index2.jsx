import React from 'react'
import Image from 'next/image'

import { Container, Button, Title, Description, Infos, ProfilePicDiv,  } from "../components/styled"

import links from '../linksexemplo2.json'
import profilePic from '../public/fotoPerfil.jpg'

import { BsWhatsapp, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'


export default function Home() {
console.log(links)

  const getAllLinks = links?.map((e) => {
    return(
      <div key={e}>
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
          alt='algo'
        />
       </ProfilePicDiv>
      <Title>Edson Malagodi</Title>
      <Description>Desenvolvedor Front-End</Description>
      <Description>Estagiário na empresa Sacola VIP Ltda</Description>
      <Description>HTML, CSS, JS</Description>
     </Infos>
     {getAllLinks}     
   </Container>
  )
}
