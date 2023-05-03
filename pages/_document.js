import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = CssBaseline.flush();

		return {
			...initialProps,
			styles: [
				<Fragment key="1">
					{initialProps.styles}
					{styles}
				</Fragment>,
			],
		};
	}

	render() {
		return (
			<Html lang="en">
				<title>Word Stacks</title>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
