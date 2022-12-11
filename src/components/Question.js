import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";

const Question = (props) => {
  if (props.question === null) {
    return <p>This Question doesn't exist</p>;
  }

  const { name, avatar, timestamp, optionOne, optionTwo, question, id } =
    props.question;

  return (
    <div className="question">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="question-info">
        <span>{name}</span>
        <div>{formatDate(timestamp)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};

export default connect(mapStateToProps)(Question);
