import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export default class EditContact extends React.Component {
	constructor() {
		super();

		this.state = {
			full_name: "",
			email: "",
			phone: "",
			address: ""
		};
	}

	onload = true;

	render() {
		console.log("pppp:", this.props.match.params.id);
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (this.onload) {
						this.setState({
							full_name: store.agenda[this.props.match.params.id].full_name,
							email: store.agenda[this.props.match.params.id].email,
							address: store.agenda[this.props.match.params.id].address,
							phone: store.agenda[this.props.match.params.id].phone
						});

						this.onload = false;
					}
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											onChange={e => this.setState({ full_name: e.target.value })}
											type="text"
											className="form-control names"
											placeholder="Full Name"
											defaultValue={store.agenda[this.props.match.params.id].full_name}
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											onChange={e => this.setState({ email: e.target.value })}
											type="email"
											className="form-control emails"
											placeholder="Enter email"
											defaultValue={store.agenda[this.props.match.params.id].email}
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											onChange={e => this.setState({ phone: e.target.value })}
											type="phone"
											className="form-control phones"
											placeholder="Enter phone"
											defaultValue={store.agenda[this.props.match.params.id].phone}
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											onChange={e => this.setState({ address: e.target.value })}
											type="text"
											className="form-control addresses"
											placeholder="Enter address"
											defaultValue={store.agenda[this.props.match.params.id].address}
										/>
									</div>
									<button
										onClick={() => {
											let obj = {
												full_name: this.state.full_name,
												email: this.state.email,
												address: this.state.address,
												phone: this.state.phone
											};
											actions.updateContact(store.agenda[this.props.match.params.id].id, obj);
										}}
										type="button"
										className="btn btn-primary form-control">
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
EditContact.propTypes = {
	match: PropTypes.object
};
