import "./general.css";
import IntIsland from "./components/InteractiveIsland";
import Home from "./paginas/Home";
import Education from "./paginas/Education";
import Portfolio from "./paginas/Portfolio";
import Contact from "./paginas/Contact";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

function App() {
  const pageRef = React.createRef();
  const cursor = useRef();
  const follower = useRef();

  // DETECTAR DIRECCIÓN DEL SCROLL ///////////////////////////////////////////////////////////////////////////////////
    const { isScrollingUp, isScrollingDown } = useScrollDirection();
    console.log(isScrollingUp);
  // MOVIMIENTO DEL MOUSE ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

  function Scrolldown() {
    window.scroll(0, 300);
  }

  function MouseUpdate() {
    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          gsap.set(follower.current, {
            css: {
              left: posX - 20,
              top: posY - 20,
            },
          });

          gsap.set(cursor.current, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      }
    );
  }

  window.onload = Scrolldown;
  window.onload = MouseUpdate;

  const jRef = useRef();

  window.addEventListener("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  useEffect(() => {
    const lista = document.querySelectorAll("#listaportfolio");
    
    jRef.current.addEventListener("mouseenter", function () {
      cursor.current.classList.add("active");
      follower.current.classList.add("active");
    });

    jRef.current.addEventListener("mouseleave", function () {
      cursor.current.classList.remove("active");
      follower.current.classList.remove("active");
    });

    for (var i = 0; i < lista.length; i++) {
      lista[i].addEventListener("mouseenter", function () {
        cursor.current.classList.add("activeport");
        follower.current.classList.add("activeport");
      });

      lista[i].addEventListener("mouseleave", function () {
        cursor.current.classList.remove("activeport");
        follower.current.classList.remove("activeport");
      });
    }
  });

  return (
    
    <div>
      <div className="cursor" id="cursor" ref={cursor}></div>
      <div
        className="cursor-follower"
        id="cursor-follower"
        ref={follower}
      ></div>
            {isScrollingUp && "Up"}
      {isScrollingDown && "Down"}
      <IntIsland reference={pageRef} />
      <div className="todo" id="todo" ref={pageRef}>
        <Home reference={jRef} />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
