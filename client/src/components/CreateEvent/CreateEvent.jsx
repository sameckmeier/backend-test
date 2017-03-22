import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import TimezonePicker from 'react-timezone';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'rc-time-picker/assets/index.css';
import styles from './CreateEvent.scss';
import defaultPlaceholder from '../../assets/images/default-placeholder.png';
import save from '../../assets/images/save.png';
import { createEvent } from '../../redux/ducks/event';
import translatedTimezones from '../../lib/translatedTimezones';
import {
  setTitle,
  setDescription,
  setImageUrl,
  setMeetingTime,
  setMeetingDate,
  setMeetingTimezone,
  setMeetingPrice,
  setMeetingLocation,
  addMeeting,
} from '../../redux/ducks/createEventParams';

const CreateEvent = ({
  createEventParams,
  setTitle,
  setDescription,
  setImageUrl,
  setMeetingTime,
  setMeetingDate,
  setMeetingTimezone,
  setMeetingPrice,
  setMeetingLocation,
  addMeeting,
  createEvent,
}) => {
  const {
    title,
    description,
    imageUrl,
    meetings,
  } = createEventParams;

  return <form className={ styles.container }>
    <div className={ styles.main }>
      <input
        type="text"
        placeholder="Title"
        className={ styles.title }
        value={ title }
        onChange={ e => setTitle(e.target.value) }
      />
      <textarea
        placeholder="Description"
        className={ styles.description }
        value={ description }
        onChange={ e => setDescription(e.target.value) }
      />
    </div>
    <div className={ styles.side }>
      <div className={ styles.image }>
        <img src={ imageUrl || defaultPlaceholder } alt="Default Placeholder" />
      </div>
      <input
        type="text"
        placeholder="Image URL"
        value={ imageUrl }
        className={ styles.imageUrl }
        onChange={ e => setImageUrl(e.target.value) }
      />
      <div className={ styles.meetings }>
        <button
          type="button"
          className={ styles.addMeeting }
          onClick={ () => addMeeting() }
        >
          Add Meeting
        </button>
        {meetings.map(({
          date,
          time,
          price,
          timezone,
          location,
        }, i) => <div className={ styles.dateTimePrice } key={ i }>
            <input
              type="text"
              placeholder="Location"
              value={ location }
              className={ styles.location }
              onChange={ e => setMeetingLocation(i, e.target.value) }
            />
            <div className={ styles.dateTime } key={ i }>
              <DatePicker
                className={ styles.date }
                selected={ date }
                onChange={ date => setMeetingDate(i, date) }
              />
              <TimePicker
                className={ styles.time }
                showSecond={ false }
                value={ time }
                format={ 'h:mm a' }
                onChange={ time => setMeetingTime(i, time) }
                use12Hours
              />
              <input
                type="number"
                value={ price }
                placeholder="Price"
                className={ styles.price }
                onChange={ e => setMeetingPrice(i, e.target.value) }
              />
            </div>
            <TimezonePicker
              onChange={ timezone => setMeetingTimezone(i, timezone) }
              inputProps={{
                value: translatedTimezones[timezone],
                placeholder: 'Timezone',
                name: 'timezone',
              }}
            />
          </div>
        )}
        <button
          type="button"
          className={ styles.saveButton }
          onClick={ () => createEvent({
            title,
            description,
            imageUrl,
            meetings,
          })}
        >
          <img src={ save } alt="Save" />
        </button>
      </div>
    </div>
  </form>
};

export default connect(
  state => ({ createEventParams: state.createEventParams }),
  dispatch => ({
    setTitle: title => dispatch(setTitle(title)),
    setDescription: description => dispatch(setDescription(description)),
    setImageUrl: imageUrl => dispatch(setImageUrl(imageUrl)),
    setMeetingTime: (index, time) => dispatch(setMeetingTime(index, time)),
    setMeetingDate: (index, date) => dispatch(setMeetingDate(index, date)),
    setMeetingTimezone: (index, timezone) => dispatch(setMeetingTimezone(index, timezone)),
    setMeetingPrice: (index, price) => dispatch(setMeetingPrice(index, price)),
    setMeetingLocation: (index, location) => dispatch(setMeetingLocation(index, location)),
    addMeeting: meeting => dispatch(addMeeting(meeting)),
    createEvent: params => dispatch(createEvent(params)),
  }),
)(CreateEvent);
