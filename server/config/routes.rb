Rails.application.routes.draw do
  get 'meetings' => 'meetings#index'
  get 'meetings/:page' => 'meetings#paginated_index'
  get 'event/:id' => 'events#show'
  post 'event/create' => 'events#create'
  get 'user' => 'users#show'
  post 'auth' => 'authentication#authenticate_user'
end
