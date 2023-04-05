import React from 'react'

import classes from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <div className={classes.logo}>WordStacks</div>
      <button>Add Stack</button>
      <div>profile</div>
    </header>
  )
}
