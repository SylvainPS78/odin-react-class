import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Site footer">
      <p>
        &copy; <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
        Created by{" "}
        <a
          href="https://github.com/SylvainPS78"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sylvain Web's GitHub profile"
        >
          Sylvain Web
        </a>
      </p>
      <p>
        Photo by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href=""
          aria-label="Visit XXX profile on XXX"
        >
          {/* add atrist name if applicable + links  to his page */}
        </a>{" "}
        on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href=""
          aria-label="View original photo on XXXX"
        >
          {/* add picture link if applicable */}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
