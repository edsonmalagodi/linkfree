
import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/theme'

import { 
  Container,
  CardContainer, 
  LinkCard,
  Title,
  SubTitle,
  InfoWapper, 
  ImageWrapper, 
  ProfileInfoWrapper, 
  ProfileName,
  ProfilePic,
  ProfileDescription
} from '../components/Card/styled'

import {Footer} from '../components/Footer'

import profile from '../public/fotoPerfil.jpg'
import github from '../public/GithubBanner.png'
import linkedin from '../public/LinkedinBanner.png'
import telegram from '../public/TelegramBanner.png'
import twitter from '../public/TwitterBanner.png'
import instagram from '../public/InstagramBanner.png'
import discord from '../public/DiscordBanner.png'

import {links} from '../links'

export default function otherIndex(){
console.log(links)
const getLinks = links?.map((item, e) => {
  return(
    <a href={item.url} key={e} rel="noreferrer" target="_blank">
    <LinkCard key={e}> 

      <ImageWrapper>        
        {item.type == 'git' ? <Image src={github} style={{borderRadius: '1rem'}} alt="Github" /> : ''}
        {item.type == 'linkedin' ? <Image src={linkedin} style={{borderRadius: '1rem'}} alt="Linkedin" /> : ''}
        {item.type == 'telegram' ? <Image src={telegram} style={{borderRadius: '1rem'}} alt="Telegram"/> : ''}
        {item.type == 'twitter' ? <Image src={twitter} style={{borderRadius: '1rem'}} alt="Twitter"/> : ''}
        {item.type == 'insta' ? <Image src={instagram} style={{borderRadius: '1rem'}} alt="Instagram"/> : ''}
        {item.type == 'discord' ? <Image src={discord} style={{borderRadius: '1rem'}} alt="Discord"/> : ''}
      </ImageWrapper>

      <InfoWapper>        
        <Title>{item.name}</Title>
        <SubTitle>{item.description}</SubTitle>
      </InfoWapper>   
    </LinkCard>
    </a>
  )
})
  return(
    <ThemeProvider theme={darkTheme}>
      <Container>
        <ProfileInfoWrapper>
          
          <ProfilePic>
            <Image src={profile} alt='imagem de perfil' style={{borderRadius: "100px"}}/>
          </ProfilePic>

          <ProfileName>EDSON MALAGOLI</ProfileName>
          <ProfileDescription>Desenvolvedor Front-End</ProfileDescription>
          <ProfileDescription>HTML, CSS, JS, REACT</ProfileDescription>
          <ProfileDescription>SÃO PAULO - SP</ProfileDescription>

        </ProfileInfoWrapper>
        
        <CardContainer>                        
          {getLinks}              
        </CardContainer>
      </Container>
      <Footer/>
    </ThemeProvider>
  )
}