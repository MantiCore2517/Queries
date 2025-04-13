/* eslint-disable react/prop-types */
import { TitleLayout } from "./TitleLayout";
import { appTitleSelector } from "../../selectors/app";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appTitle } from "../../actions/app/actions";
import { useEffect } from "react";

export const Title = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(appTitle);
	}, [dispatch]);

	const title = useSelector(appTitleSelector);

	return <TitleLayout title={title} />;
};
