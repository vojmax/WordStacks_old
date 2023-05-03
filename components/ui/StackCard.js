import { Card } from "@geist-ui/core";
import React from "react";

export default function StackCard({ title, id }) {
	return (
		<Card hoverable width="100%">
			<div>{id}</div>
			<div>{title}</div>
		</Card>
	);
}
