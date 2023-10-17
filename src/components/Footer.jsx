import "./Footer.modules.css"
import logoFooter from "../assets/logo-at.png" 
 
function Footer(){
    return(
        <div className="footer">
            <img src={logoFooter} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellat itaque officia hic laudantium facere veniam quo, alias laborum repellendus unde vel eius asperiores optio odit reprehenderit accusamus commodi consectetur.</p>
        </div>
    )
}

export default Footer