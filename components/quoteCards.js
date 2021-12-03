// Define componetent quote card
Vue.component('quote-card', {
  props: [
    "title",
    "content",
  ],
  template: `
  <div class="col col-md-auto">
    <div class="card m-3" style="width: 20rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> {{ title }}</h5>
        <p class="card-text"> {{ content }} </p>
        <a href="#" class="btn btn-primary">Link oder so</a>
      </div>
    </div>
  </div>
  `
})