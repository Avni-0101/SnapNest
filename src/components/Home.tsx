import './Home.css';

const ExploreContainer: React.FC = () => {
  return (
    <div className="container">
      <header className="welcome-section">
        <h1>Welcome to <strong>SNAP NEST!!!</strong></h1>
        <p>Your personal photo gallery in a simple grid view.</p>
        <p>Capture moments, upload images, and see them instantly displayed.</p>
      </header>
      <div className="actions">
      <a href="/tab2"><button className="take-photo-button">Take a Picture</button></a>
      </div>
      <footer className="feedback-invite">
        <p>Have feedback? <a href="/tab3">Let us know!</a></p>
      </footer>
    </div>
  );
};

export default ExploreContainer;
