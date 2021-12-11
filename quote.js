import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"


export async function openQuotes(theme) {
  // change URL without reloading page
  history.pushState({}, "", "quotes.html?theme="+theme)

  $("#modalLabel").text(theme)

  var data = await getData(theme)
  var dataText = ""
  // data.forEach((doc) => {
  //   console.log("Test");
  //   dataText.concat("<li class='list-group-item'>"+doc.data().first+"</li>")
  // }).then(console.log("Hi"))
  data.forEach(doc => {
    dataText += `<a href='#' class='list-group-item list-group-item-action' aria-current='true'>
    <div class='d-flex w-100 justify-content-between'>
      <h5 class='mb-1'>`+doc.data().title+`</h5>
      <small>`+doc.data().created+`</small>
    </div>
    <p class='mb-1'>`+doc.data().quote+`</p>
    <small>And some small print.</small>
  </a>`
  });
  $("#modalBody").html("<ul class='list-group'>" + dataText + "</ul>")

  var quoteModal = new bootstrap.Modal($("#modal"), {})
  quoteModal.show()
}

async function getData(theme) {
  const db = getFirestore();
  const querySnapshot = collection(db, "themes", theme, "quotes");
  console.log(await getDocs(querySnapshot));
  return await getDocs(querySnapshot)
}