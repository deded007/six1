const e="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF",u="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF",F="https://ptx.tr2ansportdata.tw/MOTC/",T={SCENICSPOT:"v2/Tourism/ScenicSpot",RESTAUTANT:"v2/Tourism/Restaurant",HOTEL:"v2/Tourism/Hotel",ACTIVITY:"v2/Tourism/Activity",A1:"v2/Tourism/Bus/RealTimeByFrequency/TaiwanTrip",A2:"v2/Tourism/Bus/RealTimeNearStop/TaiwanTrip",N1:"v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip",ROUTE:"v2/Tourism/Bus/Route/TaiwanTrip",STOPOFROUTE:"v2/Tourism/Bus/StopOfRoute/TaiwanTrip",SCHEDULE:"v2/Tourism/Bus/Schedule/TaiwanTrip",SHAPE:"v2/Tourism/Bus/Shape/TaiwanTrip",S2TRAVELTIMEe:"v2/Tourism/Bus/S2TravelTime/TaiwanTrip"},r={\u81FA\u5317\u5E02:"Taipei",\u65B0\u5317\u5E02:"NewTaipei",\u6843\u5712\u5E02:"Taoyuan",\u81FA\u4E2D\u5E02:"Taichung",\u81FA\u5357\u5E02:"Tainan",\u9AD8\u96C4\u5E02:"Kaohsiung",\u57FA\u9686\u5E02:"Keelung",\u65B0\u7AF9\u5E02:"Hsinchu",\u65B0\u7AF9\u7E23:"HsinchuCounty",\u82D7\u6817\u7E23:"MiaoliCounty",\u5F70\u5316\u7E23:"ChanghuaCounty",\u5357\u6295\u7E23:"NantouCounty",\u96F2\u6797\u7E23:"YunlinCounty",\u5609\u7FA9\u7E23:"ChiayiCounty",\u5609\u7FA9\u5E02:"Chiayi",\u5C4F\u6771\u7E23:"PingtungCounty",\u5B9C\u862D\u7E23:"YilanCounty",\u82B1\u84EE\u7E23:"HualienCounty",\u81FA\u6771\u7E23:"TaitungCounty",\u91D1\u9580\u7E23:"KinmenCounty",\u6F8E\u6E56\u7E23:"PenghuCounty",\u9023\u6C5F\u7E23:"LienchiangCounty"};var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",APPID:e,APPKEY:u,BASEURL:F,PTXURLOBJ:T,COUNTYOBJ:r});function s(t){alert(t)}function l(t){window.open(t)}function c(t,n,o=""){n=n?"/"+n:"";let a=F+t+n+"?$format=JSON&$top=10"+o;return console.log(a),axios({method:"get",url:a,headers:h()}).then(i=>i.data).catch(i=>console.log(i))}function g(t,n){return t[n]?t[n]:""}function h(){var t=new Date().toGMTString(),n=new jsSHA("SHA-1","TEXT");n.setHMACKey(u,"TEXT"),n.update("x-date: "+t);var o=n.getHMAC("B64"),a='hmac username="'+e+'", algorithm="hmac-sha1", headers="x-date", signature="'+o+'"';return{Authorization:a,"X-Date":t}}var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",showMsg:s,openUrl:l,getPTXData:c,getEnumObjectValue:g});export{r as C,T as P,m as c,c as g,C as u};