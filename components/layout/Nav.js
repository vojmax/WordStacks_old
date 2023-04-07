import Link from "next/link";
import React from "react";

import classes from "./Nav.module.css";

export default function Nav() {
	return (
		<nav>
			<ul className={classes.nav_list}>
				<Link href="/">Stacks</Link>
				<Link href="/tests">Tests</Link>
				<Link href="/stats">Stats</Link>
				<Link href="/messages">Messages</Link>
				<Link href="/account">Account</Link>
			</ul>
		</nav>
	);
}
