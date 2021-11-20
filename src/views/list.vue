
<template>
  <div class="mx-auto my-4">
    <card1
      v-for="item in data.response"
      :key="item.id"
      :item="item"
      :type="type"
    >
    </card1>
  </div>
  <button
    class="block mx-auto text-xl font-bold border-gray-500 border-solid border-2 bg-whtie  rounded-xl px-16 py-2 hover:bg-[#FEB155] hover:border-[#FEB155]"
    @click="search1"
  >顯示更多</button>
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
    const page = ref(0);
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
            data.response = data.response.concat(res);
          }
        });
    };
    const search1 = () => {
      page.value++;
      console.log(page.value);

      search();
    };
    function getQuerystring() {
      var keyword = route.query.keyword;
      if (keyword)
        return `&$filter=(contains(Name,%27${keyword}%27)%20or%20contains(Description,%27${keyword}%27))`;
      if (page.value > 0) return `&$skip=` + 10 * page.value;
    }
    
    watch(() => route.query.keyword, (newValue, oldValue) => {
      data.response = [];
    });
    //the first argument of watch can be array, function or Ref<T>
    //props passed to setup function is reactive object
    watch(() => props.city, (newValue, oldValue) => {
      data.response = [];
    });
    watch(() => props.type, (newValue, oldValue) => {
      data.response = [];
    });


    // const city = computed(() => {
    //   return route.params.city;
    // });
    // const type = computed(() => {
    //   return route.params.type;
    // });
    return { data, search1, search, page };
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
