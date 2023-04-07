import React from "react";
import Header from "./header/Header";
import Nav from "./navigation/Nav";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Header />
			<Nav />
			<main>{children}</main>
		</div>
	);
}
