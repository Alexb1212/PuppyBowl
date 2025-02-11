import { Link } from "react-router-dom";
import { useState } from "react";

const NewPuppy = (props) => {
  const [puppyName, setPuppyName] = useState("");
  const [puppyBreed, setPuppyBreed] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: puppyName,
            breed: puppyBreed,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (

    <>
      <h2>New Puppy</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Puppy Name: <input
            value={puppyName}
            onChange={(event) =>
              setPuppyName(event.target.value)} />
        </label>

        <label>
          Puppy Breed <input
            value={puppyBreed}
            onChange={(event) =>
              setPuppyBreed(event.target.value)} />
        </label>

        <button>Submit</button>
      </form>

      {/* <Link to= '/'>Home Page</Link> */}
    </>
  )

}

export default NewPuppy;