class Event < ActiveRecord::Base
  belongs_to :user
  has_many :meetings

  def self.build(params)
    params = params.clone()
    meetings = params.delete(:meetings)
    event = create(params)

    meetings.each do |m|
      m[:event_id] = event.id
      Meeting.build(m)
    end

    event
  end
end
