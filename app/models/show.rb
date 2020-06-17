class Show < ApplicationRecord
  validates :venue, :city, :state, :time, :date, :charge, presence: true
end