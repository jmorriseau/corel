import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  renderChildren() {
    return React.Children.toArray(this.props.children).map((child, idx) => {
      if (child.type === HeroText)
        return <div className="hero-text">{child}</div>;
      if (child.type === HeroImage)
        return <div className="hero-image">{child}</div>;
      return null;
    });
  }

  render() {
    return (
      <div
        className={
          this.props.variant === "centered" ? "hero hero-centered" : "hero"
        }
      >
        {this.renderChildren()}
      </div>
    );
  }
}

class HeroText extends Component {
  render() {
    return this.props.children;
  }
}

class HeroImage extends Component {
  render() {
    return (
      <>
        {this.props.src && <img src={this.props.src} alt="hero" />}
        {this.props.children}
      </>
    );
  }
}

export { Hero, HeroText, HeroImage };
