<script>
import Heading from '../heading/index.vue'

const defaultColorScheme = {
  left: "#55ACEE",
  right: "#226699"
}

const ukraineColorScheme = {
  left: "#005BBB",
  right: "#FFD500"
}

let variant = "full"

export default {
  name: "Brand",
  data() {
    return {
      variant,
      colors: defaultColorScheme
    };
  },
  props: {
    variant: {
      type: String,
      required: true,
      validator(value) {
        variant = value
      }
    }
  },
  components: { Heading }
}
</script>


<template>
  <div>
    <svg width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.7298 3.67707C36.0145 25.4053 23.5368 34.2791 16.6374 36C-0.449645 31.1516 -0.170734 12.4312 2.1046 3.67707C12.6739 -1.17137 25.5919 1.65689 30.7298 3.67707Z"
        fill="url(#paint0_linear_8_105)" stroke="#DFE2E7" stroke-width="2" />

      <defs>
        <linearGradient id="paint0_linear_8_105" x1="-0.658932" y1="18.5083" x2="33.3685" y2="18.5083"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.507339" :stop-color="colors.left" />
          <stop offset="0.50744" :stop-color="colors.right" />
        </linearGradient>
      </defs>
    </svg>
    <Heading v-if="variant == 'full'" variant="h3">
      Encryptr
    </Heading>
  </div>
</template>