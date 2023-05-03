import dynamic from "next/dynamic";
import { Card, Grid, Page } from "@geist-ui/core";
import StackCard from "../../../components/ui/StackCard";
import GridContainer from "@geist-ui/core/esm/grid/grid-container";

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
			<GridContainer gap={2} margin={1}>
				<Grid style={{ height: "80px", backgroundColor: "grey" }}>header</Grid>
				{cardsArray.map((card) => {
					return (
						<Grid xs={8} xl={6} key={card.id} width="100%">
							<StackCard id={card.id} title={card.title} />
						</Grid>
					);
				})}
			</GridContainer>
		</>
	);
}
