class Member < ApplicationRecord
  validates :name, :bio, presence: true, uniqueness: true

  validate :ensure_photo

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end