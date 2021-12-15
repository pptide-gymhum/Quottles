import { openQuotes } from "../quote.js";

// Define componetent quote card
Vue.component('type-card', {
  props: [
    "title",
    "picturesrc",
    "theme"
  ],
  methods: {
    link: function(){
      openQuotes(parseInt(this.theme))
    }
  },
  template: `
  <div class="col col-md-auto" @click="link">
    <div class="card bg-dark text-white m-3" style="width: 15rem; cursor: pointer;">
      <img :src="picturesrc" class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title" style="mix-blend-mode: difference;"> {{ title }} </h5>
        <p class="card-text" style="mix-blend-mode: difference;"> <slot></slot> </p>
      </div>
    </div>
  </div>
  `
})