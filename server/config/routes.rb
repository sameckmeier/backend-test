Rails.application.routes.draw do
  get 'events' => 'events#index'
  post 'events/create' => 'events#create'
  post 'auth' => 'authentication#authenticate_user'
end
