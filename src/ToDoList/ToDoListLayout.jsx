/* eslint-disable react/prop-types */
export const ToDoListLayout = (props) => {
	const { todos, loading } = props;
	return (
		<div>
			{loading
				? "Loading..."
				: todos.map((todo) => (
						<div key={todo.id} className="m-2">
							<input
								className="mr-2"
								type="checkbox"
								checked={todo.completed}
								readOnly
							/>
							{todo.title}
						</div>
					))}
		</div>
	);
};
