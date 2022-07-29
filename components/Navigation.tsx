import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  const { user } = useUser()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {
              user && (
                <Link href='/tasks' >
                  <a className="nav-link active" aria-current="page" id="tasks">Tasks</a>
                </Link>
              )
            }
            {
              user
                ? (
                  <Link href="/api/auth/logout" >
                    <a className="nav-link" id="logout">Logout</a>
                  </Link>
                )
                : (
                  <Link href="/api/auth/login" >
                    <a className="nav-link" id="login">Login</a>
                  </Link>
                )
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation