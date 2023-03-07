import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import '../src/styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Post from './components/Post/Post'
import Redirect from './components/Redirect/Redirect'
import NotFound from './components/NotFound/NotFound'
import Posts from './components/Posts/Posts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Post />} /> */}
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<Post/>} />
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
