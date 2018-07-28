/**
 * Created by ninghai on 2018/7/17.
 *
 */
import React, {Component} from 'react';
import Rank from './Rank';

import { getShare } from '../../service/getData'

import style from './index.scss';

const shareUnselect = require('../../../assets/tab_share_unselect.png');
const shareSelect = require('../../../assets/tab_share_select.png');
const commentUnselect = require('../../../assets/tab_comment_unselect.png');
const commentSelect = require('../../../assets/tab_comment_select.png');

export  default class RankList extends Component {
    constructor(props){
        super(props)
        this.state= {
            type: 'comment',
            page: 1,
            data: [],
            isLoading: false
        };
        this.loadMore =this.loadMore.bind(this);
    }

    async changeRankType(changeType, acid) {
        const {type} = this.state;
        if (changeType !== type) {
            //todo
            this.setState({
                type: changeType,
                data: [],
                isLoading: true
            });
            try {
                let data = await getShare(changeType, acid, 1, 10);
                this.setState({
                    isLoading: false,
                    data,
                    page: 1
                })
            } catch (err) {}
        }
    }

    async loadMore(acid) {
        let { page, type, data} = this.state;
        page= page + 1;
        this.setState({
            isLoading: true
        });
        try {
            let res = await getShare(type, acid, page, 10);
            this.setState({
                    isLoading: false,
                    data: [].concat(data,res),
                    page
                });
        } catch (err) {
            console.log(err);
        }
    }

  /*  async componentDidMount(){
        const {acid} = this.props;
        const {type, page} = this.state;

        try {
            this.setState({
                isLoading: true
            });
            let data = await getShare(type, acid, page, 10);
            this.setState({
                data,
                isLoading: false
            });
        } catch (err) {}
    }*/

    async componentWillReceiveProps(nextProps) {
        const {acid} = nextProps;
        const  type= 'comment';
        const page = 1;

        try {
            this.setState({
                isLoading: true
            });
            let data = await getShare(type, acid, page, 10);
            this.setState({
                data,
                type,
                page,
                isLoading: false
            });
        } catch (err) {}
    }

    render () {
        const {type, data, isLoading} =this.state;
        const {acid} = this.props;
        return (
            <div>
                <div className={style.rankButton}>
                    <div className=""></div>
                    <div className=""></div>
                    <img src= { type === 'share' ? commentUnselect : commentSelect} onClick={this.changeRankType.bind(this,'comment', acid)} />
                    <img src={ type === 'share' ? shareSelect : shareUnselect } onClick={this.changeRankType.bind(this,'share', acid)}/>
                </div>
                <div className={style.rankList}>
                        <div className={style.listContainer}>
                            {
                                data.map((item, index) =>(
                                    <Rank
                                        key={`${item.bid}_${index}`}
                                        bookName={item.book_name}
                                        description={item.desc}
                                        label={item.tags}
                                        cover={item.cover}
                                        author={item.author_name}
                                        authorImg={item.icon}
                                        bid={item.bid}
                                        count={type=== "comment" ? item.comments : item.shares}
                                        appUrl={item.app_url}
                                        webUrl={item.web_url}
                                        wapUrl={item.wap_url}
                                        isComment={type === "comment" ? true : false}
                                        index={index+1} />
                                ))
                            }
                            {
                                isLoading ? (<div className={style.animate}><span className="fa fa-spinner fa-pulse" /></div>) : null
                            }
                        </div>
                    <button className={style.loadMore} onClick={this.loadMore.bind(this, acid)}>查看更多</button>
                </div>
            </div>
        )
    }
}