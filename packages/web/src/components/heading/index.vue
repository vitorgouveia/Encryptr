<script>
let element = "p"

export default {
  name: "Heading",
  data() {
    return {
      element
    }
  },
  props: {
    variant: {
      type: String,
      required: true,
      validator(value) {
        switch (value) {
          case "title": {
            element = "h1"
            break
          }
          case "subtitle": {
            element = "h4"
            break
          }
          case "text": {
            element = "p"
            break
          }
          default: {
            element = value
            break
          }
        }
        return value
      }
    }
  }
}
</script>

<template>
  <component :is="element">
    <slot />
  </component>
</template>