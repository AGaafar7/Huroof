const courses = [
  {
    glyph: 'ا',
    theme: 't1',
    level: 'Beginner',
    title: 'The Arabic Alphabet, from Scratch',
    desc: 'All 28 letters, their sounds, and how they connect — built for absolute beginners.',
    instructor: 'Yusuf A.',
    duration: '6 weeks',
    price: 'Free',
  },
  {
    glyph: 'ك',
    theme: 't2',
    level: 'Intermediate',
    title: 'Everyday Conversation',
    desc: 'Order food, ask directions, and hold a real conversation with confidence.',
    instructor: 'Layla H.',
    duration: '8 weeks',
    price: '$39',
  },
  {
    glyph: 'ق',
    theme: 't3',
    level: 'Advanced',
    title: 'Reading Modern Standard Arabic',
    desc: 'Move from spoken Arabic to reading news, signage, and everyday text.',
    instructor: 'Omar S.',
    duration: '10 weeks',
    price: '$59',
  },
]

export default function Courses() {
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Courses</span>
          <h2>Pick up where your level actually is</h2>
          <p>Every course is taught live and on-demand by a native instructor, and maps directly onto the learning path below.</p>
        </div>

        <div className="courses-grid">
          {courses.map((c) => (
            <article className="course-card" key={c.title}>
              <div className={`course-thumb ${c.theme}`}>
                <span className="level-pill"><span className="dot" />{c.level}</span>
                <span className="glyph arabic">{c.glyph}</span>
              </div>
              <div className="course-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="course-foot">
                  <div className="instructor">
                    <span className="avatar">{c.instructor[0]}</span>
                    <div>
                      <small>{c.instructor}</small>
                      <span>{c.duration}</span>
                    </div>
                  </div>
                  <span className="course-price">{c.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
