import { useState } from "react";
import "./contact.css";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mlevvbwk");
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

  function submitContactForm(e) {
    e.preventDefault();
    document.querySelector(".form").classList.add("hidden");
    document.querySelector(".realtimewrapper").classList.add("center");
    setTimeout(() => {
      document.getElementById("certificate").style.display = "block";
      setTimeout(() => {
        document.getElementById("card").style =
          "animation: cardOut 2s ease-in-out;animation-fill-mode: forwards;";
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }, 1000);
    }, 1500);
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
      <form
        className="form"
        name="form"
        onSubmit={handleSubmit}
        onSubmitCapture={submitContactForm}
      >
        <div className="formbox">
          <div className="forminfo">
            <div className="namec">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                onInput={() => {
                  revisarForm();
                }}
                type="text"
                id="namec"
                value={name}
                placeholder="Name"
                name="name"
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
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
      <div className="realtimewrapper" id="card">
        <div id="realtime" className="realtime">
          <FontAwesomeIcon
            icon={faCertificate}
            className="certificateIcon"
            id="certificate"
          />
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
