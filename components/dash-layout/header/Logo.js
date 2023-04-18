import Link from "next/link";
import React from "react";
import { BsStack } from "react-icons/bs";

import classes from "./Logo.module.css";

export default function Logo() {
	return (
		<Link href="/" className={classes.logo}>
			<BsStack />
			<span>Word</span>
			Stacks
		</Link>
	);
}
