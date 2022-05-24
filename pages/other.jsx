
import Image from 'next/image'
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
    <LinkCard key={e}>       
      <ImageWrapper>
        {item.type == 'git' ? <Image src={github} /> : ''}
        {item.type == 'linkedin' ? <Image src={linkedin} /> : ''}
        {item.type == 'telegram' ? <Image src={telegram} /> : ''}
        {item.type == 'twitter' ? <Image src={twitter} /> : ''}
        {item.type == 'insta' ? <Image src={instagram} /> : ''}
        {item.type == 'discord' ? <Image src={discord} /> : ''}
      </ImageWrapper>

      <InfoWapper>        
        <Title>{item.name}</Title>
        <SubTitle>{item.description}</SubTitle>
      </InfoWapper>      
    </LinkCard>
  )
})
  return(
    <ThemeProvider theme={darkTheme}>
      <Container>
        <ProfileInfoWrapper>
          
          <ProfilePic>
            <Image src={profile} style={{borderRadius: "100px"}}/>
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
    </ThemeProvider>
  )
}