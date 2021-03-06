# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150811133445) do

  create_table "ads", force: :cascade do |t|
    t.string   "title"
    t.string   "name"
    t.string   "city"
    t.text     "ad"
    t.integer  "age"
    t.integer  "girls_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "ads", ["girls_id"], name: "index_ads_on_girls_id"

  create_table "girls", force: :cascade do |t|
    t.string   "name"
    t.string   "city"
    t.integer  "age"
    t.text     "ad"
    t.integer  "height"
    t.integer  "weight"
    t.string   "eyes"
    t.string   "hair"
    t.string   "disponibility"
    t.string   "sexual_preference"
    t.integer  "phone_number"
    t.string   "website"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

end
