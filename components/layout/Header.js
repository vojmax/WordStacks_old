import React from "react";
import { BsStack } from "react-icons/bs";

import classes from "./Header.module.css";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<div>
				<Link href="/" className={classes.link}>
					<BsStack />
					<span>Word</span>
					Stacks
				</Link>
			</div>
			<button>Add Stack</button>
			<div>profile</div>
		</header>
	);
}
