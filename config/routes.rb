Rails.application.routes.draw do
  devise_for :users
  
  root 'static_pages#index'

  namespace :api do
    resources :users, only: [:show] do
      resources :notes
    end
  end
end
