fetch('header.html').then(response => response.text()).then(data => {
  document.getElementByClassName('Header').innerHTML = data;
});
fetch('footer.html').then(response => response.text()).then(data => {
  document.getElementByClassName('Footer').innerHTML = data;
});
