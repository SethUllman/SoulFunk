class Member < AplicationRecord
  validates :name, :bio, :image, presence: true, uniqueness: true
end