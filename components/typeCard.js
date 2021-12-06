// Define componetent quote card
Vue.component('type-card', {
  props: [
    "title",
    "content",
  ],
  template: `
  <div class="col col-md-auto">
    <div class="card bg-dark text-white m-3" style="width: 15rem;">
      <img src="https://via.placeholder.com/1500" class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ content }}</p>
      </div>
    </div>
  </div>
  `
})