import{g as h,C as x,P as y}from"./utils.0ec9673c.js";import{_ as m}from"./index.cedee532.js";import{r as p,o as n,f as i,s as v,y as k,i as o,t as l,x as f,z as g,p as b,h as w,A as D,B,C as I,D as P,F as N,q as S,c as C}from"./vendor.bd38ff53.js";const U={props:{item:{type:Object,default:null},type:{type:String,default:""}},setup(s){function c(t){return"/"+s.type+"/"+t}function e(t){return t&&t.PictureUrl1?t.PictureUrl1:"https://fakeimg.pl/500x500/"}return{go2Detail:c,getImage:e}}},u=s=>(b("data-v-30e4d8dc"),s=s(),w(),s),j={class:"flex my-8"},T={class:"block w-4/12 overflow-hidden rounded-xl"},V=["src"],A={class:"w-7/12 p-8 pt-4 tracking-wider font-black"},R={target:"_blank",class:"block text-gray-800 text-3xl leading-10"},q={key:0,target:"_blank",class:"mt-1 text-lg leading-tight font-medium text-black flex items-end"},F=u(()=>o("i",{class:"bi bi-telephone"},null,-1)),J={key:1,target:"_blank",class:"mt-1 text-lg leading-tight font-medium text-black flex items-end"},L=u(()=>o("i",{class:"bi bi-geo-alt"},null,-1)),O={class:"mt-6 text-xl text-gray-700 dotdotdot-5"},X=u(()=>o("span",{class:"w-1/12 flex items-center"},[o("i",{class:"bi bi-chevron-compact-right text-8xl"})],-1));function z(s,c,e,t,_,a){const d=p("router-link");return n(),i("div",j,[v(d,{class:"mx-auto bg-white rounded-xl shadow-md flex p-4 h-[280px] w-full card",to:t.go2Detail(e.item.ID)},{default:k(()=>{var r;return[o("span",T,[o("img",{class:"object-cover object-center h-full w-full duration-500 hover:scale-125",src:t.getImage(e.item.Picture)},null,8,V)]),o("div",A,[o("span",R,l(e.item.Name),1),e.item.Phone?(n(),i("span",q,[F,f(" "+l(e.item.Phone),1)])):g("",!0),e.item.Address?(n(),i("span",J,[L,f(" "+l(e.item.Address),1)])):g("",!0),o("p",O,l((r=e.item.Description)!=null?r:e.item.DescriptionDetail),1)]),X]}),_:1},8,["to"])])}var E=m(U,[["render",z],["__scopeId","data-v-30e4d8dc"]]);const M={components:{card1:E},props:{type:String,city:String},setup(s){const c=D(),e=B({response:[]});I(()=>{t()}),P(async(a,d)=>{t()});const t=()=>{h(y[s.type],x[s.city],_()).then(a=>{a&&(e.response=a)})};function _(){var a=c.query.keyword;if(a)return`&$filter=(contains(Name,%27${a}%27)%20or%20contains(Description,%27${a}%27))`}return{data:e,search:t}}},Q={class:"mx-auto my-4"};function Y(s,c,e,t,_,a){const d=p("card1");return n(),i("div",Q,[(n(!0),i(N,null,S(t.data.response,r=>(n(),C(d,{key:r.id,item:r,type:e.type},null,8,["item","type"]))),128))])}var K=m(M,[["render",Y],["__scopeId","data-v-5df5401e"]]);export{K as default};