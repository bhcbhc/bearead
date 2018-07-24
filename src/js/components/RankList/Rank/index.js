/**
 * Created by ninghai on 2018/7/17.
 *
 */
import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {changeBook} from '../../../redux/actions/changeBookAction';
import { numberParser } from '../../../utils/tools';
import style from './index.scss';

const first = require('../../../../assets/ico_fist.png');
const secont = require('../../../../assets/ico_second.png');
const third = require('../../../../assets/ico_third.png');

const share = require('../../../../assets/ico_share.png');
const comment = require('../../../../assets/ico_comment.png');

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({changeBook}, dispatch)
});

class Rank extends Component {
    constructor(props){
        super(props);
    }

    handleClick (book) {
        this.props.actions.changeBook(book);
        this.props.router.push('/detail');
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

        const book = {
            app_url: appUrl,
            wap_url: wapUrl,
            web_url: webUrl,
            author_name: author,
            bid,
            desc: description,
            book_name: bookName,
            cover,
            icon: authorImg,
            tags: label.map(item => item.name)
        };

        function getIcon(index) {
            if(index === 1) return <img className="left" src={first} />;
            else if (index === 2) return <img className="left" src={secont} />;
            else if (index === 3) return <img className="left" src={third} />;
            return <span className="left">{index}</span>
        }
        return (
            <div className={style.rank} onClick={this.handleClick.bind(this,book)}>
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

export  default connect(mapStateToProps, mapDispatchToProps)(Rank)