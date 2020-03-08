class Show < ApplicationRecord
  validates :location, :time, :charge, presence: true, uniqueness: true
end