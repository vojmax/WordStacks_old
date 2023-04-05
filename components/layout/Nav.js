import React from 'react'

import classes from "./Nav.module.css"


export default function Nav() {
  return (
    <nav>
      <ul className={classes.nav_list} >
        <li >One</li>
        <li>two</li>
        <li>tree</li>
        <li>fourth</li>
        <li>five</li>
      </ul>
    </nav>
  )
}
