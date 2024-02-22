import React, {useEffect, useState} from 'react';
import MainContainer from './Containers/MainContainer';
import CuisineContainer from './Containers/CuisineContainer';

const App =  () => {
    // this.state = {
    //     category0: "",
    //     category1: "",
    //     category2: "",
    //     url: "",
    //     imageUrl: "",
    //     name: "",
    //     location: "",
    //     price: "",
    //     phone: "",
    //     rating: null,
    //     reviewCount: null,
    // }
    const [data, storeData] = useState([])
    // const [categories, updateCat] = useState([])
    // useEffect (() => {
    fetch ('/restaurant')
    .then (res => res.json())
    .then ((data) => storeData(data))
    // .then ((data) => updateCat(data))
    // .then ((categories) = console.log(data[0].categories[0].title))
    // .then(console.log("categories", categories))

    .catch ((err) => console.log(`error`, err));
    // }
    // , [data])
    return (
        <div id = "App">
            <p>app works</p>
            <CuisineContainer />
            <MainContainer data = {data}/>
        </div>
    );
}

export default App;