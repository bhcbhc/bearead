/**
 * Created by ninghai on 2018/7/7.
 *
 */
import React, { Component } from 'react'
import Annotation  from '../components/Annotation';
import AwardContent from '../components/AwardContent';
import AllawardContent from '../components/AllawardContent';
import Division from '../components/Division';
import Jury from '../components/Jury';
import RankList from '../components/RankList';
import Footer from '../components/Footer';

import {getDetail} from '../service/getData';
import { juryIntroduce } from '../utils/constants';

import style from './home.scss';
import "../../styles/app.scss";
const join = require('../../assets/btn_cs.png');

const divisionHead = require('../../assets/title_1.png'); // 赛区
const juryHead = require('../../assets/title_2.png'); // 评委
const conditionHead = require('../../assets/title_3.png'); // 参赛要求
const timeHead = require('../../assets/title_4.png'); // 活动时间
const joinWayHead = require('../../assets/title_5.png'); // 参与方式
const prodFeatureHead = require('../../assets/title_6.png'); // 作品评选
const awardHead = require('../../assets/title_7.png'); // 奖项设置
const allDivisionAwardHead = require('../../assets/title_8.png'); //总赛区奖项设置

//单篇赛区
const  btn1 = require('../../assets/btn_1_unselect.png');
const  btn1_holder= require('../../assets/btn_1_hover.png');
const  btn1_select= require('../../assets/btn_1_select.png');

//古风赛区
const  btn2 = require('../../assets/btn_2_unselect.png');
const  btn2_holder= require('../../assets/btn_2_holder.png');
const  btn2_select= require('../../assets/btn_2_select.png');

//幻想赛区
const  btn3 = require('../../assets/btn_3_unselect.png');
const  btn3_holder= require('../../assets/btn_3_hover.png');
const  btn3_select= require('../../assets/btn_3_select.png');

//脑洞、悬疑赛区
const  btn4 = require('../../assets/btn_4_unselect.png');
const  btn4_holder= require('../../assets/btn_4_hover.png');
const  btn4_select= require('../../assets/btn_4_select.png');

//职场赛区
const  btn5 = require('../../assets/btn_5_unselect.png');
const  btn5_holder= require('../../assets/btn_5_holder.png');
const  btn5_select= require('../../assets/btn_5_select.png');

//青春赛区
const  btn6 = require('../../assets/btn_6_unselect.png');
const  btn6_holder= require('../../assets/btn_6_holder.png');
const  btn6_select= require('../../assets/btn_6_select.png');

//评委头像
const section1_1 =require('../../assets/user_1.png');
const section1_2 = require('../../assets/user_2.png');

const section2_1 =require('../../assets/user_1.png');
const section2_2 = require('../../assets/user_2.png');

const section3_1 =require('../../assets/user_1.png');
const section3_2 = require('../../assets/user_2.png');

const section4_1 =require('../../assets/user_1.png');
const section4_2 = require('../../assets/user_2.png');

const section5_1 =require('../../assets/user_1.png');
const section5_2 = require('../../assets/user_2.png');

const section6_1 =require('../../assets/user_1.png');
const section6_2 = require('../../assets/user_2.png');


const wife =  require('../../assets/img_cell.png');

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            acid: '128',
            prizes: [],
            name1: '',
            name2: '',
            detail1: [],
            detail2: [],
            condition: '',
            url1: section1_1,
            url2: section1_2,
        }
        this.loadDetail = this.loadDetail.bind(this)
    }

    componentDidMount(){
        this.loadDetail();
        const {name1, name2, detail1, detail2} = juryIntroduce['128'];
        this.setState({
            name1,
            name2,
            detail1,
            detail2,
            url1: section1_1,
            url2: section1_2,
        })
    }

    async loadDetail() {
        const {acid} = this.state;
        const res = await  getDetail(acid);
        let {prizes} = res;
        prizes = prizes.sort((item1, item2) =>item1.sort - item2.sort);
        this.setState({
            prizes: prizes.map(item => { return {id: item.acpid, prize: item.prize, sort: item.sort, number: item.number}})
        });
    }

    handleClick(bid) {
        const {acid} = this.state;
        if (acid !== bid) {
            const {name1, name2, detail1, detail2, condition} = juryIntroduce[bid];
            switch (bid) {
                case '128':
                    this.setState({acid: bid, name1, name2, detail1, detail2, condition, url1: section1_1, url2: section1_2});
                    break;
                case '126':
                    this.setState({acid: bid, name1, name2, detail1, detail2, condition, url1: section2_1, url2: section2_2});
                    break;
                case '131':
                    this.setState({acid: bid, name1, name2, detail1, detail2, condition, url1: section3_1, url2: section3_2});
                    break;
                case '132':
                    this.setState({acid: bid, name1, name2, detail1, detail2, condition, url1: section4_1, url2: section4_2});
                    break;
                case '133':
                    this.setState({acid: bid, name1, name2, detail1, detail2, condition, url1: section5_1, url2: section5_2});
                    break;
                case '134':
                    this.setState({acid: bid, name1, name2, detail1, detail2, condition, url1: section6_1, url2: section6_2});
                    break;
            }
            if(this.state.acid === '128' || this.state.acid === '126'  || this.state.acid === '131') {
                this.loadDetail();
            }
        }
    }

    render() {
        const {acid, prizes, name1, name2, detail1, detail2, condition, url1, url2} = this.state;
        return (
            <div className={style.container}>
                <div className={style.layerContainer}>
                    <a className={style.join} href={`https://www.bearead.com/list/activityDetail.html?acid=${acid}`}>
                        <img src={join} height="100%"  width="100%" alt="joinBtn"/>
                    </a>
                    <button onClick={toTop} className={style.topBtn} />
                </div>
                <div className={style.topbg}>
                     {/*<LayerIcon />*/}
                </div>
                <div className={style.detail}>
                        <div className={style.detail_bg} />
                        <div className={style.relative}>
                            <div className={`${style.top20}`}>
                                <div>
                                    <div className={style.title}>
                                        <img  style={{"margin-top": 0}} src={divisionHead}/>
                                    </div>
                                    <div className={`divisionContainer`}>
                                        <div>
                                            <div onClick={this.handleClick.bind(this, '128')}>
                                                <Division imgUrl={ btn1 } holdImg={ btn1_holder } selectedImg={ btn1_select } alt="单篇赛区图片"  isActived={acid === '128'} />
                                            </div>
                                            <div onClick={this.handleClick.bind(this, '126')}>
                                                <Division imgUrl={ btn2 } holdImg={ btn2_holder } selectedImg={ btn2_select } alt="古风赛区图片"  isActived={acid === '126'}/>
                                            </div>
                                            <div onClick={this.handleClick.bind(this, '131')}>
                                                <Division imgUrl={ btn3} holdImg={ btn3_holder  } selectedImg={ btn3_select } alt="幻想赛区图片"  isActived={acid === '131'} />
                                            </div>
                                        </div>
                                        <div>
                                            <div onClick={this.handleClick.bind(this, '132')}>
                                                <Division imgUrl={ btn4 } holdImg={ btn4_holder } selectedImg={ btn4_select  } alt="脑洞悬疑赛区图片"  isActived={acid === '132'}  />
                                            </div>
                                            <div onClick={this.handleClick.bind(this, '133')}>
                                                <Division imgUrl={ btn5 } holdImg={ btn5_holder  } selectedImg={ btn5_select } alt="职场赛区图片"  isActived={acid === '133'} />
                                            </div>
                                            <div onClick={this.handleClick.bind(this, '134')}>
                                                <Division imgUrl={ btn6 } holdImg={ btn6_holder } selectedImg={ btn6_select } alt="青春赛区图片"  isActived={acid === '134'} />
                                            </div>
                                        </div>
                                    </div>
                                    <Annotation />
                                </div>
                            </div>
                            <div className={`${style.content} ${style.content2} ${style.shadow}`}>
                                <div className={style.jury}>
                                    <div className={style.title}>
                                        <img  src={juryHead} />
                                    </div>
                                    <div className={style.juryContaienr}>
                                        <Jury juryUrl={url1} name={name1} introduce={detail1}/>
                                        <Jury juryUrl={url2} name={name2} introduce={detail2}/>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.content} ${style.content3}`}>
                                <div style={{width: "871px"}}>
                                    <div className={style.title}>
                                        <img  src={conditionHead}/>
                                    </div>
                                    {acid === '128' ? (
                                        <div className={style.condition}>
                                            <p>1、单篇须为完稿；</p>
                                            <p>2、2w字以内，不限题材；</p>
                                            <p>3、参赛作品须为白熊阅读独家首发；</p>
                                            <p>4、2018年7月15日之后在白熊平台发布的作品，均可以参赛；</p>
                                            <p>5、投稿作品必须为原创作品，不接受任何盗用他人素材内容的作品，一经发现作品存在抄袭或版权问题，取消参赛资格；</p>
                                            <p>6、投稿作品、标题健康和谐，不涉及色情、暴力以及和国家法律相抵触的内容。带有商业推广意图的广告内容，不和谐内容等视为无效作品；</p>
                                            <p>7、未经主办方同意，参赛者在参赛期间不得将参赛作品自行用于商业用途或授予任何第三方使用，不得用参赛作品参与与本赛事相同或类似的其他活动，且需遵守其他活动规则内容，否则取消获奖资格</p>
                                            <p>8、作品版权归作者所有，投稿即视作允许主办方在相关专题、官网、微博、微信等公众渠道署名推广。</p>
                                            <p>9、本活动最终解释权归“白熊阅读”所有。</p>
                                        </div>
                                    ) : (
                                        <div className={style.condition}>
                                            <p>{`1、${condition}；`}</p>
                                            <p>2、至截止收稿日（2018年9月20日24点），篇幅需达到10w字；</p>
                                            <p>3、参赛作品须为白熊阅读独家首发；</p>
                                            <p>4、2018年7月15日之后在白熊平台发布的作品，均可以参赛；</p>
                                            <p>5、同一篇文，请勿重复投不同赛区；</p>
                                            <p>6、投稿作品必须为原创作品，不接受任何盗用他人素材内容的作品，一经发现作品存在抄袭或版权问题，取消参赛资格；</p>
                                            <p>7、投稿作品、标题健康和谐，不涉及色情、暴力以及和国家法律相抵触的内容。带有商业推广意图的广告内容，不和谐内容等视为无效作品；</p>
                                            <p>9、未经主办方同意，参赛者在参赛期间不得将参赛作品自行用于商业用途或授予任何第三方使用，不得用参赛作品参与与本赛事相同或类似的其他活动，且需遵守其他活动规则内容，否则取消获奖资格</p>
                                            <p>9、作品版权归作者所有，投稿即视作允许主办方在相关专题、官网、微博、微信等公众渠道署名推广。</p>
                                            <p>10、本活动最终解释权归“白熊阅读”所有。</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={`${style.content} ${style.content4}  ${style.shadow}`}>
                                <div>
                                    <div className={style.title}>
                                        <img  src={timeHead}/>
                                    </div>
                                    <div className={style.time_partone}>
                                        <p>活动时间：7月30日-9月20日</p>
                                        <p>投票时间：2018年10月25日-11月05日</p>
                                        <p>公布时间：2018年11月12日</p>
                                    </div>
                                    <div className={style.time_parttwo}>
                                        <div>
                                            <p>截止报名时间：9月10日24点  &nbsp; &nbsp; 截止收稿时间：9月20日24点</p>
                                            <p> 编辑评选时间：9月21日-10月05日  &nbsp; &nbsp;  评委评选时间：10月06日-10月20日</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.content} ${style.content5}`}>
                                <div>
                                    <div className={style.title}>
                                        <img src={joinWayHead} />
                                    </div>
                                    <div className={style.joinmethod}>
                                        <p className="step" style={{}}>第一步</p>
                                        <p>进入极光杯各分赛区页面，点击“我要参赛”</p>
                                        <p>1. 若无作品，选择创建新作品，创建完成后点击“确认参赛”</p>
                                        <p>2. 若有符合参赛条件的作品，选择已有作品，点击“确认参赛”</p>
                                        <p className="step">第二步</p>
                                        <p>完成小说内容编辑后，选择发布类型“单篇”，并进入小说资料填写页面</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.content} ${style.content6} ${style.shadow}`}>
                                <div style={{width: "960px"}}>
                                    <div className={style.title}>
                                        <img  src={prodFeatureHead} />
                                    </div>
                                    <div className={style.prodfeature}>
                                        <p>1.  由白熊阅读编辑部按评选规则，选出优秀作品给予相应奖励</p>
                                        <p> 2. 评选规则</p>
                                        <div className={style.p_container}>
                                            <p>（1）</p>
                                            <p>由白熊阅读编辑部评选出TOP20的作品给到该赛区评委</p>
                                        </div>
                                        <div className={style.p_container}>
                                            <p>（2）</p>
                                            <p>由该赛区评委在白熊阅读编辑部给到的名单中，选出TOP10的作品进入投票环节</p></div>
                                        <div className={style.p_container}>
                                            <p>（3）</p>
                                            <p>该赛区截止至2018年9月20日24时0分，分享榜的TOP5和评论榜的TOP5直接晋级投票环节。若该名单与由评委选出的TOP10出现重合，则按榜单顺延提名</p></div>
                                        <div className={style.p_container}>
                                            <p>（4）</p>
                                            <p>投票规则 : 每位用户，需要登陆app，每天可以投25票，不限赛区，不限作品</p>
                                        </div>
                                        <div className={`${style.inner} ${style.marigin_bt}`}>
                                            <div>
                                                <p>每位用户，投票结束，转发微博分享成功之后，可以获得5张赠票。每位用户每天赠票上限25张；</p>
                                                <p>每位用户，可以使用白熊币和小鱼干兑换投票，兑换比例为：10白熊币=1票；20小鱼干=1票。</p>
                                                <p>每位用户每天兑换总计上限25票；</p>
                                            </div>
                                        </div>
                                        <div className={style.p_container}>
                                            <p>（5）</p>
                                            <p>作品质量，由白熊编辑部和该赛区评委评选，占总成绩60%</p>
                                        </div>
                                        <div className={style.p_container}>
                                            <p>（6）</p>
                                            <p>作品投票，占总成绩40%</p>
                                        </div>
                                        <div className={style.p_container}>
                                            <p>（7）</p>
                                            <p>作品按照以上两项的综合得分进行排名</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.content} ${style.content7} ${style.mt2}`}>
                                <div style={{"padding-bottom": "0"}}>
                                    <div className={style.title}>
                                        <img  src={awardHead} />
                                    </div>
                                    <div className={style.lastContainer}>
                                        {
                                            prizes.length<=4 ?
                                                prizes.map(item => (<AwardContent key={item.sort} level={item.sort} count={item.prize} number={item.number}/>))
                                                :
                                                prizes.slice(0,4).map(item => (<AwardContent key={item.sort} level={item.sort} count={item.prize} number={item.number}/>))
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                prizes.length > 0 ? (
                                    <div className={`${style.content} ${style.content8}`}>
                                        <div>
                                            <div className={style.title}>
                                                <img  src={allDivisionAwardHead} />
                                            </div>
                                            <div>
                                                <AllawardContent level="最受欢迎人气奖" count={10000} number={1} content="由六个赛区最佳人气奖的最高票决出，如果出现票数一样的情况，该票数一致的作品限时24小时投票决定" />
                                                <AllawardContent level="编辑部大奖" count={10000} number={1} content="由白熊编辑部在全部赛区中评选" />
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                <div className={style.helpWife}>
                    <img src={wife}/>
                </div>
                <div className={style.rankListContainer}>
                    <RankList acid={acid}/>
                </div>
                <Footer />
            </div>
        )
    }
}