
import "./PricingCardStyles.css";
import { Link } from "react-router-dom";

function PricingCard() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 700</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>

          <p>- Responsive Design -</p>
          <Link to='/contact' className="btn">Purchase now</Link>
        </div>
        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$ 2000</p>
          <p>- 2 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>

          <p>- Responsive Design -</p>
          <Link to='/contact' className="btn">Purchase now</Link>
        </div>
        <div className="card">
          <h3>- Bussiness -</h3>
          <span className="bar"></span>
          <p className="btc">$ 2500</p>
          <p>- 5 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>

          <p>- Responsive Design -</p>
          <Link to='/contact' className="btn">Purchase now</Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
