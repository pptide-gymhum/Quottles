// Define componetent Navbar
Vue.component('site-navbar', {
  data: function () {
    return {
      //count: 0
    }
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
        <button class="btn btn-outline-success me-2" href="#" type="button">Registrieren</button>
        <button class="btn btn-sm btn-outline-secondary" href="#" type="button">Anmelden</button>
      </div>
    </div>
  </nav>
  `
})