class Members < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :name, null: false
      t.text :bio, null: false 
      t.string :image, null: false
    end
    add_index :members, :name
  end
end
