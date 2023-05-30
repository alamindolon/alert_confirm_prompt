document.getElementById('btn_add_name').addEventListener('click',function(){
    const namefiled = document.getElementById('name_filed');
    const nameValue = namefiled.value;
    localStorage.setItem('name',nameValue);
})

document.getElementById('btn_remove _name').addEventListener('click', function()
{
    localStorage.removeItem('name');
})
document.getElementById('clear_all').addEventListener('click',function(){
    localStorage.clear();
})