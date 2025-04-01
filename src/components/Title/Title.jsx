/* eslint-disable react/prop-types */
import { TitleLayout } from "./TitleLayout";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export const Title = () => {
	const { title } = useContext(AppContext);

	return <TitleLayout title={title} />;
};
