import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">USER APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signup">Add user</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">View all</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav