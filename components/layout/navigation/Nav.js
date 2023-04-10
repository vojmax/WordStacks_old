import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillAppstore } from "react-icons/ai";
import {
	MdLayers,
	MdAccountBox,
	MdEmail,
	MdFactCheck,
	MdChat,
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
					href="/"
					className={currentRoute === "/" ? classes.link_active : classes.link}
				>
					<MdLayers />
					Stacks
				</Link>

				<Link
					href="/tests"
					className={
						currentRoute === "/tests" ? classes.link_active : classes.link
					}
				>
					<MdFactCheck />
					Tests
				</Link>

				<Link
					href="/stats"
					className={
						currentRoute === "/stats" ? classes.link_active : classes.link
					}
				>
					<MdInsertChart />
					Stats
				</Link>
				<Link
					href="/messages"
					className={
						currentRoute === "/messages" ? classes.link_active : classes.link
					}
				>
					<MdEmail />
					Messages
				</Link>
				<Link
					href="/account"
					className={
						currentRoute === "/account" ? classes.link_active : classes.link
					}
				>
					<MdAccountBox />
					Account
				</Link>
			</ul>
		</nav>
	);
}
