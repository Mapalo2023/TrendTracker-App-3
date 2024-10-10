import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="pricing">
      <div className="pricing-header">
        <h2>Simple, transparent pricing</h2>
        <p>Choose the plan that's right for you</p>
      </div>
      <div className="pricing-toggle">
        <button className={!isAnnual ? 'active' : ''} onClick={togglePricing}>Monthly</button>
        <button className={isAnnual ? 'active' : ''} onClick={togglePricing}>Annual</button>
      </div>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h3>Free</h3>
          <div className="price">$0</div>
          <ul>
            <li>5 quizzes per month</li>
            <li>Basic analytics</li>
            <li>Community support</li>
          </ul>
          <a href="#" className="btn btn-secondary">Get Started</a>
        </div>
        <div className="pricing-plan">
          <h3>Pro</h3>
          <div className="price">{isAnnual ? '$39' : '$49'}<span>/month</span></div>
          <ul>
            <li>Unlimited quizzes</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
            <li>Custom branding</li>
          </ul>
          <a href="#" className="btn btn-primary">Choose Pro</a>
        </div>
        <div className="pricing-plan">
          <h3>Enterprise</h3>
          <div className="price">Custom</div>
          <ul>
            <li>All Pro features</li>
            <li>Dedicated account manager</li>
            <li>Custom integrations</li>
            <li>SLA</li>
          </ul>
          <a href="#" className="btn btn-secondary">Contact Sales</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;