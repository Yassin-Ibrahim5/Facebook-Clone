import React from 'react';
import {GridLoader} from "react-spinners";

export default function Loader() {
    return (
        <div className={`min-h-screen flex justify-center items-center`}>
            {/*<RiseLoader color={"#000000"}/>*/}
            {/*<span className="loading loading-dots w-[75px]"></span>*/}
            <GridLoader size={20} color={"#193CB8"}/>
        </div>
    );
}
