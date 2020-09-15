(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{413:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-render-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-render-props"}},[t._v("#")]),t._v(" React: Render props")]),t._v(" "),a("p",[t._v("Component를 재사용하기 위해 사용하는 기법(다른건 HOC(High Order Component)가 있다).\n말그대로 "),a("code",[t._v("render")]),t._v("를 "),a("code",[t._v("props")]),t._v("로 사용하는거임.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("<DataPropvider render={data => (\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello {data.target}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n)} />\n")])])]),a("p",[t._v("예를 들어 "),a("code",[t._v("<MouseTracker />")]),t._v("라는 컴포넌트에서 마우스 위치를 계산하는 로직을 짰다고 하자. 근데 다른 컴포넌트에서 이걸 쓰고 싶다면?")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("class MouseTracker extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleMouseMove = this.handleMouseMove.bind(this);\n    this.state = { x: 0, y: 0 };\n  }\n\n  handleMouseMove(event) {\n    this.setState({\n      x: event.clientX,\n      y: event.clientY\n    });\n  }\n\n  render() {\n    return (\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("height:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("'100%'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("}}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMouseMove")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{this.handleMouseMove}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Move the mouse around!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("The current mouse position is ({this.state.x}, {this.state.y})"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    );\n  }\n}\n")])])]),a("h3",{attrs:{id:"render-prop으로-재사용가능한-component-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-prop으로-재사용가능한-component-만들기"}},[t._v("#")]),t._v(" Render prop으로 재사용가능한 component 만들기")]),t._v(" "),a("ul",[a("li",[t._v("나의 목표: 마우스를 움직일때 거기에 고양이 이미지가 달라붙는 앱")]),t._v(" "),a("li",[t._v("Component\n"),a("ul",[a("li",[t._v("Mouse: 마우스 위치를 추적해서 x, y state에 위치 저장. 다만 그냥 render하지 않고 props로 render할거를 받아서 x, y state를 넘겨줌")]),t._v(" "),a("li",[t._v("Cat: mouse 데이터를 props로 받아 고양이 이미지를 해당 위치에 보여주는 단순한 컴포넌트")]),t._v(" "),a("li",[t._v("MouseTracker: "),a("code",[t._v("Mouse")]),t._v(" 컴포넌트에 render prop으로 "),a("code",[t._v("Cat")]),t._v(" 컴포넌트를 넘긴다. 다만 함수로 넘기는데 인자를 Cat에 mouse란 이름으로 넘긴다. 그러면 Mouse컴포넌트의 state가 mouse란 이름의 prop로 넘어간다.")])])])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("class Cat extends React.Component {\n  render() {\n    const mouse = this.props.mouse;\n    return (\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/cat.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("position:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("'absolute',")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("left:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mouse.x,")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("top:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mouse.y")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("}}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    );\n  }\n}\n\nclass Mouse extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleMouseMove = this.handleMouseMove.bind(this);\n    this.state = { x: 0, y: 0 };\n  }\n\n  handleMouseMove(event) {\n    this.setState({\n      x: event.clientX,\n      y: event.clientY\n    });\n  }\n\n  render() {\n    return (\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("height:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("'100%'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("}}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMouseMove")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{this.handleMouseMove}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n        {/*\n          Instead of providing a static representation of what "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Mouse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" renders,\n          use the `render` prop to dynamically determine what to render.\n        */}\n        {this.props.render(this.state)}\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    );\n  }\n}\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 메인 컴포넌트.   --\x3e")]),t._v("\nclass MouseTracker extends React.Component {\n  render() {\n    return (\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Move the mouse around!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        <Mouse render={mouse => (\n          "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mouse")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{mouse}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        )}/>\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    );\n  }\n}\n")])])]),a("ul",[a("li",[t._v("children이란 이름의 prop으로 넘겨도 된다. 다만 헷갈리지 않게 children의 PropTypes를 "),a("code",[t._v("PropTypes.func.isRequired")]),t._v("으로 잡아줄 것.")])]),t._v(" "),a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),a("ul",[a("li",[t._v("https://reactjs.org/docs/render-props.html")]),t._v(" "),a("li",[t._v("https://medium.com/@la.place/react-render-props-pattern-1c53a6b9645c")])])])}),[],!1,null,null,null);s.default=e.exports}}]);