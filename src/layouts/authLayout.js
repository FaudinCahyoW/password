import "../App.css";
import React from "react";

const AuthLayouts = (props) => {
  const { children } = props;
  return (
    <>
      <div className="main d-flex">
        <div className="left"></div>
        <div className="bg-light right">
           { children }
        </div>
      </div>
    </>
  );
};
export default AuthLayouts;
