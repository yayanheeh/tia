import React, { PureComponent } from "react"
import ReactDOM from "react-dom"
import Iframe from "./iframe.js"

class Youtube extends PureComponent {
	render() {
		return (
			<Iframe
				url="http://www.youtube.com/embed/xDMP3i36naA"
				width="450px"
				height="450px"
				id="myId"
				className="myClassname"
				display="initial"
				position="relative"
				allowFullScreen
			/>
		)
	}
}

ReactDOM.render(<Youtube />, document.body)
