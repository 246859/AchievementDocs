(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{332:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义成就"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义成就"}},[t._v("#")]),t._v(" 自定义成就")]),t._v(" "),s("p",[t._v("倘若需要自定义逻辑时，需要自行监测一些数据的变化，自行做成就的逻辑处理，当全部处理完成时，只需要根据成就类型，选择对应的接口，")]),t._v(" "),s("p",[t._v("提供对应的参数。而这之后的成就处理，展示，数据保存等等工作全部都只需要交给插件核心去完成。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("需要注意的是，调用接口后，一切的处理都是异步的。很显然的是在LL的RPC中不支持Promise对象，所以一旦调用了这些接口，你也无法获取它的状态，无法获取它的结果。")])]),t._v(" "),s("h2",{attrs:{id:"字符串成就接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串成就接口"}},[t._v("#")]),t._v(" 字符串成就接口")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringAchievementImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("返回值：")]),t._v(" "),s("li",[t._v("参数：\n"),s("ul",[s("li",[s("code",[t._v("xuid: string")]),t._v("  - 玩家xuid")]),t._v(" "),s("li",[s("code",[t._v("type: string")]),t._v(" - 成就类型")]),t._v(" "),s("li",[s("code",[t._v("key: string")]),t._v(" - 触发值")])])])]),t._v(" "),s("h2",{attrs:{id:"数字成就接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字成就接口"}},[t._v("#")]),t._v(" 数字成就接口")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("numberAchievementImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("multipart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("返回值：")]),t._v(" "),s("li",[t._v("参数：\n"),s("ul",[s("li",[s("code",[t._v("xuid: string")]),t._v("  - 玩家xuid")]),t._v(" "),s("li",[s("code",[t._v("type: string")]),t._v(" - 成就类型")]),t._v(" "),s("li",[s("code",[t._v("num: Integer")]),t._v("  - 变化后的数值")]),t._v(" "),s("li",[s("code",[t._v("multipart: boolean")]),t._v("  - 多重触发（会将最后一个符合条件包括之前的所有词条全部处理）")])])])]),t._v(" "),s("h2",{attrs:{id:"特殊成就接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊成就接口"}},[t._v("#")]),t._v(" 特殊成就接口")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("specialAchievementImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("isNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" multipart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("返回值：")]),t._v(" "),s("li",[t._v("参数：\n"),s("ul",[s("li",[s("code",[t._v("xuid: string")]),t._v("  - 玩家xuid")]),t._v(" "),s("li",[s("code",[t._v("type: string")]),t._v(" - 成就类型")]),t._v(" "),s("li",[s("code",[t._v("num: Integer")]),t._v("  - 变化后的数值")]),t._v(" "),s("li",[s("code",[t._v("isNum: boolean")]),t._v("：- 是否为数字类型成就")]),t._v(" "),s("li",[s("code",[t._v("multipart: boolean")]),t._v("  - 多重触发（会将最后一个符合条件包括之前的所有词条全部处理）")])])])]),t._v(" "),s("br"),t._v(" "),s("p",[s("strong",[t._v("关于多重触发的解释:")])]),t._v(" "),s("p",[t._v("多重触发是数字成就特有的概念，与之相反的是单重触发。")]),t._v(" "),s("p",[s("strong",[t._v("单重触发")]),t._v("：数字成就在触发时，会按顺序遍历该类型下的所有布尔表达式，遇到第一个满足条件时就会退出循环")]),t._v(" "),s("p",[s("strong",[t._v("多重触发")]),t._v("：数字成就在触发时，会按顺序遍历该类型下所有的布尔表达式，遇到第一个不满足条件时退出循环。")]),t._v(" "),s("p",[t._v("通俗来讲就是，现在有设置经济奖励 500,2000,4000,10000，传入的触发值是5000，单重触发在遇到500时就会退出循环，将500作为成就词条的key值返回给事件调度器。而多重触发，会将500，2000，4000，会返回一个[500,2000,4000]数组给事件调度器。那么最后的效果就是，单重触发明明是5000的经济但是给我显示了500的成就，多重触发则会依次显示500，2000，4000的成就。这种情况下明显多重触发会更好，不过单重触发也有其适用的情况。")])])}),[],!1,null,null,null);s.default=e.exports}}]);