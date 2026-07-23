document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Prototype-only form intercept — production forms will be GHL form embeds.
  document.querySelectorAll('form[data-prototype-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('This is a design prototype. In the live GHL site, this will submit to your GLM Landscaping pipeline and trigger a confirmation text/email.');
    });
  });
});
