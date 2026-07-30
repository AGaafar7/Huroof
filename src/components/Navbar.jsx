export default function Navbar() {
  return (
    <header className="navbar">
      <div className="wrap">
        <a href="#top" className="logo">
          <div className="logo-mark">ح</div>
          <div className="logo-text">
            <span className="en">Huroof</span>
            <span className="ar arabic">حروف</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#courses">Courses</a>
          <a href="#path">Learning Path</a>
          <a href="#instructors">Instructors</a>
          <a href="#stories">Stories</a>
        </nav>

        <div className="nav-actions">
          <a href="#" className="nav-login">Log in</a>
          <a href="#courses" className="btn btn-primary nav-cta">Start Free Lesson</a>
        </div>
      </div>
    </header>
  )
}
