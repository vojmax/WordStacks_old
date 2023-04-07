import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./Nav.module.css";

export default function Nav() {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<nav>
			<ul className={classes.nav_list}>
				<Link
					href="/"
					className={currentRoute === "/" ? classes.link_active : classes.link}
				>
					Stacks
				</Link>

				<Link
					href="/tests"
					className={
						currentRoute === "/tests" ? classes.link_active : classes.link
					}
				>
					Tests
				</Link>

				<Link
					href="/stats"
					className={
						currentRoute === "/stats" ? classes.link_active : classes.link
					}
				>
					Stats
				</Link>
				<Link
					href="/messages"
					className={
						currentRoute === "/messages" ? classes.link_active : classes.link
					}
				>
					Messages
				</Link>
				<Link
					href="/account"
					className={
						currentRoute === "/account" ? classes.link_active : classes.link
					}
				>
					Account
				</Link>
			</ul>
		</nav>
	);
}
