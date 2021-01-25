<template>
  <div class="dateComponent">
    <form @submit.prevent="searchPods()">
      <div class="form-group">
        <input
          type="date"
          name="query"
          id="query"
          class="form-control"
          min="1970-01-01"
          v-model="state.query"
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { photoService } from '../services/PhotoService'

export default {
  name: 'DateComponent',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      searchPods () {
        photoService.searchPods(state.query)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
