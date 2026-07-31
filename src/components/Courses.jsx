import { useLanguage } from '../i18n/LanguageContext.jsx'

const themes = ['t1', 't2', 't3']

export default function Courses() {
  const { t } = useLanguage()
  const c = t.coursesSection

  return (
    <section className="section" id="courses">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2>{c.title}</h2>
          <p>{c.lede}</p>
        </div>

        <div className="courses-grid">
          {c.list.map((course, i) => (
            <article className="course-card" key={course.title}>
              <div className={`course-thumb ${themes[i]}`}>
                <span className="level-pill"><span className="dot" />{course.level}</span>
                <span className="glyph arabic">{course.glyph}</span>
              </div>
              <div className="course-body">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <div className="course-foot">
                  <div className="instructor">
                    <span className="avatar">{course.instructor[0]}</span>
                    <div>
                      <small>{course.instructor}</small>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <span className="course-price">{course.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
