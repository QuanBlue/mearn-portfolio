import './style.css';
import '../bootstrap-5.0.2/css/bootstrap.min.css';
import React from "react";
import { useState, useLayoutEffect } from 'react';
import PcResponsive from './PC_Reponsive/PcResponsive';
import MobileSesponsive from './Mobile_Responsive/MobileResponsive';


function UseWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
  
function autoUpdateResponsive(props) {
    const [width, height] = UseWindowSize();
    
    
    console.log('Window size:', width ,'x', height);

    if (width >= 700)
        return (
            <PcResponsive />
        );
    else 
        return(
            <MobileSesponsive />  
        );
}


function Main() {
    return (
        autoUpdateResponsive()
    );
}

export default Main;
