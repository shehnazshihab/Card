import { useState } from 'react'
import './App.css'
import Cardcreate from './componets/Cardcreate'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cardcreate />

    
      {/* <Routes>
        <Route path="/" element={<First name="ttt" />} />
        <Route path="/s" element={<Second place="tvm"/>}/>
        <Route path="/t" element={<Third name="shehnaz" />}/>
        <Route path="/u" element={<Tablecreate/>}/>
      </Routes> */}
    </>
  )
}

export default App
