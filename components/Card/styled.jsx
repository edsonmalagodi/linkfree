
import Image from 'next/dist/client/image'
import styled from 'styled-components'
import '../../styles/theme'


const darkTheme = {
  bg : '#121212',
  cardBg: '#C3C3CB',

  primaryFont: '#FFF',
  font: '#000',

  fontSizeProfDesciption: '1rem',
  //card content
  fontSizeTitle: '1.6rem',
  fontSizeSubTitle: '.7rem',
  //
}

export const Container = styled.div`
  height: auto;
  background-color: ${theme => darkTheme.bg};
`

export const ProfileInfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${theme => darkTheme.bg};
  color: ${theme => darkTheme.primaryFont};
  padding-top: 6rem;
`

export const ProfilePic = styled.div`
  width: 10rem;
  height: 10rem;
`

export const ProfileName = styled.h1`
  font-size: ${theme => darkTheme.fontSizeTitle};
  margin-top: 3rem;
`

export const ProfileDescription = styled.h1`
  font-size: ${theme => darkTheme.fontSizeProfDesciption};
  font-weight: 400;
  margin-top: .4rem;
`

export const CardContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;  
  background-color: ${theme => darkTheme.bg};
  color: ${theme => darkTheme.font};  
  padding-top: 4rem;

  @media (min-width: 700px){
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-around;
    width: 60%;
  }
  @media (min-width: 1024px){
    width: 800px;
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
  margin-bottom: 1.5rem;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  display: flex;
  margin-top: auto;  
  
`

export const InfoWapper = styled.div`
  width: 90%;
  height: auto;
`

export const Title = styled.h1`
  font-size: ${theme => darkTheme.fontSizeTitle};
  color: ${theme => darkTheme.font};
`

export const SubTitle = styled.p`
  font-size: ${theme => darkTheme.fontSizeSubTitle}
`

