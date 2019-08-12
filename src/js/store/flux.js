const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			updateContact: (id, name) => {
				fetch("", {
					method: "put",
					body: JSON.stringify({ full_name: name }),
					headers: { "Content-Type": "application/json" }
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/" + id)
						.then(response => response.json())
						.then(data => {
							let { store } = this.state;

							this.setState({ store: { ...store, agenda: data } });
						});
				});
			}
		}
	};
};

export default getState;
