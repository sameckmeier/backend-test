[User, Event, Meeting].each { |m| m.destroy_all }

user = User.build({
  first_name: Forgery('name').first_name,
  last_name: Forgery('name').last_name,
  email: 'email@test.com',
  password: 'testpassword'
})

raw_event = {
  title: Forgery('lorem_ipsum').words(2),
  description: Forgery('lorem_ipsum').paragraph,
  location: Forgery('name').location,
  user_id: user.id,
  meetings: [
    {
      date: "#{Forgery('date').day}/03/2017",
      time: "#{rand(1..12)}:#{rand(0..5)}#{rand(0..9)} PM EST",
      price: "#{rand(1..100)}.#{rand(0..9)}#{rand(0..9)}"
    },
    {
      date: "#{Forgery('date').day}/03/2017",
      time: "#{rand(1..12)}:#{rand(0..5)}#{rand(0..9)} PM PST",
      price: "#{rand(1..100)}.#{rand(0..9)}#{rand(0..9)}"
    },
    {
      date: "#{Forgery('date').day}/03/2017",
      time: "#{rand(1..12)}:#{rand(0..5)}#{rand(0..9)} PM CST",
      price: "#{rand(1..100)}.#{rand(0..9)}#{rand(0..9)}"
    }
  ]
}

4.times { |i| Event.build(raw_event) }
