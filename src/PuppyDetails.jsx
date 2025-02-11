import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SinglePuppydetails = () => {
  const [ puppyDetails, setPuppyDeatials ] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getAllPuppyDetails = async() => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players/${id}`);
      // console.log(response)
      const retrievedPuppyDetails = await response.json();
      console.log(retrievedPuppyDetails.data.player)
      setPuppyDeatials(retrievedPuppyDetails.data.player)
    }
    getAllPuppyDetails();
  }, [])

  return(
    <>
    
      <h2>Name: {puppyDetails.name}</h2>

      <h3>Breed: {puppyDetails.breed}</h3>

      <h3>Field Status: {puppyDetails.status}</h3>

      <img src={puppyDetails.imageUrl} height={250} width={250} />
    
      {/* {
        puppyDetails.team.map(() => {

        })
      } */}

      {/* <Link to='/' id="home">Home Page</Link> */}
    </>
  )
}

export default SinglePuppydetails;
