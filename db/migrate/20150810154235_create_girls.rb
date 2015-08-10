class CreateGirls < ActiveRecord::Migration
  def change
    create_table :girls do |t|
      t.string :name
      t.string :city
      t.integer :age
      t.text :ad
      t.integer :height
      t.integer :weight
      t.string :eyes
      t.string :hair
      t.string :disponibility
      t.string :sexual_preference
      t.integer :phone_number
      t.string :website

      t.timestamps null: false
    end
  end
end
