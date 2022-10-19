
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  //background-color: #110202;  
  color: #fff;
`;

export const Infos = styled.div`
  width: 80%;
  height: 480px;
  display: flex;
  padding-top: 80px;
  align-items: center;
  flex-direction: column;
`;

export const ProfilePicDiv = styled.div`  
  height: 400px;
  display: flex;
  align-items: flex-start;  
`

export const Title = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: #000;
  font-weight: 500;
  letter-spacing: .3rem;  
  margin-bottom: 2rem;
`;

export const Description = styled.span`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  display: flex;
  width: 15rem;
  height: 3rem;
  margin: 1rem 0;
  color: ${({theme}) => theme.color};
  border: 2px solid ${({theme}) => theme.color};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  justify-content: center;
  align-items: center;
`;


