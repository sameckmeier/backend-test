class PageController < ApplicationController
  def index
    events = []

    Event.includes(:meetings).each do |e|
      composed_events = e.meetings.map do |m|
        event_json = e.as_json
        event_json[:meeting] = m.as_json
        event_json[:meeting][:time] = m.time
        event_json[:meeting][:date] = m.date
        event_json
      end

      events.concat(composed_events)
    end

    render({
      component: 'Page',
      props: { events: events },
      class: 'Page'
    })
  end
end
