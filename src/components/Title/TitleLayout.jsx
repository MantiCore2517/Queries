/* eslint-disable react/prop-types */
export const TitleLayout = (props) => {
	const { title } = props;

	return <h1 className="text-2xl font-bold place-self-center mb-1">{title}</h1>;
};
