import React from "react";
import "./Contact.css";
import message from "./Pictures/message.png";
import email from "./Pictures/mail.png";
import contact from "./Pictures/contact.png";
import adress from "./Pictures/adress.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ea66258f-2903-41a8-adfa-c36d288c055b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={message} alt="" />
        </h3>
        <p>
          See what’s new in The Neighborhood: Aptive’s hub for tips and insights
          to help you learn, prepare, and protect what matters mos
        </p>
        <ul>
          <li>
            <img src={email} alt="" /> Contact@mm.com
          </li>
          <li>
            <img src={contact} alt="" /> +56574839393
          </li>
          <li>
            <img src={adress} alt="" /> Uldhdjsdk, Baja, 6500
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label> Write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn1">
            {" "}
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
