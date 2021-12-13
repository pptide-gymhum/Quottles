import { getFirestore, collection, getDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"

var loading = false

$( function() {
  $("#modal").on("hidden.bs.modal", function (event) {
    loading = false
  })
})

export async function openQuotes(theme) {
  // Don't allow opening a modal while another one is loading
  if (loading) {
    return
  }
  loading = true
  // change URL without reloading page
  history.pushState({}, "", "quotes.html?theme="+theme)

  const db = getFirestore();
  const querySnapshot = doc(db, "themes", String(theme));

  var data = await getDoc(querySnapshot)

  $("#modalLabel").text(data.data().name)


  var data = await getData(theme)

  var dataText = ""
  data.forEach(doc => {
    dataText += `<a href='#' class='list-group-item list-group-item-action' aria-current='true'>
    <div class='d-flex w-100 justify-content-between'>
      <h5 class='mb-1'>`+doc.data().title+`</h5>
      <small>`+doc.data().created.toDate().toLocaleTimeString("de") + " " + doc.data().created.toDate().toLocaleDateString("de")+`</small>
    </div>
    <p class='mb-1'>`+doc.data().quote+`</p>
    <small>`+doc.data().source+`</small>
  </a>`
  });
  $("#modalBody").html("<ul class='list-group'>" + dataText + "</ul>")

  var quoteModal = new bootstrap.Modal($("#modal"), {})
  quoteModal.show()
}

async function getData(theme) {
  const db = getFirestore();
  const querySnapshot = collection(db, "themes", String(theme), "quotes");
  return await getDocs(querySnapshot)
}