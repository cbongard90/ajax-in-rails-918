Rails.application.routes.draw do
  resources :restaurants, only: [:index, :show] do
    resources :reviews, only: :create
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "restaurants#index"
end
