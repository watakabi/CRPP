fetch('sites/headerindex.html').then(response => response.text()).then(data => {
  document.getElementById('header').innerHTML = data;
});
fetch('sites/footerindex.html').then(response => response.text()).then(data => {
  document.getElementById('footer').innerHTML = data;
});
