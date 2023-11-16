import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/Messrsbecky" target="_blank">
        {" "}
        <FaSquareXTwitter className="icon" size="10x" />{" "}
      </a>

      <FaFacebookSquare className="icon" size="10x" />

      <a href="https://www.instagram.com/elizabethbecky_/" target="_blank">
        {" "}
        <FaInstagramSquare className="icon" size="10x" />{" "}
      </a>

      <a href="https://github.com/Messrsbecky" target="_blank">
        {" "}
        <FaGithubSquare className="icon" size="10x" />{" "}
      </a>
    </div>
  );
}

export default Footer;
