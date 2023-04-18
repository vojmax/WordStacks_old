import AuthLayout from "@/components/auth-layout/WelcomeLayout";
import DashLayout from "@/components/dash-layout/DashLayout";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
	const [userLogged, setUserLogged] = useState(true);

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

// return (
// 	<DashLayout>
// 		<Component {...pageProps} />
// 	</DashLayout>
// );
