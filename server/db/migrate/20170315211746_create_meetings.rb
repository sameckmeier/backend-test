class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.timestamp :datetime, null: false
      t.decimal :price, precision: 8, scale: 2, default: 0
      t.string :location, null: false
      t.belongs_to :event

      t.timestamps null: false
    end
  end
end
