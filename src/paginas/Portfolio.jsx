import React, { useState } from 'react';
import PortfolioGrid from '../components/PortfolioGrid';
import PortInfo from '../components/PortInfo';
import './portfolio.css';

function  Portfolio  () {
  const [trigger, setTrigger] = useState(false);
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
  const [dataType, setDataType] = useState();
  function PortTextUpdate(title) {
    var allcontent = document.querySelectorAll(".t");
    var alltitle = document.querySelectorAll(".porttitle");

    for (let i = 0; i < allcontent.length; i++) {
      if (title === i) {
        allcontent[i].classList.add("a");
        alltitle[i].classList.add("selected");
      } else {
        allcontent[i].classList.remove("a");
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
      <div className="t video a"><PortfolioGrid type="1" setTrigger={setTrigger} setData={setData} setAllData={setAllData} setDataType={setDataType}/></div>
      <div className="t photo"><PortfolioGrid type="2" setTrigger={setTrigger} setData={setData} setAllData={setAllData} setDataType={setDataType}/></div>
      <div className="t design">DESIGN</div>
      <div className="t threed">3D</div>
    </section>
  );
}

export default Portfolio;
