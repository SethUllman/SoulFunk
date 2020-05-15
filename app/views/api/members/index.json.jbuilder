json.array! @members do |member|
  json.extract! member, :id, :name, :bio
  json.photoUrl url_for(member.photo)
end
