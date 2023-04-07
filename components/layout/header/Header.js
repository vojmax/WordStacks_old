import Logo from "./Logo";
import Profile from "./Profile";

export default function Header() {
	return (
		<header>
			<Logo />
			<button>Add Stack</button>
			<Profile />
		</header>
	);
}
