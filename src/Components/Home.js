import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
export function Home(){
    return(
        <>
            <div className="container flex container-home">

                <h2 className="ff-sans-cond fs-300 letter-spacing-2 text-accent  uppercase">So, you want to travel to</h2>
                <h1 className="text-white uppercase">SPACE</h1>
                <p className="ff-sans-normal fs-200 text-accent home-paragraph">
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
                
                {/* <a href="#" className="bg-white text-dark uppercase ff-serif large-button">Explore</a> */}
                <Link to="/Destination" className="bg-white text-dark uppercase ff-serif large-button"> Explore </Link>
            </div>
        </>
    )
}