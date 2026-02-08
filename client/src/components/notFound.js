
export default function NotFound() {
  return (
  <main className="error-page">
  <div className="error-content">
    <span className="error-code">404</span>
    <h1>Lost at Sea?</h1>
    <p>The page you are looking for has drifted away from the shore. Let's get you back to the resort.</p>
    <div className="error-actions">
      <a href="/" className="btn btn-primary">Return to Meadowlark</a>
      <a href="/about" className="btn btn-secondary">Contact Concierge</a>
    </div>
  </div>
</main>
  )
}
