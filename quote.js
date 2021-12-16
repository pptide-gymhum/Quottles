import { getFirestore, collection, getDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"

var loading = false

// When the modal closes allow opening a new modal and go back in history (because opening a modal always adds a new history entry)
$( function() {
  $("#modal").on("hidden.bs.modal", function (event) {
    loading = false
    history.back()
  })
})

export async function openQuotes(theme) {
  // Don't allow opening a modal while another one is loading
  if (loading) {
    return
  }
  loading = true
  // change URL without reloading page, so that if you share the url the person that gets the URL also gets the modal
  history.pushState({}, "", "quotes.html?theme="+theme)

  // get the Database from Firebase and get the quotes for the theme
  const db = getFirestore();
  const querySnapshot = doc(db, "themes", String(theme));
  var data = await getDoc(querySnapshot)

  // set the Label to the themes Title obtained from the firebase database
  $("#modalLabel").text(data.data().name)


  // load the rest of the data
  var data = await getData(theme)

  // and save all quote in a string made to html and loaded into the modal
  var dataText = ""
  data.forEach(doc => {
    dataText += `<a href='`+"quote.html?theme="+theme+"&post="+doc.id+`' class='list-group-item list-group-item-action' aria-current='true'>
    <div class='d-flex w-100 justify-content-between'>
      <h5 class='mb-1'>`+doc.data().title+`</h5>
      <small>`+doc.data().created.toDate().toLocaleTimeString("de") + " " + doc.data().created.toDate().toLocaleDateString("de")+`</small>
    </div>
    <p class='mb-1'>`+doc.data().quote+`</p>
    <small>`+doc.data().source+`</small>
  </a>`
  });
  $("#modalBody").html("<ul class='list-group'>" + dataText + "</ul>")

  // Show the modal
  var quoteModal = new bootstrap.Modal($("#modal"), {})
  quoteModal.show()
}

async function getData(theme) {
  const db = getFirestore();
  const querySnapshot = collection(db, "themes", String(theme), "quotes");
  return await getDocs(querySnapshot)
}