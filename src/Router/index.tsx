import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Editor } from '../view/Pages/Editor';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}
