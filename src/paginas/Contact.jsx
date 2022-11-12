import { useState } from "react";
import "./contact.css";

function Contact() {
  var f;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function revisarForm() {
    f = document.forms["form"];
    var submit = true;
    for (let i = 0; i < f.length; i++) {
      if (f[i].value.length === 0) {
        submit = false;
      }
      document.getElementById("subbut").disabled = !submit;
    }
  }

  function submitHover() {
    var boton = document.getElementById("subbut");
    boton.addEventListener("mouseenter", function () {
      boton.setAttribute("value", "Submit");
    });
    boton.addEventListener("mouseleave", function () {
      boton.setAttribute("value", " ");
    });
  }

  const handleChange = (e) => {
    document.getElementById("realtime").classList.add("visible");

    switch (e.target.id) {
      case "namec":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <section className="four">
      <form className="form" name="form">
        <div className="formbox">
          <div className="forminfo">
            <div className="namec">
              <label htmlFor="namec">Name:</label>
              <br />
              <input
                onInput={() => {
                  revisarForm();
                }}
                type="text"
                id="namec"
                value={name}
                placeholder="Name"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                onInput={() => {
                  revisarForm();
                }}
                type="email"
                id="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="message">
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                onInput={() => {
                  revisarForm();
                }}
                id="message"
                name="message"
                value={message}
                placeholder="Message"
                onChange={handleChange}
              ></textarea>
              <br />
              <br />
            </div>
          </div>
          <input
            id="subbut"
            type="submit"
            value=" "
            disabled={true}
            onMouseOver={submitHover}
          />
        </div>
      </form>
      <div className="realtimewrapper">
        <div id="realtime" className="realtime">
          <div className="cardinfo">
            <h3 className="namecard">{!name ? "Insert your name" : name}</h3>
            <br></br>
            <h5 className="emailcard">
              {!email ? "Insert your email" : email}
            </h5>
          </div>
          <p className="messagecard">{!message ? "" : message}</p>
          {/*<h1 id="textoanimado">{!value ? "CONTACT" : value}</h1>
        <h3 id="animationtitle">{!value ? "" : title}</h3>*/}
        </div>
      </div>
    </section>
  );
}

export default Contact;
