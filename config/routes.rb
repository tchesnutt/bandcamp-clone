Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resources :albums, only: [:create, :index, :update, :destroy]
    resources :tracks, only: [:create, :update, :index, :show, :destroy]
    resources :search, only: [:index]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
