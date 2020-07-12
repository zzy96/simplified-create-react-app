import React from 'react'
import { connect } from 'react-redux'
import { HomePageId } from './constants'
import HomePage from './pages/HomePage'

class App extends React.Component {

    renderPageContent = () => {
        switch (this.props.page) {
            case HomePageId:
                return <HomePage/>;
            default:
                return <HomePage/>
        }
    };

    render() {
        return (
            this.renderPageContent()
        )
    }
}

const mapStateToProps = state => {
    return {
        page: state.system.page,
    }
};

export default connect(mapStateToProps)(App)