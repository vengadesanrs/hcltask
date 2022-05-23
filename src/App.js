import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Navbar';
import Home from "./components/Home";
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import PagenotFound from './components/PagenotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/addtask' element={<AddTask/>}/>
          <Route path='/taskDetails/:id' element={<TaskDetails/>}/>
          <Route path='/*' element={<PagenotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
