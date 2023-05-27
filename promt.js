console.log('showAlart');
// alert('ki khobor');
const ashowAlart = () =>
{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5)
    {
        alert('ki khobor dst');
    }
}
const confirmBtn =() =>
{
    confirm('Are you coming picnic?')
}

const promtBtn = () =>{
    const name = prompt('whats your Name');
    console.log(name);
    if(!!name)
    {
        console.log('welcome here', name);
    }
}