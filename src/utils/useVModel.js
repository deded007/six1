import { computed, getCurrentInstance } from 'vue'

export default function useVModel(props, propName)  {
  const vm = getCurrentInstance().proxy

  return computed({
    get() {
      return props[propName]
    },
    set(value) {
      vm.$emit(`update:${propName}`, value)
    },
  })
}