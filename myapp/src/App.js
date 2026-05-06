import { useReducer } from 'react';

const products = [
  { id: 1, name: 'React Book', price: 20 },
  { id: 2, name: 'JavaScript Course', price: 50 },
  { id: 3, name: 'VS Code Theme', price: 10 },
];

const initialState = {
  cart: [],
  total: 0
};

function reducer(state, action) {
  switch (action.type) {

    case 'ADD_ITEM': {
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        total: state.total - (action.payload.price * action.payload.quantity)
      };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px' }}>
      <h1>🛒 Shopping Cart</h1>

      {/* Products */}
      <h2 style={{ marginTop: '20px' }}>Products</h2>
      {products.map(product => (
        <div key={product.id} style={cardStyle}>
          <span>{product.name} — ${product.price}</span>
          <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* Cart */}
      <h2 style={{ marginTop: '30px' }}>
        Cart ({state.cart.length} items)
      </h2>

      {state.cart.length === 0 && <p>Your cart is empty</p>}

      {state.cart.map(item => (
        <div key={item.id} style={cardStyle}>
          <span>{item.name} x{item.quantity}</span>
          <span>${item.price * item.quantity}</span>
          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>
            Remove
          </button>
        </div>
      ))}

      {state.cart.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Total: ${state.total}</h3>
          <button
            onClick={() => dispatch({ type: 'CLEAR_CART' })}
            style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;