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
        console.log({appUrl, webUrl, wapUrl});
        const versions = function(){
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }();
        if(versions.ios || versions.android) {
            window.location.href = wapUrl;
        }else  {
            window.location.href = appUrl;
        }
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
                    <div className={`${style.content} clearfix`}>
                        <div className={style.contentMain}>
                            <img className="right"  src={cover}/>
                            <p className={style.title}>{bookName}</p>
                            <div className={style.hiedP}>
                                <p>{description}</p>
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
                    </div>
                    <div className={`${style.author_count}`}>
                        <div className={`${style.author}`}>
                            <img className={style.userImg} src={authorImg.split('_thumb')[0]} />
                            <span className={style.author}>{author}</span>
                        </div>
                        <div className={`${style.counts}`}>
                            <div className={style.number}>
                                <img className={isComment ? style.imgComment : style.imgShare } src={isComment ? comment : share } />
                                <span className={style.comment}>{count === 0 ? "" : numberParser(count)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}