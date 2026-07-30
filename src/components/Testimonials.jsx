const stories = [
  {
    quote: '"I could barely read a single word six months ago. Now I read street signs in Amman without translating in my head first."',
    name: 'Haruto K.',
    place: 'Osaka, Japan · Reading course',
  },
  {
    quote: '"The letter-path made it click for me — I could see exactly which sounds I still needed to practice instead of guessing."',
    name: 'Minji P.',
    place: 'Busan, South Korea · Beginner course',
  },
  {
    quote: '"My instructor corrected my pronunciation live every week. That alone was worth more than a year of apps."',
    name: 'Siti R.',
    place: 'Jakarta, Indonesia · Conversation course',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="stories">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Learner stories</span>
          <h2>They started at alef too</h2>
          <p>Real progress from learners who began with zero Arabic and a laptop.</p>
        </div>

        <div className="testi-grid">
          {stories.map((s) => (
            <div className="testi-card" key={s.name}>
              <p className="testi-quote">{s.quote}</p>
              <div className="testi-person">
                <span className="avatar">{s.name[0]}</span>
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
