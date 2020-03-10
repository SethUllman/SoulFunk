json.array! @shows do |show|
  json.id show.id
  json.location show.location
  json.time show.time
  json.charge show.charge
end