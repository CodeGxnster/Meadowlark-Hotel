import { Link } from "react-router-dom"

export default function VacationForm() {
  return (

<section className="contest-view">
  <div className="contest-header">
    <h2>Show Us Your Meadowlark</h2>
    <p>Share your favorite moment from your stay in La Romana and win a 3-night luxury escape.</p>
  </div>

  <div className="upload-container">
    <form className="upload-form" id="upload-form">
        <div className="drop-zone-content">
          <label htmlFor="photo">Click here to upload your photo</label>
          <input type="file" name="photo" id="photo" hidden accept="image/*"/>
        </div>
      
      <div className="form-details">
        <div className="form-group">
          <label htmlFor="photo-caption">Story behind the photo</label>
          <textarea id="photo-caption" name="opinion" placeholder="Tell us about this moment..." rows="4"></textarea>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name"/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="example@example.com"/>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="terms" required/>
          <label htmlFor="terms">I agree to the <Link to="#">Contest Rules</Link> and allow Meadowlark to share this photo.</label>
        </div>

        <button type="submit" className="btn btn-primary btn-full">Submit Entry</button>
      </div>
    </form>
  </div>
</section>
  )
}
