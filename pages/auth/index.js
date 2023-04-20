import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function AuthPage() {
	const { push } = useRouter();

	const handeSignIn = async () => {
		const data = await signIn(undefined, { callbackUrl: "/dashboard/stacks" });
		push(data.url);
	};
	return <button onClick={handeSignIn}>signIn</button>;
}
