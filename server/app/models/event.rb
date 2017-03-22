class Event < ActiveRecord::Base
  belongs_to :user
  has_many :meetings

  def self.build(params)
    params = params.clone()
    meetings = params.delete(:meetings)
    event = create!(params)

    meetings.each do |m|
      m[:event_id] = event.id
      Meeting.create!(m)
    end

    event
  end

  def self.jsonify(event)
    event_json = event.as_json
    event_json[:meetings] = event.meetings.map { |m| m.as_json }
    
    event_json
  end
end
