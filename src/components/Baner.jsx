
import { Swiper, SwiperSlide} from 'swiper/react'
import "./Baner.modules.css"
import foto1 from '../assets/foto-baner-1.png'
import foto2 from '../assets/foto-baner-5.png'
import foto3 from '../assets/foto-baner-4.png'

import { EffectFade} from 'swiper/modules'

function Baner(){

    const fotos = [
       {id:'1', image: foto1, titulo: 'AJUDEM A NOSSA CAUSA!', paragrafo:'Juntos, fazemos a diferença na vida dos animais. Contribua para a proteção e bem-estar dos nossos amigos de quatro patas. Sua ajuda é a esperança deles. '},
       {id:'2', image: foto2, titulo: 'JUNTOS PELA VIDA ANIMAL!', paragrafo:'Apoie a nossa causa e faça a diferença. Junte-se a nós na missão de proteger e cuidar dos nossos amigos de quatro patas. Seja a voz que eles precisam. 🐾'},
       {id:'3', image: foto3, titulo: 'Unidos por um Mundo Melhor para Animais.', paragrafo:''}

    ]
    
    return (
        <div className='container_baner'>
            <Swiper
            modules={[EffectFade]}
            effect='fade'
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            autoplay={{delay: 5000}}
            
            >
                {fotos.map((item)=> (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="slides" className='slides_image' />
                        <div className='texto'>
                            <h1>{item.titulo}</h1>
                            <p>{item.paragrafo}</p>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    )
}



export default Baner