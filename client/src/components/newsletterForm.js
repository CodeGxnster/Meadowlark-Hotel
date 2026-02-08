import { Link } from "react-router-dom"
export default function Newsletter() {
  return (
<section className="newsletter-login" id="newsletter-login">
  <div className="login-card">
    <h3>Member Access</h3>
    <p>Sign in to manage your newsletter preferences and exclusive offers.</p>

    <form className="login-form" id="login-form">
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Frankelly Cordero" required/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="name@example.com" required/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Subscriber Key</label>
        <input type="password" id="password" name="password" placeholder="Enter your key" required/>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Access Newsletter</button>
      <Link to="/#" className="forgot-link">Forgot your subscriber key?</Link>
    </form>
  </div>
</section>
)
}
