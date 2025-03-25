import config from "../config.json";

const TODOS_ENDPOINT = config.BASE_URL + "todos/";

export const todosAPI = {
	fetchALL: async () => {
		const response = await fetch(TODOS_ENDPOINT);
		return await response.json();
	},
	getTodoByID: async (id) => {
		const response = await fetch(TODOS_ENDPOINT + id);
		return await response.json();
	},
	update: async (payload) => {
		const response = await fetch(TODOS_ENDPOINT + payload.id, {
			method: "PUT",
			body: JSON.stringify(payload),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		return await response.json();
	},
	add: async (payload) => {
		const response = await fetch(TODOS_ENDPOINT, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		return await response.json();
	},
	delete: async (id) => {
		const response = await fetch(TODOS_ENDPOINT + id, {
			method: "DELETE",
		});
		return await response.json();
	},
};
