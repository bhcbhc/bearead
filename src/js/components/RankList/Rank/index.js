/**
 * Created by ninghai on 2018/7/17.
 *
 */
import React, {Component} from 'react';
import Shiitake from 'shiitake';
import { numberParser } from '../../../utils/tools';
import style from './index.scss';

const first = require('../../../../assets/ico_fist.png');
const secont = require('../../../../assets/ico_second.png');
const third = require('../../../../assets/ico_third.png');

const share = require('../../../../assets/ico_share.png');
const comment = require('../../../../assets/ico_comment.png');

export default class Rank extends Component {
    constructor(props){
        super(props);
    }

    handleClick (appUrl, webUrl, wapUrl) {
        window.location.href = webUrl;
    }

    render () {
        const {
            bookName,
            description,
            label,
            cover,
            author,
            authorImg,
            count,
            appUrl,
            webUrl,
            wapUrl,
            isComment,
            isSingle,
            index } =this.props;


        function getIcon(index) {
            if(index === 1) return <img className="left" src={first} />;
            else if (index === 2) return <img className="left" src={secont} />;
            else if (index === 3) return <img className="left" src={third} />;
            return <span className="left">{index}</span>
        }
        return (
            <div className={style.rank} onClick={this.handleClick.bind(this,appUrl, webUrl, wapUrl)}>
                {getIcon(index)}
                <div className={`${style.container} left`}>
                    <div className={`${style.content} ${isSingle ? style.single : ''} clearfix`}>
                        <div className={style.contentMain}>
                            {cover ?(<img className="right"  src={cover}/>) : null}
                            <p className={style.title}>{bookName}</p>
                            <div className={style.hiedP}>
                                <p>{description}</p>
                            </div>
                            <div className={`${style.tag} ${isSingle ? style.tagSingle: ""}`}>
                                {
                                    label.map((item,index) =>
                                        (
                                            <span key={index}>{index < label.length-1 ? `${item.name}/` : `${item.name}`}</span>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${style.author_count}`}>
                        <div className={`${style.author}`}>
                            <img className={style.userImg} src={authorImg.split('_thumb')[0]} />
                            <span className={style.author}>{author}</span>
                        </div>
                        <div className={`${style.counts}`}>
                            <div className={style.number}>
                                <img className={isComment ? style.imgComment : style.imgShare } src={isComment ? comment : share } />
                                <span className={style.comment}>{count == 0 ? "" : numberParser(count)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}