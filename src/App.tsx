import Header from "./components/header"
import Item from "./components/item"
import styles from "./home.module.css"


function App():JSX.Element {


  return (
    <div className="container">
      <div className="container_wrapper">
      <Header/>
      <Item/>
      </div>
    </div>
    
  )
}

export default App
