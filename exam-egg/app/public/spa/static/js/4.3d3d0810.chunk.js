(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{589:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return o});var a=n(205);function s(){return Object(a.a)("/exam/examType")}function u(){return Object(a.a)("/exam/getQuestionsType")}function i(){return Object(a.a)("/exam/subject")}function r(t){return Object(a.a)("/exam/questions",{method:"POST",body:t})}function c(t){var e=[];for(var n in t)t[n]&&e.push("".concat(n,"=").concat(t[n]));var s="?"+e.join("&");return console.log(s),Object(a.a)("/exam/questions/condition".concat(s))}function o(t){return Object(a.a)("/exam/questions/update",{method:"PUT",body:t})}},862:function(t,e,n){"use strict";n.r(e);var a=n(272),s=n.n(a),u=n(10),i=n(589),r=n(209);function c(){return Promise.all([Object(i.b)(),Object(i.c)(),Object(i.d)()])}e.default={namespace:"addQuestions",state:{examType:[],exam_id:"",questionsType:[],questions_type_id:"",subject:[],subject_id:"",title:"",questions_stem:"",questions_answer:"",addStatus:0,updatedStatus:0},reducers:{initData:function(t,e){return Object(u.a)({},t,e)}},effects:{getQuestions:s.a.mark(function t(e,n){var a,r,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.call,r=n.put,console.log(e),t.next=4,a(i.e,{questions_id:e.id});case 4:if(1!==(c=t.sent).code){t.next=8;break}return t.next=8,r(Object(u.a)({type:"initData"},c.data[0]));case 8:case"end":return t.stop()}},t,this)}),requestData:s.a.mark(function t(e,n){var a,i,r,o,d,p,f,x,b;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.call,i=n.put,r=n.select,t.next=3,r(function(t){return t.addQuestions});case 3:return o=t.sent,t.next=6,a(c);case 6:return d=t.sent,p=["examType","questionsType","subject"],f=["exam_id","questions_type_id","subject_id"],x={},d.forEach(function(t,e){t&&(x[p[e]]=t.data,o[f[e]]||(x[f[e]]=t.data[0][f[e]]))}),(b=JSON.parse(localStorage.getItem("editQuestionsInfo")))&&(x=Object(u.a)({},x,b)),t.next=15,i(Object(u.a)({type:"initData"},x));case 15:case"end":return t.stop()}},t,this)}),addQuestions:s.a.mark(function t(e,n){var a,u,c,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.call,u=n.put,c=setTimeout(function(){r.a.changeState({isOpen:!0})},500),t.next=4,u({type:"initData",addStatus:2});case 4:return t.next=6,a(i.a,e);case 6:if(o=t.sent,clearTimeout(c),r.a.changeState({isOpen:!1}),1!==o.code){t.next=14;break}return t.next=12,u({type:"initData",addStatus:1});case 12:t.next=16;break;case 14:return t.next=16,u({type:"initData",addStatus:3});case 16:case"end":return t.stop()}},t,this)}),updateQUestions:s.a.mark(function t(e,n){var a,u,c,o,d,p,f,x,b,m,_;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.call,u=n.put,c=setTimeout(function(){r.a.changeState({isOpen:!0})},500),t.next=4,u({type:"initData",updatedStatus:2});case 4:return o=e.title,d=e.questions_stem,p=e.questions_answer,f=e.subject_id,x=e.questions_type_id,b=e.exam_id,m=e.questions_id,t.next=7,a(i.f,{title:o,questions_stem:d,questions_answer:p,subject_id:f,questions_type_id:x,exam_id:b,questions_id:m});case 7:if(_=t.sent,clearTimeout(c),r.a.changeState({isOpen:!1}),1!==_.code){t.next=15;break}return t.next=13,u({type:"initData",updatedStatus:1});case 13:t.next=17;break;case 15:return t.next=17,u({type:"initData",updatedStatus:3});case 17:case"end":return t.stop()}},t,this)})}}}}]);
//# sourceMappingURL=4.3d3d0810.chunk.js.map