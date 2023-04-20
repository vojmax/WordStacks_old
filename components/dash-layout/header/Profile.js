import Avatar from "react-avatar";
import { FaBell } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import classes from "./Profile.module.css";
import { useRouter } from "next/router";

export default function Profile() {
	const { data: session } = useSession();
	const { push } = useRouter();
	const user = session.user;

	const handeSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: "/auth" });
		push(data.url);
	};
	return (
		<div className={classes.profile}>
			{session ? <button onClick={handeSignOut}>signOut</button> : null}
			<Avatar
				name={user.name}
				title={user.email}
				size="50"
				alt={user.image}
				round
				onClick={null}
			/>
		</div>
	);
}
