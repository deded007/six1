
<template>
  <div class="mx-auto my-4 w-11/12 xl:w-3/4">
    <card1
      v-for="item in data.response"
      :key="item.id"
      :item="item"
    >
    </card1>
  </div>
</template>

<script >
import { ref, reactive, watch, onMounted } from "vue";
import * as utils from "../utils/utils";
import * as consts from "../utils/consts";
import card1 from "./components/card1.vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export default {
  components: { card1 },
  props: {},
  setup() {
    const route = useRoute();
    const data = reactive({
      response: [],
    });
    onMounted(() => {
      search(route.params.type, route.params.city);
    });
    // same as beforeRouteUpdate option with no access to `this`
    onBeforeRouteUpdate(async (to, from) => {
      search(to.params.type, to.params.city);
    });
    const search = (type, city) => {
      utils
        .getPTXData(consts.PTXURLOBJ[type], consts.COUNTYOBJ[city])
        .then((res) => {
          if (res) {
            data.response = res;
          }
        });
    };
    // watch(counter, (newValue, oldValue) => {
    //   console.log('The new counter value is: ' + counter.value)
    // })

    // const city = computed(() => {
    //   return route.params.city;
    // });
    // const type = computed(() => {
    //   return route.params.type;
    // });
    return { data, search };
  },
};

let m = {
  go2GoogleMap(item) {
    if (item.Position && item.Position.PositionLon)
      return `https://www.google.com.tw/maps/@${item.Position.PositionLat},${item.Position.PositionLon},16z`;
    else return "https://www.google.com.tw/maps/search/" + item.Name;
  },
  getImage(picObj) {
    if (picObj && picObj.PictureUrl1) return picObj.PictureUrl1;
    else return "https://fakeimg.pl/500x500/";
  },
};
</script>

<style lang="scss" scoped>
.icon {
  @apply w-[180px] text-green-900 rounded active:bg-[#FEB155] hover:bg-[#FEB155] hover:cursor-pointer;
}
.bi-telephone,
.bi-geo-alt {
  @apply mb-1 mr-2;
}
</style>
