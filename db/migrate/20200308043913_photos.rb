class Photos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :photo_url, null: false
      t.text :description
      t.timestamp
    end
    add_index :photos, :photo_url
  end
end
