import React, { Component } from "react";

class Subcriptions extends Component {
    render () {
        return (
            <section id="contact"  className="subscription">
			<div className="container">
				<div className="subscribe-title text-center">
					<h2>
						do you want to add your business listing with us?
					</h2>
					<p>
						Listrace offer you to list your business with us and we very much able to promote your Business.
					</p>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="subscription-input-group">
							<form action="#">
								<input type="email" className="subscription-input-form" placeholder="Enter your email here"/>
								<button className="appsLand-btn subscribe-btn" onclick="window.location.href='#'">
									creat account
								</button>
							</form>
						</div>
					</div>	
				</div>
			</div>

		</section>
        )
    }
}

export default Subcriptions;