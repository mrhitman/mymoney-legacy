import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { signout } from "../../actions/user";
import Layout from "../Layout";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      signout
    },
    dispatch
  );

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
