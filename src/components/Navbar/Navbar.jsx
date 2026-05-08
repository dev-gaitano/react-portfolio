import "./Navbar.css"

function Navbar() {
  return (
    <div className="wrapper-navbar">
      <div className="brand">
        <img className="brand-logo" src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1775206748/logo_u4sz9t.svg" alt="logo" />
        <p className="brand-name">Portfolio</p>
      </div>
      <ul className="nav-links">
        <li>Add project</li>
        <li>Projects</li>
      </ul>
    </div>
  )
}

export default Navbar
