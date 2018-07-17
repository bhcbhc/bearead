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
        console.log(id, appUrl, webUrl, wapUrl);
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
            if(index === 0) return <img src={first} />;
            else if (index === 1) return <img src={secont} />;
            else if (index === 2) return <img src={third} />;
            return <span>{index}</span>
        }
        return (
            <div className={style.rank} onClick={this.handleClick.bind(this, bid, appUrl, webUrl, wapUrl)}>
                <div>
                    {getIcon(index)}
                </div>
                <div>
                    <h2>{bookName}</h2>
                    <p>{description}</p>
                    <div>
                        {
                            label.map(item =>
                                (
                                    <span>{`${item}/`}</span>
                                )
                            )
                        }
                    </div>
                    <div>
                        <div className={style.userImg}>
                            <img src={authorImg} />
                        </div>
                        <span>{author}</span>
                    </div>
                </div>
                <div>
                    <img  src={cover} />
                    <div>
                        <img src={isComment ? comment : share } />
                        <span>{numberParser(count)}</span>
                    </div>
                </div>
            </div>
        )
    }
}