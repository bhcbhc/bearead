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
import style from './home.scss';
import "../../styles/app.scss";

const bg2 = require('../../assets/img_bg_1.png');
const bg = require('../../assets/BG.png');
const join = require('../../assets/btn_cs.png');

const divisionHead = require('../../assets/division_title.png'); // 赛区
const juryHead = require('../../assets/jury.png'); // 评委
const conditionHead = require('../../assets/condition.png'); // 参赛要求
const timeHead = require('../../assets/activity_date.png'); // 活动时间
const joinWayHead = require('../../assets/joinWay.png'); // 参与方式
const prodFeatureHead = require('../../assets/productFeature.png'); // 作品评选
const awardHead = require('../../assets/award.png'); // 奖项设置
const allDivisionAwardHead = require('../../assets/allDivisionAward.png'); //总赛区奖项设置


class Home extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.detail}>
                    <div>
                        <div className={style.title}>
                            <img  src={divisionHead}/>
                        </div>
                        <div>
                            <Annotation />
                        </div>
                        <div className={style.join}>
                            <img src={join} height="100%"  width="100%" alt="joinBtn"/>
                        </div>
                    </div>
                    <div className={style.title}>
                        <img  src={juryHead}/>
                    </div>
                    <div>
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
                    <div>
                        <div className={style.title}>
                            <img  src={timeHead}/>
                        </div>
                    </div>
                    <div className={style.title}>
                        <img src={joinWayHead} />
                    </div>
                    <div className={style.title}>
                        <img  src={prodFeatureHead} />
                    </div>
                    <div>
                        <div className={style.title}>
                            <img  src={awardHead} />
                        </div>
                        <AwardContent level="一等奖" count={3000} />
                        <AwardContent level="二等奖" count={3000}/>
                        <AwardContent level="二等奖" count={3000}/>
                    </div>
                    <div className={style.title}>
                        <img  src={allDivisionAwardHead} />
                    </div>
                </div>
                <div className={style.topbg} />
                <div className={style.topbg}>
                 <img src={bg2} height="100%" width="100%" />
             </div>
                <div className={style.topbg}>
                 <img src={bg2} height="100%" width="100%" />
             </div>
                <div className={style.body}>
                 <img src={bg}  height="100%" width="100%" />
             </div>
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