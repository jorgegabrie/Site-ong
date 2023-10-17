import "./Footer.modules.css"
import logoFooter from "../assets/logo-at.png" 
 
function Footer(){
    return(
        <div className="footer">
            <img src={logoFooter} alt="" />
            <p>Unidos pelo bem-estar animal, transformando vidas de quatro patas. ONG Projeto Mãos e Patas! - Juntos, fazemos a diferença.</p>
        </div>
    )
}

export default Footer