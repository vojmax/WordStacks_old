import classes from "./Button.module.css";

export default function Button({ title, disabled }) {
	return <button className={classes.ui_button}>{title}</button>;
}
