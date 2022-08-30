import './PageFooter.scss'

function PageFooter() {
  // return current year
  let currentYear = new Date().getFullYear()
  return (
    <footer className="footer-container">
      <p>© Realty Hub {currentYear} </p>
    </footer>
  )
}

export default PageFooter
