class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.timestamp :time, null: false
      t.decimal :price, precision: 8, scale: 2, default: 0
      t.belongs_to :event

      t.timestamps null: false
    end
  end
end
