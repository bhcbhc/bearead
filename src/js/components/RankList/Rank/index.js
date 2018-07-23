/**
 * Created by ninghai on 2018/7/17.
 *
 */
import React, {Component} from 'react';
import { numberParser } from '../../../utils/tools';
import style from './index.scss';

const first = require('../../../../assets/ico_fist.png');
const secont = require('../../../../assets/ico_second.png');
const third = require('../../../../assets/ico_thrid.png');

const share = require('../../../../assets/ico_share.png');
const comment = require('../../../../assets/ico_comment.png');

export  default class Rank extends Component {
    constructor(props){
        super(props);
    }

    handleClick (id, appUrl, webUrl, wapUrl) {
       window.location.href=webUrl;
    }

    render () {
        const {
            bookName,
            description,
            label,
            cover,
            author,
            authorImg,
            bid,
            count,
            appUrl,
            webUrl,
            wapUrl,
            isComment,
            index } =this.props;

        function getIcon(index) {
            if(index === 1) return <img className="left" src={first} />;
            else if (index === 2) return <img className="left" src={secont} />;
            else if (index === 3) return <img className="left" src={third} />;
            return <span className="left">{index}</span>
        }
        return (
            <div className={style.rank} onClick={this.handleClick.bind(this, bid, appUrl, webUrl, wapUrl)}>
                <div className={`${style.icon} left`}>
                    {getIcon(index)}
                </div>
                <div className={`${style.container} left`}>
                    <div className={`${style.content} clearfix`}>
                        <div className={style.contentMain}>
                            <img className="right"  src={cover}/>
                            <p className={style.title}>{bookName}</p>
                            <p className={style.descriptionContainer}>
                                {description.length >= 72 ? `${description.substring(0, 70)}...` : description}
                            </p>
                        </div>
                        <div className={style.tag}>
                            {
                                label.map((item,index) =>
                                    (
                                        <span key={index}>{index < label.length-1 ? `${item.name}/` : `${item.name}`}</span>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div className={`${style.author_count}`}>
                        <div className={`${style.author}`}>
                            <div className={style.userImg}>
                                <img src={authorImg.split('_thumb')[0]} />
                            </div>
                            <span className={style.author}>{author}</span>
                        </div>
                        <div className={`${style.counts}`}>
                            <div className={style.number}>
                                <img src={isComment ? comment : share } />
                                <span className={style.comment}>{count === 0 ? "" : numberParser(count)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}