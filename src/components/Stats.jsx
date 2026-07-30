const stats = [
  { value: '378', label: 'Active learners this month' },
  { value: '19', label: 'Native Arabic instructors' },
  { value: '86', label: 'Structured lesson modules' },
  { value: '4.8/5', label: 'Average learner rating' },
]

export default function Stats() {
  return (
    <div className="stats-band">
      <div className="wrap stats-grid">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
