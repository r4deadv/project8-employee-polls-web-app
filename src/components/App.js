import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div className="App">
      <h1>Would you rather?</h1>
      <LoadingBar />
      {props.loading === true ? null : <Dashboard />}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
