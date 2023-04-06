import React from "react";
import { BsStack } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import Avatar from "react-avatar";

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
			<div className={classes.profile}>
				<button>
					<FaBell />
				</button>
				<Avatar
					name="Vanja Maskovic"
					size="50"
					round
					color={"purple"}
					onClick={null}
				/>
			</div>
		</header>
	);
}
