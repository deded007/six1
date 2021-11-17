
export const APPID = import.meta.env.VITE_APPID;
export const APPKEY = import.meta.env.VITE_APPKEY;
export const BASEURL = "https://ptx.transportdata.tw/MOTC/";

export const PTXURLOBJ = {
  "SCENICSPOT": "v2/Tourism/ScenicSpot",
  "RESTAUTANT": "v2/Tourism/Restaurant",
  "HOTEL": "v2/Tourism/Hotel",
  "ACTIVITY": "v2/Tourism/Activity",
  "A1": "v2/Tourism/Bus/RealTimeByFrequency/TaiwanTrip",
  "A2": "v2/Tourism/Bus/RealTimeNearStop/TaiwanTrip",
  "N1": "v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip",
  "ROUTE": "v2/Tourism/Bus/Route/TaiwanTrip",
  "STOPOFROUTE": "v2/Tourism/Bus/StopOfRoute/TaiwanTrip",
  "SCHEDULE": "v2/Tourism/Bus/Schedule/TaiwanTrip",
  "SHAPE": "v2/Tourism/Bus/Shape/TaiwanTrip",
  "S2TRAVELTIMEe": "v2/Tourism/Bus/S2TravelTime/TaiwanTrip",
};
export const COUNTYOBJ= {
    臺北市: "Taipei",
    新北市: "NewTaipei",
    桃園市: "Taoyuan",
    臺中市: "Taichung",
    臺南市: "Tainan",
    高雄市: "Kaohsiung",
    基隆市: "Keelung",
    新竹市: "Hsinchu",
    新竹縣: "HsinchuCounty",
    苗栗縣: "MiaoliCounty",
    彰化縣: "ChanghuaCounty",
    南投縣: "NantouCounty",
    雲林縣: "YunlinCounty",
    嘉義縣: "ChiayiCounty",
    嘉義市: "Chiayi",
    屏東縣: "PingtungCounty",
    宜蘭縣: "YilanCounty",
    花蓮縣: "HualienCounty",
    臺東縣: "TaitungCounty",
    金門縣: "KinmenCounty",
    澎湖縣: "PenghuCounty",
    連江縣: "LienchiangCounty",
  }