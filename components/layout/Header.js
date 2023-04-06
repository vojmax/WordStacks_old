import React from 'react'
import { BsStack } from "react-icons/bs";

import classes from "./Header.module.css"
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
      <BsStack/>
      WordStacks
      </Link>      
      <button>Add Stack</button>
      <div>profile</div>
    </header>
  )
}
