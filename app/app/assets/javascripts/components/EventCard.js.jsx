const EventCard = props => {
  const {
    title,
    description,
    location,
    image_url,
    user_id,
    meeting,
  } = props;

  const {
    price,
    time,
    date,
  } = meeting;

  return <div className="EventCard">
    <div className="EventCard-top">
      <div className="EventCard-date-time">
        { `${date} @ ${time}` }
      </div>
      <button className="EventCard-share">
        <img src="assets/share.png"/>
      </button>
    </div>
    <div className="EventCard-middle">
      <div className="EventCard-name">
        { title }
      </div>
    </div>
    <div className="EventCard-bottom">
      <button className="EventCard-view">View</button>
    </div>
  </div>;
}

export default EventCard;
