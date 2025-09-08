import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () =>  {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=''>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Link to={"/about"}>About</Link>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home

