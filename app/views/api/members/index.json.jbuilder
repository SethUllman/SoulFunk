json.array! @members do |member|
  json.id member.id
  json.name member.name
  json.bio member.bio
  json.image member.image
end