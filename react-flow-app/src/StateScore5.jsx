import { useState } from "react";

function StateScore5() {
  const OrginalPrice = 7899;
  const [discountPrice, setDiscountPrice] = useState(0);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const applyDiscount = (discount) => {
    if (discount === 10) {
      setDiscountPrice(OrginalPrice - OrginalPrice * 0.1);
      setAppliedDiscount(10);
    } else if (discount === 20) {
      setDiscountPrice(OrginalPrice - OrginalPrice * 0.2);
      setAppliedDiscount(20);
    } else if (discount === 30) {
      setDiscountPrice(OrginalPrice - OrginalPrice * 0.3);
      setAppliedDiscount(30);
    } else {
      setDiscountPrice(0);
      setAppliedDiscount(0);
    }
  };

  return (
    <>
      <h1>Original Price: ${OrginalPrice}</h1>
      <h2>Discounted Price: ${discountPrice.toFixed(2)}</h2>
      <h3>Applied Discount: {appliedDiscount > 0 ? `${appliedDiscount}%` : 'None'}</h3>
      <p style={{ color: 'darkBlue' }}>Click a button to apply a discount</p>
      <button style={{ color: 'blue' }} onClick={() => applyDiscount(10)}>
        Apply 10% Discount
      </button>
      <button style={{ color: 'blue' }} onClick={() => applyDiscount(20)}>
        Apply 20% Discount
      </button>
      <button style={{ color: 'blue' }} onClick={() => applyDiscount(30)}>
        Apply 30% Discount
      </button>
      <button style={{ color: 'blue' }} onClick={() => applyDiscount(0)}>
        Reset Price
      </button>
    </>
  );
}

export default StateScore5;
