import React from "react";
import { Theme, createStyles, withStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    main: {
      width: "auto"
    }
  });

export interface LayoutProps {
  children: React.ReactNode;
}
const layout = (props: LayoutProps) => {
  return <div>{props.children}</div>;
};

export default withStyles(styles)(layout);
