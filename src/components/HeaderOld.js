import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day{" "}
        </h1>
        <h3 className="tagline">
          {/* making this dynamic  */}
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;
 