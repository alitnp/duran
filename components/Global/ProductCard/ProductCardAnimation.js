import { FiShoppingCart } from 'react-icons/fi';

const ProductCardAnimation = ({ showAnimation }) => {
  if (!showAnimation) return null;

  return (
    <div
      className='fixed z-50 p-2 text-xl rounded-full shadow-xl bg-d-secondary add-item-to-cart'
      style={{ top: showAnimation.y, left: showAnimation.x }}
    >
      <FiShoppingCart />
    </div>
  );
};

export default ProductCardAnimation;
