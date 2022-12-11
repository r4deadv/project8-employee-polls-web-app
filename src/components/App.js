import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";
import Dashboard from "./Dashboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div className="App">
      <h1>Would you rather?</h1>
      {props.loading === true ? null : <Dashboard />}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect()(App);
