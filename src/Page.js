import React, { Component } from 'react';

class PageHeader extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Portfolio</a>
					</div>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

class IntroBar extends Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="container text-center">
					<h1>My Portfolio</h1>      
					<p>Some text that represents "Me"...</p>
				</div>
			</div>
		);
	}
}

class Portfolio extends Component {
	render() {
		return (
			<div className="container-fluid bg-3 text-center">    
				<h3>Some of my Work</h3>
				<div className="row">
					<div className="col-sm-3">
						<p>Some text..</p>
						<img className="img-responsive" />
					</div>
					<div className="col-sm-3"> 
						<p>Some text..</p>
						<img className="img-responsive" />
					</div>
					<div className="col-sm-3"> 
						<p>Some text..</p>
						<img className="img-responsive" />
					</div>
					<div className="col-sm-3">
						<p>Some text..</p>
						<img className="img-responsive" />
					</div>
				</div>
			</div>
		);
	}
}

class PageBody extends Component {
	render() {
		return (
			<div>
				<IntroBar />
				<Portfolio />
			</div>
		);
	}
}

class PageFooter extends Component {
	render() {
		return (
			<footer className="container-fluid text-center">
  			<p>Footer Text</p>
			</footer>
		);
	}
}

class Page extends Component {
	render() {
		return (
			<div>
				<PageHeader />
				<PageBody />
				<PageFooter />
			</div>
			);
	}
}

export default Page;
