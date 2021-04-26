import React, { useEffect, useState } from 'react';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import Content from '../../component/Content';


const AOSPage = () => {
    const [mod, setMod] = useState("dark");
    const [status, setStatus] = useState("open");
    
    const changeMod = () => {
        setMod(mod === "dark" ? "white" : "dark");
    }

    const moveSideBar = () => {
        setStatus(status === "open" ? "close" : "open");
    }
    
    useEffect(() => {
    });
    
    return(
       <div>
           <Header mod={mod} changeMod={changeMod} moveSideBar={moveSideBar}/>
           <SideBar mod={mod} status={status} />
           <Content mod={mod} status={status} />
       </div>
    )
};

export default AOSPage;
