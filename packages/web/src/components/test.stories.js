import Tutorial from './Tutorial.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Tutorial,
}

export const Primary = () => ({
  components: { Tutorial },
  template: '<h1>Hello world dpoadgaus</h1>',
})
