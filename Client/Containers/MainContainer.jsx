import React, {useEffect, useState} from 'react';
import BadgeContainer from './BadgeContainer';

const MainContainer = (props) => {
    // console.log(props.data)
return (
    <div id="mainContainer">
        <h2>WELP</h2>
            <BadgeContainer data = {props.data}></BadgeContainer>
    </div>
)
};

export default MainContainer