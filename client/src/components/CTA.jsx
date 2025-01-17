function CTA() {
    return (
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Dealership?</h2>
          <p>Join the AI revolution and take your dealer management to the next level.</p>
          <form className="cta-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="button primary">Get Started</button>
          </form>
          <p className="terms">By signing up, you agree to our Terms & Conditions.</p>
        </div>
      </section>
    );
  }
  
  export default CTA;
  
  