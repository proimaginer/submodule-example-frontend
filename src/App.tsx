import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

import reactLogo from './assets/react.svg'
import './App.css'
import { Article } from './@core/types/types'

function App() {
  const [count, setCount] = useState(0)
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    axios.get('http://localhost:3030/api/articles').then((res: AxiosResponse<Article[]>) => {
      setArticles(res.data)
    })
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      { articles.map(article => (<>
        <p key={article.id}>{ article.content } | { article.created_at }</p>
      </>))}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
