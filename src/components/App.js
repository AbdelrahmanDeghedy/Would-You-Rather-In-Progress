import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';
import AnswerQuestion from './AnswerQuestion';


class App extends Component {
    componentDidMount () {
        this.props.dispatch (handleInitialData ())
    }

    render () {
        const { authedUser } = this.props;
        return (
            <Fragment>
             {
                authedUser === null ? 
                <Route exact path="/" component={Login} /> :
                <Fragment>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/questions/:id" component={AnswerQuestion} />
                </Fragment>
            }
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        authedUser : state.authedUser,
    }
}

export default connect (mapStateToProps) (App);