import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
export default class EditContact extends React.Component {
	render() {
		console.log("pppp:", this.props.match.params.id);
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											type="text"
											className="form-control"
											placeholder="Full Name"
											defaultValue={store.agenda[this.props.match.params.id].full_name}
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input type="email" className="form-control" placeholder="Enter email" />
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input type="phone" className="form-control" placeholder="Enter phone" />
									</div>
									<div className="form-group">
										<label>Address</label>
										<input type="text" className="form-control" placeholder="Enter address" />
									</div>
									<button
										onClick={() => actions.updateContact(this.props.match.params.id)}
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
