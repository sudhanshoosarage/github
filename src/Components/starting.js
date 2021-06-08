import React, { Component } from "react";

class start extends Component {
    render() {
        var obj = {
            backgroundImage: "url(picture.jpg)",
            width: "100%",
            height: '720px',
        }
        return (
            <>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


                <div class="container" style={obj}>
                </div>
            </>
        )
    }
}
export default start;