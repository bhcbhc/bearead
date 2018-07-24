/**
 * Created by ninghai on 2018/7/24.
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Download from '../components/Download'
import style from './Section.scss';

const log_24 = require('../../assets/detail/3x/logo_24.png');
const log_44 = require('../../assets/detail/3x/logo_44.png');

class Detail extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false
        }
    }

    openDownLoad(){
        this.setState({isOpen: true})
    }

    closeDownLoad(){
        this.setState({isOpen: false})
    }

    componentDidMount(){
        console.log(this.props.params.id);
        console.log(this.props.book)
    }

    render() {
        const {isOpen} = this.state;
        return (
            <div>
                <div className={style.container}>
                    <div className={style.title}>
                        <img src={log_24}/>
                    </div>
                    <div>sdasdadsasdadad</div>
                    <div className={style.foot}>
                        <div className={style.footerLeft}>
                            <img src={log_44}/>
                            <div>
                                <p className={style.bearead}>白熊阅读</p>
                                <p className={style.sign}>爱和脑洞， 缺一不可</p>
                            </div>
                        </div>
                        <button onClick={this.openDownLoad.bind(this)} className={style.browser}>在App内浏览</button>
                    </div>
                </div>
                { isOpen ? (<Download  closeDownLoad={this.closeDownLoad.bind(this)}/>) : null}
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