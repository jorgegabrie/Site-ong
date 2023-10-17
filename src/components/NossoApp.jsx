import foto_celular from '../assets/celular1.png'
import foto_app from '../assets/imagemApp.jpeg'

import "./NossoApp.modules.css"

function NossoApp(){
    return (
       <div className='container' id='nossoapp'>
            <div className='figura'>
                <img  className='imagem_celular' src={foto_celular} alt="" />
                <img className='imagem_app'src={foto_app} alt="" />
            </div>
            <div className='textos_app'>
                <h1>Nosso APP</h1>
                <p>Imagine um aplicativo que une o poder da tecnologia com a compaixão pelos animais, criando um espaço dedicado à doação e adoção de animais de maneira responsável. Este é o nosso aplicativo dedicado à causa animal, desenvolvido em parceria com uma ONG dedicada a proteger e cuidar de nossos amigos peludos.</p>
                <p>O "Me Adota Pô!" é muito mais do que um aplicativo comum; é uma plataforma com um propósito nobre. Aqui, você encontrará uma comunidade apaixonada por animais, unida pela missão de tornar o mundo um lugar melhor para eles.</p>
            </div>
       </div>
            
      

    )
}

export default NossoApp