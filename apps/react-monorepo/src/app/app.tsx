import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { Products } from '@react-monorepo/products';
import { Orders } from '@react-monorepo/orders';
import environment from '../environments';

function Home() {
  console.log(environment);
  return <h1>Welcome react-store { environment.ENV_NAME }</h1>;
}
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  );
}

export default App;
