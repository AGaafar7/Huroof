export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">ح</div>
              <div className="logo-text">
                <span className="en" style={{ color: '#fff' }}>Huroof</span>
                <span className="ar arabic">حروف</span>
              </div>
            </div>
            <p>Helping learners across Asia go from the Arabic alphabet to real conversation, one letter at a time.</p>
          </div>

          <div>
            <h4>Learn</h4>
            <ul>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#path">Learning path</a></li>
              <li><a href="#instructors">Instructors</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#stories">Learner stories</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Huroof. All rights reserved.</span>
          <span>Made for learners across Asia</span>
        </div>
      </div>
    </footer>
  )
}
