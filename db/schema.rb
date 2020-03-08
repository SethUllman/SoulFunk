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

ActiveRecord::Schema.define(version: 2020_03_08_043913) do

  create_table "administrators", force: :cascade do |t|
    t.string "username", null: false
    t.string "password", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_administrators_on_username"
  end

  create_table "members", force: :cascade do |t|
    t.string "name", null: false
    t.text "bio", null: false
    t.string "image", null: false
    t.index ["name"], name: "index_members_on_name"
  end

  create_table "photos", force: :cascade do |t|
    t.string "photo_url", null: false
    t.text "description"
    t.index ["photo_url"], name: "index_photos_on_photo_url"
  end

  create_table "shows", force: :cascade do |t|
    t.string "location", null: false
    t.datetime "time", null: false
    t.float "charge", null: false
  end

end