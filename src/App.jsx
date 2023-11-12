import { useState } from 'react'

function App() {
  const [count, setCount] = useState('');
  const [sentence, setSentence] = useState('');

  return (
    <>
    <h1>Contador de palabras</h1>
        <textarea value={sentence} 
        onChange={(e) => setSentence(e.target.value)} 
        name="text" rows="20" cols="60" 
        placeholder="Introduce un texto..." />
        <br/>
        <input type="button" id="go" value="Contar" onClick={() => setCount(sentence.split(' ').length)} />
        <div id="result">Total de palabras: {count}</div>
    </>
  )
}

export default App
