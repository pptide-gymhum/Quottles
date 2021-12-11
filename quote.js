export function openQuotes(theme) {
  // change URL without reloading page
  history.pushState({}, "", "quotes.html?theme="+theme)

  $("#modalLabel").text(theme)
  $("#modalBody").text(theme)
  var quoteModal = new bootstrap.Modal($("#modal"), {})
  quoteModal.show()
}