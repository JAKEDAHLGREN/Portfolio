
import Contact from "./components/Contact"
import Works from "./components/Works"
import About from "./components/About"
import Technologies from "./components/Technologies"

const Container = styled.div`
  height: 100vh;
  backround-color: rebeccapurple
`

function Portfolio() {
  return (
    <div>
      <Container />
      <About />
      <Technologies />
      <Works />
      <Contact />
    </div>
  )
}

export default Portfolio