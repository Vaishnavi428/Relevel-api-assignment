import React, { useState, useEffect } from "react";

const Table = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%")
      .then((response) => response.json())
      .then((data) => setData(data.drinks));
  }, []);

  if (!data) return <div>Loading...</div>;

  console.log(data);
  return (
    <div>
      <table>
        <tr>
          <th>Drink Name</th>
          <th>Instructions</th>
        </tr>
        {data.map((items) => (
          <tr>
            <td>{items.strDrink}</td>
            <td>{items.strInstructions}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;