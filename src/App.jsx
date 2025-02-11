import { Routes, Route } from 'react-router-dom';

import Homepage from './HomePage.jsx';

const App = () => {

  return (
    <>
      <h1>Puppy Bowl</h1>

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/puppy-details/:id' element={<h2>Puppy Details</h2>}/>
      </Routes>
    </>
  )
}

export default App
