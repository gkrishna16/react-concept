import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

const data = [
  { name: "Transformers" },
  { name: "Star Wars" },
  { name: "Adventureland" },
];

export const Searchinput = () => {
  const [name, setName] = useState(data);

  console.table(name);

  function handleChange(e: any) {
    let el = e.target.value;

    if (el) {
      const filterName = data.filter((a) => {
        return a.name.toLowerCase().includes(el.toLowerCase().trim());
      });
      setName(filterName);
    } else {
      setName(data);
    }
  }

  return (
    <div>
      <div>Search Input</div>
      <form>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="search"
            placeholder="Enter your name."
            onChange={handleChange}
          />
        </div>
      </form>
      {name.length > 0 ? (
        name.map((a, index) => (
          <li key={index}>
            <span>{a.name}</span>
          </li>
        ))
      ) : (
        <h1>No results found.</h1>
      )}
    </div>
  );
};
