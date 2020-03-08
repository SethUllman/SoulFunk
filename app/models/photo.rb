class Photo < ApplicationRecord
  validates :photo_url, presence: true
end