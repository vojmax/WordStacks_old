import Avatar from "react-avatar";
import { FaBell } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import classes from "./Profile.module.css";

export default function Profile() {
	const { data: session } = useSession();
	const { push } = useRouter();
	const user = session.user;

	const handeSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: "/auth" });
		push(data.url);
	};

	console.log(user.image);
	return (
		<div className={classes.profile}>
			{session ? <button onClick={handeSignOut}>signOut</button> : null}
			<div>
				<button className={classes.user_avatar}>
					{user.image ? (
						<Image
							className={classes.avatar_image}
							width={40}
							height={40}
							src={user.image}
							alt="user avatar image"
						/>
					) : (
						<div className={classes.avatar_image}></div>
					)}
				</button>
			</div>
		</div>
	);
}
