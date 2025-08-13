import React from 'react';

export default function Loader() {
    return (
        <div className={`min-h-screen flex justify-center items-center`}>
            {/*<RiseLoader color={"#000000"}/>*/}
            <span className="loading loading-dots w-[75px]"></span>
        </div>
    );
}
