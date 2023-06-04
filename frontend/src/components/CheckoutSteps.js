import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Hyr</div>
      <div className={props.step2 ? 'active' : ''}>Dërguar</div>
      <div className={props.step3 ? 'active' : ''}>Pagesa</div>
      <div className={props.step4 ? 'active' : ''}>Vendos porosinë</div>
    </div>
  );
}
