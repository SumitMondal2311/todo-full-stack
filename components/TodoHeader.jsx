const TodoHeader = (props) => {
  const date = new Date().getDate();

  let day = new Date().getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = days[day];

  let month = new Date().getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month = months[month];

  return (
    <div className="todoHeader">
      <h1>
        {day}, {date} {month}
      </h1>
      <h2>
        {props.done} Done, {props.pending} Pending
      </h2>
    </div>
  );
};

export default TodoHeader;
