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
                class="text-3xl font-bold cursor-pointer w-[160px] text-white"
                @click="toogleShowCitys"
              >{{ selectedCity }}</span>
              <button
                class="btn bg-[#FEB155] rounded-md p-2 px-3 text-xl text-black font-black"
                @click="toogleShowCitys"
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
      <icon-type v-model:selectedType="selectedType"></icon-type>
    </div>
    <router-view></router-view>
  </div>
</template>

<script >
import { ref, reactive, watch, onMounted } from "vue";
import * as consts from "../utils/consts";
import * as utils from "../utils/utils";
import iconType from "./components/icon-type.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    iconType,
  },
  setup() {
    const router = useRouter();
    const keyword = ref("");
    const selectedCity = ref("臺北市"); //縣市選擇
    const selectedType = ref("SCENICSPOT");
    const isShowCitys = ref(false);

    const toogleShowCitys = () => {
      isShowCitys.value = !isShowCitys.value;
    };
    const chooseCity = (city) => {
      selectedCity.value = city;
      isShowCitys.value = false;
    };
    const search = () => {
      router.push("/" + selectedType.value + "/City/" + selectedCity.value);
    };

    watch(selectedType, (newValue, oldValue) => {
      search();
    });

    return {
      consts,
      utils,
      keyword,
      selectedCity,
      selectedType,
      isShowCitys,
      //method
      chooseCity,
      search,
      toogleShowCitys,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  min-width: 1280px;
  background-image: url(/images/bg.png);
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