/**
 * Created by ninghai on 2018/7/24.
 *
 */
/**
 * Created by ninghai on 2018/7/24.
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Detail extends Component {

    componentDidMount(){
        console.log(this.props.params.id);
        console.log(this.props.book)
    }

    render() {
        return (
            <div>
                <h1>当前章节</h1>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    book: state.book
});

export default connect(
    mapStateToProps
)(Detail)