class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :string
      t.string :description
      t.string :text
      t.integer :quantity

      t.timestamps
    end
  end
end
