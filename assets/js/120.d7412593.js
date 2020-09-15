(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{530:function(t,a,i){"use strict";i.r(a);var e=i(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"pro-git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pro-git"}},[t._v("#")]),t._v(" Pro git")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://git-scm.com/book/ko/v2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pro git 링크"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"_1-버전-관리란"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-버전-관리란"}},[t._v("#")]),t._v(" 1. 버전 관리란")]),t._v(" "),i("ul",[i("li",[t._v("버전 관리 시스템: 파일 변화를 시간에 따라 기록했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템. 소스코드 뿐만 아니라 모든 컴퓨터 파일의 버전을 관리할 수 있음.")])]),t._v(" "),i("h2",{attrs:{id:"git-기초"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-기초"}},[t._v("#")]),t._v(" Git 기초")]),t._v(" "),i("h3",{attrs:{id:"차이가-아니라-스냅샷"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#차이가-아니라-스냅샷"}},[t._v("#")]),t._v(" 차이가 아니라 스냅샷")]),t._v(" "),i("p",[t._v("모든 파일을 저장하는게 아니고, 1. 이전 상태의 파일에 대한 링크 2. 어떤 것이 바뀌었는지\n만 저장한다. 그래서 빠르고 용량도 작음")]),t._v(" "),i("h3",{attrs:{id:"거의-모든-명령을-로컬에서-실행"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#거의-모든-명령을-로컬에서-실행"}},[t._v("#")]),t._v(" 거의 모든 명령을 로컬에서 실행")]),t._v(" "),i("p",[t._v("그래서 네트워크 속도에 영향받지 않고 빠르게 히스토리 조회 등을 할 수 있음.")]),t._v(" "),i("h3",{attrs:{id:"git의-무결성"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git의-무결성"}},[t._v("#")]),t._v(" Git의 무결성")]),t._v(" "),i("p",[t._v("해시를 이용해서 모든 것을 저장. 파일 이름도 저장 안하고 해시로.")]),t._v(" "),i("h3",{attrs:{id:"세-가지-상태"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#세-가지-상태"}},[t._v("#")]),t._v(" 세 가지 상태")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("파일의 세 가지 상태")]),t._v(" "),i("ol",[i("li",[t._v("Commited: 데이터가 로컬 데이터베이스에 저장")]),t._v(" "),i("li",[t._v("Modified: 수정한 파일. 로컬 데이터베이스에 아직 커밋 안함")]),t._v(" "),i("li",[t._v("Staged: 현재 수정한 파일을 곧 커밋할것이라 표시")])])]),t._v(" "),i("li",[i("p",[t._v("Git 프로젝트의 세 가지 단계")]),t._v(" "),i("ol",[i("li",[t._v("Working Directory: 프로젝트의 특정 버전을 Checkout 한 것.")]),t._v(" "),i("li",[t._v("Staging Area: "),i("code",[t._v(".git")]),t._v("디렉토리 안에 있음. 단순한 파일. 곳 커밋할 파일에 대한 정보 저장. Index라고 불리기도 하는데 Staging Area란 명칭이 표준 되고 있음.")]),t._v(" "),i("li",[t._v(".git directory(Repository): "),i("code",[t._v(".git")]),t._v(" 폴더. 깃이 프로젝트의 메타데이터랑 객체 db를 저장하는 곳. 클론하면 요 디렉토리 만들어짐")])])]),t._v(" "),i("li",[i("p",[t._v("Git으로 하는 일")]),t._v(" "),i("ol",[i("li",[t._v("Working Directory에서 파일 수정")]),t._v(" "),i("li",[t._v("Staging area에 파일을 stage해서 커밋할 스냅샷을 만든다")]),t._v(" "),i("li",[t._v("Staging area에 있는 파일을 커밋해서 Git디렉토리에 영구적 스냅샷으로 저장한다")])])]),t._v(" "),i("li",[i("p",[t._v("Commited: "),i("code",[t._v(".git")]),t._v("디렉토리에 있는 파일 상태.")])]),t._v(" "),i("li",[i("p",[t._v("Staged: 파일을 수정하고 Staging area에 추가한 상태")])]),t._v(" "),i("li",[i("p",[t._v("Modified: 체크아웃하고 나서 수정했지만 아직 Staging area에 추가하지 않은 상태.")])]),t._v(" "),i("li",[i("p",[t._v("Tracked되는 파일은 1. Unmodified 2. Modified 3. Staged 셋 중 하나 상태")])]),t._v(" "),i("li",[i("p",[t._v("Working Directory에 내가 현재 브랜치에서 작업하는 모든 파일. 여기서 몇몇 파일이 modified. (나머지는 unmodified) (파일상태:modified) (좀더 보면 모든 파일은 tracked랑 untracked로 나뉜다.)")])]),t._v(" "),i("li",[i("p",[t._v("modified된 파일을 골라서 Staging area에 파일을 stage시킨다. 이 Stage area는 Index라고도 부릅니다. add 하는 단계. (파일상태:staged)")])]),t._v(" "),i("li",[i("p",[t._v("stage에 있는 파일을 모두 묶어 커밋으로 만든다. 그럼 파일은 다시 "),i("code",[t._v("unmodified")]),t._v("상태로 돌아가고, 여기서 파일 삭제한다면 "),i("code",[t._v("untracked")])])])]),t._v(" "),i("h3",{attrs:{id:"head"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" HEAD")]),t._v(" "),i("p",[t._v("HEAD라는 특수한 포인터는 지금 작업중인 로컬 브랜치를 가리킨다.\ngit checkout testing하면 HEAD는 testing 브랜치를 가리킨다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);