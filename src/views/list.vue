
<template>
  <div class="mx-auto my-4">{{type}}{{city}}
    <card1
      v-for="item in data.response"
      :key="item.id"
      :item="item"
      :type="type"
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
  props: { type: String, city: String },
  setup(props) {
    const route = useRoute();
    const data = reactive({
      response: [],
    });
    onMounted(() => {
      search();
    });
    // same as beforeRouteUpdate option with no access to `this`
    onBeforeRouteUpdate(async (to, from) => {
      search();
    });

    //router-view透過props傳入的縣市
    const search = () => {
      utils
        .getPTXData(
          consts.PTXURLOBJ[props.type],
          consts.COUNTYOBJ[props.city],
          getQuerystring()
        )
        .then((res) => {
          if (res) {
            data.response = res;
          }
        });
    };
    function getQuerystring() {
      var keyword = route.query.keyword;
      if (keyword)
        return `&$filter=(contains(Name,%27${keyword}%27)%20or%20contains(Description,%27${keyword}%27))`;
    }
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
