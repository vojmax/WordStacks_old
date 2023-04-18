import HeaderButton from "@/components/ui/Button";
import Logo from "./Logo";
import Profile from "./Profile";

export default function Header() {
	return (
		<header>
			<Logo />
			<HeaderButton title="Add Stack" />
			<Profile />
		</header>
	);
}
