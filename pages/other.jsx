
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/theme'

import { CardContainer, LinkCardWrapper, LinkCard } from '../components/Card/styled'

import {links} from '../links'

export default function otherIndex(){
console.log(links)
const getLinks = links?.map((e) => {
  return(
    <div>
      
      <h1>{e.name}</h1>
      <p>{e.description}</p>
    </div>
  )
})
    return(
        <ThemeProvider theme={darkTheme}>
          <CardContainer>
            <LinkCardWrapper>
              <LinkCard>
                {getLinks}
              </LinkCard>
            </LinkCardWrapper>
          </CardContainer>
        </ThemeProvider>
    )
}