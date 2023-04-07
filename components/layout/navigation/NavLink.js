import Link from "next/link";

export default function NavLink({ path }) {
	return (
		<Link href={`/${path}`}>
			<a>{path}</a>
		</Link>
	);
}
