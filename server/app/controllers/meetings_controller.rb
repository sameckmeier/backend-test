class MeetingsController < ApplicationController
  before_action :authenticate_request, only: [:paginated_index]

  def index
    meetings = Meeting.includes(:event).order({date_time: :asc}).map { |m| Meeting.jsonify(m) }

    render({ json: { meetings: meetings }})
  end

  def paginated_index
    meetings = Meeting.includes(:event).page(params[:page])
    meetings = meetings.order({date_time: :asc}).map { |m| Meeting.jsonify(m) }

    maxPageNumber = (Meeting.count/2.to_f).ceil

    render({ json: { meetings: meetings, maxPageNumber: maxPageNumber }})
  end
end
