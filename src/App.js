import { useState } from 'react'
import './App.css';
import CommitList from './components/CommitList'

function App() {

  const [token, setToken] = useState(localStorage.getItem("token") || '')

  const saveToken = () => {
    localStorage.setItem("token", token)
  }

  const clearToken = () => {
    localStorage.removeItem("token")
  }

  return (
    <div className="App">
      <input onChange={e => setToken(e.target.value)} value={token}/>
      <button onClick={saveToken}>Save</button>
      <CommitList token={token}/>
    </div>
  );
}

export default App;
