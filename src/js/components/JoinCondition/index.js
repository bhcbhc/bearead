/**
 * Created by ninghai on 2018/7/11.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

const img = require('../../../assets/condition.png');

export default class JoinCondition extends Component {
    render () {
        return (
            <div>
                <img src={img}/>
                <div className={style.condition}>
                    <p>1、单篇须为完稿；</p>
                    <p>2、2w字以内，不限题材；</p>
                    <p>3、2018年7月15日之后在白熊平台发布的作品，均可以参赛；；</p>
                    <p>4、投稿作品必须为原创作品，不接受任何盗用他人素材内容的作品，一经发现作品存在抄袭或版权问题，取消参赛资格；</p>
                    <p>5、投稿作品、标题健康和谐，不涉及色情、暴力以及和国家法律相抵触的内容。带有商业推广意图的广告内容，不和谐内容等视为无效作品；</p>
                    <p>6、未经主办方同意，参赛者在参赛期间不得将参赛作品自行用于商业用途或授予任何第三方使用，不得用参赛作品参与与本赛事相同或类似的其他活动，且需遵守其他活动规则内容，否则取消获奖资格；</p>
                    <p>7、作品版权归作者所有，投稿即视作允许主办方在相关专题、官网、微博、微信等公众渠道署名推广。</p>
                    <p>8、本活动最终解释权归“白熊阅读”所有。</p>
                </div>
            </div>
        )
    }
}