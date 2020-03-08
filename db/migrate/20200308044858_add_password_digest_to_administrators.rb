class AddPasswordDigestToAdministrators < ActiveRecord::Migration[5.2]
  def change
    add_column :administrators, :password_digest, :string, null: false
    add_column :administrators, :session_token, :string, null: false
    remove_column :administrators, :password

    add_index :administrators, :session_token
  end
end
