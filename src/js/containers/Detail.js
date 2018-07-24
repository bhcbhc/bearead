/**
 * Created by ninghai on 2018/7/24.
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Detail extends Component {

    componentDidMount(){
        console.log(this.props.params.id);
        console.log(this.props.acid)
    }

    render() {
        return (
            <div>
                <h1>作品阅读页面</h1>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    acid: state.acid
});

export default connect(
    mapStateToProps
)(Detail)