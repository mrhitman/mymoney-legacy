import Button, { ButtonProps } from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

const ButtonWithLink = (props: ButtonProps & { to: string }) => (
  <Link to={props.to}>
    <Button {...props}>{props.children}</Button>
  </Link>
);

export default ButtonWithLink;
