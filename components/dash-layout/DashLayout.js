import React from "react";
import Header from "./header/Header";
import Nav from "./navigation/Nav";

export default function DashLayout({ children }) {
	return (
		<div className="dash_layout">
			<Header />
			<Nav />
			<main>{children}</main>
		</div>
	);
}
