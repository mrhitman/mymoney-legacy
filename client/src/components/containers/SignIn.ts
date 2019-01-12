import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { signin } from "../../actions/user";
import SignIn from "../SignIn";
import styles from "../theme";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      signin
    },
    dispatch
  );

export default connect(
  state => state,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
