
<template>
  <div class="flex my-8">
    <router-link
      class="mx-auto bg-white rounded-xl shadow-md flex p-4  h-[280px] w-full  card"
      :to="go2Detail(item.ID)"
    >
      <span class="block w-4/12 overflow-hidden rounded-xl">
        <img
          class=" object-cover object-center h-full w-full duration-500 hover:scale-125"
          :src="getImage(item.Picture)"
        >
      </span>
      <div class="w-7/12 p-8 pt-4 tracking-wider font-black ">
        <span
          target="_blank"
          class="block text-gray-800 text-3xl leading-10 dotdotdot-2"
        >{{item.Name}}</span>
        <span
          v-if="item.Phone"
          target="_blank"
          class="mt-1 text-lg leading-tight font-medium text-black flex items-end"
        >
          <i class="bi bi-telephone"></i>
          {{item.Phone}}</span>
        <span
          v-if="item.Address"
          target="_blank"
          class="mt-1 text-lg leading-tight font-medium text-black flex items-end"
        >
          <i class="bi bi-geo-alt"></i>
          {{item.Address}}</span>
        <p class="mt-6 text-xl text-gray-700 dotdotdot-4">{{item.Description??item.DescriptionDetail}}</p>
      </div>
      <span class="w-1/12 flex items-center ">
        <i class="bi bi-chevron-compact-right text-8xl   "></i>
      </span>
    </router-link>
  </div>
</template>

<script >
import { ref, reactive, watch, onMounted } from "vue";

export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    function go2Detail(ID) {
      return "/" + props.type + "/" + ID;
    }

    function getImage(picObj) {
      if (picObj && picObj.PictureUrl1) return picObj.PictureUrl1;
      else return "https://fakeimg.pl/500x500/";
    }
    return { go2Detail, getImage };
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
.card:hover {
  img {
    transform: scale(1.2);
  }
  .bi-chevron-compact-right {
    @apply animate-bounce-lr ;
  }
}
</style>
