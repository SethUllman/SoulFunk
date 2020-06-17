class AddVanueToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :venue, :string
    add_column :shows, :city, :string
    add_column :shows, :state, :string

    remove_column :shows, :location, :string
  end
end
