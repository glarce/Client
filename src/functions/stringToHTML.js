export default html => {
  var template = document.createElement('template')
  html.trim()
  template.innerHTML = html
  return template.content.firstChild
}
