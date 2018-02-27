const express =require('express');
const hbs =require('hbs');

const app= express();
hbs.registerPartials(__dirname +'/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('currentTime', ()=>{
    return new Date().getFullYear()
});

app.get('/', (req, res) => {
    res.render('home.hbs',{
        pageTitle:'Home page',
        welcomeMessage:'Welcome to my website!'
    });

});
app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle:'About page',
       
    });

});
app.listen(3000 ,() =>{
console.log( 'server is up on port 3000');
});