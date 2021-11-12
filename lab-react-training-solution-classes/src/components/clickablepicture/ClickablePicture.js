import React from 'react';

class ClickablePicture extends React.Component {

  state = {
    src: this.props.img,
    defaultSrc: [...new Set(this.props.img)],
    clickedSrc: this.props.imgClicked,
    clicked: false,
  };
  
  
  handlePicChange = () => {
    console.log("-=-=-=-= this.props.img: ", this.props.img)
    this.setState({
      src: this.state.clicked ? this.state.defaultSrc : this.state.clickedSrc,
      clicked: !this.state.clicked,
    }, () => console.log("updated: ", this.state));
  };

  render() {
    // console.log("this.state.src: ", this.state.src)
    return (
      <div>
        <img src={this.state.src} onClick={this.handlePicChange} />
      </div>
    );
  }
}

export default ClickablePicture;
