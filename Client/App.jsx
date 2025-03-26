import React, { useEffect, useState } from "react";
import MainContainer from "./Containers/MainContainer";
import './styles.css'
// import CuisineContainer from './Containers/CuisineContainer';

const App = () => {

  const [data, storeData] = useState([]);
  // let value = true;
  // const [categories, updateCat] = useState([])
  useEffect( () => {
     fetch("/restaurant")
      .then((res) => res.json())
      .then((dataFetched) => {
        storeData(dataFetched);
        // console.log("data", data)
      })
      .catch((err) => console.log(`error`, err));
  }, []);
  
  
  // let dataProp
  // if (data.length !== 0) {
  //     // console.log("data",data)
  //   let dataProp = data;
  // //   console.log("dataProp",dataProp[0].categories)
  // }
  // console.log("blah",data[0]["categories"])
  console.log("App Component Data:", data);

  return (
    <div id="App"> 
    { data.length!==0
      ? <MainContainer data={data} />
      : "test" }
   </div>
  );
};

export default App;
