import { forEach } from 'lodash'

const DEFAULT_DATA_KEY = 'dynamicProps'

export default (DATA_KEY = DEFAULT_DATA_KEY) => ({
  created() {
    this.dynamicPropsInitilize()
  },
  watch: {
    $props: {
      handler(props) {
        this[DATA_KEY] = {
          ...props
        }
      },
      deep: true
    }
  },
  methods: {
    dynamicPropsInitilize() {
      const data = this.$data
      let isDup = false

      forEach(data, (value, index) => {
        if (index === DATA_KEY) {
          isDup = true
          return false
        }
      })

      if (!isDup) {
        this[DATA_KEY] = {
          ...this.$props
        }
      } else {
        throw new Error(`dynamicProps data key: ${DATA_KEY} has been taken.`)
      }
    }
  }
})
