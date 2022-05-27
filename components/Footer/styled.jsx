import styled from 'styled-components'
import {darkTheme, theme} from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  text-align: center;
  background-color: ${theme => darkTheme.color.bg};
  color: ${theme => darkTheme.color.font};
`

export const Texto = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
`