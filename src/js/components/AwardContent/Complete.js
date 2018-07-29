/**
 * Created by ninghai on 2018/7/29.
 *
 */

import React, {Component} from 'react';
import style from './content.scss';

export  default class Complete extends Component {
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
        const {level, bookImg, author, authorIcon, bookName, bid, uid} = this.props;
        function getLevel(level) {
            if(level === '1') return '一等奖';
            else if(level === '2') return '二等奖';
            else if(level === '3') return '三等奖';
            else return '最佳人气奖';
        }

        function getRMB(level) {
            if(level === '1') return 10000;
            else if(level === '2') return 5000;
            else if(level === '3') return 3000;
            else  return 3000
        }

        return (
            <div className={style.container}>
                <div className={style.title}>
                    <p>{getLevel(level)}</p>
                </div>
                <div className={style.bookContainer}>
                    <img onClick={this.handleBookClick.bind(this,bid)} className={style.bookImg} src={bookImg}/>
                    <p onClick={this.handleBookClick.bind(this,bid)} className={style.bookName}>{bookName}</p>
                </div>
                <div onClick={this.handleAuthorClick.bind(this,uid)} className={style.author}>
                    <img src={authorIcon}/>
                    <span>{author}</span>
                </div>
                <div className={style.foot}>
                    <div>
                        <p>奖金</p>
                        <p>{`${getRMB(level)}元`}</p>
                    </div>
                </div>
            </div>
        )
    }
}