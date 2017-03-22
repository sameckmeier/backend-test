class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.timestamp :date_time, null: false
      t.decimal :utc_offset, precision: 4, null: false
      t.decimal :price, precision: 8, scale: 2, default: 0
      t.string :location, null: false
      t.string :timezone, null: false
      t.belongs_to :event

      t.timestamps null: false
    end
  end
end
