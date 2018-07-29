/**
 * Created by ninghai on 2018/7/29.
 *
 */

import React, {Component} from 'react';
import style from './content.scss';

export  default class CompleteContent extends Component {
    constructor(props) {
        super(props)
    }

    handleBookClick(bid) {
        window.location.href = 'https://www.bearead.com/book.html?bid=' + bid;
    }

    handleAuthorClick(uid){
        window.location.href = 'https://www.bearead.com/user.html?uid=' + uid;
    }

    render () {
        const {isKing, author, authorIcon, bookName, bid, uid} = this.props;

        return (
            <div className={style.container}>
                <div className={style.title}>
                    <p>{isKing ? "最受欢迎人气奖" : "编辑部大奖"}</p>
                </div>
                <div className={style.authorContainer}>
                    <img onClick={this.handleAuthorClick.bind(this,uid)} className={style.authorIcon} src={authorIcon}/>
                    <span onClick={this.handleAuthorClick.bind(this,uid)} className={style.authorName}>{author}</span>
                </div>
                <div className={style.bookDetail} onClick={this.handleBookClick.bind(this,bid)}>
                    <p>{bookName}</p>
                    <p>
                        请各位团长大人注意啦，此次征文活动为基于《苍之纪元》手游IP的同人作品征集，因此所有提交的与《苍之纪元》相关的有效参赛作品版权归创作者与苍之纪元官方共有。
                    </p>
                </div>
                <div className={style.foot}>
                    <div>
                        <p>奖金</p>
                        <p>10000元</p>
                    </div>
                </div>
            </div>
        )
    }
}