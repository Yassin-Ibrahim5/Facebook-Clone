import React, {useContext} from 'react';
import styles from './Home.module.css';
import {TokenContext} from "../../Contexts/TokenContext.jsx";


function Home() {

    let {token} = useContext(TokenContext);
    console.log(token);
    return (
        <h2 className={"text-center"}>Home</h2>
    );
}

export default Home;