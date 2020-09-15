(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{388:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"칸아카데미-알고리즘-강의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#칸아카데미-알고리즘-강의"}},[t._v("#")]),t._v(" 칸아카데미 알고리즘 강의")]),t._v(" "),a("p",[t._v("https://ko.khanacademy.org/computing/computer-science/algorithms")]),t._v(" "),a("h2",{attrs:{id:"이진-검색"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이진-검색"}},[t._v("#")]),t._v(" 이진 검색")]),t._v(" "),a("h3",{attrs:{id:"수도-코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수도-코드"}},[t._v("#")]),t._v(" 수도 코드")]),t._v(" "),a("ol",[a("li",[t._v("min = 0 이고 max = n-1 입니다.\n2.max < min, 이라면 멈춥니다. 타겟이 배열에 존재하지 않습니다. -1을 반환합니다.")]),t._v(" "),a("li",[t._v("'guess'를 'max'와 'min'의 평균으로 계산하고 (정수가 될 수 있도록) 내림합니다.")]),t._v(" "),a("li",[t._v("배열[guess]가 타겟과 같다면 멈춥니다. 찾았습니다! guess를 반환합니다.")]),t._v(" "),a("li",[t._v("만약 추측이 너무 낮았다면, 즉 배열[guess] < 타켓이라면, min = guess + 1로 바꿉니다.")]),t._v(" "),a("li",[t._v("그렇지 않다면 추측이 너무 높습니다. max = guess - 1로 바꿉니다.")]),t._v(" "),a("li",[t._v("2단계로 돌아갑니다.")])]),t._v(" "),a("h3",{attrs:{id:"코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#코드"}},[t._v("#")]),t._v(" 코드")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doSearch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//24")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      guess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("targetValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("targetValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" primes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("61")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("67")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("71")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("73")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("79")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("83")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("89")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Found prime at index "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nProgram"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEqual")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("73")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"점근적-표기법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#점근적-표기법"}},[t._v("#")]),t._v(" 점근적 표기법")]),t._v(" "),a("p",[t._v("###알고리즘의 실행 시간")]),t._v(" "),a("ol",[a("li",[t._v("입력값의 크기에 따른 알고리즘 실행 시간\n"),a("ul",[a("li",[t._v("배열 크기 작을수록 추측 최대 횟수도 줄어든다")])])]),t._v(" "),a("li",[t._v("실행 시간의 성장률(rate of growth): 입력값의 크기에 따라 이 함수가 얼마나 빨리 커지는지\n"),a("ul",[a("li",[t._v("6n^2 + 100n + 300이란 알고리즘에서 n값이 커질수록 6n^2는 나머지 합친것보다 훨씬 기하급수적으로 커진다")]),t._v(" "),a("li",[t._v("an^2가 bn+c보다 크고 n이 커질수록 그 차이가 커지는 n의 값(교차점)은 항상 존재")]),t._v(" "),a("li",[t._v("중요하지 않은 항목과 상수 계수를 제거하면 이해 방해하는 불필요한 부분 없어져서 알고리즘의 실행 시간에서 중요한 부분인 "),a("em",[t._v("성장률")]),t._v(" 에 집중할 수 있다.")])])])]),t._v(" "),a("p",[t._v("상수 계수와 중요하지 않은 항목 제거했을 때는 **점근적 표기법(asymptotic notation)**을 사용한다.\n이는 1. big-Θ 2. big-O 3. big-Ω 3개가 있다.")]),t._v(" "),a("h3",{attrs:{id:"빅-세타-표기법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빅-세타-표기법"}},[t._v("#")]),t._v(" 빅 세타 표기법")]),t._v(" "),a("p",[t._v("아래와 같은 선형 검색이 수행되기 위하여 필요한 계산은\n"),a("code",[t._v("c1 * n + c2")]),t._v("이다.")]),t._v(" "),a("ul",[a("li",[t._v("c1: 루프를 한 번 도는데 드는 시간")]),t._v(" "),a("li",[t._v("n: 루프 수")]),t._v(" "),a("li",[t._v("c2: guess=0, 마지막 -1리턴 작업 등 추가 시간.")])]),t._v(" "),a("p",[t._v("여기서 상수 인자인 c1과 c2를 안다고 해서 실행 시간이 커지는 "),a("strong",[t._v("비율")]),t._v("을 알 순 없음. 배열 크기인 n에 따라 커지지. 이는 n의 빅 세타, 혹은 n의 세타 라고 읽는다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doLinearSearch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" guess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" guess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" targetValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 찾은 경우")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 찾지 못한 경우")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이진 검색의 실행 시간은 "),a("code",[t._v("Θ(log n)")]),t._v(".\nn이 두배씩 커질때마다 연산 수가 하나씩 늘어나니까(2의 2제곱 = 연산 2번, 2의 3제곱 = 연산 3번)")]),t._v(" "),a("p",[t._v("실제로 상수 인자와 낮은 차원의 항목은 그냥 생랼.\n실행 시간이 6n^2 + 100n + 300 마이크로초라면, 빅-세타 표기법에서는 그냥 "),a("code",[t._v("Θ(n^2)")]),t._v("라고 한다. (계수, 저차원항목, 단위 생략)")]),t._v(" "),a("h3",{attrs:{id:"점근적-표기법-형태의-함수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#점근적-표기법-형태의-함수"}},[t._v("#")]),t._v(" 점근적 표기법 형태의 함수")]),t._v(" "),a("p",[t._v("오름차순으로 정렬된 배열의 최솟값 찾기 => 항상 index 0에 있으므로 알고리즘은 "),a("code",[t._v("Θ(n^0)")]),t._v("시간에 실행된다. 실제로는 "),a("code",[t._v("Θ(1)")]),t._v("라고 씀.")]),t._v(" "),a("p",[t._v("점근적 표기법에서 로그의 밑 값은 상수라면 뭐든 무방.\n"),a("code",[t._v("log a n = log b n / log b a")]),t._v(" 식은 모든 양수인 a, b, n에 대해 성립하기 때문.\n그러므로 만일 a, b가 상수라면 log a n과 lo b n은 log b a에 의해서만 달라지고 이는 점근적 표기법에서 무시 가능한 상수값.")]),t._v(" "),a("blockquote",[a("p",[t._v("무슨말이지?")])]),t._v(" "),a("p",[t._v("그러므로 이진검색 최악경우 실행시간은 모든 양수값 a에 대해 "),a("code",[t._v("Θ(log a b)")]),t._v("라고 할 수 있다.\n보통 "),a("code",[t._v("Θ(log n)")]),t._v("라고 한다.")]),t._v(" "),a("p",[t._v("점근적 표기법을 사용해 알고리즘 분석시 종종 사용하는 함수 순서가 있다.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("a < b")]),t._v("(둘 다 상수)라면 Θ(n^a)의 실행시간보다 Θ(n^a)가 빨리 커짐.")]),t._v(" "),a("li",[a("code",[t._v("Θ(log n)")]),t._v("은 모든 양의 상수 a에 대하여 "),a("code",[t._v("Θ(n^a)")]),t._v("보다 천천히 커짐, 그러나 "),a("code",[t._v("Θ(1)")]),t._v("보단 빨리 커짐")])]),t._v(" "),a("p",[a("code",[t._v("Θ(1)")]),t._v(" < "),a("code",[t._v("Θ(log n)")]),t._v(" < "),a("code",[t._v("n")]),t._v(" < "),a("code",[t._v("Θ(n log n)")]),t._v(" < "),a("code",[t._v("Θ(n^2)")]),t._v(" < "),a("code",[t._v("Θ(n^2 log n)")]),t._v(" < "),a("code",[t._v("Θ(n^3)")]),t._v(" < "),a("code",[t._v("Θ(2^n)")])]),t._v(" "),a("blockquote",[a("p",[t._v("그래프 그려보면 좋겠다")])]),t._v(" "),a("h3",{attrs:{id:"빅-오-표기법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빅-오-표기법"}},[t._v("#")]),t._v(" 빅 오 표기법")]),t._v(" "),a("p",[t._v("빅 세타: 실행 시간이 커지는 것을 일정 하한선~상한선 내에서 점근적으로 제한하기 위해.\n빅 오: 상한선만 제한하고 싶다")]),t._v(" "),a("p",[t._v("이진검색의 최악경우 실행시간은 "),a("code",[t._v("Θ(log n)")]),t._v("이지만 모든 경우에서 "),a("code",[t._v("Θ(log n)")]),t._v("으로 실행된다고 말할 순 없으니, '실행 시간은 최대한 이만큼 커지지만 더 천천히 커질 수 있다(더 빠를 수 있다)'를 말하는건 big-O\n모든 경우를 포괄하는 일반적 표현은 "),a("strong",[t._v("이진검색이 O(log n)시간 내에 실행된다")]),t._v("라고 표현하는 것이 가장 강력하다.")]),t._v(" "),a("p",[t._v("정확하진 않지만 이진 검색의 상한선은 O(n^2)가 될 수 있다. 하지만 Θ(n^2)는 올바르지 않다.")]),t._v(" "),a("p",[t._v("e.g.\n"),a("code",[t._v("log n")]),t._v("이 "),a("code",[t._v("O(log 8 n)")]),t._v("이다\n== "),a("code",[t._v("log n")]),t._v("이 "),a("code",[t._v("O(log 8 n)")]),t._v("의 점근적 상한선을 가지고 있다\n== 충분히 큰 n이 있을 경우 어떤 상수 k에 대해 실행 시간이 최대 k * log 8 n 이라는 것이다. (k를 찾을 수 있으면 성립)\n== "),a("code",[t._v("log 8 n")]),t._v("은 "),a("code",[t._v("log n")]),t._v("의 빅 오가 될 수 있다")]),t._v(" "),a("p",[t._v("5log8n은 log2n보다 항상 크다! (우리는 k=5를 찾았다)\n그래서 O(log8n)은 log2n 이 될 수 있다.\nlog8n은 log2n의 빅오가 될 수 있다.\nn이 짱 크면 log 8 n이 아무리 커봤자 log n보다 클 수 없다")]),t._v(" "),a("h3",{attrs:{id:"빅-오메가-표기법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빅-오메가-표기법"}},[t._v("#")]),t._v(" 빅 오메가 표기법")]),t._v(" "),a("p",[t._v("빅 세타: 알고리즘이 "),a("em",[t._v("최소한")]),t._v(" 어느 정도 걸린다 라고 말하고 싶을 때")]),t._v(" "),a("p",[t._v("실행 시간이 "),a("code",[t._v("Ω(f(n))")]),t._v("라면 n이 충분히 클 때\n실행 시간은 어떤 상수 k에 대해 최소 "),a("code",[t._v("k * f(n)")])]),t._v(" "),a("blockquote",[a("p",[t._v("오메가랑 오랑 세타랑 결국 상/하만 다른거지 같은 값이 나오는거 아닌가?")])]),t._v(" "),a("h3",{attrs:{id:"점근적-표기법-퀴즈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#점근적-표기법-퀴즈"}},[t._v("#")]),t._v(" 점근적 표기법 퀴즈")]),t._v(" "),a("h4",{attrs:{id:"q1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1"}},[t._v("#")]),t._v(" Q1")]),t._v(" "),a("p",[t._v("n^k와 c^n함수 사이의 점근 관계는 무엇일까? (k>=1, c>1)")]),t._v(" "),a("ol",[a("li",[t._v("n^k == O(C^n)")]),t._v(" "),a("li",[t._v("n^k == Ω(C^n)")]),t._v(" "),a("li",[t._v("n^k == Θ(C^n)")])]),t._v(" "),a("h4",{attrs:{id:"a1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a1"}},[t._v("#")]),t._v(" A1")]),t._v(" "),a("p",[t._v("n^k는 다항함수, c^2는 지수함수. 다항함수가 지수함수보다 항상 천천히 증가한다(n의 값이 충분히 클 때).")]),t._v(" "),a("h4",{attrs:{id:"q2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2"}},[t._v("#")]),t._v(" Q2")]),t._v(" "),a("p",[a("code",[t._v("log 2 n")]),t._v(" 및 "),a("code",[t._v("log 8 n")]),t._v("함수들 사이의 점근 관계는 무엇일까?")]),t._v(" "),a("h4",{attrs:{id:"a2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a2"}},[t._v("#")]),t._v(" A2")]),t._v(" "),a("p",[t._v("둘 다 밑은 다르지만 다항함수적 증가를 보인다 (log 2 n이 log 8 n보다 빨리 증가(처음엔 낮음))\n근데 log 8 n = 1/log 2 8 * log n 이기 때문에 "),a("code",[t._v("log 8 n")]),t._v("은 단순히 "),a("code",[t._v("log n")]),t._v("에 상수를 곱한 것이라는 걸 알 수 있다.\n두 함수가 상수 곱의 차이만 날 때 항상 k를 찾아 상한선을 구할 수 있다.")]),t._v(" "),a("p",[t._v("즉 log 2 n은 O(log 8 n), Ω(log 8 n) Θ(log 8 n) 모두에 해당된다.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("log n")]),t._v("은 "),a("code",[t._v("O(log 8 n)")]),t._v("이다: (n이 충분히 클 때) log 8 n은 최소한 log n보다 크다")]),t._v(" "),a("li",[a("code",[t._v("log n")]),t._v("은 "),a("code",[t._v("Ω(log 8 n)")]),t._v("이다: (n이 충분히 클 때) log 8 n은 log n보다는 항상 작다")]),t._v(" "),a("li",[a("code",[t._v("log n")]),t._v("은 "),a("code",[t._v("Θ(log 8 n)")]),t._v("이다: (n이 충분히 클 때) log 8 n이 커지는 비율은 log n이다")])]),t._v(" "),a("h4",{attrs:{id:"q3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3"}},[t._v("#")]),t._v(" Q3")]),t._v(" "),a("p",[a("code",[t._v("log n ^ log 17")]),t._v("및 "),a("code",[t._v("log 17 ^ log n")]),t._v("함수들 사이의 점근 관계는 무엇일까?")]),t._v(" "),a("h4",{attrs:{id:"a3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a3"}},[t._v("#")]),t._v(" A3")]),t._v(" "),a("p",[t._v("모두 밑(2)이 같은 지수함수. log a^b = b * log a 이기 때문에 두 함수는 동일하다.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"선택-정렬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선택-정렬"}},[t._v("#")]),t._v(" 선택 정렬")]),t._v(" "),a("h3",{attrs:{id:"의사-코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#의사-코드"}},[t._v("#")]),t._v(" 의사 코드")]),t._v(" "),a("ol",[a("li",[t._v("가장 작은 카드를 찾아서 첫번째에 있는 카드랑 바꾼다")]),t._v(" "),a("li",[t._v("그 다음으로 작은 카드를 찾아서 두번째에 있는 카드랑 바꾼다")]),t._v(" "),a("li",[t._v("배열이 정렬될때까지 반복한다")])]),t._v(" "),a("h3",{attrs:{id:"분석하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#분석하기"}},[t._v("#")]),t._v(" 분석하기")]),t._v(" "),a("ul",[a("li",[t._v("swap함수는 매번 3줄의 코드가 수행된다 (상수)")]),t._v(" "),a("li",[t._v("indexOfMinimun함수는 여기 넘기는 array length만큼 코드가 수행된다.(n번)\n"),a("ul",[a("li",[t._v("길이가 8인 array에서 indexOfMinimum 처음 불리면 8번 계산, 두번째는 7번, 6번...")]),t._v(" "),a("li",[t._v("연산 회수는 8+7+6+...+1 = 36")])])]),t._v(" "),a("li",[t._v("선택 정렬에 소요되는 총 실행 시간은 3부분\n"),a("ul",[a("li",[a("ol",[a("li",[a("strong",[t._v("indexOfMinimum")])])]),t._v(" "),a("ul",[a("li",[t._v("1+2+...+n 이니까 다 더하면 (n+1)(n/2)인데 이는 n^2/2 + n/2 이다. 즉 가장 높은 차수로 "),a("code",[t._v("Θ(n^2)")])])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("swap")])]),t._v(" "),a("ul",[a("li",[t._v("상수. "),a("code",[t._v("Θ(n)")])])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("나머지 루프의 selectionSort 함수(다른 함수 실행, 비교 등)")])]),t._v(" "),a("ul",[a("li",[t._v("상수. "),a("code",[t._v("Θ(n)")])])])])])]),t._v(" "),a("li",[t._v("즉, 선택 정렬은 "),a("code",[t._v("Θ(n^2)")])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"quiz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quiz"}},[t._v("#")]),t._v(" QUIZ")]),t._v(" "),a("ul",[a("li",[t._v("빅 세타를 왜 쓰지? 빅 세타의 정의")]),t._v(" "),a("li",[t._v("빅 세타 그래프 그려보기, 순서 말하기")]),t._v(" "),a("li",[t._v("빅 오와 빅 세타의 차이점")])])])}),[],!1,null,null,null);s.default=r.exports}}]);