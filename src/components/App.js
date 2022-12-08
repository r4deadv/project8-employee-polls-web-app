import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);
  return (
    <div className="App">
      <h1>Would you rather?</h1>
    </div>
  );
}

export default connect()(App);
