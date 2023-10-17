import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa'
import "./Contato.modules.css"

function Contato(){
    return (
        <section className='sec_cont' id='contato'>
            
            <h1>CONTATOS</h1>
            <div className="contatos">

                <div className="cont">
                    <FaMapMarker/> 
                    <h4>Nossa Localização</h4>
                    <p>Avenida General Lima Filho, 696, Recife</p>
                </div>
                <div className="cont">
                    <FaPhone/>
                    <h4>Nossos Telefones</h4>
                    <p>(81)91114444</p>
                    <p>(81)33222777</p>
                </div>
                <div className="cont">
                    <FaEnvelope/> 
                    <h4>Nosso email</h4>
                    <p> <a href="#">meadotapo@gmail.com</a></p>
                </div>
            </div>
        </section>
        
    )
}

export default Contato