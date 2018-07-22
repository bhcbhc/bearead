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
            about: false,
            advice: false
        }
    }

    showAbout() {
        this.setState({
            about: true
        })
    }

    showAdvice() {
        this.setState({
            advice: true
        })
    }

    render () {
        const {alt} = this.props;
        const { about, advice }=this.state;
        return (
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img src={imgleft} alt={alt} width="243px" height="113px" />
                    <img src={imgright} alt={alt} width="210px" height="104px" />
                </div>
                <div className={style.copyright}>
                    <p>
                        <span>@ 2018 Bearead.com All Rights Reserved</span>
                        <span>沪 ICP备 15041418号-1</span>
                    </p>
                </div>
                <div className={style.information}>
                    <p>
                        <a target="_blank" href="https://www.bearead.com/readrules.html?type=community">白熊阅读协议</a>
                        <span onClick={this.showAbout.bind(this)}>关于白熊阅读</span>
                        <span onClick={this.showAdvice.bind(this)}>建议反馈</span>
                        <a target="_blank" href="https://www.bearead.com/app.html">下载白熊APP</a>
                        <a target="_blank" href="http://weibo.com/u/5709989373">官方微博</a>
                        <span>商务合作: bd@bearead.cn</span>
                    </p>
                </div>
                <a className={style.industry}  href="https://v.pinpaibao.com.cn/authenticate/cert/?site=www.bearead.com&at=business">
                    <img  src={logo} alt={alt} width="124px" height="47" />
                </a>
                <a className={style.confirmation} href="https://v.pinpaibao.com.cn/authenticate/cert/?site=www.bearead.com&at=business">
                    <img  src={confirmation} alt={alt} width="18px" height="20px" />
                    <span>沪公网安备 31010902002451 号</span>
                </a>
                { about ? (<About isTrue={about} />) : null }
            </div>
        )
    }
}