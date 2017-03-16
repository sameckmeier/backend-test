const eventsRows = events => {
  const rows = [];
  let i = 0

  while(i < events.length) {
    rows.push(events.slice(i, i + 2));
    i += 2;
  }

  return rows;
};

const Events = props => {
  const { events } = props;
  const rows = eventsRows(events);

  return <div className="Events">
    <div className="Events-main">
      {rows.map((r,i) => {
        return <div className="Events-row" key={i}>
          {r.map((e,i) => <EventCard key={i} {...e} />)}
        </div>;
      })}
    </div>
    <div className="Events-side">
      <h2 className="Events-reminders-title">Today's Highlights</h2>
      {events.map((e,i) => <EventReminder key={i} {...e} />)}
      <div className="Events-add">
        <button>
          <img src="assets/add.svg"/>
        </button>
      </div>
    </div>
  </div>;
}

export default Events;
