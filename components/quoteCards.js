// Create a Component wth Vue for a Card that contains a Quote for the homepage
Vue.component('quote-card', {
  props: {
    title: {
      required: true
    },
    isyt: {
      required: true
    },
    extension: {
      required: true
    },
    link: {
      required: true
    }
  },
  // data used in the card
  data: function() {
    return {
      ytExtension: null,
    }
  },
  // initialize the navbar
  created: function() {
    // initialize the navbar
    const extensionURL = new URL(this.extension);
    this.ytExtension = extensionURL.origin + "/embed/" + extensionURL.searchParams.get("v")
  },
  template: `
  <div class="col col-md-auto">
    <div class="card m-3" style="width: 20rem;">
    <iframe v-if="isyt=='true'" class="card-img" :src="ytExtension" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <img v-else class="card-img" :src="extension">
      <div class="card-body">
        <h5 class="card-title"> {{ title }}</h5>
        <p class="card-text"> <slot></slot> </p>
        <a :href="link" class="btn btn-primary">Mehr Informationen</a>
      </div>
    </div>
  </div>
  `
})