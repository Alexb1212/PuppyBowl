import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [ puppies, setPuppies ] = useState([]);

  useEffect(() => {
    
    const getAllPuppies = async() => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players');
      // console.log(response)
      const jsonObj = await response.json();
      // console.log(jsonObj)
      const allPuppies = jsonObj.data.players
      // console.log(allPuppies)

      setPuppies(allPuppies);

    }
    getAllPuppies();
  }, []);

  return(
    <>
      <h2>Homepage</h2>
      {
        puppies.map((singlePuppy) => {
          
          return (
            <Link key={singlePuppy.id} to={`/puppy-details/${singlePuppy.id}`}>
              <h2>{singlePuppy.name}</h2>

              <img src={singlePuppy.imageUrl} height={200} width={200}/>
            </Link>
          )
        })
      }
    </>
  )
}

export default Homepage;