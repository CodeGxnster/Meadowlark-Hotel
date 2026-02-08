import { Link } from "react-router-dom"

export default function Home(){
  return (
    <main className="meadowlark-main">
      <section className="hero">
        <div className="hero-content">
          <h1>Meadowlark</h1>
          <p>Luxury and serenity in the heart of La Romana, Dominican Republic.</p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">Discover Our Story</Link>
            <Link to="/newsletter" className="btn btn-secondary">Stay Updated</Link>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>Caribbean Luxury</h3>
          <p>Experience world-class suites overlooking the azure waters of the Southeast coast.</p>
        </div>
        <div className="feature-card">
          <h3>Local Flavor</h3>
          <p>Authentic Dominican gastronomy curated by top-tier local chefs.</p>
        </div>
        <div className="feature-card">
          <h3>Golf & Sun</h3>
          <p>Located minutes away from the Caribbean's most prestigious golf courses.</p>
        </div>
      </section>
    </main>

  )
}
