fetch('header.html').then(response => response.text()).then(data => {
  document.getElementByClass('Header').innerHTML = data;
});
fetch('footer.html').then(response => response.text()).then(data => {
  document.getElementById('footer').innerHTML = data;
});
