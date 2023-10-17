import Baner from "./components/Baner"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NossoApp from "./components/NossoApp"
import QuemSomos from "./components/QuemSomos"
import QueroAjudar from "./components/QueroAjudar"

function App(){
  return (
    <div>
      <Header/>
      <Baner/>
      <QuemSomos/>
      <QueroAjudar/>
      <NossoApp/>
      <Contato/>
      <Footer/>
    </div>
    
  )

}

export default App
