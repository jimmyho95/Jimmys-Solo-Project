import React from 'react';
import BadgeContainer from './BadgeContainer';

const MainContainer = (props) => {
  const parseData = (data) => {
    // Example of how you might parse or manipulate the data
    return data.map(item => {
      // Example: you could extract the categories or any other property
      return {
        id: item.id,
        name: item.name,
        categories: item.categories
      };
    });
  };

  const parsedData = parseData(props.data); // Parse the data here

  // console.log("MainContainer Parsed Data:", parsedData);
  // console.log("id", parsedData[2].id)
  // console.log("name", parsedData[2].name)
  // console.log("categories", parsedData[2].categories)


  return (
    <div id="mainContainer">
      <h2>WELP</h2>
      <BadgeContainer data={parsedData} />
    </div>
  );
};

export default MainContainer;
