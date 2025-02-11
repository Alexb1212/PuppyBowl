import { Routes, Route } from 'react-router-dom';

import Homepage from './HomePage.jsx';
import SinglePuppydetails from './PuppyDetails.jsx';
import NewPuppy from './NewPuppy.jsx';
import NavBar from './NavBar.jsx';

const App = () => {

  return (
    <>
      <h1>Puppy Bowl</h1>

      <NavBar />

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/puppy-details/:id' element={<SinglePuppydetails />}/>
        <Route path= '/NewPuppy' element={<NewPuppy />}/>
      </Routes>
    </>
  )
}

export default App
