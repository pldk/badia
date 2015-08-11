class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.string :title
      t.string :name
      t.string :city
      t.text :ad
      t.integer :age
      t.references :girls, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
