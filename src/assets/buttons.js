import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Buttons() {
  return (
    <div className="buttons">
      <a href="mailto:momohelizabethbecky@gmail.com" target="_blank">
        <button>
          <FaEnvelope className="icon" /> Email
        </button>
      </a>

      <a href="https://www.linkedin.com/in/elizabethmomoh/" target="_blank">
        <button className="">
          <FaLinkedin className="icon" /> LinkedIn
        </button>
      </a>
    </div>
  );
}

export default Buttons;
