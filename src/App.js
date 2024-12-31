// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPost from './pages/AddPost';
import PostList from './pages/PostList';
import SingleList from './pages/SingleList';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
         
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/post/:id" element={<SingleList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
