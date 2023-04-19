import AuthLayout from "@/components/auth-layout/AuthLayout";
import DashLayout from "@/components/dash-layout/DashLayout";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
	const [userLogged, setUserLogged] = useState(false);

	return (
		<div>
			{userLogged ? (
				<DashLayout>
					<Component {...pageProps} />
				</DashLayout>
			) : (
				<AuthLayout>
					<Component {...pageProps} />
				</AuthLayout>
			)}
		</div>
	);
}
