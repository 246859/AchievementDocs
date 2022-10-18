(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{357:function(s,t,a){"use strict";a.r(t);var n=a(11),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"睡眠成就"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#睡眠成就"}},[s._v("#")]),s._v(" 睡眠成就")]),s._v(" "),t("p",[s._v("由于插件是用简单的脚本语言写的，只能使用提供的API，无法访问BDS底层。在作者编写插件的那会，也就是LL版本为"),t("code",[s._v("2.7.0")]),s._v("那时候，提供的事件监听API只有"),t("code",[s._v("onBedEnter")]),s._v("，这个事件只能判断玩家是否上床，而且判定条件极为宽松，例如在白天玩家是无法睡觉的，玩家点击床时，即便距离不够，游戏内会提示无法睡觉或者床太远了，但是玩家依旧可以进入到这个事件中，也就是说被判定为上床，如果仅仅只是这样就实现了睡眠成就显然非常的不合理，经过了一番捣鼓，通过模拟线程睡眠和时间监测也还是实现了玩家睡醒后判定的效果，即便JS只是一门单线程的语言，算是曲线救国。")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[t("strong",[s._v("此种成就类型不支持自定义")]),s._v("。")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("名称")]),s._v("："),t("code",[s._v("睡眠成就")])]),s._v(" "),t("li",[t("strong",[s._v("类型名")]),s._v("："),t("code",[s._v("sleep")])]),s._v(" "),t("li",[t("strong",[s._v("默认开启")]),s._v("："),t("code",[s._v("true")])]),s._v(" "),t("li",[t("strong",[s._v("传入值")]),s._v("："),t("code",[s._v("无")])]),s._v(" "),t("li",[t("strong",[s._v("词条数量")]),s._v("："),t("code",[s._v("5")])]),s._v(" "),t("li",[t("strong",[s._v("json")]),s._v("：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sleep"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"睡眠成就"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"details"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"regx"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"云端之梦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云端之梦"}},[s._v("#")]),s._v(" 云端之梦")]),s._v(" "),t("ul",[t("li",[s._v("触发值："),t("code",[s._v("cloudDream")])]),s._v(" "),t("li",[s._v("词条："),t("code",[s._v("云端之梦")])]),s._v(" "),t("li",[s._v("条件："),t("code",[s._v("在云层之上睡一晚上")])]),s._v(" "),t("li",[s._v("默认开启："),t("code",[s._v("true")])]),s._v(" "),t("li",[s._v("json：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cloudDream"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"云端之梦"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在云层之上睡一晚上"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"深渊之息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深渊之息"}},[s._v("#")]),s._v(" 深渊之息")]),s._v(" "),t("ul",[t("li",[s._v("触发值："),t("code",[s._v("undergroundDream")])]),s._v(" "),t("li",[s._v("词条："),t("code",[s._v("深渊之息")])]),s._v(" "),t("li",[s._v("条件："),t("code",[s._v("在洞穴层睡一晚上")])]),s._v(" "),t("li",[s._v("默认开启："),t("code",[s._v("true")])]),s._v(" "),t("li",[s._v("json：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"undergroundDream"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"深渊之息"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在洞穴层睡一晚上"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"精神饱满"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#精神饱满"}},[s._v("#")]),s._v(" 精神饱满")]),s._v(" "),t("ul",[t("li",[s._v("触发值："),t("code",[s._v("normalDream")])]),s._v(" "),t("li",[s._v("词条："),t("code",[s._v("精神饱满")])]),s._v(" "),t("li",[s._v("条件："),t("code",[s._v("安全的睡一晚上")])]),s._v(" "),t("li",[s._v("默认开启："),t("code",[s._v("true")])]),s._v(" "),t("li",[s._v("json：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"normalDream"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"精神饱满"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"安全的睡一晚上"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"屋漏偏逢连夜雨"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#屋漏偏逢连夜雨"}},[s._v("#")]),s._v(" 屋漏偏逢连夜雨")]),s._v(" "),t("ul",[t("li",[s._v("触发值："),t("code",[s._v("rainDream")])]),s._v(" "),t("li",[s._v("词条："),t("code",[s._v("屋漏偏逢连夜雨")])]),s._v(" "),t("li",[s._v("条件："),t("code",[s._v("在雨中睡一晚上")])]),s._v(" "),t("li",[s._v("默认开启："),t("code",[s._v("true")])]),s._v(" "),t("li",[s._v("json：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rainDream"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"屋漏偏逢连夜雨"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在雨中睡一晚上"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"冰雪之梦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#冰雪之梦"}},[s._v("#")]),s._v(" 冰雪之梦")]),s._v(" "),t("ul",[t("li",[s._v("触发值："),t("code",[s._v("snowDream")])]),s._v(" "),t("li",[s._v("词条："),t("code",[s._v("冰雪之梦")])]),s._v(" "),t("li",[s._v("条件："),t("code",[s._v("在雪中睡一晚上")])]),s._v(" "),t("li",[s._v("默认开启："),t("code",[s._v("true")])]),s._v(" "),t("li",[s._v("json：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"snowDream"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"冰雪之梦"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在雪中睡一晚上"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);