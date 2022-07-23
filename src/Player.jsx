import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Player extends Component {
  constructor(props) {
    super(props);

    const date = new Date();

    this.state = {
      videoState: "carregando...",
      clockState: date.toLocaleTimeString(),
      hora_minuto: date.toLocaleTimeString().slice(0, 5),
    };
  }

  componentDidMount() {
    if (this.state.hora_minuto == "23:54") {
      this.setState({
        videoState: "https://www.youtube.com/watch?v=JJ7DOMaWymE",
      });
    } else if (this.state.hora_minuto == "23:55") {
      this.setState({
        videoState: "https://www.youtube.com/watch?v=FUp99_V2wjQ",
      });
    } else if (this.state.hora_minuto == "23:56") {
      this.setState({
        videoState: "https://www.youtube.com/watch?v=VP-rEeqP6gM",
      });
    } else if (this.state.hora_minuto == "23:57") {
      this.setState({
        videoState: "https://www.youtube.com/watch?v=Uxi6gDyFk_0",
      });
    } else if (this.state.hora_minuto == "23:58") {
      this.setState({
        videoState: "https://www.youtube.com/watch?v=sPJsURyGK5U",
      });
    }
  }

  render() {
    return (
      <div>
        <ReactPlayer
          url={this.state.videoState}
          controls={true}
          playing={true}
          muted={false}
          width="1920px"
          height="1080px"
        />
      </div>
    );
  }
}
