import React from 'react'
import { connect } from 'react-redux'
import SampleComponent from "../components/SampleComponent"
import { getHomePage } from "../client/client"
import { connectAction, disconnectAction } from "../redux/actions/sampleActions"

class SampleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: "hello!"
        }
    }

    componentDidMount() {
        getHomePage().then( res => {
            this.props.connect(res.data)
        });
        this.timerID = setInterval(
            () => {
                console.log(this.state.greeting)
            },
            1000
        )
    }

    componentWillUnmount() {
        this.props.disconnect();
        clearInterval(this.timerID)
    }

    render(){
        return (
            <React.Fragment>
                <SampleComponent
                    message={this.props.message}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.system.message,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        connect: (message) => dispatch(connectAction(message)),
        disconnect: () => dispatch(disconnectAction()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer)