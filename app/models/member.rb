class Member < ApplicationRecord
  validates :name, :bio, :image, presence: true, uniqueness: true
end