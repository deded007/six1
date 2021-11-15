
<template>
  <div class="flex my-8">
    <div class="mx-auto bg-white rounded-xl shadow-md flex p-4  h-[280px] w-full">
      <div class="w-4/12 overflow-hidden rounded-xl ">
        <img
          class=" object-cover object-center h-full w-full hover:w-[120%]"
          :src="m.getImage(item.Picture)"
        >
      </div>
      <div class="w-7/12 p-8 pt-4 tracking-wider font-black">
        <a
          :href="item.WebsiteUrl"
          target="_blank"
          class="block text-gray-800 text-3xl leading-10"
        >{{item.Name}}</a>
        <a
          v-if="item.Phone"
          :href="'tel:+'+item.Phone"
          target="_blank"
          class="mt-1 text-lg leading-tight font-medium text-black flex items-end"
        >
          <i class="bi bi-telephone"></i>
          {{item.Phone}}</a>
        <a
          v-if="item.Address"
          :href="m.go2GoogleMap(item)"
          target="_blank"
          class="mt-1 text-lg leading-tight font-medium text-black flex items-end"
        >
          <i class="bi bi-geo-alt"></i>
          {{item.Address}}</a>
        <p class="mt-6 text-xl text-gray-700 dotdotdot-5">{{item.Description??item.DescriptionDetail}}</p>
      </div>
      <router-link
        class="w-1/12 flex items-center "
        :to="m.go2Detail(item.ID)"
      >
        <i class="bi bi-chevron-compact-right text-8xl hover:animate-bounce-lr"></i>
      </router-link>
    </div>
  </div>
</template>

<script >
import { ref, reactive, watch, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  setup() {
    const route = useRoute();

    return {  m };
  },
};

let m = {
  go2GoogleMap(item) {
    if (item.Position && item.Position.PositionLon)
      return `https://www.google.com.tw/maps/@${item.Position.PositionLat},${item.Position.PositionLon},16z`;
    else return "https://www.google.com.tw/maps/search/" + item.Name;
  },
  go2Detail(ID) {
    return "/HOTEL/" + ID;
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
