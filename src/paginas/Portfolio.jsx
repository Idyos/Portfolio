import React, { useState } from 'react';
import PortfolioGrid from '../components/PortfolioGrid';
import PortInfo from '../components/PortInfo';
import './portfolio.css';

function  Portfolio  (props) {
  const [type, setType] = useState(1);
  const [trigger, setTrigger] = useState(false);
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [dataType, setDataType] = useState();
  function PortTextUpdate(title) {
    console.log(props);
    var alltitle = document.querySelectorAll(".porttitle");

    for (let i = 0; i < 4; i++) {
      if (title === i) { 
        alltitle[i].classList.add("selected");
       setType(title+1);
       props.secUpdate(!props.sec);
      } else {
        alltitle[i].classList.remove("selected");
      }
    }
  }


  return (
    
    <section className="three" >
      <PortInfo trigger={trigger} setTrigger={setTrigger} data={data} completeData={allData} dataType={dataType}/>
      <nav className="portfolionav">
        <h5 className="porttitle selected" onClick={() => {PortTextUpdate(0)}}>
          Video
        </h5>
        <h5 className="porttitle " onClick={() => {PortTextUpdate(1)}}>
          Photography
        </h5>
        <h5 className="porttitle" onClick={() => {PortTextUpdate(2)}}>
          Design
        </h5>
        <h5 className="porttitle" onClick={() => {PortTextUpdate(3)}}>
          3D
        </h5>
      </nav>
      <div className="t a"><PortfolioGrid type={type} setTrigger={setTrigger} setData={setData} setAllData={setAllData} setDataType={setDataType}/></div>
    </section>
  );
}

export default Portfolio;
