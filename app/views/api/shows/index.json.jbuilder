json.array! @shows do |show|
  json.extract! show, :id, :venue, :city, :state, :time, :charge
end

