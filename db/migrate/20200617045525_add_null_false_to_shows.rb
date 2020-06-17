class AddNullFalseToShows < ActiveRecord::Migration[5.2]
  def change
    change_column_null :shows, :city, false 
    change_column_null :shows, :state, false
    change_column_null :shows, :venue, false
  end
end
