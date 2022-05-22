
import Image from 'next/dist/client/image'
import styled from 'styled-components'
import '../../styles/theme'


const darkTheme = {
  bg : '#333',
  cardBg: '#C3C3CB',

  primaryFont: '#FFF',
  font: '#000',

  fontSizeProfDesciption: '.85rem',
  //card content
  fontSizeTitle: '1rem',
  fontSizeSubTitle: '.65rem',
  //
}

export const ProfileInfoWrapper = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme => darkTheme.bg};
  color: ${theme => darkTheme.primaryFont};
  margin-top: 4rem;
`

export const ProfilePic = styled.div`
  width: 8rem;
  height: 8rem;
`

export const ProfileName = styled.h1`
  font-size: ${theme => darkTheme.fontSizeTitle};
`

export const ProfileDescription = styled.h1`
  font-size: ${theme => darkTheme.fontSizeProfDesciption};
  font-weight: 300;
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;  
  background-color: ${theme => darkTheme.bg};
  color: ${theme => darkTheme.font};
  padding-bottom: 2rem;

  @media (min-width: 700px){
    flex-direction: row;
  }
`

export const LinkCard = styled.div`
  width: 15rem;
  height: 10.25rem;
  display: flex;
  justify-content: space-evenly;
  background-color: ${theme => darkTheme.cardBg};
  flex-direction: column;
  align-items: center;  
  border-radius: 1rem;
`

export const ImageWrapper = styled.div`
  display: flex;
`

export const InfoWapper = styled.div`
  width: 80%;
`

export const Title = styled.h1`
  font-size: ${theme => darkTheme.fontSizeTitle};
  color: ${theme => darkTheme.font};
`

export const SubTitle = styled.p`
  font-size: ${theme => darkTheme.fontSizeSubTitle}
`

