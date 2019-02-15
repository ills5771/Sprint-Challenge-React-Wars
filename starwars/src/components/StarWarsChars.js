import React from "react";

const StarWarsChars = props => {
  return (
    <div className="starwars-chars">
      {props.starwarsChars.map(char => (
        <div className="chars-card">
          {" "}
          <ul>
            <li>Name: {char.name}</li>
            <li>Gender:{char.gender}</li>
            <li>Dob:{char.birth_year}</li>
            <li>HairColor:{char.hair_color}</li>
            <li>Weight:{char.mass}</li>
            <li>Height:{char.height}</li>
          </ul>{" "}
        </div>
      ))}
    </div>
  );
};
export default StarWarsChars;
