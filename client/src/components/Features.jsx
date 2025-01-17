
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            }
            title="Intelligent Analytics"
            description="Gain deep insights into your dealership's performance with AI-driven analytics and reporting."
          />
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            title="Customer Relationship Management"
            description="Enhance customer interactions and boost satisfaction with our AI-powered CRM system."
          />
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            }
            title="Fraud Detection"
            description="Protect your dealership with advanced AI algorithms that detect and prevent fraudulent activities."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;

