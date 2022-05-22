
import Image from 'next/image'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/theme'

import { 
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
      <ProfileInfoWrapper>
        
        <ProfilePic>
          <Image src={profile} style={{borderRadius: "100px"}}/>
        </ProfilePic>

        <ProfileName>EDSON MALAGOLI</ProfileName>
        <ProfileDescription>Desenvolvedor Front-End</ProfileDescription>

      </ProfileInfoWrapper>
      
      <CardContainer>                        
        {getLinks}              
      </CardContainer>
    </ThemeProvider>
  )
}