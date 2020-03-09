@members.each do |member|
  json.set! :name, member.name
  json.set! :bio, member.bio
  json.set! :image, member.image
end