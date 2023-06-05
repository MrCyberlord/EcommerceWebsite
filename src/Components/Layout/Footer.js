import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-title"]}>The Generics Store</div>
      <div className={classes["footer-icons"]}>
        <ul>
          <li>
            <a href="https://www.youtube.com">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://spotify.com">
              <img
                src="https://img.icons8.com/?size=512&id=G9XXzb9XaEKX&format=png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
