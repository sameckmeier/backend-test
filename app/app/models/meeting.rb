class Meeting < ActiveRecord::Base
  belongs_to :event

  def self.build(params)
    params = params.clone()

    time = "#{params.delete(:date)} #{params.delete(:time)}"
    params[:time] = Time.parse(time).strftime("%Y-%m-%d %H:%M %:z")
    
    Meeting.create(params)
  end
end
