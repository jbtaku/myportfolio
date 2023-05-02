import About from "../components/portfolio/About"
import Home from "../components/portfolio/Home"
import Products from "../components/portfolio/Products"
import Skills from "../components/portfolio/Skills"

function index() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Products />
    </>
  )
}

export default index