/**
 * Created by ninghai on 2018/7/12.
 *
 */
import React, {Component} from 'react';
import About from '../About';
import style from './index.scss';

const imgleft = require('../../../assets/logo_jgb.png');
const imgright = require('../../../assets/logo_bxyd.png');
const logo = require('../../../assets/logo_aq.png');
const confirmation = require('../../../assets/logo_ga.png');

export default class Annotation extends Component {
    constructor(props) {
        super(props);
        this.state= {
            about: false
        }
    }

    showAbout() {
        this.setState({
            about: true
        })
    }

    closeAbout() {
        this.setState({
            about: false
        })
    }

    render () {
        const {alt} = this.props;
        const { about}=this.state;
        return (
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img src={imgleft} alt={alt} width="408px" height="190px" />
                    <img src={imgright} alt={alt} width="353px" height="175px" />
                </div>
            </div>
        )
    }
}