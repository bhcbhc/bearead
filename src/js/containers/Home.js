/**
 * Created by ninghai on 2018/7/7.
 *
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import *  as CounterActions from '../redux/actions/countActions'
import Annotation  from '../components/Annotation';
import AwardContent from '../components/AwardContent';
import AllawardContent from '../components/AllawardContent';
import Division from '../components/Division';
import Jury from '../components/Jury';
import RankList from '../components/RankList';
import Footer from '../components/Footer';
import LayerIcon from '../components/LayerIcon';

import style from './home.scss';
import "../../styles/app.scss";
const join = require('../../assets/btn_cs.png');

const divisionHead = require('../../assets/division_title.png'); // 赛区
const juryHead = require('../../assets/jury.png'); // 评委
const conditionHead = require('../../assets/condition.png'); // 参赛要求
const timeHead = require('../../assets/activity_date.png'); // 活动时间
const joinWayHead = require('../../assets/joinWay.png'); // 参与方式
const prodFeatureHead = require('../../assets/productFeature.png'); // 作品评选
const awardHead = require('../../assets/award.png'); // 奖项设置
const allDivisionAwardHead = require('../../assets/allDivisionAward.png'); //总赛区奖项设置

//单篇赛区
const  btn1 = require('../../assets/btn_1_unselect.png');
const  btn1_holder= require('../../assets/btn_1_holder.png');
const  btn1_select= require('../../assets/btn_1_select.png');

//古风赛区
const  btn2 = require('../../assets/btn_2_unselect.png');
const  btn2_holder= require('../../assets/btn_2_holder.png');
const  btn2_select= require('../../assets/btn_2_select.png');

//幻想赛区
const  btn3 = require('../../assets/btn_3_unselect.png');
const  btn3_holder= require('../../assets/btn_3_holder.png');
const  btn3_select= require('../../assets/btn_3_select.png');

//脑洞、悬疑赛区
const  btn4 = require('../../assets/btn_4_unselect.png');
const  btn4_holder= require('../../assets/btn_4_holder.png');
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
const jury1 = require('../../assets/user_1.png');
const jury2 = require('../../assets/user_2.png');

const topLogo = require('../../assets/logo_bxyd.png');

function toTop() {
    document.body.scrollTop = 0;
}

class Home extends Component {

    render() {
        return (
            <div className={style.container}>
                <button onClick={toTop} className={style.topBtn} />
                <a className={style.join} href="javascript: void(0)">
                    <img src={join} height="100%"  width="100%" alt="joinBtn"/>
                </a>
                <div className={style.topbg}>
                    <LayerIcon />
                </div>
                <div className={style.detail}>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img  src={divisionHead}/>
                            </div>
                            <div className={`divisionContainer`}>
                                <div>
                                    <Division imgUrl={ btn1 } holdImg={ btn1_holder } selectedImg={ btn1_select } alt="单篇赛区图片"  isActived={true}  gameId="1111" />
                                    <Division imgUrl={ btn2 } holdImg={ btn2_holder } selectedImg={ btn2_select } alt="古风赛区图片"  isActived={false}  gameId="1112" />
                                    <Division imgUrl={ btn3} holdImg={ btn3_holder  } selectedImg={ btn3_select } alt="幻想赛区图片"  isActived={false}  gameId="1113" />
                                </div>
                                <div>
                                    <Division imgUrl={ btn4 } holdImg={ btn4_holder } selectedImg={ btn4_select  } alt="脑洞悬疑赛区图片"  isActived={false}  gameId="1114" />
                                    <Division imgUrl={ btn5 } holdImg={ btn5_holder  } selectedImg={ btn5_select } alt="职场赛区图片"  isActived={false}  gameId="1115" />
                                    <Division imgUrl={ btn6 } holdImg={ btn6_holder } selectedImg={ btn6_select } alt="青春赛区图片"  isActived={false}  gameId="1116" />
                                </div>
                            </div>
                            <Annotation />
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img  src={juryHead} />
                            </div>
                            <div className={style.juryContaienr}>
                                <Jury juryUrl={jury1} name="USER" introduce="已跟漫画工作室确认改名没有问题"/>
                                <Jury juryUrl={jury2} name="白熊阅读" introduce="已跟漫画工作室确认改名没有问题"/>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img  src={conditionHead}/>
                            </div>
                            <div className={style.condition}>
                                <p>1、单篇须为完稿；</p>
                                <p>2、2w字以内，不限题材；</p>
                                <p>3、2018年7月15日之后在白熊平台发布的作品，均可以参赛；</p>
                                <p>4、投稿作品必须为原创作品，不接受任何盗用他人素材内容的作品，一经发现作品存在抄袭或版权问题，取消参赛资格；</p>
                                <p>5、投稿作品、标题健康和谐，不涉及色情、暴力以及和国家法律相抵触的内容。带有商业推广意图的广告内容，不和谐内容等视为无效作品；</p>
                                <p>6、未经主办方同意，参赛者在参赛期间不得将参赛作品自行用于商业用途或授予任何第三方使用，不得用参赛作品参与与本赛事相同或类似的其他活动，且需遵守其他活动规则内容，否则取消获奖资格；</p>
                                <p>7、作品版权归作者所有，投稿即视作允许主办方在相关专题、官网、微博、微信等公众渠道署名推广。</p>
                                <p>8、本活动最终解释权归“白熊阅读”所有。</p>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img  src={timeHead}/>
                            </div>
                            <div className={style.time_partone}>
                                <p>活动时间：7月20日-9月10日</p>
                                <p>投票时间：2018年10月21日-10月30日</p>
                                <p>公布时间：2018年11月12日</p>
                            </div>
                            <div className={style.time_parttwo}>
                                <div>
                                    <p>截止报名时间：8月30日24点   截止收稿时间：9月10日24点</p>
                                    <p>编辑评选时间：9月11日-9月25日   评委评选时间：9月26日-10月10日</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img src={joinWayHead} />
                            </div>
                            <div className={style.joinmethod}>
                                <p className="step">第一步</p>
                                <p>进入极光杯各分赛区页面，点击“我要参赛”</p>
                                <p>1. 若无作品，选择创建新作品，创建完成后点击“确认参赛”</p>
                                <p>2. 若有符合参赛条件的作品，选择已有作品，点击“确认参赛”</p>
                                <p className="step">第二步</p>
                                <p>完成小说内容编辑后，选择发布类型“单篇”，并进入小说资料填写页面</p>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img  src={prodFeatureHead} />
                            </div>
                            <div className={style.prodfeature}>
                                <p>1.  由白熊阅读编辑部按评选规则，选出优秀作品给予相应奖励</p>
                                <p> 2. 评选规则</p>
                                <p>（1）由白熊阅读编辑部评选出TOP20的作品给到该赛区评委</p>
                                <p>（2）由该赛区评委在白熊阅读编辑部给到的名单中，选出TOP10的作品进入投票环节</p>
                                <p>（3）该赛区截止至2018年9月10日24时0分，分享榜的TOP5和评论榜的TOP5直接晋级
                                    投票环节。若该名单与由评委选出的TOP10出现重合，则按榜单顺延提名</p>
                                <p>（4）投票规则 : 每位用户，需要登陆app，每天可以投25票，不限赛区，不限作品</p>
                                <p>（5）作品质量，由白熊编辑部和该赛区评委评选，占总成绩60%</p>
                                <p>（6）作品投票，占总成绩40%</p>
                                <p>（7）作品按照以上两项的综合得分进行排名</p>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img  src={awardHead} />
                            </div>
                            <div>
                                <AwardContent level="一等奖" count={3000} />
                                <AwardContent level="二等奖" count={1500} />
                                <AwardContent level="二等奖" count={800} />
                                <AwardContent level="最佳人气奖" count={500} />
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.title}>
                                <img  src={allDivisionAwardHead} />
                            </div>
                            <div>
                                <AllawardContent level="白熊人气王" count={3000} content="由六个赛区最佳人气奖的最高票决出，如果出现票数一样的情况，该票数一致的作品限时24小时投票决定" />
                                <AllawardContent level="编辑部之星" count={3000} content="由白熊编辑部在全部赛区中评选" />
                            </div>
                        </div>
                    </div>
                <div className={style.helpWife}></div>
                <div className={style.rankListContainer}>
                    <RankList acid="110" />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {count: state.count}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(CounterActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)