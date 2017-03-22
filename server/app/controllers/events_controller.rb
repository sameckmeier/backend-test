class EventsController < ApplicationController
  before_action :authenticate_request, only: [:create]

  def show
    render({ json: { event: Event.jsonify(Event.find(params[:id])) }, status: 200 })
  end

  def create
    begin
      params[:user_id] = @current_user.id

      event = Event.build(event_params)
      event = Event.jsonify(event)

      render({ json: { event: event }, status: 201 })
    rescue StandardError => e
      puts e.message
      puts e.backtrace

      render({ json: { errors: ['Unable to create event'] }, status: 500 })
    end
  end

  private

  def event_params
    params.require(:event).permit([
      :title,
      :description,
      :image_url,
      meetings: [
        :price,
        :location,
        :date_time,
        :utc_offset,
        :timezone
      ],
    ])
  end
end
