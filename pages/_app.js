import Layout from "@/components/dash-layout/DashLayout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

export default function App({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<GeistProvider>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</GeistProvider>
		</SessionProvider>
	);
}
