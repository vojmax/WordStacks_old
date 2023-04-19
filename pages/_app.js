import AuthLayout from "@/components/auth-layout/AuthLayout";
import DashLayout from "@/components/dash-layout/DashLayout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<AuthLayout>
				<Component {...pageProps} />
			</AuthLayout>
		</SessionProvider>
	);
}
