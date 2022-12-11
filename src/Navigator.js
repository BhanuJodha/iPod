// zingtouch
import React from "react";
import ZingTouch from "zingtouch";

const style = {
    rotator: {
        height: "15em",
        width: "15em",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        margin: "1em 0",
        userSelect: "none"
    },
    top: {
        position: "absolute",
        top: "1em",
        fontWeight: "500",
        cursor: "pointer"
    },
    right: {
        position: "absolute",
        right: "1em",
        cursor: "pointer"
    },
    bottom: {
        position: "absolute",
        bottom: "1em",
        cursor: "pointer"
    },
    left: {
        position: "absolute",
        left: "1em",
        cursor: "pointer"
    },
    center: {
        cursor: "pointer",
        width: "50%",
        height: "50%",
        borderRadius: "50%",
        backgroundColor: "lightgray"
    }
}

class Navigator extends React.Component {
    componentDidMount() {
        let region = new ZingTouch.Region(document.getElementById("rotator"));

        let lastBite = 0;
        region.bind(document.getElementById("rotator"), 'rotate', (e) => {
            if (Math.floor(e.detail.distanceFromOrigin) % 50 === 0) {
                let currentBite = Math.floor(e.detail.distanceFromOrigin);
                this.props.changeCurrent(currentBite > lastBite ? 1 : -1);
                lastBite = currentBite;
            }
        });
    }

    render() {
        return <div id="rotator" style={style.rotator}>
            <div style={style.center} onClick={this.props.toggleCurrent}></div>
            <span style={style.top} onClick={this.props.toggleMenu}>Menu</span>
            <span className="material-symbols-outlined" style={style.right}>
                skip_next
            </span>
            <span className="material-symbols-outlined" style={style.bottom}>
                play_pause
            </span>
            <span className="material-symbols-outlined" style={style.left}>
                skip_previous
            </span>
        </div>
    }
}

export default Navigator;
