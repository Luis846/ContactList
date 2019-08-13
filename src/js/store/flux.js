const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			updateContact: (id, obj) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(obj)
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/")
						.then(response => response.json())
						.then(data => {
							setStore({ agenda: data });
						});
				});
			}
		}
	};
};

export default getState;
