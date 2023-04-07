import React from "react";
import Avatar from "react-avatar";
import { FaBell } from "react-icons/fa";

import classes from "./Profile.module.css";

export default function Profile() {
	return (
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
	);
}
