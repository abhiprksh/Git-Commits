import { useState ,useRef } from 'react'
import './App.css';
import CommitList from './components/CommitList'

function App() {

  const [token, setToken] = useState('')
  // const inputRef = useRef()

  // const handleToken = () =>{
  //   console.log("huik",inputRef)
  //   setToken(inputRef.current.value)
  // }

  // console.log(token)

  return (
    <div className="App">
      <input onChange={e => setToken(e.target.value)} value={token}/>
      {/* <button onClick={handleToken}>Enter</button> */}
      <CommitList token={token}/>
    </div>
  );
}

export default App;
