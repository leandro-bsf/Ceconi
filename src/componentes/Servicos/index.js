
import caminhao2 from  '../../imagens/caminhao2.jpeg'
import padrao from '../../imagens/padroes.jpeg'
import instalacao from '../../imagens/instalacao__eletrica.jpg'
import camera from '../../imagens/camera_seguranca.jpg'
import { motion } from 'framer-motion'
import './estilo.css'

  export  default function  Servicos(){
    return ( 
    <div className='Principal'>
    <motion.div className='direita'
     initial={{opacity: 0 , x: -100}}
     whileInView={{opacity: 1 , x: 0}}
     exit={{opacity: 0}}
     transition={{duration: 1.2}}>
         <div className='imagem'>
         <img className='Imagem_servico' src={camera} alt='camera'/>
         </div>
    </motion.div>
    <div className='circulo'></div>
    <div className='divisao'></div>

    < motion.div className='esquerda'
     initial={{opacity: 0 , x: 100}}
     whileInView={{opacity: 1 , x: 0}}
     exit={{opacity: 0}}
     transition={{duration: 1.2}}>

    <div className='div-texto'>
    <h3 className='Titulo_servico'>Câmeras de Vigilância</h3>
        <span className='text_servicos'>
        Garanta a segurança total de sua residência com nossos serviços especializados em instalação de câmeras de vigilância, sistemas de alarme e interfones. <br/> <br/>
        Proporcionamos soluções personalizadas para proteger sua casa, oferecendo tranquilidade e controle sobre quem entra e sai.
        </span>
        </div>
    </motion.div>
  
    <motion.div className='esquerda'
    initial={{opacity: 0 , x: -100}}
    whileInView={{opacity: 1 , x: 0}}
    exit={{opacity: 0}}
    transition={{duration: 1.2}}>

    <div className='div-texto-esquerda'>
    <h3 className='Titulo_servico'>Instalação Elétrica Residencial</h3>
        <span className='text_servicos'>
        Cuide da parte elétrica da sua casa com nossos serviços abrangentes.  <br/> <br/>
        Desde a instalação de tomadas e interruptores até a resolução de problemas elétricos, nossos especialistas garantem um funcionamento seguro e eficiente de toda a parte elétrica residencial.
        </span>
        </div>
    </motion.div>
  
 
    <div className='divisao'></div>
    <motion.div className='direita'
      initial={{opacity: 0 , x: 100}}
      whileInView={{opacity: 1 , x: 0}}
      exit={{opacity: 0}}
      transition={{duration: 1.2}}>
         <div className='imagem_esquerda'>
         <img className='Imagem_servico' src={instalacao} alt='instalacao'/>
         </div>
    </motion.div>
   
    <motion.div  className='direita'
     initial={{opacity: 0 , x: -100}}
     whileInView={{opacity: 1 , x: 0}}
     exit={{opacity: 0}}
     transition={{duration: 1.2}}>
         <div className='imagem'>
         <img className='Imagem_servico' src={padrao} alt='padrao'/>
         </div>
    </motion.div>
  
    <div className='divisao'></div>

    <motion.div className='esquerda'
     initial={{opacity: 0 , x: 100}}
     whileInView={{opacity: 1 , x: 0}}
     exit={{opacity: 0}}
     transition={{duration: 1.2}}>

     <div className='div-texto'>
        <h3 className='Titulo_servico' >Montagem e Venda de Padrões de Luz</h3>
         <span className='text_servicos'>
         Oferecemos serviços especializados na montagem e venda de padrões de luz, garantindo uma distribuição eficaz da energia elétrica em sua residência. <br/> <br/>
        Nossos padrões são projetados para atender às normas de segurança e proporcionar uma iluminação confiável em todos os ambientes.
         </span>
      </div>

      
    </motion.div>
    
    <motion.div div className='esquerda'
     initial={{opacity: 0 , x: -100}}
     whileInView={{opacity: 1 , x: 0}}
     exit={{opacity: 0}}
     transition={{duration: 1.2}}>

    <div className='div-texto-esquerda'>
    <h3 className='Titulo_servico'>Serviços de Caminhão Munck</h3>
        <span className='text_servicos'>
        Conte com nossos serviços de caminhão munck para lidar com suas necessidades de elevação e movimentação de cargas. Seja para projetos de construção, mudanças ou outras demandas, nosso caminhão munck oferece eficiência e praticidade na movimentação de materiais pesados, proporcionando soluções adaptadas às suas necessidades.
        </span>
        </div>
    </motion.div>
    <div className='divisao'></div>
    <div className='circulo'></div>
    <motion.div  className='direita'
     initial={{opacity: 0 , x: 100}}
     whileInView={{opacity: 1 , x: 0}}
     exit={{opacity: 0}}
     transition={{duration: 1.2}}>
         <div className='imagem_esquerda'>
           <img className='Imagem_servico' src={caminhao2} alt='caminao'/>
         </div>
    </motion.div>
    

    <div className='circulo_botton'></div>

 </div>
    );
}

