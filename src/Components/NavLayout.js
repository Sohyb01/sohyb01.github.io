import { useState, useEffect } from "react"
import { Link , useLocation } from "react-router-dom"
export function NavLayout(){
    const [leftSlideIn, setLeftSlideIn] = useState({left: "100vw"})
    const [navLinkActivations, setNavLinkActivations] = useState(['active', '', '', ''])

    const location = useLocation()
    console.log(location)

    useEffect(()=>{
        if (location.pathname == "/"){
            setNavLinkActivations(['active', '', '', ''])
        }
        if (location.pathname == "/Destination"){
            setNavLinkActivations(['', 'active', '', ''])
        }
        if (location.pathname == "/Crew"){
            setNavLinkActivations(['', '', 'active', ''])
        }
        if (location.pathname == "/Technology"){
            setNavLinkActivations(['', '', '', 'active'])
        }
    }, [location])


    return(
        <>
            <div className="nav">
                <div className="nav-icon"></div>
                <div className="nav-button" onClick={()=>{setLeftSlideIn({left: '25vw'})
                }}></div> 
                <ul className='nav-list'  style={leftSlideIn}>
                    <div className="nav-list-escape"  onClick={()=>{setLeftSlideIn({left: "100vw"})
                }}></div>
                    <Link to="/" onClick={()=>{setLeftSlideIn({left: "100vw"})}} ><li><span>00</span>HOME </li></Link>
                    <Link to="/Destination" onClick={()=>{setLeftSlideIn({left: "100vw"})}} ><li><span>01</span>DESTINATION</li></Link>
                    <Link to="/Crew" onClick={()=>{setLeftSlideIn({left: "100vw"})}} ><li><span>02</span>CREW</li></Link>
                    <Link to="/Technology " onClick={()=>{setLeftSlideIn({left: "100vw"})}}><li><span>03</span>TECHNOLOGY</li></Link>
                </ul>
                <ul className="nav-static-list">
                    <Link to="/"><li className={navLinkActivations[0]} onClick={()=>{
                        setNavLinkActivations(['active'])
                    }}><span>00</span>HOME </li></Link>
                    <Link to="/Destination"><li className={navLinkActivations[1]} onClick={()=>{
                        setNavLinkActivations(['','active', '', ''])
                    }}><span>01</span>DESTINATION</li></Link>
                    <Link to="/Crew"><li className={navLinkActivations[2]} onClick={()=>{
                        setNavLinkActivations(['', '', 'active', ''])
                    }}><span>02</span>CREW</li></Link>
                    <Link to="/Technology"><li className={navLinkActivations[3]} onClick={()=>{
                        setNavLinkActivations(['','','','active'])
                    }}><span>03</span>TECHNOLOGY</li></Link>
                </ul>
            </div>
        </>
    )
}