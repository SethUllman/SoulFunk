Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :administrators, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :members, only: [:show, :new, :create, :index, :destroy, :update, :edit]
    resources :shows, only: [:show, :new, :create, :index, :destroy, :update, :edit]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
