const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')

})

function direcionar(x) {
    window.scroll({
	top: x,
    behavior: "smooth", });
};

const lua = document.getElementById('lua');

lua.addEventListener('click', () =>{
    if(lua.classList.contains('fa-moon')){
        lua.classList.remove('fa-moon');
        lua.classList.add('fa-sun');
        return;
    }

    lua.classList.add('fa-moon');
    lua.classList.remove('fa-sun');
})

window.addEventListener('scroll', function AtivarSeta(){
    var seta = document.querySelector('.seta');
    seta.classList.toggle('ativada', window.scrollY > 1000);
  })