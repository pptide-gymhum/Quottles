import { signIn, logOut } from "../firebase.js";
import { openQuotes } from "../quote.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// Define the Vue Component for the Navbar.
Vue.component('site-navbar', {
  // arguments passed to the navbar
  props: {
    site: {
      required: true
    }
  },
  // data used in the navbar
  data: function() {
    return {
      user: null,
    }
  },
  // functions yoused in the navbar
  methods: {
    signIn: function() {
      signIn()
    },
    signOut: function() {
      logOut()
    },
    openQuotes: function(theme) {
      openQuotes(theme)
    }
  },
  // initialize the navbar
  created: function() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      this.user = user
    });
  },
  // HTML template for the navbar (use of Vue syntax look below)
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Quottle</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" v-bind:class="{ active: site=='homepage' }" aria-current="page" href="index.html">
              Startseite
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" v-bind:class="{ active: site=='quotes' }" href="quotes.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Zitate
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="quotes.html">Zitate</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" @click="openQuotes(0)">Serien/Filme</a></li>
              <li><a class="dropdown-item" @click="openQuotes(1)">Von berühmten Personen</a></li>
              <li><a class="dropdown-item" @click="openQuotes(2)">Liebe</a></li>
              <li><a class="dropdown-item" @click="openQuotes(3)">Motivation</a></li>
              <li><a class="dropdown-item" @click="openQuotes(4)">Depression</a></li>
              <li><a class="dropdown-item" @click="openQuotes(5)">Sport</a></li>
              <li><a class="dropdown-item" @click="openQuotes(6)">Zu besonderen Anlässen</a></li>
              <li><a class="dropdown-item" @click="openQuotes(7)">Glück</a></li>
              <li><a class="dropdown-item" @click="openQuotes(8)">Andere</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-bind:class="{ active: site=='createQuote' }" href="createaquote.html"><i class="far fa-plus-square"></i></a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Suchen...">
          <button class="btn btn-outline-success me-3" type="submit">Suchen</button>
        </form>
        <template v-if="!user">
          <button class="btn btn-outline-success me-2" type="button" @click="signIn">Registrieren</button>
          <button class="btn btn-sm btn-outline-secondary" type="button" @click="signIn">Anmelden</button>
        </template>
        <template v-else>
          <!-- Login Menu von der Seite: -->
          <!-- https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=all-in-one-navbar -->
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a id="navbarLoginDropdown" role="button" data-bs-toggle="dropdown" class="nav-link dropdown-toggle"><img :src="user.photoURL" class="avatar" alt="Avatar"> {{ user.displayName }} <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#"><i class="fa fa-user-o"></i> Profile</a></li>
                <li><a href="#"><i class="fa fa-calendar-o"></i> Calendar</a></li>
                <li><a href="#"><i class="fa fa-sliders"></i> Settings</a></li>
                <li class="divider"></li>
                <li><a href="#" @click="signOut"><i class="material-icons">&#xE8AC;</i> Logout</a></li>
              </ul>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </nav>
  `
})

// v-bind:class="{ active: site=='homepage' }"    if the argument site equals homepage use the class active.
// @click="openQuotes(0)"                         when clicked run the function openQuotes with the argument 0
// <template v-if="!user"></template>             Render only if there is no User loged in (<template> is hidden while rendering)