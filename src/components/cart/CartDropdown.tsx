import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="absolute right-0 w-96 bg-white shadow-xl rounded-lg mt-2 z-50 max-h-[80vh] overflow-auto">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg">Shopping Cart</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="p-8 text-center">
          <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link 
            to="/shop" 
            onClick={onClose}
            className="btn btn-primary"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="p-4 space-y-4 max-h-[40vh] overflow-y-auto">
            {cart.map((item) => {
              const price = item.product.discount 
                ? item.product.price * (1 - item.product.discount / 100) 
                : item.product.price;
              
              return (
                <div key={item.product.id} className="flex items-center space-x-4 pb-4 border-b border-gray-100">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.product.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-md"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-md"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium">${(price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-error-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between text-sm mb-4">
              <span className="font-medium">Subtotal:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Shipping & taxes calculated at checkout</p>
            <Link 
              to="/checkout" 
              onClick={onClose}
              className="btn btn-primary w-full mb-2"
            >
              Checkout
            </Link>
            <button 
              onClick={onClose}
              className="btn btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;