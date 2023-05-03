import React from "react";
import Header from "./header/Header";
import Nav from "./navigation/Nav";
import { useSession } from "next-auth/react";
import Welcome from "./Welcome";

export default function Layout({ children }) {
	const { data: session } = useSession();

	return (
		<div>
			{session ? (
				<div className="dash_layout">
					<Header />
					<Nav />
					<main>{children}</main>
				</div>
			) : (
				<div className="auth_layout">
					<Welcome />
					<main>{children}</main>
				</div>
			)}
		</div>
	);
}
