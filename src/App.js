import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
   const key = "9fa945a29414ea500cebb45e2dad3b74";
   const [search, setSearch] = useState("");
   const [city, setCity] = useState();
  useEffect(() => { 
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search]);
  console.log(search);
  return (
    <body className="bodyApp">
     
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Please City Name"
          className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring placeHolderx"
        />
        {city && <City city={city} />}
        <div className="imgApp">
         
        </div>
      </div>
    </div>
   
  </body>  
  );
}

export default App;