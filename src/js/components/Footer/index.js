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
                <div>
                    <img src={imgleft} alt={alt} width="243px" height="113px" />
                    <img src={imgright} alt={alt} width="243px" height="113px" />
                </div>
                <div className={style.copyright}>
                    <p>@ 2018 Bearead.com All Rights Reserved     沪 ICP备 15041418号-1</p>
                </div>
                <div className={style.information}>
                    <p>白熊阅读协议   关于白熊阅读   建议反馈   下载白熊APP   官方微博    商务合作: bd@bearead.cn</p>
                </div>
                <div>
                    <img src={logo} alt={alt} width="124px" height="47" />
                </div>
                <div className={style.confirmation}>
                    <img src={confirmation} alt={alt} width="18px" height="20px" />&nbsp;沪公网安备 31010902002451 号
                </div>
            </div>
        )
    }
}