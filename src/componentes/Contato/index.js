
import logo from  '../../imagens/logo.png'
import './estilo.css'
export  default function  Contato (){
    return(
        <div className='Contato'>
        <div className='div_informacao'>
          <img src={logo} alt='logo' className='logo_contato' />
           <h1>Informações</h1>
           <div className='Dados_contato'>
           <h3>WhatsApp:</h3>   <span> 4699170-4814</span>
           </div>
             <div className='Dados_contato' >
             <h3>Endereço:</h3>   <span>  Dois Vizinhos - PR</span>
             </div>
           
            <div className='Dados_contato' >
            <h3>E-mail:</h3>  <span> email@gmail.com    </span>
            </div>
         
         
         </div> 
         <div className='div_form'>
            <h2 className='titulo_form'>  Envie uma Mensagem</h2>
             <input placeholder='Nome' type='text'></input>
             <input placeholder='E-mail' type='email'></input>
             <input placeholder='Telefone' type='cel'></input>
             <input placeholder='Mensagem' type='text'></input>
             <button>Enviar</button>
         </div>
     </div>
    )
}
