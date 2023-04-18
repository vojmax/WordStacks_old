import DashLayout from "@/components/dash-layout/DashLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<DashLayout>
			<Component {...pageProps} />
		</DashLayout>
	);
}
