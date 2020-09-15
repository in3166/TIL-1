(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{389:function(n,e,t){"use strict";t.r(e);var a=t(42),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"swift-언어-개발문서"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swift-언어-개발문서"}},[n._v("#")]),n._v(" Swift 언어 개발문서")]),n._v(" "),t("h2",{attrs:{id:"swift-둘러보기져"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swift-둘러보기져"}},[n._v("#")]),n._v(" Swift 둘러보기져")]),n._v(" "),t("h3",{attrs:{id:"변수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#변수"}},[n._v("#")]),n._v(" 변수")]),n._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('var myVariable = 42\nlet Pi = 3.14\nlet explicitDouble: Double = 70\nlet label = "pi is"\nlet piLabel = label + String(Pi)\n\nlet apples = 3\nlet oranges = 5\nlet fruitDesc = "I have \\(apples + oranges) fruits."\n\n//배열, 딕셔너리\nvar shopList = [\'catfish\', \'water\', \'tulips\'];\nvar ageDic = [\n    "Jay":"22",\n    "Ingeeks":"25"\n]\nageDic["Dajung"] = "1"\n\nlet emptyArray = String[]()\nlet emptyArray2 = []\nlet emptyDic = Dictionary<String, Float>()\nlet emptyDic2 = [:]\n')])])]),t("h3",{attrs:{id:"흐름-제어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#흐름-제어"}},[n._v("#")]),n._v(" 흐름 제어")]),n._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('let scoreList = [12, 23, 34]\nvar teamScore = 0\nfor score in scoreList {\n    if score>20 {\n        teamScore += 3\n    } else {\n        teamScore += 1\n    }\n}\n\n//값의 타입 뒤에 ?를 붙이면 옵셔널 값. ?이 없으면 nil이 들어가지 않는다.\nvar optionalString: String? = "Hello"\noptionalString = nil\n\nvar optionalName: String? = "Jay"\nvar greeting = "Hello"\nif let name = optionalName { //옵션값이 nil이면 조건문 false로 안들어감.\n    greeting = "Hello, \\(name)"\n}\n\n//switch. break키워드 안써도 된다.\nlet vagetable = "red pepper"\nswitch vegetable {\n    case "vege1":\n        let vegeCmt = "This is vege 1"\n    case "vege2", "vege3":\n        let vegeCmt = "This is haha"\n    case let x where x.hasSuffix("pepper"):\n        let vegeCmt = "This is pepper"\n    default:\n        let vegeCmt = "This is default"\n}\n\n//for-in\nlet interestingNumbers = [\n  "Prime": [2, 3, 5, 7, 11, 13],\n  "Fibonacci": [1, 1, 2, 3, 5, 8],\n  "Square": [1, 4, 9, 16, 25],\n]\nvar largest = 0\nfor (kind, numbers) in interestingNumbers {\n  for number in numbers {\n    if number > largest {\n       largest = number\n    }\n  }\n}\n\n//while, do\nvar n = 2\nwhile n < 100 {\n    n = n * 2\n}\nn\n\nvar m = 2\ndo {\n    m = m * 2\n} while m < 100\n\n')])])]),t("p",[n._v("..을 사용해서 범위를 지정하면 제일 맨 마지막 값은 제외됩니다. 반면에 ...을 사용하면 양쪽 끝의 값을 모두 범위에 포함하게 됩니다.")]),n._v(" "),t("h3",{attrs:{id:"함수와-클로져"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#함수와-클로져"}},[n._v("#")]),n._v(" 함수와 클로져")]),n._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//함수 안의 함수\nfunc makeIncrementer() -> (Int -> Int) {\n  func addOne(number: Int) -> Int {\n    return 1 + number\n  }\n  return addOne\n}\nvar increment = makeIncrementer()\nincrement(7)\n\n//인자를 함수로 받기\nfunc hasAnyMatches(list: Int[], condition: Int -> Bool) -> Bool {\n      for item in list {\n          if condition(item) {\n              return true\n          }\n      }\n      return false\n  }\n  func lessThanTen(number: Int) -> Bool {\n      return number < 10\n  }\n  var numbers = [20, 19, 7, 12]\n  hasAnyMatches(numbers, lessThanTen)\n\n//실제로 함수는 클로저의 특별한 예.\nnumbers.map({\n  (number: Int) -> Int in\n  let result = 3 * number\n  return result\n})\n")])])]),t("h2",{attrs:{id:"refer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[n._v("#")]),n._v(" Refer")]),n._v(" "),t("p",[n._v("http://swift.leantra.kr/#a-swift-tour")])])}),[],!1,null,null,null);e.default=r.exports}}]);