import styled from 'styled-components'
import {darkTheme, theme} from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  padding-top: 2rem;
  text-align: center;
  align-items:center;
  justify-content: center;
  background-color: ${theme => darkTheme.color.bg};
  color: ${theme => darkTheme.color.font};
`

export const Texto = styled.span`
  font-size: .8rem;
  font-weight: 600;
`