import React from "react";

const List = ({ individuals }) => {
  return (
    <>
      { individuals.map((individual) => {
        const { id, name, age, image } = individual;
        return (
          <article key={id} className="individual">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
