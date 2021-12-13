import React, { useState } from "react";

const List = (props) => {
  const { people } = props;
  const [names, setName] = useState(people);

  const removeIt = (id) => {
    let newPeople = names.filter((person) => person.id !== id);
    setName(newPeople);
  };
  const clearAll = () => {
    setName([]);
  };
  return (
    <>
      <h3>{names.length} Birthday</h3>
      {names.map((person) => {
        const { id, name, age, image } = person;
        return (
          <>
            <article key={id} className="person">
              <img src={image} alt="name" />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button
                  type="button"
                  onClick={() => removeIt(id)}
                  className="btn"
                >
                  remove
                </button>
              </div>
            </article>
          </>
        );
      })}
      <button type="button" onClick={clearAll} className="btn">
        Clear
      </button>
    </>
  );
};

export default List;
