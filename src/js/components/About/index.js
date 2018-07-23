/**
 * Created by ninghai on 2018/7/22.
 *
 */
import React, { Component } from 'react';
import style from './index.scss';

export default class About extends  Component {
    constructor() {
        super();
        this.state = {
            isOpen: true
        }
    }

    componentWillReceiveProps(about) {if(about) this.setState({isOpen: true})}

    handleClick(closeEvent) {
        this.setState({isOpen: false});
        closeEvent();
    }

    render() {
        const { isOpen} = this.state;
        const { closeEvent } = this.props;
        return (
            <div className={style.logins_page} style={{display: isOpen ? "block" : 'none' }}>
                <div className={style.aboutUs_waper}>
                    <div className={style.aboutUs_title}>
                    <div>关于白熊阅读</div>
                    <i className="icon icon-off" onClick={this.handleClick.bind(this, closeEvent)} />
                </div>
                    <div className={`${style.aboutUs_mainBg} clearfix`}>
                    <div className={`${style.aboutUs_main} clearfix`}>
                        <div className={style.aboutUs_content}>
                            <p className={style.aboutUs_content_1}>
                                白熊阅读（隶属于上海豆萌科技有限公司）是一款二次元同人小说轻小说阅读创作APP。让写手们可以静静地挖坑，不被署名佚名，不被无授权搬运，不会被非同好误入，跟想吃粮的读者们愉快地交流。让读者们可以不踩雷，勾搭喜欢的大大顺便还能催下坑（等等），跟有相同属性爱好的小伙伴一起愉快玩耍……白熊阅读一直为成为这样的一个文学平台在努力。
                            </p>
                            <p className={style.aboutUs_content_2}>
                                感谢您一路上对我们的支持与帮助。
                            </p>
                            <p className={style.aboutUs_content_3}>
                                白熊阅读全体STAFF
                            </p>
                            <div className={style.aboutUs_contact}>
                                <p className={style.aboutUs_contact_1}>
                                    公司全称：上海豆萌科技有限公司
                                </p>
                                <p className={style.aboutUs_contact_2}>
                                    地址：上海市虹口区哈尔滨路160号德必老洋行A302
                                </p>
                                <p className={style.aboutUs_contact_3}>
                                    联系电话：021-63932228
                                </p>
                            </div>
                        </div>
                        <div className={style.aboutUs_img}>
                            <img src="https://www.bearead.com/images/chicken_bear.png" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

