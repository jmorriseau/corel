import React, { Component } from "react";
import "./Header.css";
import { Link } from '@material-ui/core';

class Header extends Component {
  componentDidMount(){
    window.addEventListener("scroll", () => {
      if(window.scrollY === 0 && document.querySelector("header").classList.contains("scrolled")) {
        document.querySelector("header").classList.remove("scrolled");
      }
      if(window.scrollY !== 0 && !document.querySelector("header").classList.contains("scrolled")) {
        document.querySelector("header").classList.add("scrolled");
      }
    })
  }

  render() {
    console.log(this.props);
    return (
      <header>
        <p className="tempLogo">corel</p>
        <nav>
          {this.props.nav &&
            this.props.nav.map((item, idx) => {
              return item.active ? (
                <Link className="header-nav-item" key={idx} href={item.url}>
                  {item.name}
                </Link>
              ) : null;
            })}
        </nav>
      </header>
    );
  }
}

export { Header };
