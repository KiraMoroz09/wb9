
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
	page.classList.toggle('dark-theme');
}
function OpenMenu() {
      document.getElementById('sidebar').classList.toggle('active');
    }

    
    $('input:empty, textarea:empty').closest('label').addClass('empty');
