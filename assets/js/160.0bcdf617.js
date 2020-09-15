(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{478:function(i,v,l){"use strict";l.r(v);var _=l(42),a=Object(_.a)({},(function(){var i=this,v=i.$createElement,l=i._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[l("h1",{attrs:{id:"graphql"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[i._v("#")]),i._v(" GraphQL")]),i._v(" "),l("h2",{attrs:{id:"페이스북-엔지니어-세션-innovation-lab-korea-from-facebook"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#페이스북-엔지니어-세션-innovation-lab-korea-from-facebook"}},[i._v("#")]),i._v(" 페이스북 엔지니어 세션 @Innovation Lab Korea from Facebook")]),i._v(" "),l("ul",[l("li",[i._v("Web notification 만드는 팀")]),i._v(" "),l("li",[i._v("처음 페이스북 앱\n"),l("ul",[l("li",[i._v("웹도 모바일앱도 만들어야 하니까 그냥 웹뷰를 올렸다.")]),i._v(" "),l("li",[i._v("Web first -> Mobile first => 웹앱에서 네이티브 앱으로 바꿔버림")])])]),i._v(" "),l("li",[i._v("REST API의 불편함\n"),l("ul",[l("li",[i._v("RESTful API는 웹에서는 좋았다. 근데 모바일로 오니까 힘들었다.")]),i._v(" "),l("li",[i._v("모바일에서는 데이터를 shape로 생각하고 있었지 single resource로는 별로... => Multiple Usage에는 적합하지 않았다.")]),i._v(" "),l("li",[i._v("데이터도 어짜피 tree형식(hierarchy하게 표현될것이다) -> 그래서 GraphQL 만듦. 쿼리형 랭귀지")])])]),i._v(" "),l("li",[i._v("What is graphQL?\n"),l("ul",[l("li",[i._v("shape -> json닮음. Function같다고 생각하면 된다.")]),i._v(" "),l("li",[i._v("Read, Mutation(Read&Write), Subscription(실시간으로 업데이트 받아봄)")])])]),i._v(" "),l("li",[i._v("GraphQL의 중심원리?\n"),l("ul",[l("li",[i._v("프로덕트 디벨로퍼간의 Mental Model을 쉐어해주기")]),i._v(" "),l("li",[i._v("가장 effective한 페이지네이션: Cursor based pagination (뭐지?)")])])]),i._v(" "),l("li",[i._v("뉴스피드 코드는 4만줄(ㅎㅎ).")]),i._v(" "),l("li",[i._v("Fragment\n"),l("ul",[l("li",[i._v("조금 더 작게 fragment를 만들 수 있다 (selector 조합하는 느낌이당)")])])]),i._v(" "),l("li",[i._v("페이스북은?\n"),l("ul",[l("li",[i._v("99%가 graphQL. 그리고 단 하나의 디비 스키마.")])])]),i._v(" "),l("li",[i._v("어떻게 적용하나?\n"),l("ul",[l("li",[i._v("그냥 얹기만 하면 된다.")]),i._v(" "),l("li",[i._v("Feed Ranking System -> 절대 건드릴 수 없는 몬스터 코드. -> 이는 User DB 접속 -> Link&Image Cache함 -> 이를 모두 담당하는 Application code가 있다. -> 그 위에 얹어버림.")]),i._v(" "),l("li",[i._v("단 하나 requirement: 받고 싶은 데이터의 타입만 표기해두면 된다.")]),i._v(" "),l("li",[i._v("GraphQL은 시스템적으로 async한 데이터를 보장한다.")]),i._v(" "),l("li",[i._v("(^_^)Introspection - A platform for building tools: 파워풀한 플랫폼. 서버가 알고 있는 데이터를 최대한 보여준다. -> 한 툴을 정말 많은 Purpose로 개발할 수 있다!\n"),l("ul",[l("li",[i._v("Native code generation")]),i._v(" "),l("li",[i._v("Persisted Queries")]),i._v(" "),l("li",[i._v("IDE integration")])])])])]),i._v(" "),l("li",[i._v("Mutaions\n"),l("ul",[l("li",[i._v("그냥 REST Api들은 스펙상으로는 data를 가져오지 않는다. 액션을 취하고, 다시 Get함")]),i._v(" "),l("li",[i._v("mutation은 바꾸러 갔다가 바뀌어진 data를 가져옴")]),i._v(" "),l("li",[i._v("Round trip필요없이 한방에 데이터 바꾸고 가져올 수 있다. -> Performance up")])])]),i._v(" "),l("li",[i._v("FB에서 어떻게 쓰고있는지?\n"),l("ul",[l("li",[i._v("이건 아무도 얘기 안한다. 위험할 수 있으니")]),i._v(" "),l("li",[i._v("Mistake 1\n"),l("ul",[l("li",[i._v("생일같은 필드는 한번 쿼리 하면 웬만하면 다시 안받아도 된다. -> 기존에는 매번 DB에 요청해서 받았다.")]),i._v(" "),l("li",[i._v("1 Billion User 가 이 필드를 다 터치하면 CPU가 엄청 올라간다. 바뀌지도 않는 정보를 받기 위해 network latency 늘어남.")]),i._v(" "),l("li",[i._v("근데 GraphQL은 빌트인 캐싱이 없다.")]),i._v(" "),l("li",[i._v("디자인의 문제\n"),l("ul",[l("li",[l("code",[i._v("Overfetching")]),i._v(": 우리가 필요 없는 데이터를 가져오기")]),i._v(" "),l("li",[l("code",[i._v("Underfetching")]),i._v(": 운좋으면 null 운나쁘면 crash")])])])])])])]),i._v(" "),l("li",[i._v("Persisted Query\n"),l("ul",[l("li",[i._v("unauthorized된 사람들이 쿼리를 보내면 어떻게 되냐?")]),i._v(" "),l("li",[i._v("GraphQL상에서는 따로 보안을 넣긴 힘듦")]),i._v(" "),l("li",[i._v("쿼리를 날리면-> Parse -> Validation -> 실행\n"),l("ul",[l("li",[i._v("요기서 중간 스탭을 없애서, 쿼리에 uniq id같은걸 줘서 validator랑 parsing이랑 다 자동으로 해서...")]),i._v(" "),l("li",[i._v("API성능과 보안을 한큐에 잡을 수 있다 (id로만 쿼리를 호출해서 id를 모르면 호출 못함)")])])])])]),i._v(" "),l("li",[i._v("Realtime QraphQL\n"),l("ul",[l("li",[i._v("이메일이 왔을 때 읽지 않은 이메일 갯수 -> 서버에서 한 번씩 payload 보내줌")]),i._v(" "),l("li",[i._v("중요한 이메일이 왔을 떄 읽지 않은 이메일의 갯수? ->")]),i._v(" "),l("li",[i._v("모바일에서는 100% graphQL -> subscription 유용")])])]),i._v(" "),l("li",[i._v("Replay\n"),l("ul",[l("li",[i._v("React와 GraphQL사용")])])]),i._v(" "),l("li",[i._v("서버개발자에게 부담을 주지 않고 프론트개발자들이 api 핸들링을 쉽게 하는 방법 -> GraphQL")]),i._v(" "),l("li",[i._v("GraphQL에서 recommendation하는 DB: DB에 국한되지 않는 data fetching language")]),i._v(" "),l("li",[i._v("기존에 있던 데이터를 스키마로 만들어야 하는데 -> 이를 만드는 사람이 백엔드? 프런트?")])]),i._v(" "),l("h2",{attrs:{id:"질문"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#질문"}},[i._v("#")]),i._v(" 질문")]),i._v(" "),l("ul",[l("li",[i._v("페이스북이 프론트엔드에서 들고 있는 status는 얼만큼 큰가? 어디까지 store에 저장하고 어디까지는 graphQL로 바로 데이터를 받아서 보여주나?")]),i._v(" "),l("li",[i._v("댓글쓸때 루루룰 거리는것까지 보면 굉장히 동시성이 보장된거같은데 어떻게 하는가? 웹소켓? -> 웹소켓으로 구현된 Realtime graphQL")]),i._v(" "),l("li",[i._v("페이스북 웹의 모든 코드가 graphQL이나 React는 아닐거같은데 몇퍼센트정도 커버되어있나? -> GraphQL은 99%.")]),i._v(" "),l("li",[i._v("A/B테스트를 굉장히 많이 하는것같은데 (A/B/C...Z) 그 모든 코드를 어떤식으로 핸들링?")]),i._v(" "),l("li",[i._v("mutation의 첫번째 인자에 오는 액션같은게 뭐지? 어떻게 생겼지?")]),i._v(" "),l("li",[i._v("내가 원하는 데이터를 원하는 shape으로 가져온다는거에서 selector랑 비슷한것 같은데, 그럼 graphQL도 쓰고 Selector도 쓰나? 원하는 데이터를 원하는 shape로 fetch해서 store에 넣고, 이를 또 가져다 쓸땐 selector로? user, profile 데이터를")]),i._v(" "),l("li",[i._v("Oculus에 계셨던거같은데 거기서는 어떤 개발 하셨나")])]),i._v(" "),l("h2",{attrs:{id:"생각"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#생각"}},[i._v("#")]),i._v(" 생각")]),i._v(" "),l("ul",[l("li",[i._v("음 프론트개발자들은 참 슬라이드를 잘 만들어...")]),i._v(" "),l("li",[i._v("음 확실히 페북같이 매번 온갖 데이터 조작해서 가져와야하는 앱 만들때 좋겠구먼. 간단히 말하면 json포맷 비슷하게 쿼리를 날릴 수 있는것이구먼.")]),i._v(" "),l("li",[i._v("진짜 딱 셀렉터구먼")]),i._v(" "),l("li",[i._v("Humble하신데 내공이 묻어나네. 올해 들은 외부 강연 중 Top")])]),i._v(" "),l("h2",{attrs:{id:"refer"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[i._v("#")]),i._v(" Refer")]),i._v(" "),l("ul",[l("li",[i._v("좋은 튜토리얼: https://www.howtographql.com/")])])])}),[],!1,null,null,null);v.default=a.exports}}]);