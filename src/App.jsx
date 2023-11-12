import { useState } from 'react'

function App() {
  const [sentence, setSentence] = useState('');
  const [tempSentence, setTempSentence] = useState('');

  return (
    <>
    <h1>Contador de palabras</h1>
        <textarea value={tempSentence} 
        onChange={(e) => setTempSentence(e.target.value)} 
        name="text" rows="20" cols="60" 
        placeholder="Introduce un texto..." />
        <br/>
        <input type="button" id="go" value="Contar" onClick={() => setSentence(tempSentence.split('').length)} />
        <div id="result">{sentence}</div>
    </>
  )
}

export default App
