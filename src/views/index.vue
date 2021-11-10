<template>
  <main class="h-[600px] text-white bg-cover ">
    <div class="mx-auto mt-4 w-11/12 xl:w-3/4 ">
      <div class="border-b-solid border-b-2 border-white text-2xl">
        <span
          class="mr-6 hover:text-[#FEB155] cursor-pointer"
          @click="
            utils.openUrl('https://tailwindcss.tw/docs/just-in-time-mode')
          "
        >幫助中心</span>
        <span
          @click="
            utils.openUrl(
              'https://www.figma.com/file/60fVYcYVyu0Z7lrJhhUblM/week1-%E5%8F%B0%E7%81%A3%E6%97%85%E9%81%8A%E6%99%AF%E9%BB%9E%E5%B0%8E%E8%A6%BD?node-id=14%3A1274'
            )
          "
          class="hover:text-[#FEB155] cursor-pointer"
        >聯絡我們</span>
      </div>
      <h1 class="font-black text-7xl mt-24">
        在台灣尋找最棒的旅遊，開始計劃您的台灣之旅
      </h1>
      <h2 class="text-5xl mt-10">The best tours to explore Taiwan</h2>
      <!-- search -->
      <div class="search rounded-lg mt-7 p-7 bg-[rgba(171,171,171,0.3)]">
        <h3 class="text-2xl mb-4">景點搜尋</h3>
        <div class="flex h-[72px]">
          <div class="relative bg-[#313131] bg-opacity-30 flex w-10/12 rounded-xl tracking-wide">
            <span class="p-6 flex items-center text-gray-300">
              <span
                class="text-3xl font-bold cursor-pointer w-[160px] "
                :class="selectedCity == '縣市選擇'?'':'text-white'"
                @click="isShowCitys = true"
              >{{ selectedCity }}</span>
              <button
                class="btn bg-[#FEB155] rounded-md p-2 px-3 text-xl text-black font-black"
                @click="isShowCitys = true"
              >
                <i class="bi bi-chevron-down really-bold"></i>
              </button>
            </span>
            <span class="w-px bg-white my-2 mr-8"></span>
            <span class="w-full flex py-6  items-center">
              <input
                v-model="keyword"
                type="text"
                class="text-3xl w-full p-4 bg-[#313131] bg-opacity-0 focus:outline-white"
                placeholder="輸入關鍵字"
              />
            </span>
          </div>
          <button
            class="btn bg-[#FEB155] rounded-xl w-[255px] ml-4 p-4 text-3xl text-black font-bold"
            @click="search"
          >
            尋找<i class="bi bi-search ml-4"></i>
          </button>
        </div>
      </div>
      <!-- search -->
      <!-- city -->
      <div
        v-show="isShowCitys"
        class="city-container flex flex-wrap w-[950px] p-4 text-gray-300 rounded-lg bg-[#313131] bg-opacity-30"
      >
        <div
          class="city"
          v-for="(item, key) in Object.keys(consts.COUNTYOBJ)"
          :key="key"
          @click="chooseCity(item)"
          v-text="item"
        ></div>
      </div>
    </div>
  </main>
  <div class="mx-auto my-4 w-11/12 xl:w-3/4">
    <div class="flex mx-auto my-12">
      <icon-type></icon-type>
    </div>
    <card-food
      v-for="item in data.response"
      :key="item.id"
      :item="item"
    >
    </card-food>
  </div>
</template>

<script >
import { ref, reactive, watch, onMounted } from "vue";
import * as utils from "../utils/utils";
import * as consts from "../utils/consts";
import iconType from "./components/icon-type.vue";
import cardFood from "./components/cardFood.vue";
export default {
  components: {
    cardFood,
    iconType,
  },
  setup() {
    const keyword = ref("");
    const selectedCity = ref("桃園市"); //縣市選擇
    const isShowCitys = ref(false);
    const data = reactive({
      response: [
        {
          ID: "C1_313020000G_000026",
          Name: "宏亞食品巧克力觀光工廠",
          Description:
            "巧克力共和國是一座以巧克力為主題的觀光工廠，建築設計、館內主題設計皆以巧克力為主題，這裡也提供豐富的巧克力相關知識，以巧克力為主題的觀光工廠，建築設計、館內主題設計皆以巧克力為主題，這裡也提供豐富的巧克力相關知識以巧克力為主題的觀光工廠，建築設計、館內主題設計皆以巧克力為主題，這裡也提供豐富的巧克力相關知以巧克力為主題的觀光工廠，建築設計、館內主題設計皆以巧克力為主題，這裡也提供豐富的巧克力相關知識識以巧克力為主題的觀光工廠，建築設計、館內主題設計皆以巧克力為主題，這裡也提供豐富的巧克力相關知識亦可以DIY創作巧克力，為一寓教於樂、適合親子休閒娛樂的絕佳去處。",
          Phone: "886-3-3656555",
          Address: "桃園縣八德市建國路386號",
          ZipCode: "33451",
          Picture: {},
          Position: {
            PositionLon: 121.29718780517578,
            PositionLat: 24.94332504272461,
            GeoHash: "wsqmbhvcm",
          },
          Class2: "觀光工廠類",
          Level: "非古蹟",
          ParkingPosition: {
            PositionLon: 121.29718780517578,
            PositionLat: 24.94332504272461,
            GeoHash: "wsqmbhvcm",
          },
          TicketInfo: "收費方式請電洽",
          Remarks: "詳細參觀訊息請逕洽廠商網站說明",
          Keyword: "桃園，宏亞，巧克力，觀光工廠",
          City: "桃園市",
          SrcUpdateTime: "2021-11-10T01:15:37+08:00",
          UpdateTime: "2021-11-10T01:40:14+08:00",
        },
        {
          ID: "C1_313020000G_000136",
          Name: "臺灣菸酒(股)公司林口觀光酒廠",
          DescriptionDetail:
            "林口酒廠為擁有近百年歷史的台北酒廠(1921)、板橋酒廠(1937)、樹林酒廠(1906)合併而成的新酒廠，於民國76年春正式啟用量產。原三酒廠各具有不同產品與文化特色，合併後發展為北部地區產能最大、設備最現代化的米糧釀造酒生產工廠。 林口酒廠成立以來一直是以生產紹興酒為主，民國85年利用原紹興酒生產設備釀製日式清酒，成功推出「玉泉清酒」，為全國唯一生產日式清酒之酒廠。民國93年為解決清酒粕副產物問題，開發「台酒清酒粕面膜」產品，定位為天然護膚保養素材，盛況一時，被喻為「窮人的SKII」。民國94年再創新研發，結合東方紅麴與西方葡萄酒，推出具養生概念且適合台灣人口味的「玉泉紅麴葡萄酒」，深獲社會大眾喜愛，為台灣市佔率最高的葡萄酒品牌。 林口酒廠不但致力各項酒類研發，生產方式也變得更加多元。民國96年將釀酒紅麴與餅乾大廠合作開發「台酒紅麴養生薄餅」，風味獨特造成搶購熱潮，風行海內外，短短1年半內創造超過10億元營業額，成為餅乾界之奇蹟。為朝多角化經營，除從事酒品生產外並設置有展售中心，內設「清酒館」「紅麴館」「酒銀行」等製程展館，開放民眾或外來觀光客參觀，一方面讓參訪者可了解製酒的過程與歷史，一方面也促使林口酒廠與工業區內其他景點(如台塑文物館、竹林寺、台塑醫療園區、華亞科技園區等)以及鄰近之鶯歌鎮產業等連結，形成地方產業文化觀光特色主題，除帶動產業觀光，更提昇桃園縣觀光旅遊系統的豐富性。 林口酒廠為配合公司資產活化政策，結合桃園縣推展航空城計畫以及機場捷運線開通啟用，集酒類生產、產業歷史、市場地利等基礎，結合產業文化、創意藝術、人文等資源以塑造工廠公園化，打造清酒意象文化園區，串聯週邊城廓、名勝、景點及公共設施，建構成北部地區指標性之觀光酒廠，期能吸引北臺灣800萬人口，來廠觀光遊憩進而增裕營收。",
          Description:
            "林口酒廠為北部地區產能最大、設備最現代化的清酒、紅麴葡萄酒生產工廠。廠內有產品推廣中心，開放參觀製酒過程與歷史，與桃園其他景點連結地方文化特色主題，帶動觀光提昇旅遊的豐富性。",
          Phone: "886-3-3283001#430",
          Address: "桃園縣龜山鄉文化一路55號",
          ZipCode: "333",
          Picture: {
            PictureUrl1: "https://taiwan.taiwanstay.net.tw/twpic/5633.jpg",
            PictureDescription1: "飯店外觀",
            PictureUrl2: "https://taiwan.taiwanstay.net.tw/twpic/76173.jpg",
            PictureDescription2: "大廳",
            PictureUrl3: "https://taiwan.taiwanstay.net.tw/twpic/74384.JPG",
            PictureDescription3: "Le Cafe 咖啡廳",
          },
          Position: {
            PositionLon: 121.37522888183594,
            PositionLat: 25.056167602539062,
            GeoHash: "wsqq9cqdz",
          },
          Class2: "觀光工廠類",
          Level: "非古蹟",
          WebsiteUrl: "http://event.ttl-eshop.com.tw/lk/",
          ParkingPosition: {
            PositionLon: 121.37522888183594,
            PositionLat: 25.056167602539062,
            GeoHash: "wsqq9cqdz",
          },
          TicketInfo: "收費方式請電洽",
          Remarks: "詳細參觀訊息請逕洽廠商網站說明",
          Keyword: "林口，菸酒，酒廠，觀光工廠",
          City: "桃園市",
          SrcUpdateTime: "2021-11-10T01:15:37+08:00",
          UpdateTime: "2021-11-10T01:40:14+08:00",
        },
      ],
    });

    const chooseCity = (city) => {
      selectedCity.value = city;
      isShowCitys.value = false;
    };
    const search = () => {
      if (selectedCity.value == "縣市選擇") {
        utils.showMsg("請選擇縣市");
        return;
      }
      utils
        .getPTXData(
          consts.PTXURLOBJ["Tourism.ScenicSpot"],
          consts.COUNTYOBJ[selectedCity.value]
        )
        .then((res) => {
          data.response = res;
        });
    };

    return {
      consts,
      utils,
      data,
      keyword,
      selectedCity,
      isShowCitys,
      //method
      chooseCity,
      search,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  min-width: 1280px;
  background-image: url(./images/bg.png);
}
h1 {
  min-width: 500px;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
}
h2 {
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
  min-width: max(60vw, 600px);
}
.search,
.city-container {
  backdrop-filter: blur(70px);
}
.city-container {
  &::before {
    content: "";
    border-width: 0 18px 24px 18px;
    border-color: transparent transparent #313131 transparent;
    opacity: 0.35;
    @apply absolute top-[-24px] left-[204px] w-0 h-0 border-solid;
  }
}
.really-bold {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black,
    -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black;
}
::placeholder {
  @apply text-3xl font-bold tracking-tighter  text-gray-300;
}
.city {
  @apply w-[88px] m-2 py-2 px-4 border-solid border-4 border-[#FEB155] font-bold cursor-pointer rounded-xl bg-white text-gray-900 hover:bg-[#FEB155];
}
</style>