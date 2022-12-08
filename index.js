console.log("Alright Day 6,let's go!!!");

document.getElementById('button').addEventListener('click', function(){
    console.log("Yea it's working");
     let inp =document.getElementById('searchbar').value;
     giphyAPI();

})


document.getElementById('searchbar').addEventListener('keyup', function(e){
    console.log("Yea it's working");
   
    if(e.which==13){
        let inp =document.getElementById('searchbar').value;
   // pushgifs(inp);
    giphyAPI();
    }
    })


document.getElementById('themebutton').addEventListener('click', function(){
    const theme= document.querySelector('body').classList;
    theme.toggle('bodyy'); 
    document.getElementById('themebutton').style.backgroundImage= "linear-gradient(45deg, grey,black,black, grey)";
    document.querySelector('div').classList;
    theme.toggle('headingg');
    
})


let inp =document.getElementById('searchbar').value;
let doggo= inp + " ";
var url="https://api.giphy.com/v1/gifs/search?api_key=Sl9Opahr1Ej0Q1jTrd2lZIhoUVJ0Dih3&q="+ doggo;
console.log(url);


function giphyAPI(){ 
var GiphyAJAXCall=new XMLHttpRequest();
GiphyAJAXCall.open('GET',url);
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load',function(e){
    var data =e.target.response;
    var jsondata=JSON.parse(data);
    for(let i=0; i<=50;i++){
        var jsonlink=jsondata.data[i].images.fixed_height.url;
        document.getElementById('gifs').innerHTML+="<img src=\"" +jsonlink+ "\" class=\"giffyimages\">";
    }
});
}
