import { Routes, Route } from 'react-router-dom';

import Homepage from './HomePage.jsx';
import SinglePuppydetails from './PuppyDetails.jsx';

const App = () => {

  return (
    <>
      <h1>Puppy Bowl</h1>

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/puppy-details/:id' element={<SinglePuppydetails />}/>
      </Routes>
    </>
  )
}

export default App
