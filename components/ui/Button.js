import classes from "./Button.module.css";

export default function HeaderButton({ title }) {
	return <button className={classes.header_button}>{title}</button>;
}
