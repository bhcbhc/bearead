/**
 * Created by ninghai on 2018/7/12.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

export  default class Annotation extends Component {
    render () {
        return (
            <div className={style.annotation}>
                <div className={style.context}>
                    <p>爱与脑洞，缺一不可。</p>
                    <p>一年一度的白熊极光杯终于来啦！</p>
                    <p>白熊极光杯致力于征集不流俗、不拘泥 于套路、符合新一代年轻用户审美、适合影视或动漫或有声改编的优秀作品。</p>
                </div>
                <div className={style.context}>
                    <p>本次征文共分六个赛区：</p>
                    <p>单篇、古风、幻想、脑洞/悬疑、职场、青春。</p>
                    <p>所以，无论你脑海中所呈现的是哪种故事，都欢迎你来写。</p>
                    <p>这个夏天，等你来。</p>
                </div>
            </div>
        )
    }
}