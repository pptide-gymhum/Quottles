import { signIn, logOut } from "../firebase.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// Define componetent Navbar
Vue.component('site-navbar', {
  data: function() {
    return {
      user: null
    }
  },
  methods: {
    signIn: function() {
      signIn()
    },
    signOut: function() {
      logOut()
    },
  },
  created: function() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      this.user = user
    });
  },
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
            <a class="nav-link active" aria-current="page" href="index.html">Startseite</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="quotes.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Zitate
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="quotes.html">Zitate</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="quotes.html?theme=1">Thema 1</a></li>
              <li><a class="dropdown-item" href="quotes.html?theme=2">Thema 2</a></li>
              <li><a class="dropdown-item" href="quotes.html?theme=3">Thema 3</a></li>
              <li><a class="dropdown-item" href="quotes.html?theme=4">Thema 4</a></li>
              <li><a class="dropdown-item" href="quotes.html?theme=5">Thema 5</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="createaquote.html"><i class="far fa-plus-square"></i></a>
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
          <!-- <button class="btn btn-sm btn-outline-secondary" type="button" @click="signOut">Abmelden</button> -->
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