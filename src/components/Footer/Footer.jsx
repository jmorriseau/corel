import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
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
       
      </footer>
    );
  }
}

export { Footer };
