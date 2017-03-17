class EventsController < ApplicationController
  def index
    events = Event.includes(:meetings).map do |e|
      event_json = e.as_json
      event_json[:meetings] = e.meetings.map do |m|
        meeting_json = m.as_json
        meeting_json[:time] = m.time
        meeting_json[:date] = m.date

        meeting_json
      end

      event_json
    end
    
    render({ json: { events: events }})
  end
end
