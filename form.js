import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"

function getTheme() {
  var checkedTheme = document.querySelector('input[name="themeSelector"]:checked')
  return checkedTheme.value
}

export async function saveContent() {
  const title = $("#quoteTitle").val()
  const quote = $("#quoteContent").val()
  const source = $("#quoteSource").val()
  const extension = $("#quoteExtension").val()
  const theme = getTheme()


  try {
    const db = getFirestore();
    await addDoc(collection(db, "themes", String(theme), "quotes"), {
      created: new Date(),
      quote: quote,
      source: source,
      title: title,
      extension: extension
    })
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}