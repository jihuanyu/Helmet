(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1006:function(t,n,e){"use strict";var o={data:function(){return{showFlag:!1,title:"",text:[]}},mounted:function(){var t=this;this.$bus.$on("OPEN_ONEPAGER",(function(data){t.showFlag=data.showFlag,t.title=data.title,t.text=data.text})),this.$bus.$on("CLOSE_ONEPAGER",(function(){t.showFlag=!1}))},methods:{closeOnepager:function(){this.$bus.$emit("CLOSE_ONEPAGER")}}},r=(e(987),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"onepager"}},[t.showFlag?e("div",{staticClass:"onepager_mask",on:{touchmove:function(t){t.preventDefault()}}},[e("div",{staticClass:"onepager_wrapper"},[e("div",{staticClass:"title"},[e("i",{on:{click:t.closeOnepager}})]),t._v(" "),e("h3",[e("span",[t._v("\n          "+t._s(this.title)+"\n        ")])]),t._v(" "),e("div",{staticClass:"content"},[e("section",[e("div",t._l(t.text,(function(n,o){return e("p",{key:o},[t._v(t._s(n))])})),0)]),t._v(" "),e("div",{staticClass:"bg"})])])]):t._e()])}),[],!1,null,"dd05dbd8",null);n.a=component.exports},1061:function(t,n,e){var content=e(1341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("039a3f02",content,!0,{sourceMap:!1})},1062:function(t,n,e){var content=e(1346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("40b86252",content,!0,{sourceMap:!1})},1339:function(t,n,e){t.exports=e.p+"img/hcctCoin.6522f91.png"},1340:function(t,n,e){"use strict";e(1061)},1341:function(t,n,e){var o=e(25),r=e(67),l=e(957),d=e(1342),c=e(960),f=e(1343),x=e(1344);n=o(!1);var h=r(l),m=r(d),_=r(c),v=r(f),w=r(x);n.push([t.i,".loading_pic[data-v-37503afb]{display:block;width:24px;height:24px;background-image:url("+h+");background-repeat:no-repeat;background-size:cover;-webkit-animation:loading 2s linear 0s infinite;animation:loading 2s linear 0s infinite}@media screen and (min-width:750px){.long_burn[data-v-37503afb]{width:560px;height:600px;background-image:url("+m+");background-repeat:no-repeat;background-size:100% 100%;margin-bottom:100px;margin-top:60px;position:relative;padding:90px 110px 40px 30px}.long_burn>.coin[data-v-37503afb]{width:64px;height:64px;position:absolute;left:50%;top:-30px;transform:translateX(-50%)}.long_burn>.title[data-v-37503afb]{height:50px;display:flex;justify-content:space-between}.long_burn>.title>.pool_detail h3[data-v-37503afb]{font-size:20px;color:#121212;line-height:25px;display:flex;align-items:center}.long_burn>.title>.pool_detail h3 i[data-v-37503afb]{display:inline-block;width:16px;height:16px;background-image:url("+_+");background-repeat:no-repeat;background-size:100% 100%;margin-left:3px;cursor:pointer}.long_burn>.title>.pool_detail>span[data-v-37503afb]{font-size:14px;color:#9b9b9b;display:flex;align-items:center;margin-top:4px}.long_burn>.title>.pool_detail>span span[data-v-37503afb]{font-size:14px;font-weight:700;color:#121212}.long_burn>.title>.pool_detail>span img[data-v-37503afb]{width:24px;height:24px;margin-left:4px}.long_burn>.title>.pool_time[data-v-37503afb]{padding-top:8px;text-align:right}.long_burn>.title>.pool_time>h3[data-v-37503afb]{font-size:12px;color:#fff;padding:2px 5px;background:#ff9600;border-radius:3px;font-weight:400}.long_burn>.title>.pool_time span[data-v-37503afb]{display:flex;align-items:center;justify-content:flex-end;margin-top:4px}.long_burn>.title>.pool_time span i[data-v-37503afb]{min-width:16px;min-height:18px;display:inline-block;padding:2px 1px;background:#ffe3bb;font-size:12px;font-weight:600;color:#22292f}.long_burn>.title>.pool_time span b[data-v-37503afb]{font-size:12px;margin:0 4px;font-weight:600}.long_burn>.text[data-v-37503afb]{display:flex;justify-content:space-between;margin-top:20px}.long_burn>.text>p[data-v-37503afb]{display:flex;flex-direction:column}.long_burn>.text>p[data-v-37503afb]:last-child{text-align:right}.long_burn>.text>p>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn>.text>p>span[data-v-37503afb]:nth-of-type(2){font-size:14px;font-weight:700;color:#121212;margin-top:4px}.long_burn>.process[data-v-37503afb]{display:flex;flex-direction:column;margin-top:30px}.long_burn>.process>.name[data-v-37503afb]{padding:0 4px;display:flex;justify-content:space-between;align-items:center}.long_burn>.process>.name>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn>.process>.name>span[data-v-37503afb]:nth-of-type(2){font-size:12px;color:#000}.long_burn>.process>.control[data-v-37503afb]{width:100%}.long_burn>.process>.control .control_wrap[data-v-37503afb]{margin-top:10px;width:100%;height:14px;border-radius:6px;background:#fff}.long_burn>.process>.control .control_wrap .control_real[data-v-37503afb]{height:100%;border-radius:6px;background:#ff6400;position:relative}.long_burn>.process>.control .control_wrap .control_real .fire[data-v-37503afb]{display:block;width:20px;height:20px;background-image:url("+v+");background-repeat:no-repeat;background-size:100% 100%;position:absolute;top:100%;right:0}.long_burn .button_wrap[data-v-37503afb]{width:100%;height:40px;display:flex;background:#fff7ec;border-radius:10px;align-items:center;padding:0 3px;margin-top:42px}.long_burn .button_wrap button[data-v-37503afb]{flex:1;height:34px;border-radius:10px;font-size:14px;font-weight:600;background:#fff7ec;color:#121212}.long_burn .button_wrap .active[data-v-37503afb]{background:#ff9600;color:#fff}.long_burn .burn_wrap[data-v-37503afb]{margin-top:20px}.long_burn .burn_wrap>p[data-v-37503afb]{display:flex;justify-content:space-between;font-size:12px;color:#9b9b9b}.long_burn .burn_wrap>.input[data-v-37503afb]{margin-top:8px;width:100%;height:40px;position:relative;display:flex;align-items:center}.long_burn .burn_wrap>.input input[data-v-37503afb]{width:100%;height:100%;background:transparent;padding:0 150px 0 12px;font-size:14px;color:#9b9b9b;border:1px solid #121212;border-radius:6px}.long_burn .burn_wrap>.input input[data-v-37503afb]:focus{border:1px solid #ff9600}.long_burn .burn_wrap>.input p[data-v-37503afb]{position:absolute;right:12px;display:flex;align-items:center}.long_burn .burn_wrap>.input p span[data-v-37503afb]{font-size:14px;font-weight:600;color:#121212;margin-right:12px}.long_burn .burn_wrap>.input p i[data-v-37503afb]{display:inline-block;padding:6px 8px;border-radius:6px;border:1px solid #ff9600;font-size:12px;color:#ff9600;margin-left:12px;cursor:pointer}.long_burn .burn_wrap .text[data-v-37503afb]{display:flex;justify-content:space-between;margin-top:14px}.long_burn .burn_wrap .text>p[data-v-37503afb]{display:flex;flex-direction:column}.long_burn .burn_wrap .text>p[data-v-37503afb]:last-child{text-align:right}.long_burn .burn_wrap .text>p>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn .burn_wrap .text>p>span[data-v-37503afb]:nth-of-type(2){font-size:14px;font-weight:700;color:#121212;margin-top:10px}.long_burn .burn_wrap .submit_burn[data-v-37503afb]{width:100%;height:40px;background:#121212;border-radius:6px;font-size:16px;font-weight:600;color:#fff;margin-top:30px;display:flex;align-items:center;justify-content:center}.long_burn .burn_wrap .submit_burn[data-v-37503afb]:hover{background:#2c2c2c}.long_burn .claim_wrap[data-v-37503afb]{margin-top:42px}.long_burn .claim_wrap>p[data-v-37503afb]{display:flex;justify-content:space-between;font-size:12px;color:#9b9b9b}.long_burn .claim_wrap>.input[data-v-37503afb]{width:100%;height:40px;position:relative;display:flex;align-items:center}.long_burn .claim_wrap>.input input[data-v-37503afb]{width:100%;height:100%;background:transparent;padding:0 150px 0 12px;font-size:14px;color:#9b9b9b;border:1px solid #121212;border-radius:6px}.long_burn .claim_wrap>.input input[data-v-37503afb]:focus{border:1px solid #ff9600}.long_burn .claim_wrap>.input p[data-v-37503afb]{position:absolute;right:12px;display:flex;align-items:center}.long_burn .claim_wrap>.input p span[data-v-37503afb]{font-size:14px;font-weight:600;color:#121212;margin-right:12px}.long_burn .claim_wrap>.input p i[data-v-37503afb]{display:inline-block;padding:6px 8px;border-radius:6px;border:1px solid #ff9600;font-size:12px;color:#ff9600;margin-left:12px;cursor:pointer}.long_burn .claim_wrap .text[data-v-37503afb]{display:flex;justify-content:flex-start;margin-top:14px}.long_burn .claim_wrap .text>p[data-v-37503afb]{display:flex;flex-direction:column}.long_burn .claim_wrap .text>p>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn .claim_wrap .text>p>span[data-v-37503afb]:nth-of-type(2){font-size:14px;font-weight:700;color:#121212;margin-top:10px}.long_burn .claim_wrap .submit_burn[data-v-37503afb]{width:100%;height:40px;background:#121212;border-radius:6px;font-size:16px;font-weight:600;color:#fff;margin-top:30px;display:flex;align-items:center;justify-content:center}.long_burn .claim_wrap .submit_burn[data-v-37503afb]:hover{background:#2c2c2c}}@media screen and (max-width:750px){.long_burn[data-v-37503afb]{background-image:url("+w+");background-repeat:no-repeat;background-size:100% 100%;margin-bottom:50px;margin-top:30px;position:relative;padding:14% 14% 20px 20px;min-width:320px;min-height:470px}.long_burn>.coin[data-v-37503afb]{width:64px;height:64px;position:absolute;left:50%;top:-45px;transform:translateX(-50%)}.long_burn>.title[data-v-37503afb]{height:50px;display:flex;justify-content:space-between}.long_burn>.title>.pool_detail h3[data-v-37503afb]{font-size:18px;color:#121212;line-height:25px;display:flex;align-items:center}.long_burn>.title>.pool_detail h3 i[data-v-37503afb]{display:inline-block;width:16px;height:16px;background-image:url("+_+");background-repeat:no-repeat;background-size:100% 100%;margin-left:3px;cursor:pointer}.long_burn>.title>.pool_detail>span[data-v-37503afb]{font-size:14px;color:#9b9b9b;display:flex;align-items:center;margin-top:4px}.long_burn>.title>.pool_detail>span span[data-v-37503afb]{font-size:14px;font-weight:700;color:#121212}.long_burn>.title>.pool_detail>span img[data-v-37503afb]{width:24px;height:24px;margin-left:4px}.long_burn>.title>.pool_time[data-v-37503afb]{padding-top:8px;text-align:right}.long_burn>.title>.pool_time>h3[data-v-37503afb]{font-size:12px;color:#fff;padding:2px 5px;background:#ff9600;border-radius:3px;font-weight:400}.long_burn>.title>.pool_time span[data-v-37503afb]{display:flex;align-items:center;justify-content:flex-end;margin-top:4px}.long_burn>.title>.pool_time span i[data-v-37503afb]{display:inline-block;padding:2px 1px;background:#ffe3bb;font-size:12px;font-weight:600;color:#22292f}.long_burn>.title>.pool_time span b[data-v-37503afb]{margin:0 2px;font-weight:600}.long_burn>.text[data-v-37503afb]{display:flex;justify-content:space-between;margin-top:8px}.long_burn>.text>p[data-v-37503afb]{display:flex;flex-direction:column}.long_burn>.text>p[data-v-37503afb]:last-child{text-align:right}.long_burn>.text>p>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn>.text>p>span[data-v-37503afb]:nth-of-type(2){font-size:14px;font-weight:700;color:#121212;margin-top:4px}.long_burn>.process[data-v-37503afb]{display:flex;flex-direction:column;margin-top:15px}.long_burn>.process>.name[data-v-37503afb]{padding:0 4px;display:flex;justify-content:space-between;align-items:center}.long_burn>.process>.name>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn>.process>.name>span[data-v-37503afb]:nth-of-type(2){font-size:12px;color:#000}.long_burn>.process>.control[data-v-37503afb]{width:100%}.long_burn>.process>.control .control_wrap[data-v-37503afb]{margin-top:10px;width:100%;height:14px;border-radius:6px;background:#fff}.long_burn>.process>.control .control_wrap .control_real[data-v-37503afb]{height:100%;border-radius:6px;background:#ff6400;position:relative}.long_burn>.process>.control .control_wrap .control_real .fire[data-v-37503afb]{display:block;width:20px;height:20px;background-image:url("+v+");background-repeat:no-repeat;background-size:100% 100%;position:absolute;top:100%;right:0}.long_burn .button_wrap[data-v-37503afb]{width:100%;height:40px;display:flex;background:#fff7ec;border-radius:10px;align-items:center;padding:0 3px;margin-top:20px}.long_burn .button_wrap button[data-v-37503afb]{flex:1;height:34px;border-radius:10px;font-size:14px;font-weight:600;background:#fff7ec;color:#121212}.long_burn .button_wrap .active[data-v-37503afb]{background:#ff9600;color:#fff}.long_burn .burn_wrap[data-v-37503afb]{margin-top:10px}.long_burn .burn_wrap>p[data-v-37503afb]{display:flex;justify-content:space-between;font-size:12px;color:#9b9b9b}.long_burn .burn_wrap>.input[data-v-37503afb]{margin-top:4px;width:100%;height:40px;position:relative;display:flex;align-items:center}.long_burn .burn_wrap>.input input[data-v-37503afb]{width:100%;height:100%;background:transparent;padding:0 150px 0 12px;font-size:14px;color:#9b9b9b;border:1px solid #121212;border-radius:6px}.long_burn .burn_wrap>.input input[data-v-37503afb]:focus{border:1px solid #ff9600}.long_burn .burn_wrap>.input p[data-v-37503afb]{position:absolute;right:12px;display:flex;align-items:center}.long_burn .burn_wrap>.input p span[data-v-37503afb]{font-size:14px;font-weight:600;color:#121212;margin-right:12px}.long_burn .burn_wrap>.input p i[data-v-37503afb]{display:inline-block;padding:6px 8px;border-radius:6px;border:1px solid #ff9600;font-size:12px;color:#ff9600;margin-left:12px;cursor:pointer}.long_burn .burn_wrap .text[data-v-37503afb]{display:flex;justify-content:space-between;margin-top:8px}.long_burn .burn_wrap .text>p[data-v-37503afb]{display:flex;flex-direction:column}.long_burn .burn_wrap .text>p[data-v-37503afb]:last-child{text-align:right}.long_burn .burn_wrap .text>p>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn .burn_wrap .text>p>span[data-v-37503afb]:nth-of-type(2){font-size:14px;font-weight:700;color:#121212;margin-top:5px}.long_burn .burn_wrap .submit_burn[data-v-37503afb]{width:100%;height:40px;background:#121212;border-radius:6px;font-size:16px;font-weight:600;color:#fff;margin-top:15px;display:flex;align-items:center;justify-content:center}.long_burn .burn_wrap .submit_burn[data-v-37503afb]:hover{background:#2c2c2c}.long_burn .claim_wrap[data-v-37503afb]{margin-top:30px}.long_burn .claim_wrap>p[data-v-37503afb]{display:flex;justify-content:space-between;font-size:12px;color:#9b9b9b}.long_burn .claim_wrap>.input[data-v-37503afb]{width:100%;height:40px;position:relative;display:flex;align-items:center}.long_burn .claim_wrap>.input input[data-v-37503afb]{width:100%;height:100%;background:transparent;padding:0 150px 0 12px;font-size:14px;color:#9b9b9b;border:1px solid #121212;border-radius:6px}.long_burn .claim_wrap>.input input[data-v-37503afb]:focus{border:1px solid #ff9600}.long_burn .claim_wrap>.input p[data-v-37503afb]{position:absolute;right:12px;display:flex;align-items:center}.long_burn .claim_wrap>.input p span[data-v-37503afb]{font-size:14px;font-weight:600;color:#121212;margin-right:12px}.long_burn .claim_wrap>.input p i[data-v-37503afb]{display:inline-block;padding:6px 8px;border-radius:6px;border:1px solid #ff9600;font-size:12px;color:#ff9600;margin-left:12px;cursor:pointer}.long_burn .claim_wrap .text[data-v-37503afb]{display:flex;justify-content:flex-start;margin-top:8px}.long_burn .claim_wrap .text>p[data-v-37503afb]{display:flex;flex-direction:column}.long_burn .claim_wrap .text>p>span[data-v-37503afb]:first-of-type{font-size:12px;color:#9b9b9b}.long_burn .claim_wrap .text>p>span[data-v-37503afb]:nth-of-type(2){font-size:14px;font-weight:700;color:#121212;margin-top:5px}.long_burn .claim_wrap .submit_burn[data-v-37503afb]{width:100%;height:40px;background:#121212;border-radius:6px;font-size:16px;font-weight:600;color:#fff;margin-top:15px;display:flex;align-items:center;justify-content:center}.long_burn .claim_wrap .submit_burn[data-v-37503afb]:hover{background:#2c2c2c}}",""]),t.exports=n},1342:function(t,n,e){t.exports=e.p+"img/burnbg.0b1ffe9.png"},1343:function(t,n,e){t.exports=e.p+"img/fire.cfcb3fc.png"},1344:function(t,n,e){t.exports=e.p+"img/burn_h5bg.f97e04c.png"},1345:function(t,n,e){"use strict";e(1062)},1346:function(t,n,e){(n=e(25)(!1)).push([t.i,"@media screen and (min-width:750px){.burn_container[data-v-5cfa517c]{background:#fff;width:1200px;margin:20px auto 0}.burn_text[data-v-5cfa517c]{text-align:center;margin-top:60px}.burn_text h3[data-v-5cfa517c]{font-size:34px;font-weight:700;color:#121212}.burn_text p[data-v-5cfa517c]{margin-top:20px;font-size:16px;color:#787878}.burn_wrap[data-v-5cfa517c]{display:flex;align-items:center}.burn_wrap .long_burn[data-v-5cfa517c]{margin:60px auto 100px}}@media screen and (max-width:750px){.burn_text[data-v-5cfa517c]{padding-left:24px;margin-top:30px}.burn_text h3[data-v-5cfa517c]{font-size:24px;width:267px;font-weight:700;color:#121212;margin-bottom:10px}.burn_text p[data-v-5cfa517c]{width:309px;font-size:14px;color:#787878;line-height:22px}.burn_wrap[data-v-5cfa517c]{display:flex;align-items:center}.burn_wrap .long_burn[data-v-5cfa517c]{margin-top:56px}}",""]),t.exports=n},1500:function(t,n,e){"use strict";e.r(n);e(30);var o=e(4),r=e(103),l=e(18),d=e(24),c=e(958),f={components:{countTo:e.n(c).a},data:function(){return{list:{name:"HCCT Burning Box",endTime:"2021-03-19 00:00",startTime:"2021-03-12 00:00",bonusValue:1e5,DownTime:"--",rewards:0,process:0},balance:{Deposite:0,Withdraw:0,Earn:0,TotalLPT:0,Share:0},DepositeNum:"",MingTime:{hour:"00",minute:"00",second:"00"},stakeLoading:!1,claimLoading:!1,exitLoading:!1,actionType:"burn",isLogin:!1,expired:!1,openMining:!1}},watch:{userInfo:{handler:"userInfoWatch",immediate:!0}},computed:{userInfo:function(){return this.$store.state.userInfo}},mounted:function(){var t=this;this.$bus.$on("DEPOSITE_LOADING_BURNHCCT",(function(data){t.stakeLoading=data.status,t.DepositeNum=""})),this.$bus.$on("CLAIM_LOADING_BURNHCCT",(function(data){t.claimLoading=!1})),this.$bus.$on("RELOAD_DATA_BURNHCCT",(function(){t.getBalance()})),setInterval((function(){setTimeout((function(){t.getDownTime(),t.getMiningTime()})),clearTimeout()}),1e3),setTimeout((function(){t.getBalance(),t.getProcess()}),1e3),setInterval((function(){setTimeout((function(){t.getProcess()}))}),2e4),this.$bus.$on("REFRESH_MINING",(function(data){t.getBalance()}))},methods:{userInfoWatch:function(t){t&&(this.isLogin=t.data.isLogin)},showOnepager:function(){this.$bus.$emit("OPEN_ONEPAGER",{showFlag:!0,title:"What is $HCCTII?",text:["HCCTII is the call option of HELMET.","Total Supply: 500,000 (400,000 for CAKE miners on PancakeSwap; 100,000 for Burning BOX on helmet.insure) ","Reasonable activate price: 1 HELMET = 0.1CAKE","Expire date: Apr. 8th 24:00 SGT","Example: If you get 1 HCCT II, you could swap 0.1 CAKE to 1 HELMET by click the 'activate' button on TradingView Tab. To be specific, if HELMET hit $2 and CAKE hit $15, you could get $0.5 profit by this 'Activate' behavior."]})},getBalance:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,d,c,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"BURNHCCT_LPT",e="BURNHCCT",n.next=4,Object(r.k)("BURNHCCT_LPT");case 4:return o=n.sent,n.next=7,Object(r.m)(e);case 7:return d=n.sent,n.next=10,Object(r.q)(e);case 10:return c=n.sent,n.next=13,Object(r.a)(e);case 13:f=n.sent,console.log(o,d,c,f),t.balance.Deposite=Object(l.c)(o,8),t.balance.Withdraw=Object(l.c)(d,8),t.balance.Earn=Object(l.c)(f,8),t.balance.TotalLPT=Object(l.c)(c,8),t.balance.Share=Object(l.c)(d/c*100,2);case 20:case"end":return n.stop()}}),n)})))()},getDownTime:function(){var template,t=1*new Date,n=this.list.endTime,e=(n=1*new Date(n))-t,o=Math.floor(e/864e5),r=Math.floor((e-24*o*36e5)/36e5),l=Math.floor((e-24*o*36e5-36e5*r)/6e4);Math.floor((e-24*o*36e5-36e5*r-6e4*l)/1e3);n>t?template="".concat(o).concat(this.$t("Content.DayD")," ").concat(r).concat(this.$t("Content.HourD")):(template="".concat(0,this.$t("Content.DayD")," ",0).concat(this.$t("Content.HourD")),this.expired=!0),this.list.DownTime=template},getMiningTime:function(){var t=1*new Date,n="2021-03-12 00:00",e=(n=new Date(n))-t,o=Math.floor(e/864e5),r=Math.floor((e-24*o*36e5)/36e5),l=Math.floor((e-24*o*36e5-36e5*r)/6e4),d=Math.floor((e-24*o*36e5-36e5*r-6e4*l)/1e3);r+=24*o;var template={};n<t?(template={hour:"00",minute:"00",second:"00"},this.openMining=!0):template={hour:r>9?r:"0"+r,minute:l>9?l:"0"+l,second:d>9?d:"0"+d},this.MingTime=template},getProcess:function(){var t=1*new Date,n=1*new Date(this.list.startTime),e=1*new Date(this.list.endTime),o=d.a.divide(t-n,e-n);console.log(o),this.list.process=o>0?Object(l.c)(100*o,2):0,this.list.rewards=o>0?Object(l.c)(1*o,4):0},toDeposite:function(){if(this.DepositeNum&&!this.stakeLoading){this.stakeLoading=!0;Object(r.o)("BURNHCCT",{amount:this.DepositeNum},!0,(function(t){}))}},toClaim:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.claimLoading){n.next=2;break}return n.abrupt("return");case 2:return t.claimLoading=!0,"BURNHCCT",n.next=6,Object(r.n)("BURNHCCT");case 6:n.sent;case 7:case"end":return n.stop()}}),n)})))()}}},x=(e(1340),e(17)),h={components:{HCCTBURN:Object(x.a)(f,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"long_burn"},[o("img",{staticClass:"coin",attrs:{src:e(1339),alt:""}}),t._v(" "),o("div",{staticClass:"title"},[o("div",{staticClass:"pool_detail"},[o("h3",{staticClass:"pool_name"},[t._v(t._s(t.list.name)),o("i",{on:{click:t.showOnepager}})]),t._v(" "),t._m(0)]),t._v(" "),t.openMining?t._e():o("div",{staticClass:"pool_time"},[o("h3",[t._v(t._s(t.$t("Table.WillStartIn")))]),t._v(" "),o("span",[o("i",[t._v(t._s(t.MingTime.hour))]),t._v(" "),o("b",[t._v(":")]),t._v(" "),o("i",[t._v(t._s(t.MingTime.minute))]),t._v(" "),o("b",[t._v(":")]),t._v(" "),o("i",[t._v(t._s(t.MingTime.second))])])])]),t._v(" "),o("div",{staticClass:"text"},[o("p",[o("span",[t._v(t._s(t.$t("Table.SurplusTime"))+"：")]),t._v(" "),o("span",[t._v(t._s(t.list.DownTime))])]),t._v(" "),o("p",[o("span",[t._v(t._s(t.$t("Table.Bonus")))]),t._v(" "),o("span",[t._v(t._s(t.list.bonusValue)+" HCCTII")])])]),t._v(" "),o("div",{staticClass:"process"},[o("div",{staticClass:"name"},[o("span",[t._v(t._s(t.$t("Table.FireProcess")))]),t._v(" "),o("span",{staticStyle:{display:"flex"}},[o("span",[t._v(t._s(t.isLogin?t.list.rewards:"--"))]),t._v("\n        /\n        "),o("span",[t._v(t._s(t.isLogin?t.list.bonusValue:"--"))])])]),t._v(" "),o("div",{staticClass:"control"},[o("div",{staticClass:"control_wrap"},[o("div",{staticClass:"control_real",style:"width:"+t.list.process+"%"},[0!=t.list.process?o("i",{staticClass:"fire"}):t._e()])])])]),t._v(" "),o("div",{staticClass:"button_wrap"},[o("button",{class:"burn"==t.actionType?"active burn":"burn",on:{click:function(n){t.actionType="burn"}}},[t._v("\n      "+t._s(t.$t("Table.Burn"))+"\n    ")]),t._v(" "),o("button",{staticClass:"claim",class:"claim"==t.actionType?"active burn":"burn",on:{click:function(n){t.actionType="claim"}}},[t._v("\n      "+t._s(t.$t("Table.Claim"))+"\n    ")])]),t._v(" "),"burn"==t.actionType?o("div",{staticClass:"burn_wrap"},[o("p",[o("span",[t._v(t._s(t.$t("Table.AmountDeposit")))]),t._v(" "),o("span",[t._v("\n        "+t._s(t.$t("Table.DAvailable"))+":\n        "),t.isLogin?o("countTo",{attrs:{startVal:Number(0),endVal:Number(t.balance.Deposite),duration:2e3,decimals:8}}):o("span",[t._v("--")]),t._v("\n        HCCT\n      ")],1)]),t._v(" "),o("div",{staticClass:"input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.DepositeNum,expression:"DepositeNum"}],style:t.DepositeNum==t.balance.Deposite?"border: 1px solid #FF9600 !important":"",attrs:{type:"text"},domProps:{value:t.DepositeNum},on:{input:function(n){n.target.composing||(t.DepositeNum=n.target.value)}}}),t._v(" "),o("p",[o("span",[t._v("HCCT")]),t._v("|"),o("i",{on:{click:function(n){t.DepositeNum=t.balance.Deposite}}},[t._v("Max")])])]),t._v(" "),o("div",{staticClass:"text"},[o("p",[o("span",[t._v(t._s(t.$t("Table.MyBurn"))+"/"+t._s(t.$t("Table.TotalBurn")))]),t._v(" "),o("span",{staticStyle:{display:"flex"}},[t.isLogin?o("countTo",{attrs:{startVal:Number(0),endVal:Number(t.balance.Withdraw),duration:2e3,decimals:8}}):o("span",[t._v("--")]),t._v("\n          /\n          "),t.isLogin?o("countTo",{attrs:{startVal:Number(0),endVal:Number(t.balance.TotalLPT),duration:2e3,decimals:8}}):o("span",[t._v("--")]),t._v("\n          HCCT\n        ")],1)]),t._v(" "),o("p",{staticClass:"bigsize"},[o("span",[t._v(t._s(t.$t("Table.MyPoolShare"))+" ")]),t._v(" "),o("span",[t._v(" "+t._s(t.isLogin?t.balance.Share:"--")+" % ")])])]),t._v(" "),o("button",{staticClass:"submit_burn",on:{click:t.toDeposite}},[o("i",{class:t.stakeLoading?"loading_pic":""}),t._v(t._s(t.$t("Table.Burn"))+"\n    ")])]):t._e(),t._v(" "),"claim"==t.actionType?o("div",{staticClass:"claim_wrap"},[o("div",{staticClass:"input"},[t.isLogin?o("input",{directives:[{name:"model",rawName:"v-model",value:t.balance.Earn,expression:"balance.Earn"}],staticStyle:{border:"1px solid #ff9600 !important"},attrs:{type:"text",disabled:""},domProps:{value:t.balance.Earn},on:{input:function(n){n.target.composing||t.$set(t.balance,"Earn",n.target.value)}}}):o("input",{staticStyle:{border:"1px solid #ff9600 !important"},attrs:{type:"text",disabled:""}}),t._v(" "),o("p",[o("span",[t._v("HCCTII")]),t._v("|"),o("i",{staticStyle:{background:"rgba(255, 150, 0, 0.1)"},on:{click:function(n){t.WithdrawNum=t.balance.Earn}}},[t._v("Max")])])]),t._v(" "),o("div",{staticClass:"text"},[o("p",[o("span",[t._v("HCCTII "+t._s(t.$t("Table.HELMETRewards")))]),t._v(" "),o("span",[t.isLogin?o("countTo",{attrs:{startVal:Number(0),endVal:Number(t.balance.Earn),duration:2e3,decimals:8}}):t._e(),t._v("\n          HCCTII")],1)])]),t._v(" "),o("button",{staticClass:"submit_burn",on:{click:t.toClaim}},[o("i",{class:t.claimLoading?"loading_pic":""}),t._v(t._s(t.$t("Table.Claim"))+"\n    ")])]):t._e()])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"earn"},[this._v("\n        Earn: "),n("span",[this._v("HCCTII")])])}],!1,null,"37503afb",null).exports,Onepager:e(1006).a}},m=(e(1345),Object(x.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"burn_container"},[e("div",{staticClass:"burn_text"},[e("h3",[t._v(t._s(t.$t("Tip.BurnTip1")))]),t._v(" "),e("p",[t._v(t._s(t.$t("Tip.BurnTip2")))])]),t._v(" "),e("div",{staticClass:"burn_wrap"},[e("HCCTBURN")],1),t._v(" "),e("Onepager")],1)}),[],!1,null,"5cfa517c",null));n.default=m.exports},957:function(t,n,e){t.exports=e.p+"img/loading.25799c9.png"},958:function(t,n,e){t.exports=function(t){function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var i={};return n.m=t,n.c=i,n.i=function(t){return t},n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/dist/",n(n.s=2)}([function(t,n,i){var e=i(4)(i(1),i(5),null,null);t.exports=e.exports},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(3);n.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,n,i,e){return i*(1-Math.pow(2,-10*t/e))*1024/1023+n}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,e.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,e.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,e.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,e.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var n=t-this.startTime;this.remaining=this.localDuration-n,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(n,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(n,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(n/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(n/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),n<this.localDuration?this.rAF=(0,e.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var n=(t+="").split("."),i=n[0],e=n.length>1?this.decimal+n[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+e+this.suffix}},destroyed:function(){(0,e.cancelAnimationFrame)(this.rAF)}}},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));n.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=0,a="webkit moz ms o".split(" "),o=void 0,r=void 0;if("undefined"==typeof window)n.requestAnimationFrame=o=function(){},n.cancelAnimationFrame=r=function(){};else{n.requestAnimationFrame=o=window.requestAnimationFrame,n.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!o||!r);u++)s=a[u],n.requestAnimationFrame=o=o||window[s+"RequestAnimationFrame"],n.cancelAnimationFrame=r=r||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];o&&r||(n.requestAnimationFrame=o=function(t){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),a=window.setTimeout((function(){t(n+i)}),i);return e=n+i,a},n.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}n.requestAnimationFrame=o,n.cancelAnimationFrame=r},function(t,n){t.exports=function(t,n,i,e){var a,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,o=t.default);var s="function"==typeof o?o.options:o;if(n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),i&&(s._scopeId=i),e){var u=Object.create(s.computed||null);Object.keys(e).forEach((function(t){var n=e[t];u[t]=function(){return n}})),s.computed=u}return{esModule:a,exports:o,options:s}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},960:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADK0lEQVRYR8WXW0hUYRDHf7NprWgXS6Eikkp6CIoSgpACBcEyKHoJoicL07PQS0Q9SFJWEEhBD+2q2eWlFyGyyC5EaIEg3aEbSVcyCXJBvOB9vzjfHrfdddtzdjP2wL6cnfnPf/4z35z5BIePamY2foqBHcAaFEtB/8ynB6EHeAfcYhFtspsxJ9BiZ6SusJgRalDsBebZ2Vv/9yNcw02tlPMzns9fCag7zOEb1SgOAZkOA0ebDSGcI4/TUsZoLIyYBKysb6DYlGTgSDehEze7YqkxjYC6yDomaEWxbEaCT4EI3bgok0peh+NGELAyfzrjwcNJuNkYrkSIgFXzdlvZhXEU53HxkDTeM5teRlnFJOsJUA2sjqucWY48iqZ64g8BH7UojtnI/pZZ7ImWccpHNZDOJGeBgzYkTopBjWmjCWjph/kYt9vNzKFADN5on0YKCVCCIhMXj6WSVv2+TevyCCiMQ2KIDPLNUgQJePEBVXFZu6iTKo5o+3r2E6ARcIV8XJySqqCCqp6dBGixUcEnBh7RE66XX7ZDRtgqBvctmX8AuVEBhjHIEiGgmshjjK825ewnh1xRPkpR3LM9cm6Wyz6+Ky8rgU8x7TPIlnL61CXmMkq/LaaZlPJxAYXHgXGnqS6QhWLtNHvhpRgU6BL42IDihQNMr0mgDUWRrXF8g0GgSDw8t3qqDjhsiym0i/LywfbsxkfyI5SJwZOw7DuADFsC0GUSGNCyJvf0kUaxHOCVlfkW4CaQ7RBu8F8JlImHu1bmpUALCrfD4OYUGki+BEKHGGzWwZvIZ5xnKOY7Dh407Eq+CYXjYnDCyt7JGJ/OTTeh02MY7S54xNAT1JykD4CSBLM3S6CPobNBFAtd9Fwwp4PtaheTnB5ETkfxdIQvwGWEJUAFivQEFQiOYquGXhRGAgATpLNCKui2SnAUOJOAvyl/8GOkAZx8jiPR/eIhZ+qVamA7k9xOgEDk5zipThbKxeCqaiYDP9dRbHNMQIhcSDSB4Bpuv5JFRvkMLAQWJBA89koWKsUIqVlKQ/VM5VoeIhG8jqXmYhIikcqrWXhDpexyGt3V/+t6/hs7+zY0DEDlgAAAAABJRU5ErkJggg=="},973:function(t,n,e){var content=e(988);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("8119e108",content,!0,{sourceMap:!1})},987:function(t,n,e){"use strict";e(973)},988:function(t,n,e){var o=e(25),r=e(67),l=e(87),d=e(989);n=o(!1);var c=r(l),f=r(d);n.push([t.i,".onepager_mask[data-v-dd05dbd8]{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.8)}.onepager-enter-active[data-v-dd05dbd8]{-webkit-animation:onepager-in-data-v-dd05dbd8 .5s;animation:onepager-in-data-v-dd05dbd8 .5s}.onepager-leave-active[data-v-dd05dbd8]{animation:onepager-in-data-v-dd05dbd8 .5s reverse}@-webkit-keyframes onepager-in-data-v-dd05dbd8{0%{transform:scale(0)}50%{transform:scale(1.25)}to{transform:scale(1)}}@keyframes onepager-in-data-v-dd05dbd8{0%{transform:scale(0)}50%{transform:scale(1.25)}to{transform:scale(1)}}@media screen and (min-width:750px){.onepager_wrapper[data-v-dd05dbd8]{width:627px;background:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:3px;padding:30px;display:flex;flex-direction:column}.onepager_wrapper .title[data-v-dd05dbd8]{display:flex;align-items:center;justify-content:flex-end}.onepager_wrapper .title i[data-v-dd05dbd8]{width:24px;height:24px;display:inline-block;background-repeat:no-repeat;background-image:url("+c+");background-size:100% 100%;cursor:pointer}.onepager_wrapper h3[data-v-dd05dbd8]{text-align:center;height:24px;background:linear-gradient(180deg,#fff,#ffcb82 150%);align-self:center;transform:translateY(10px);padding:0 10px;min-width:196px}.onepager_wrapper h3 span[data-v-dd05dbd8]{display:inline-block;transform:translateY(-5px)}.onepager_wrapper .content[data-v-dd05dbd8]{border:1px solid #f96001;border-radius:50px;padding:30px 20px;background-image:url("+f+");background-repeat:no-repeat;background-size:160px 120px;background-position:95% 92%}.onepager_wrapper .content p[data-v-dd05dbd8]{margin:10px 0;font-size:14px;color:#121212;line-height:28px}}@media screen and (max-width:750px){.onepager_wrapper[data-v-dd05dbd8]{width:90%;height:80%;max-height:550px;background:#fff;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:3px;padding:20px 10px;display:flex;flex-direction:column}.onepager_wrapper .title[data-v-dd05dbd8]{display:flex;align-items:center;justify-content:flex-end}.onepager_wrapper .title i[data-v-dd05dbd8]{width:24px;height:24px;display:inline-block;background-repeat:no-repeat;background-image:url("+c+");background-size:100% 100%;cursor:pointer}.onepager_wrapper h3[data-v-dd05dbd8]{text-align:center;height:24px;background:linear-gradient(180deg,#fff,#ffcb82 150%);align-self:center;transform:translateY(10px);padding:0 10px;min-width:196px}.onepager_wrapper h3 span[data-v-dd05dbd8]{display:inline-block;transform:translateY(-5px)}.onepager_wrapper .content[data-v-dd05dbd8]{flex:1;border:1px solid #f96001;border-radius:50px;padding:30px 20px 0;overflow:hidden}.onepager_wrapper .content section[data-v-dd05dbd8]{overflow-y:scroll;height:80%}.onepager_wrapper .content section p[data-v-dd05dbd8]{margin:10px 0;font-size:14px;color:#121212;line-height:28px}.onepager_wrapper .content .bg[data-v-dd05dbd8]{width:100%;height:70px;background-image:url("+f+");background-repeat:no-repeat;background-size:96px 70px;background-position:100%}}",""]),t.exports=n},989:function(t,n,e){t.exports=e.p+"img/pagerlogo.f0f1bad.png"}}]);