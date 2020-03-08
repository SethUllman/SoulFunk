class Shows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :location, null: false
      t.datetime :time, null: false 
      t.float :charge, null: false
    end
  end
end
