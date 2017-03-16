Rails.application.routes.draw do
  root 'page#index'
  post 'events/create' => 'events#create'
  post 'auth' => 'authentication#authenticate_user'
  match '*', to: 'page#index', via: :all
end
