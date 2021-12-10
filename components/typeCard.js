// Define componetent quote card
Vue.component('type-card', {
  props: [
    "title",
    "picturesrc"
  ],
  methods: {
    link: function(){
      document.location.href = "https://google.com"
    }
  },
  template: `
  <div class="col col-md-auto" @click="link">
    <div class="card bg-dark text-white m-3" style="width: 15rem;">
      <img :src="picturesrc" class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title"> {{ title }} </h5>
        <p class="card-text"> <slot></slot> </p>
      </div>
    </div>
  </div>
  `
})