import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <header>
        <img
          alt="logo"
          src="data:image/png;base64,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"
        />
        <nav>
          {this.props.nav &&
            this.props.nav.map((item, idx) => {
              return item.active ? (
                <a key={idx} href={item.url}>
                  {item.name}
                </a>
              ) : null;
            })}
        </nav>
      </header>
    );
  }
}

export { Header };
