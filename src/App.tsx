import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListView from './pages/ProductListView';
import CheckoutView from './pages/CheckoutView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListView />} />
        <Route path="/checkout" element={<CheckoutView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;