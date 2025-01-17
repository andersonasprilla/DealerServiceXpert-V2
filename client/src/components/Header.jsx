function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
            <path d="M12 12L2 12"></path>
            <path d="M12 12L17 7"></path>
            <path d="M12 12L17 17"></path>
          </svg>
          <span>AI DealerPro</span>
        </a>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

