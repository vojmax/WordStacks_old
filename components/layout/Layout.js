import React from "react";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Header />
			<Nav />
			<main>{children}</main>
		</div>
	);
}
