<template>
  <div class="container">
    <h1>https://leafletjs.com/reference-1.7.1.html</h1>
    {{ data.response }}
    <select v-model="data.selected.county">
      <option :value="county" v-for="county in Object.keys(data.countyobj)">
        {{ county }}
      </option>
    </select>
    <div class="grid">
      <div id="map"></div>
    </div>
  </div>
</template>

<script >
import { ref, reactive, watch, onMounted } from "vue";
const APPID = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
const APPKEY = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
const BASEURL = "https://ptx.transportdata.tw/MOTC/";

const PTXURLOBJ = {
  "Tourism.ScenicSpot": "v2/Tourism/ScenicSpot",
  "Tourism.Restaurant": "v2/Tourism/Restaurant",
  "Tourism.Hotel": "v2/Tourism/Hotel",
  "Tourism.Activity": "v2/Tourism/Activity",
  "Tourism.A1": "v2/Tourism/Bus/RealTimeByFrequency/TaiwanTrip",
  "Tourism.A2": "v2/Tourism/Bus/RealTimeNearStop/TaiwanTrip",
  "Tourism.N1": "v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip",
  "Tourism.Route": "v2/Tourism/Bus/Route/TaiwanTrip",
  "Tourism.StopOfRoute": "v2/Tourism/Bus/StopOfRoute/TaiwanTrip",
  "Tourism.Schedule": "v2/Tourism/Bus/Schedule/TaiwanTrip",
  "Tourism.Shape": "v2/Tourism/Bus/Shape/TaiwanTrip",
  "Tourism.S2TravelTime": "v2/Tourism/Bus/S2TravelTime/TaiwanTrip",
};
export default {
  setup() {
    const data = reactive({
      response: [],
      selected: { county: "新北市" },
      countyobj: {
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
      },
    });

    getPTXData(
      PTXURLOBJ["Tourism.ScenicSpot"],
      data.countyobj[data.selected.county]
    ).then((res) => {
      data.response = res;
    });

    onMounted(() => {
      var map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    });
    watch(
      () => data.selected,
      (newVal) => {
        console.log(newVal);
        
        getPTXData(
          PTXURLOBJ["Tourism.ScenicSpot"],
          data.countyobj[data.selected.county]
        ).then((res) => {
          data.response = res;
        });
      },
      { immediate: true }
    );

    return { data };
  },
};

function getPTXData(url, para) {
  para = para ? "/" + para : "";
  let fullUrl = BASEURL + url + para + "?$format=JSON&$top=2";
  console.log(fullUrl);

  return axios({
    method: "get",
    url: fullUrl,
    headers: getAuthorizationHeader(),
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
function getData(enumObj, key) {
  if (enumObj[key]) return enumObj[key];
  return "";
}

// API 驗證用
function getAuthorizationHeader() {
  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(APPKEY, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization =
    'hmac username="' +
    APPID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return {
    Authorization: Authorization,
    "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/,
  }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
</script>

<style lang="scss" scoped>
#map {
  height: 180px;
}
</style>