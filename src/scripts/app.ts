$(document).ready(function() {
  $('.ui.selection.dropdown').dropdown();
  $('.ui.menu .ui.dropdown').dropdown({ on: 'hover' });
  $('.ui.checkbox').checkbox();

  // Automatically shows on init if cookie isnt set
  $('.cookie.nag').nag({
    key      : 'accepts-cookies',
    value    : true
  });

  $('.ui.form').form();
});
