json.array! @shows do |show|
  json.extract! show, :id, :location, :time, :charge
end

