const EventReminder = props => {
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

  let truncatedDescription = description.split(' ').slice(0,5).join(' ')
  truncatedDescription = `${truncatedDescription}...`

  return <div className="EventReminder">
    <div className="EventReminder-left">
      <img src="assets/default-placeholder.png"/>
    </div>
    <div className="EventReminder-middle">
      <div className="EventReminder-name-date-time">
        { `${title} ${date} @ ${time}` }
      </div>
      <div className="EventReminder-description">
        { truncatedDescription }
      </div>
    </div>
    <div className="EventReminder-right">
      <div className="EventReminder-location">{ location }</div>
    </div>
  </div>;
}

export default EventReminder;
