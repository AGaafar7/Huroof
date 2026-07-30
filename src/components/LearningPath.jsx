const steps = [
  { glyph: 'ا', label: 'Alef', sub: 'The alphabet', state: 'done' },
  { glyph: 'ب', label: 'Baa', sub: 'Sounds & script', state: 'done' },
  { glyph: 'ج', label: 'Jeem', sub: 'Connecting letters', state: 'done' },
  { glyph: 'ن', label: 'Nun', sub: 'First words', state: 'current' },
  { glyph: 'ر', label: 'Raa', sub: 'Conversation', state: 'locked' },
  { glyph: 'ي', label: 'Yaa', sub: 'Reading fluently', state: 'locked' },
]

export default function LearningPath() {
  return (
    <section className="section path-section" id="path">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow"><span className="arabic">حروف</span> The Huroof Path</span>
          <h2>Every letter you learn is a step you can see</h2>
          <p>Instead of a generic percentage bar, your progress is the alphabet itself — each letter unlocks the next stage of speaking and reading.</p>
        </div>

        <div className="path-rail">
          <div className="path-line" />
          <div className="path-steps">
            {steps.map((s) => (
              <div className={`path-step ${s.state}`} key={s.label}>
                <div className="path-node arabic">{s.glyph}</div>
                <div>
                  <div className="label">{s.label}</div>
                  <div className="sub">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="path-note">
          <span className="num">21/28</span>
          <p>Most learners reach conversational confidence by the time they've mastered 21 of the 28 letters — you're almost there.</p>
        </div>
      </div>
    </section>
  )
}
