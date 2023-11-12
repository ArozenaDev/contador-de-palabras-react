import { useState } from 'react'

function App() {
  const [, ] = useState(0)

  return (
    <>
    <h1>Contador de palabras</h1>
        <textarea id="input" name="text" rows="20" cols="60" placeholder="Introduce un texto..." />
        <br/>
        <input type="button" id="go" value="Contar" />
        <div id="result" />
    </>
  )
}

export default App
