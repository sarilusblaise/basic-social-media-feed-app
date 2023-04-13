import React, { Children } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom-v5-compat'
import './index.css'
import { PostsList } from './features/posts/postsList'
import { AddPostForm } from './features/posts/AddPostForm'

import { Navbar } from './app/Navbar'
const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: (
          <React.Fragment>
            <AddPostForm />
            <PostsList />
          </React.Fragment>
        ),
      },
    ],
  },
])

function App() {
  return (
    /*<Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>*/
    <RouterProvider router={router} />
  )
}

export default App
