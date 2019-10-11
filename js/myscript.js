var countarray=0;
var buff=0;

data.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});
function createHeader(){
    var header = document.createElement("header");
    var header_text = document.createElement("h1");
    var nav_bar = document.createElement("nav");
    var divNavBar = document.createElement("div");
    var link1 = document.createElement('a');
    var linkText = document.createTextNode("Home");
    nav_bar.setAttribute("id","nav");
    divNavBar.setAttribute("id","topnav");
    divNavBar.setAttribute("class","myTopNav");
    link1.appendChild(linkText);
    link1.title="Home";
    link1.href="index.html";
    link1.style.color="white";
    link1.style.textDecoration="none";
    link1.style.fontSize = "x-large";
    header.style.backgroundColor ="black";
    header.style.height = "8vw";
    header.setAttribute("id","header");
    header_text.setAttribute("id","headerText");
    header_text.innerHTML="Movie Factory";
    header_text.style.textAlign = "center";
    header_text.style.color = "white";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    header_text.style.margin ="0";
    document.querySelector('body').appendChild(header);
    document.getElementById("header").appendChild(header_text);
    document.getElementById("header").appendChild(nav_bar);
    document.getElementById("nav").appendChild(divNavBar);
    divNavBar.appendChild(link1);
}
function createGallery(){
    var container= document.createElement("div");
    container.setAttribute("class","maincontainer");
    container.style.backgroundColor ="lightgray";
    container.style.display="flex";
    container.style.flexWrap="wrap";
    container.style.justifyContent="space-evenly";
    container.style.alignItems="baseline";
    var container_head=document.createElement("h1");
    container_head.innerHTML="Movies";
    container_head.style.width="100%";
    container_head.style.textAlign="center";
    document.querySelector('body').appendChild(container);
    container.appendChild(container_head);
    var btnSort = document.createElement("button");
    btnSort.innerHTML="sort alphabetically";
    btnSort.style.backgroundColor="green";
    btnSort.style.width="60%";
    btnSort.style.textAlign="center";
    btnSort.onclick= function(e){
    data.sort(SortByName);
    container.remove();
    document.getElementById("footer").remove();
    createGallery();
    createFooter();
    }
    container.appendChild(btnSort);
    for (let i = 0; i < data.length; i++) {
       
        var movie_div = document.createElement("div");
        movie_div.setAttribute("class","moviedDiv");
        movie_div.style.backgroundColor ="gray";
        movie_div.style.width="40%";
        movie_div.style.height="50%";
        movie_div.style.display="flex";
        movie_div.style.margin="20px";
        movie_div.style.padding="0";
        
        movie_div.style.justifyContent="space-evenly";
        var movie_img = document.createElement("img");
        movie_div.setAttribute("class","moviedImg");
        movie_img.src=data[i].url;
        movie_img.style.margin="10px";
        movie_img.style.width="45%";
        movie_img.style.height="300px";
        var textDiv =document.createElement("div");
        textDiv.style.display="flex";
        textDiv.style.flexDirection="column";
        var movie_title = document.createElement("h3");
        movie_title.innerHTML=data[i].movie;
        var movie_desc = document.createElement("p");
        movie_desc.innerHTML=data[i].desc;
        var btnDiv =document.createElement("div");
        btnDiv.className="like_button";
        var btnCount = document.createElement("button");
        btnCount.setAttribute("id","btn"+(i+1));
        btnCount.value="0";
        btnCount.style.borderRadius="50%";
        btnCount.style.backgroundColor="green";
        btnCount.onclick= function(e){
            var buff=0;
            buff= Number(document.getElementById(this.id).value);
            buff++;
            document.getElementById(this.id).value=buff;
            document.getElementById(this.id).innerHTML=buff;
        }
        btnCount.innerHTML="Like";
        btnCount.style.alignSelf="flex-end"; 
        container.appendChild(movie_div);
        movie_div.appendChild(movie_img);
        movie_div.appendChild(textDiv);
        textDiv.appendChild(movie_title);
        textDiv.appendChild(movie_desc);
        textDiv.appendChild(btnDiv);
        btnDiv.appendChild(btnCount);
        //btnCount.appendChild(btnimg);
        
    }
}

function createFooter(){
    var footer = document.createElement("footer");
    var footer_text = document.createElement("p");
    var nav_bar = document.createElement("nav");
    var divNavBar = document.createElement("div");
    var link1 = document.createElement('a');
    var linkText = document.createTextNode("Home")
    footer.id="footer";
    link1.appendChild(linkText);    
    link1.title="Home";
    link1.href="index.html";
    link1.style.color="white";
    link1.style.textDecoration="none";
    link1.style.fontSize = "x-large";
    footer.style.backgroundColor ="black";
    footer.style.height = "8vw";
    footer_text.innerHTML="Movie Factory";
    footer_text.style.textAlign = "center";
    footer_text.style.color = "white";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    footer_text.style.margin ="0";
    document.querySelector('body').appendChild(footer);
    footer.appendChild(nav_bar);
    nav_bar.appendChild(divNavBar);
    divNavBar.appendChild(link1);
    footer.appendChild(footer_text);
}
function SortByName(x,y) {
    return ((x.movie == y.movie) ? 0 : ((x.movie > y.movie) ? 1 : -1 ));
  }
createHeader();
createGallery();
createFooter();