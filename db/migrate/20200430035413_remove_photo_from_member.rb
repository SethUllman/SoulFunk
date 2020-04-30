class RemovePhotoFromMember < ActiveRecord::Migration[5.2]
  def change
    remove_column :members, :image, :string, null: false
  end
end
