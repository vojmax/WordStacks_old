import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import Email from "next-auth/providers/email";
export const authOptions = {
	providers: [
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID,
			clientSecret: process.env.APPLE_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		// Email({
		// 	server: {
		// 		host: "",
		// 		port: "",
		// 		auth: {
		// 			user: "",
		// 			pass: "",
		// 		},
		// 		from: "",
		// 	},
		// }),
	],
	callbacks: {
		async jwt({ token }) {
			token.userRole = "admin";
			return token;
		},
	},
};

export default NextAuth(authOptions);
