import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Header from '../../component/Header';


const AOSPage = () => {
    const [mod, setMod] = useState("dark");
    
    const changeMod = () => {
        setMod(mod == "dark" ? "white" : "dark");
    }
    useEffect(() => {
    });
    
    return(
       <div>
           <Header mod={mod} changeMod={changeMod}/>
       </div>
    )
};

export default AOSPage;
