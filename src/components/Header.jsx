import { useState } from "react"
import logo from "../assets/logo-at.png"
import "./Header.modules.css"
import { FaWindowClose} from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'

function Header(){
    const [active, setMode] = useState(false)
    const toggleMode = () =>{
        setMode(!active)
    }
    
    return (
        
        <div className="topo">
            <div>
                <img className="imagem_logo" src={logo} alt="" />
            </div>
            <div>
                <RiMenu3Fill className="svg_hamburguer" size={40} onClick={toggleMode}/>
                <ul>
                    <a href="#quemsomos"><li>QUEM SOMOS</li></a>
                    <a href="#queroajudar"><li>QUERO AJUDAR</li></a>
                    <a href="#nossoapp"><li>NOSSO APP</li></a>
                    <a href="#contato"><li>CONTATO</li> </a>   
                </ul>
            </div> 
            <div className={active ? 'menu_hamburguer active' : 'menu'}>
                <FaWindowClose size={40} onClick={toggleMode}/ >
                <ul>
                    <a href="#quemsomos" onClick={toggleMode}><li>QUEM SOMOS</li></a>
                    <a href="#queroajudar" onClick={toggleMode}><li>QUERO AJUDAR</li></a>
                    <a href="#nossoapp" onClick={toggleMode}><li>NOSSO APP</li></a>
                    <a href="#contato" onClick={toggleMode}><li>CONTATO</li> </a>   
                </ul>
            </div>
            
        </div>
    )
}

export default Header