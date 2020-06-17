import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

export const CustomRoute = (props) => {
  const [returnedRoute, setReturnedRoute] = useState("");
  useEffect(() => {
    switch (props.condition) {
      case "logged_in":
        return setReturnedRoute(
        localStorage.logged_in ? <Route {...props} /> : <Redirect to="/" />
        );
      default:
        return setReturnedRoute(<Route {...props} />);
    }
  }, [props.condition]);
  return (
    <>{returnedRoute}</>
  )
}

export default CustomRoute