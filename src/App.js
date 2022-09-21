import React, { useState } from "react";
import "../src/index.css";
// import FunComp from "./home";

export default function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [output, setOutput] = useState(true);

  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=186ae0c314aee2c070c1608536e8a4cb`;

  const getWeather = () => {
    fetch(weatherURL)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    setOutput(true);
    console.log(data);
  }, [data]);
  console.log(data);
  return (
    <div className="container d-flex justify-content-center">
      <div className=" justify-content-center">
        <div className="row mb-3 mt-4">
          <h1 className="text-dark d-flex justify-content-center">
            Weather App
          </h1>
        </div>
        <div className="row ">
          <div className="col-9">
            <input
              className="inptDesign text-dark h-100 rounded-4 fw-bold fs-4"
              type={"text"}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary rounded-3 mx-2"
              onClick={getWeather}
            >
              Get
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <h2 className="d-flex justify-content-center colorText">Country:</h2>
          <h5 className="d-flex justify-content-center">
            {output ? data?.sys?.country : "****"}
          </h5>
        </div>
        <div className="row mt-3 mb-2">
          <h2 className="text-dark d-flex justify-content-center">
            {output ? data?.name : "Invalid Place"}
          </h2>
        </div>
        <div className="row ">
          <h2 className="d-flex justify-content-center colorText">
            Temperature:
          </h2>
          <h5 className="d-flex justify-content-center">
            {output ? data?.main?.temp : "****"}&#8451;
          </h5>
        </div>
        <div className="row mt-4">
          <h2 className="d-flex justify-content-center colorText">Weather:</h2>
          <h5 className="d-flex justify-content-center">
            {output
              ? data.length !== 0 && data?.weather[0]?.description
              : "****"}
          </h5>
        </div>
        <div className="row mt-3">
          <h2 className="d-flex justify-content-center colorText">
            Wind Speed:
          </h2>
          <h5 className="d-flex justify-content-center">
            {output ? data?.wind?.speed : "****"}/kmph
          </h5>
        </div>
        <div className="row"></div>
      </div>
    </div>
    // <FunComp />
  );
}
