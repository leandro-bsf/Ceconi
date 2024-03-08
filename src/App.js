import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import whtas from './imagens/whatsapp.png'

import logo_barra from  './imagens/logo.png'
import teste  from  './imagens/caminhao_banner.png'
import './App.css';
import Servicos from './componentes/Servicos';
import Contato from './componentes/Contato';
import Gallery from './componentes/Galeria';
function App() {
  return (
      <container  className='Tela_inteira'>
        <div className='Tela_inicial'>
        <Navbar expand="lg" className="bg-body-tertiary teste">
           <Container>
              <img src={logo_barra} className='logo_menu' alt='logo'/>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#home">Servicos</Nav.Link>
                  <Nav.Link href="#link">Sobre</Nav.Link>
                  <Nav.Link href="#link">Galeria</Nav.Link>
                  <Nav.Link href="#link">Contato</Nav.Link>
              </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">4691326262</Navbar.Brand>
          </Container> 
    </Navbar>
    
      <div className='Div_superior'>
            <div className='div_text'>
                <h2 className='text_div'>CECONI INSTALAÇÕES</h2>
                <h4 className='text_div'>Atendimento de Excelência</h4>
                  <div className='div_solicitar_atend' >
                      <img src={whtas} className='logo_whts' alt='logo'/>
                      <span>Solicite um Orçamento</span>
                  </div>
             </div>
        <img src={teste}alt="Imagem" className="imagem-div" />
      </div>
    </div>

  <div  className='div_servico'>
  <Servicos /> 
  </div>

  <div className='Contato'>
  <Contato />
  </div>

  <div className='div_galeria'>
   <Gallery />
  </div>
     
      

      
      </container>
  );
}

export default App;
