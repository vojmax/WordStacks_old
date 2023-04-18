import React from "react";

export default function AuthLayout({ children }) {
	return (
		<div className="auth_layout">
			<div>Welcome</div>
			<main>{children}</main>
		</div>
	);
}
