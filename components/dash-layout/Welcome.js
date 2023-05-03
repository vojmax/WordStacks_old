import React from "react";
import Logo from "./header/Logo";

export default function Welcome() {
	return (
		<div style={{ display: "flex" }}>
			Wellcome to
			<Logo />
		</div>
	);
}
