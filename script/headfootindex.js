fetch('sites/headerindex.html').then(response => response.text()).then(data => {
  document.getElementById('header').innerHTML = data;
});
fetch('sites/footer.html').then(response => response.text()).then(data => {
  document.getElementById('footer').innerHTML = data;
});
