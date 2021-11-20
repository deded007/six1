<template>
  <a
    class=" text-3xl flex items-end font-bold mb-6 cursor-pointer"
    @click="$router.go(-1)"
  ><i class="bi bi-chevron-compact-left" /> 返回</a>
  <div class="bg-white p-12 rounded-lg">
    <div class="flex">
      <div class="w-full md:w-[55%]">
        <img
          :src="getImage(data.response.Picture)"
          class=" rounded-3xl"
        >
      </div>
      <div class="w-full md:w-[45%] rounded-lg pl-20">
        <div class="text-2xl font-bold mb-8 text-[#FEB155]">{{data.response.Class || data.response.Class1}}</div>
        <h1 class="text-3xl font-bold text-gray-600">{{data.response.Name}}</h1>
        <a
          :href="data.response.WebsiteUrl"
          target="_blank"
          class="mt-4 text-gray-800 text-lg flex items-end"
        ><i class="bi bi-globe"></i>網站</a>
        <div
          v-if="data.response.OpenTime"
          class="mt-4 "
        ><i class="bi bi-alarm"></i>{{data.response.OpenTime}}</div>
        <a
          v-if="data.response.Phone"
          :href="'tel:+'+data.response.Phone"
          target="_blank"
          class="mt-4 text-gray-800 text-lg leading-tight font-medium text-black flex items-end"
        >
          <i class="bi bi-telephone"></i>
          {{data.response.Phone}}</a>
        <a
          v-if="data.response.Address"
          :href="go2GoogleMap(data.response)"
          target="_blank"
          class="mt-4 text-gray-800 text-lg leading-tight font-medium text-black flex items-end"
        >
          <i class="bi bi-geo-alt"></i>
          {{data.response.Address}}</a>
      </div>
    </div>
    <div class="my-12  border-gray-300 border-b-solid border-b " />

    <h2 class="text-3xl mt-20 text-center">景點介紹</h2>
    <p class="mx-24 mt-12 text-xl">{{data.response.DescriptionDetail??data.response.Description}}</p>

    <div
      id="map"
      class="h-[400px] mt-16 mb-8"
    ></div>

  </div>

</template>

<script >
import { ref, reactive, watch, onMounted } from "vue";
import * as utils from "../utils/utils.js";
import * as consts from "../utils/consts";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export default {
  props: { type: String, city: String },
  setup(props) {
    const router = useRoute();
    const data = reactive({
      response: {},
    });

    onMounted(() => {
      utils
        .getPTXData(
          consts.PTXURLOBJ[props.type],
          "",
          "&$filter=ID%20eq%20%27" + router.params.id + "%27"
        )
        .then((res) => {
          data.response = res[0];

          if (data.response?.Position?.PositionLat) {
            var lat = data.response.Position.PositionLat;
            var lon = data.response.Position.PositionLon;
            var map = L.map("map").setView([lat, lon], 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            L.marker([lat, lon])
              .addTo(map)
              .bindPopup(data.response.Name)
              .openPopup();
          }
        });
    });

    function go2GoogleMap(item) {
      if (item.Position && item.Position.PositionLon)
        return `https://www.google.com.tw/maps/@${item.Position.PositionLat},${item.Position.PositionLon},16z`;
      else return "https://www.google.com.tw/maps/search/" + item.Name;
    }
    function getImage(picObj) {
      if (picObj && picObj.PictureUrl1) return picObj.PictureUrl1;
      else return "https://fakeimg.pl/500x500/";
    }

    return { data, go2GoogleMap, getImage };
  },
};
</script>

<style lang="scss" scoped>
.bi {
  @apply mb-1 mr-2;
}
</style>