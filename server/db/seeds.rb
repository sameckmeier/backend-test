[User, Event, Meeting].each { |m| m.destroy_all }

user = User.build({
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: 'email@test.com',
  password: 'testpassword'
})

def date_time(utc_offset)
  date = Faker::Date.between(Date.today, 100.days.from_now)
  time = "#{rand(0..1)}#{rand(0..9)}:#{rand(0..5)}#{rand(0..9)}"

  DateTime.parse("#{date} #{time} +#{utc_offset}:00").strftime("%Y-%m-%d %H:%M %:z")
end

def raw_event(user)
  {
    title: Faker::StarWars.vehicle,
    description: Faker::StarWars.quote,
    user_id: user.id,
    image_url: 'http://img.lum.dolimg.com/v1/images/Millennium-Falcon_018ea796.jpeg?region=0%2C1%2C1536%2C864',
    meetings: [
      {
        date_time: date_time(240/60),
        utc_offset: -240,
        timezone: 'America/New_York',
        price: "#{rand(1..100)}.#{rand(0..9)}#{rand(0..9)}".to_f,
        location: Faker::StarWars.planet
      },
      {
        date_time: date_time(420/60),
        utc_offset: -420,
        timezone: 'America/Los_Angeles',
        price: "#{rand(1..100)}.#{rand(0..9)}#{rand(0..9)}".to_f,
        location: Faker::StarWars.planet
      },
      {
        date_time: date_time(360/60),
        utc_offset: -360,
        timezone: 'America/Denver',
        price: 10.20,
        location: Faker::StarWars.planet
      }
    ]
  }
end

4.times { |i| Event.build(raw_event(user)) }
