class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, default: ""
      t.string :image_url
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
