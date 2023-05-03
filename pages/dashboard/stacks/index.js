import React from "react";
import StackCard from "@/components/ui/StackCard";
import GridContainer from "@geist-ui/core/esm/grid/grid-container";
import { Card, Grid } from "@geist-ui/core";

export default function StacksPage() {
	const cardsArray = [
		{
			id: 1,
			title: "Jedan",
		},
		{
			id: 2,
			title: "Dva",
		},
		{
			id: 3,
			title: "Tri",
		},
		{
			id: 4,
			title: "Cetiri",
		},
		{
			id: 5,
			title: "Pet",
		},
		{
			id: 6,
			title: "Sest",
		},
		{
			id: 7,
			title: "Sedam",
		},
	];

	return (
		<>
			<div
				style={{ display: "block", height: "80px", backgroundColor: "grey" }}
			>
				header
			</div>
			<GridContainer gap={2}>
				{cardsArray.map((card) => {
					return (
						<Grid xl={5} key={card.id} width="100%">
							<StackCard id={card.id} title={card.title} />
						</Grid>
					);
				})}
			</GridContainer>
		</>
	);
}
