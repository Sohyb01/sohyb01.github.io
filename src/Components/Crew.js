import React from "react";
import { useState, useEffect } from "react";
import dataset from "../data";

const Crew = () => {
  const [data, setData] = useState(dataset);
  const [crewData, setCrewData] = useState(data.crew[0]);
  const [crewActiveLinks, setCrewActiveLinks] = useState([
    "active",
    "",
    "",
    "",
  ]);

  console.log(crewActiveLinks);

  return (
    <>
      <div className="container-crew">
        <h2>
          <span>02</span>Meet your crew
        </h2>
        <img className="crew-img" src={crewData.images.png} alt="" />
        <div className="gray-line"></div>
        <div className="crew-navigation">
          <button
            className={`dot-indicator ` + crewActiveLinks[0]}
            onClick={() => {
              setCrewData(data.crew[0]);
              setCrewActiveLinks(["active", " ", " ", " "]);
            }}
          ></button>
          <button
            className={`dot-indicator ` + crewActiveLinks[1]}
            onClick={() => {
              setCrewData(data.crew[1]);
              setCrewActiveLinks([" ", "active", " ", " "]);
            }}
          ></button>
          <button
            className={`dot-indicator ` + crewActiveLinks[2]}
            onClick={() => {
              setCrewData(data.crew[2]);
              setCrewActiveLinks([" ", " ", "active", " "]);
            }}
          ></button>
          <button
            className={`dot-indicator ` + crewActiveLinks[3]}
            onClick={() => {
              setCrewData(data.crew[3]);
              setCrewActiveLinks([" ", " ", " ", "active"]);
            }}
          ></button>
        </div>
        <div className="crew-role">{crewData.role}</div>
        <div className="crew-name">{crewData.name}</div>
        <div className="crew-bio">{crewData.bio}</div>
      </div>
      <div className="container-crew-tablet">
        <h2>
          <span>02</span>Meet your crew
        </h2>
        <div className="crew-role">{crewData.role}</div>
        <div className="crew-name">{crewData.name}</div>
        <div className="crew-bio">{crewData.bio}</div>
        <div className="crew-navigation">
          <button
            className={`dot-indicator ` + crewActiveLinks[0]}
            onClick={() => {
              setCrewData(data.crew[0]);
              setCrewActiveLinks(["active", " ", " ", " "]);
            }}
          ></button>
          <button
            className={`dot-indicator ` + crewActiveLinks[1]}
            onClick={() => {
              setCrewData(data.crew[1]);
              setCrewActiveLinks([" ", "active", " ", " "]);
            }}
          ></button>
          <button
            className={`dot-indicator ` + crewActiveLinks[2]}
            onClick={() => {
              setCrewData(data.crew[2]);
              setCrewActiveLinks([" ", " ", "active", " "]);
            }}
          ></button>
          <button
            className={`dot-indicator ` + crewActiveLinks[3]}
            onClick={() => {
              setCrewData(data.crew[3]);
              setCrewActiveLinks([" ", " ", " ", "active"]);
            }}
          ></button>
        </div>
        <img className="crew-img" src={crewData.images.png} alt="" />
      </div>
    </>
  );
};

export default Crew;
