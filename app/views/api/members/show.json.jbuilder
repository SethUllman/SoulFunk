json.extract! @member, :id, :name, :bio
json.photoUrl url_for(@member.photo)