import foto_cachorro from "../assets/cachorrinho.png"
import "./QuemSomos.modules.css"
import { FaArrowAltCircleUp } from 'react-icons/fa'

function QuemSomos(){

    function Subirtopo(){
        window.scrollTo(0,0)
    }
    


    return (
       <div id="quemsomos" className="quemSomos" >
            <h1 className="titulo_qs">QUEM SOMOS?</h1>
            <div className="container_QS">
        
                <div className="texto_quemsomos">
                    <p>Tudo começou com um grupo de amigos que compartilhavam um amor profundo pelos animais. Eles ficavam indignados com a situação de abandono e maus-tratos que muitos animais enfrentavam na cidade. Determinados a fazer a diferença, decidiram unir forças e fundar a ONG Me Adota Pô! <br /> A ONG tinha uma missão clara: proteger e cuidar de todos os seres vivos de quatro patas da comunidade. Seus valores eram baseados em amor, compaixão, respeito e dedicação aos animais. Eles acreditavam que cada vida era preciosa e merecia a oportunidade de viver feliz e saudável. <br /> Com o tempo, a ONG cresceu e ganhou reconhecimento na cidade. Mais voluntários se juntaram à causa, e as instalações foram ampliadas para acomodar um número cada vez maior de animais. <br />A ONG Me adota Pô! não apenas resgatou e reabilitou inúmeros animais, mas também desempenhou um papel fundamental na mudança de atitudes em relação aos animais na comunidade.</p>
                </div>
                <img src={foto_cachorro} alt="Foto de um cachorro" className="fotocachorro"/>
                <div className="btn_top" onClick={Subirtopo}>
                    <FaArrowAltCircleUp/>
                </div>
            </div>
            

        </div>
    )
}

export default QuemSomos