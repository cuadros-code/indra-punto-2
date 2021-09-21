import './App.css';
import styled from 'styled-components'
import Footer from './components/Footer';
import TableProducts from './components/Table';

const App = () => {

  return (
    <>
    <Container>
      <Title>
        Indra Test React
      </Title>
      
      <TableProducts />

    </Container>
    <Footer />
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 40px 40px 0px 40px;
`

const Title = styled.header`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  color: #1B48FA;
`
