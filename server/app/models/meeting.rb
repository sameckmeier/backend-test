class Meeting < ActiveRecord::Base
  belongs_to :event

  self.per_page = 2

  def self.jsonify(meeting)
    meeting_json = meeting.as_json
    meeting_json[:event] = meeting.event.as_json

    meeting_json
  end
end
