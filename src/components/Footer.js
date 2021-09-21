import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterComponent>
      Indra Company
    </FooterComponent>
  )
}

export default Footer

const FooterComponent = styled.footer`
  padding: 10px;
  background: #1B48FA;
  color: white;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`
