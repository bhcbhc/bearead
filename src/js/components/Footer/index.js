/**
 * Created by ninghai on 2018/7/12.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

const imgleft = require('../../../assets/logo_jgb.png');
const imgright = require('../../../assets/logo_bxyd.png');
const logo = require('../../../assets/logo_aq.png');
const confirmation = require('../../../assets/logo_ga.png');

export default class Annotation extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {alt} = this.props;
        return (
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img src={imgleft} alt={alt} width="243px" height="113px" />
                    <img src={imgright} alt={alt} width="243px" height="113px" />
                </div>
                <div className={style.copyright}>
                    <p>
                        <span>@ 2018 Bearead.com All Rights Reserved</span>
                        <span>沪 ICP备 15041418号-1</span>
                    </p>
                </div>
                <div className={style.information}>
                    <p>
                        <span>白熊阅读协议</span>
                        <span>关于白熊阅读</span>
                        <span>建议反馈</span>
                        <span>下载白熊APP</span>
                        <span>官方微博</span>
                        <span>商务合作: bd@bearead.cn</span>
                    </p>
                </div>
                <img className={style.industry} src={logo} alt={alt} width="124px" height="47" />
                <div className={style.confirmation}>
                    <img  src={confirmation} alt={alt} width="18px" height="20px" />
                    <sapn>沪公网安备 31010902002451 号</sapn>
                </div>
            </div>
        )
    }
}