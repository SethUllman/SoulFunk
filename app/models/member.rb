class Member < ApplicationRecord
  validates :name, :bio, presence: true, uniqueness: true

  has_one_attached :member_photo

  def ensure_photo
    unless self.member_photo.attached?
      errors[:member_photo] << "must be attached"
    end
  end
end