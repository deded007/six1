<template>
  <div>
    {{data.response}}
    <div class="w-full md:w-[60%] rounded-lg">
      <img
        src="https://fakeimg.pl/500x500/"
        alt=""
      >
    </div>
    <div class="w-full md:w-[40%] rounded-lg">
      <h1 class="text-lg text-gray-600">{{data.response.Name}}</h1>
      <a
        :href="data.response.WebsiteUrl"
        target="_blank"
        class="block text-gray-800 text-3xl leading-10"
      >{{data.response.Name}}</a>
      <div><i class="bi bi-alarm"></i>{{data.response.OpenTime}}</div>
      <a
        v-if="data.response.Phone"
        :href="'tel:+'+data.response.Phone"
        target="_blank"
        class="mt-1 text-lg leading-tight font-medium text-black flex items-end"
      >
        <i class="bi bi-telephone"></i>
        {{data.response.Phone}}</a>
      <a
        v-if="data.response.Address"
        :href="go2GoogleMap(data.response)"
        target="_blank"
        class="mt-1 text-lg leading-tight font-medium text-black flex items-end"
      >
        <i class="bi bi-geo-alt"></i>
        {{data.response.Address}}</a>
    </div>
    <hr>
    <h2>景點介紹</h2>

    <p class="mt-6 text-xl text-gray-700 dotdotdot-5">{{data.response.DescriptionDetail??data.response.Description}}</p>
    <div id="map"></div>

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
          debugger;
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
              .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
              .openPopup();
          }
        });
    });

    function go2GoogleMap(item) {
      if (item.Position && item.Position.PositionLon)
        return `https://www.google.com.tw/maps/@${item.Position.PositionLat},${item.Position.PositionLon},16z`;
      else return "https://www.google.com.tw/maps/search/" + item.Name;
    }

    return { data, go2GoogleMap };
  },
};
</script>

<style lang="scss" scoped>
</style>