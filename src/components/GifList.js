import React from "react";
import Gif from "./Gif";
import { connect } from "react-redux";

const GifList = props => {
    const { data } = props;

    return (
        <div id="gifList">
            {
                data.map(gif => {
                    return (
                        <Gif gif={gif}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(GifList);