@members.each do |member|
  json.set! :name, member.name
  json.set! :bio, member.bio
  json.set! :image, mamber.image
end