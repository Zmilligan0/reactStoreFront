import { Route, Routes } from 'react-router-dom'

import {DashBoardPage, PageNotFound, LoginPage} from './pages'


//html must start from a single node
function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashBoardPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
