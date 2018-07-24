import {
    CHANGE_BOOK
} from '../actions/actionTypes';

const initState = {
    app_url: '',
    wap_url: '',
    web_url: '',
    author_name: '杀尽春宵',
    bid: 'b11182598',
    desc: '这是由4篇演员与角色的交互的文构成的小连载，非rps，非cp向。内容如下：①《斩魂无常》朱一龙×沈巍②《镇魂有令》白宇×赵云澜③《善恶无多》白宇×沈巍④《生死有终》朱一龙×赵云澜非cp向，只是角色与演员之间的牵连。祝大家食用愉快，感谢观看。题字Weibo@一封山水',
    book_name: '【镇魂】你有没有见过他',
    cover: 'https://chapterssl.bearead.com/b11182598/15320947737654112null',
    icon: 'https://imgssl.bearead.com/22413b0c8474e7c55fc8ec3454723f8b.jpg_thumb',
    tags: ['朱一龙', '沈巍', '巍澜', '赵云澜', 'crossover', '镇魂', '明星同人']
};

export default function book(state = initState, action) {
  switch (action.type) {
    case CHANGE_BOOK:
      return action.book;
    default:
      return state;
  }
}