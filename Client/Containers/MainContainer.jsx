import React, {useEffect, useState} from 'react';
import BadgeContainer from './BadgeContainer';

const MainContainer = (props) => {
    
return (
    <div id="mainContainer">
        <div id="badgeContainer">
            <BadgeContainer data = {props.data}></BadgeContainer>
        </div>
    </div>
)
};

export default MainContainer