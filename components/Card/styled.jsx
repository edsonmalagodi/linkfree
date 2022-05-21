
import styled from 'styled-components'
import '../../styles/theme'

const darkTheme = {
  bg : '#333',
  cardBg: '#C3C3CB',
  font: '#FFF'
}

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${theme => darkTheme.bg};
  color: ${theme => darkTheme.font};
`

export const LinkCard = styled.div`
  width: 80%;
  height: 10.25rem;
  display: flex;
  
`

