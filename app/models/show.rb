class Show < ApplicationRecord
  validates :location, :time, :charge, presence: true
end