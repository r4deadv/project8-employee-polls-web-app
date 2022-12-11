export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOne: {
      votes: [],
      text: optionOne,
    },
    optionTwo: {
      votes: [],
      text: optionTwo,
    },
  };
}

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}
