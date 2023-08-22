/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ResourcesIconRatingStarEmpty = ({ color = "#8A99A8", opacity = "unset", className }) => {
  return (
    <svg
      className={`resources-icon-rating-star-empty ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.71591 13.8523L2.25298 9.90529C2.02915 9.74356 1.9788 9.43101 2.14052 9.20718C2.23452 9.07707 2.38528 9 2.5458 9H9.33L11.5259 2.42042C11.6134 2.15848 11.8966 2.01701 12.1585 2.10443C12.3076 2.1542 12.4246 2.27119 12.4745 2.42029L14.6724 9H21.4542C21.7303 9 21.9542 9.22386 21.9542 9.5C21.9542 9.66052 21.8771 9.81128 21.747 9.90529L16.2841 13.8523L18.5094 20.5282C18.5967 20.7902 18.4552 21.0734 18.1932 21.1607C18.0405 21.2116 17.8728 21.1859 17.7423 21.0917L12.0022 16.946L6.25732 21.0925C6.03341 21.2541 5.72088 21.2036 5.55926 20.9797C5.46513 20.8493 5.43949 20.6815 5.49035 20.529L7.71591 13.8523Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

ResourcesIconRatingStarEmpty.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
