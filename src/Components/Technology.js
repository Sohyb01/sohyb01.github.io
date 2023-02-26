import React from 'react'
import { useState, useEffect, useRef } from "react"
import dataset from '../data'

const Technology = () => {
  const [data, setData] = useState(dataset)
  const [technologyData, setTechnologyData] = useState(data.technology[0])

  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  
  setInterval( ()=>{ 
    setWindowSize( [window.innerWidth, window.innerHeight] ) 
  } , 1000)
  // useEffect(()=>{ setWindowSize( [window.innerWidth, window.innerHeight] ) },[windowSize])

  setTimeout((()=>{
    window.innerWidth >= 1440 ? setTechnologyImgOption(technologyData.images.portrait) : setTechnologyImgOption(technologyData.images.landscape)
  }), 100)
  
  // useEffect(()=>{
    //   window.innerWidth >= 1440 ? setTechnologyImgOption(technologyData.images.portrait) : setTechnologyImgOption(technologyData.images.landscape)
    // }, [windowSize, technologyData])

  const [technologyImgOption, setTechnologyImgOption] = useState(technologyData.images.landscape)
  const [technologyActiveLinks, setTechnologyActiveLinks] = useState( ['active', '', ''] )

  return (
    <>
      <div className="container-technology">
        <h2><span>03</span>Space Launch 101</h2>
        <img className='technology-img' src={technologyImgOption} alt="" />
        {/* <div className='technology-img'></div> */}
        <div className="technology-navigation">
          <button className={`numbered-indicator ` + technologyActiveLinks[0]} onClick={()=> {
            setTechnologyData(data.technology[0])
            setTechnologyActiveLinks(['active','',''])
          }}>1</button>
          <button className={`numbered-indicator ` + technologyActiveLinks[1]} onClick={()=> {
            setTechnologyData(data.technology[1])
            setTechnologyActiveLinks(['','active',''])
          }}>2</button>
          <button className={`numbered-indicator ` + technologyActiveLinks[2]} onClick={()=> {
            setTechnologyData(data.technology[2])
            setTechnologyActiveLinks(['','','active'])
          }}>3</button>
        </div>
        <div className="technology-name">
          <h3>The terminology ...</h3>
          {technologyData.name}
        </div>
        <div className="technology-description">{technologyData.description}</div>
      </div>
    </>
  )
}

export default Technology