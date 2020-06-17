class Show < ApplicationRecord
  validates :venue, :city, :state, :time, :charge, presence: true
end