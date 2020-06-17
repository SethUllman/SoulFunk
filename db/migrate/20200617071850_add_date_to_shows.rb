class AddDateToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :date, :string, null: false
  end
end
