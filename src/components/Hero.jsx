export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="arabic">أ ← ي</span> From alef to fluency
          </span>
          <h1>
            Learn Arabic the way <span className="accent">native speakers</span> actually teach it
          </h1>
          <p className="lede">
            Huroof is built for learners across Asia starting from zero — real instructors,
            structured letter-by-letter courses, and a path that shows exactly how far you've come.
          </p>
          <div className="hero-actions">
            <a href="#courses" className="btn btn-primary">Start Your First Lesson</a>
            <a href="#path" className="btn btn-ghost">See the Learning Path</a>
          </div>
          <div className="hero-trust">
            <div className="avatars">
              <span>金</span>
              <span>ミ</span>
              <span>사</span>
              <span>+</span>
            </div>
            <small><strong>12,400+</strong> learners from Japan, Korea, Indonesia &amp; Vietnam</small>
          </div>
        </div>

        <div className="hero-visual">
          <div className="letter-card">
            <div className="float-chip chip-streak">
              <span className="dot" />
              <div>
                <strong>14-day streak</strong>
                <span>Keep it going</span>
              </div>
            </div>

            <div className="letter-top">
              <span className="letter-tag">Lesson 08 · The Alphabet</span>
              <span className="letter-tag">Beginner</span>
            </div>

            <div className="letter-big">
              <div className="letter-glyph">ع</div>
              <div className="letter-meta">
                <div className="name">ʿAyn</div>
                <div className="sound">A sound made deep in the throat — practice it before "alef"</div>
                <div className="play">▶ Hear it spoken</div>
              </div>
            </div>

            <div className="letter-progress">
              <div className="row">
                <span>Alphabet mastery</span>
                <span>21 / 28 letters</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: '75%' }} />
              </div>
            </div>

            <div className="float-chip chip-mastered">
              <span className="dot" />
              <div>
                <strong>92% mastered</strong>
                <span>Nun · ن</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
