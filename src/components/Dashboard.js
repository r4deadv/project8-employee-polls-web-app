import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.questionIds.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
