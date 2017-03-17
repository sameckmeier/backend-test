class Meeting < ActiveRecord::Base
  belongs_to :event

  def self.build(params)
    params = params.clone()

    time = "#{params.delete(:date)} #{params.delete(:time)}"
    params[:datetime] = Time.parse(time).strftime("%Y-%m-%d %H:%M %:z")

    Meeting.create(params)
  end

  def time
    datetime.strftime("%l:%M %P")
  end

  def date
    datetime.strftime("%b %d, %Y")
  end
end
