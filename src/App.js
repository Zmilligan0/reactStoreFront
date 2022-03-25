import { Route, Routes } from 'react-router-dom'
import AddProductsPanel from './components/panels/AddProductsPanel';
import AllProductsPanel from './components/panels/AllProductsPanel';
import EditProductsPanel from './components/panels/EditProductsPanel';

import { DashBoardPage, PageNotFound, LoginPage } from './pages'


//html must start from a single node
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="dashboard" element={<DashBoardPage />}>
          <Route index element={<AllProductsPanel title="All Products" />} />
          <Route path='add' element={<AddProductsPanel title="Add New Product" />} />
          <Route path='edit' element={<EditProductsPanel title="Edit Product" />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
