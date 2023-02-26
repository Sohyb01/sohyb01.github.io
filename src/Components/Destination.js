import { useState, useEffect } from "react"
import dataset from '../data'

function Destination(){
    const [data, setData] = useState(dataset)
    const [destinationData, setDestinationData] = useState(data.destinations[0])
    const [destinationActiveLinks, setDestinationActiveLinks] = useState(['active', '', '', ''])
    return(
        <>
           <div className="container-destination">
                <h2><span>01</span>Pick your destination</h2>
                <img className="destination-img" src={destinationData.images.png}></img>
                <div className="destination-navigation">
                    <button className={destinationActiveLinks[0]} onClick={()=> {
                        setDestinationData(data.destinations[0])
                        setDestinationActiveLinks(['active','','',''])
                    }}>Moon</button>
                    <button className={destinationActiveLinks[1]} onClick={()=> {
                        setDestinationData(data.destinations[1])
                        setDestinationActiveLinks(['','active','',''])
                    }}>Mars</button>
                    <button className={destinationActiveLinks[2]} onClick={()=> {
                        setDestinationData(data.destinations[2])
                        setDestinationActiveLinks(['','','active',''])
                    }}>Europa</button>
                    <button className={destinationActiveLinks[3]} onClick={()=> {
                        setDestinationData(data.destinations[3])
                        setDestinationActiveLinks(['','','','active'])
                    }}>Titan</button>
                </div>
                <div className="destination-name">
                    {destinationData.name}
                </div>
                <div className="destination-description">
                    {destinationData.description}
                </div>

                <div className="gray-line">

                </div>

                <div className="destination-info">
                    <div className="destination-distance">
                        <div className="avg-distance">Avg. Distance</div>
                        {destinationData.distance}
                    </div>
                    <div className="destination-travel">
                        <div className="est-time">Est. Travel Time</div>
                        {destinationData.travel}
                    </div>
                </div>
           </div>
        </>
    )
}
export default Destination;