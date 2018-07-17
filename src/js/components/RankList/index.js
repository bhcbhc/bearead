/**
 * Created by ninghai on 2018/7/17.
 *
 */
import React, {Component} from 'react';
import Rank from './Rank';
import style from './index.scss';

const shareUnselect = require('../../../assets/tab_share_unselect.png');
const shareSelect = require('../../../assets/tab_share_select.png');
const commentUnselect = require('../../../assets/tab_comment_unselect.png');
const commentSelect = require('../../../assets/tab_comment_select.png');

const commentJson = [
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745702",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745703",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 1212319,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745704",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 13120,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745705",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 12323,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745706",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 123,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745707",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745708",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745709",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "7457010",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "7457011",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "745702",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    },
    {
        "book_name": "不上长城非好汉（又名：楚郭的虐狗日常",
        "cover": "https://chapterssl.bearead.com/b11181086/15317117126475486null_thumb",
        "author_name": "玫瑰豆沙",
        "author_url": "http://localhost:8888/2dc867686f9d0f00a0b730d3be93ab69.png",
        "bid": "7457013",
        "label": ["鬼面", "爱情", "玄幻", "军事"],
        "comments": 128,
        "sign": ["test", "test","test"],
        "description": "清风徐徐，抚吹着枝头的嫩叶，连地上的娇花也忍不住一起舞动。太阳懒懒地从东方升起，人们被温暖的叫醒，从美好的梦中醒来，整个龙城迎来了全新的一天。阳光穿过了树梢，从窗帘透过，洒满了一地。赵云澜早已从原来的"
    }
];

export  default class RankList extends Component {
    constructor(props){
        super(props)
        this.state= {
            actived: 'commen'
        }
    }

    render () {
        const {actived} =this.state;
        return (
            <div className={style.rankList}>
                <div>
                    <div>
                        { actived === 'commen' ? <img src={shareSelect}/> : <img src={shareUnselect} />}
                    </div>
                    <div>
                        { actived === 'commen' ? <img src= {commentUnselect}/> : <img  src={commentSelect} />}
                    </div>
                    <div>
                        {
                            commentJson.map((item, index) =>(
                                <Rank
                                    key={item.bid}
                                    bookName={item.book_name}
                                    description={item.description}
                                    label={item.label}
                                    cover={item.cover}
                                    author={item.author_name}
                                    authorImg={item.author_url}
                                    bid={item.bid}
                                    count={item.comments}
                                    appUrl="test"
                                    webUrl="webUrl"
                                    wapUrl="webUrl"
                                    isComment={actived ? true : false}
                                    index={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}