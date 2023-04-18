import Link from "next/link";
import { useRouter } from "next/router";
import {
	MdApps,
	MdAccountBox,
	MdEmail,
	MdFactCheck,
	MdInsertChart,
} from "react-icons/md";

import classes from "./Nav.module.css";

export default function Nav() {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<nav>
			<ul className={classes.nav_list}>
				<Link
					href="/dashboard/stacks"
					className={
						currentRoute === "/dashboard/stacks"
							? classes.link_active
							: classes.link
					}
				>
					<MdApps />
					Stacks
				</Link>

				<Link
					href="/dashboard/tests"
					className={
						currentRoute === "/dashboard/tests"
							? classes.link_active
							: classes.link
					}
				>
					<MdFactCheck />
					Tests
				</Link>

				<Link
					href="/dashboard/stats"
					className={
						currentRoute === "/dashboard/stats"
							? classes.link_active
							: classes.link
					}
				>
					<MdInsertChart />
					Stats
				</Link>
				<Link
					href="/dashboard/messages"
					className={
						currentRoute === "/dashboard/messages"
							? classes.link_active
							: classes.link
					}
				>
					<MdEmail />
					Messages
				</Link>
				<Link
					href="/dashboard/account"
					className={
						currentRoute === "/dashboard/account"
							? classes.link_active
							: classes.link
					}
				>
					<MdAccountBox />
					Account
				</Link>
			</ul>
		</nav>
	);
}
