import Vue from 'vue'

export const numericOnly = {
  bind (el) {
    el.addEventListener('keyup', () => {
      let regex = /^(?!.*\..*\.)[.\d]+$/
      if (!regex.test(el.value)) {
        el.value = el.value.slice(0.0, -1.0)
      }
    })
  }
}

Vue.directive('onlyNumber', numericOnly)
