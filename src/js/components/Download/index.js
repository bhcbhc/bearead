/**
 * Created by ninghai on 2018/7/25.
 *
 */
import React, { Component } from 'react';
import { downloadUrl } from '../../utils/constants';
import style from './index.scss';
const downloadImg = require('../../../assets/detail/3x/logo_168.png');

export default class Download extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false
        }
    }

    openDownLoadPage() {
        window.open(downloadUrl);
    }

    render() {
        const {closeDownLoad} = this.props;
        return (
            <div className={style.container}>
                <div className={style.download}>
                    <img src={downloadImg} alt="downloadBearAppImg"/>
                    <p className={style.bearead}>白熊阅读</p>
                    <p className={style.sign}>最大的二次元文学平台</p>
                    <button className={style.button} onClick={this.openDownLoadPage}>下载App阅读全文</button>
                </div>
                <div className={style.close} onClick={closeDownLoad}>X</div>
            </div>
        )
    }
}