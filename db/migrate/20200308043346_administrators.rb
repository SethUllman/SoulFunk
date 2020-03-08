class Administrators < ActiveRecord::Migration[5.2]
  def change
    create_table :administrators do |t|
      t.string :username, null: false
      t.string :password, null: false 
      t.timestamps
    end
    add_index :administrators, :username
  end
end
