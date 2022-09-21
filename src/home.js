import React, { useEffect, useState } from "react";

export default function FunComp() {
  const [getData, setGetData] = useState([]);
  const [getPerson, setGetPerson] = useState("");
  const [getValue, setgetValue] = useState([]);
  let userAPI = `https://jsonplaceholder.typicode.com/todos/${getPerson}`;

  useEffect(() => {
    initalFetch();
  }, []);

  function initalFetch(method) {
    fetch(userAPI)
      .then((res) => res.json())
      .then((res) => (method === "edit" ? setgetValue(res) : setGetData(res)))
      .catch((err) => console.log(err));
  }

  return (
    <div className="">
      <div className=" mb-3 mt-3">
        <h4 className="text-light mb-3">Enter User 1 to 200</h4>
        <input
          className="rounded-3 py-1"
          type={"text"}
          onChange={(i) => {
            setGetPerson(i.target.value);
          }}
        />
        <button
          onClick={() => {
            initalFetch("edit");
          }}
          className="btn btn-warning"
        >
          Get Person
        </button>
      </div>
      <h4 className="text-light">Title: {getValue.title}</h4>
      <h1 className="text-light">Refer Here</h1>
      <div className="container">
        <table>
          <th className="text-light">ID</th>
          <th className="text-light">Title</th>
          {getData.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
