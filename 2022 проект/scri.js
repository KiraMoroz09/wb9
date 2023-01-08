
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
	page.classList.toggle('dark-theme');
}
function OpenMenu() {
      document.getElementById('sidebar').classList.toggle('active');
    }

    
    $('input:empty, textarea:empty').closest('label').addClass('empty');

$('input').keyup(function () {
  if ($(this).val().trim() !== '') {
    $(this).closest('label').removeClass('empty');
  } else {
    $(this).closest('label').addClass('empty');
  }
});