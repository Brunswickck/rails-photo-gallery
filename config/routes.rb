Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "pages#show", page: "home", as: :home

  get "/pages/:page", to: "pages#show", as: :page
  # Defines the root path route ("/")
  # root "articles#index"
end
