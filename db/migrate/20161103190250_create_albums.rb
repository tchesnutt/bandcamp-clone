class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :cover_url, null: false
      t.string :artist_name, null: false
      t.text :description
      t.timestamps null: false
    end
  end
end
