class Member < ApplicationRecord
  validates :name, :bio, presence: true, uniqueness: true

  has_one_attached :member_photo
end