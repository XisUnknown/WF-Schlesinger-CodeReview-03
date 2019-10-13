var buff = 0;
var countArray = [];

function createHeader() {
    var header = document.createElement("header");
    var header_text = document.createElement("h1");
    var nav_bar = document.createElement("nav");
    var divNavBar = document.createElement("div");
    var link1 = document.createElement('a');
    var linkText = document.createTextNode("Home");
    nav_bar.setAttribute("id", "nav");
    divNavBar.setAttribute("id", "topnav");
    divNavBar.setAttribute("class", "myTopNav");
    link1.appendChild(linkText);
    link1.title = "Home";
    link1.href = "index.html";
    link1.style.color = "white";
    link1.style.textDecoration = "none";
    link1.style.fontSize = "x-large";
    header.style.backgroundColor = "black";
    header.style.height = "8vw";
    header.setAttribute("id", "header");
    header_text.setAttribute("id", "headerText");
    header_text.innerHTML = "Movie Factory";
    header_text.style.textAlign = "center";
    header_text.style.color = "white";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    header_text.style.margin = "0";
    document.querySelector('body').appendChild(header);
    document.getElementById("header").appendChild(header_text);
    document.getElementById("header").appendChild(nav_bar);
    document.getElementById("nav").appendChild(divNavBar);
    divNavBar.appendChild(link1);

}

function createGallery() {
    var container = document.createElement("div");
    container.setAttribute("id", "maincontainer");
    container.style.backgroundColor = "lightgray";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "space-evenly";
    container.style.alignItems = "baseline";
    var container_head = document.createElement("h1");
    container_head.innerHTML = "Movies";
    container_head.style.width = "100%";
    container_head.style.textAlign = "center";
    document.querySelector('body').appendChild(container);
    container.appendChild(container_head);
    var selectSort = document.createElement("select");
    selectSort.id = "select";
    selectSort.style.width = "60%";
    container.appendChild(selectSort);
    var selectopt1 = document.createElement("option");
    selectopt1.value = "sort1";
    var selectText1 = document.createTextNode("A-Z");
    selectopt1.onclick = function (e) {
        data.sort(SortByName);
        container.remove();
        document.getElementById("footer").remove();
        createGallery();
        createFooter();

    }
    selectopt1.appendChild(selectText1);
    selectSort.appendChild(selectopt1);
    var selectopt2 = document.createElement("option");
    selectopt2.value = "sort2";
    var selectText2 = document.createTextNode("Z-A");
    selectopt2.onclick = function (e) {
        data.sort(SortByName2);
        container.remove();
        document.getElementById("footer").remove();
        createGallery();
        createFooter();
    }
    selectopt2.appendChild(selectText2);
    selectSort.appendChild(selectopt2);
    var selectopt3 = document.createElement("option");
    selectopt3.value = "sort3";
    var selectText3 = document.createTextNode("Most Likes");
    selectopt3.onclick = function (e) {
        data.sort(SortByLikes);
        container.remove();
        document.getElementById("footer").remove();
        createGallery();
        createFooter();
    }
    selectopt3.appendChild(selectText3);
    selectSort.appendChild(selectopt3);
    var selectopt4 = document.createElement("option");
    selectopt4.value = "sort4";
    var selectText4 = document.createTextNode("Least Likes");
    selectopt4.onclick = function (e) {
        data.sort(SortByLikes2);
        container.remove();
        document.getElementById("footer").remove();
        createGallery();
        createFooter();
    }
    selectopt4.appendChild(selectText4);
    selectSort.appendChild(selectopt4);
    for (let i = 0; i < data.length; i++) {
        var movie_div = document.createElement("div");
        movie_div.setAttribute("class", "moviedDiv");
        movie_div.style.backgroundColor = "gray";
        movie_div.style.width = "40%";
        movie_div.style.height = "50%";
        movie_div.style.display = "flex";
        movie_div.style.margin = "20px";
        movie_div.style.padding = "0";
        movie_div.style.justifyContent = "space-around";
        var movie_img = document.createElement("img");
        movie_img.setAttribute("id", "img" + (i + 1));
        movie_img.src = data[i].url;
        movie_img.style.margin = "10px";
        movie_img.style.width = "45%";
        movie_img.style.height = "300px";
        var textDiv = document.createElement("div");
        textDiv.style.width = "40%";
        textDiv.style.display = "flex";
        textDiv.style.flexDirection = "column";
        var movie_title = document.createElement("h3");
        movie_title.innerHTML = data[i].movie;
        var movie_desc = document.createElement("p");
        movie_desc.innerHTML = data[i].desc;
        var btnDiv = document.createElement("div");
        btnDiv.className = "like_button";
        var btnCount = document.createElement("button");
        console.log("btn" + data[i].id);
        btnCount.id = "btn" + data[i].id;
        btnCount.style.height = "auto";
        btnCount.style.width = "auto ";
        btnCount.style.borderRadius = "50%";
        btnCount.style.backgroundColor = "green";
        btnCount.style.fontSize = "20pt";
    
        if (localStorage.getItem("btn"+data[i].id) === null) {
            btnCount.innerHTML = "Likes: 0";
        } else {
            btnCount.innerHTML = "Likes: " + localStorage.getItem("btn"+data[i].id);
            data[i].likes=localStorage.getItem("btn"+data[i].id);
        }
        btnCount.onclick = function (e) {

            buff = localStorage.getItem(this.id);
            buff++;
            localStorage.setItem(this.id, buff);
            console.log("id: "+this.id.slice(3));
            console.log("likes_old: "+data[this.id.slice(3)].likes);
            data[this.id.slice(3)].likes = buff;
            console.log("likes_new: "+data[this.id.slice(3)].likes);
            document.getElementById(this.id).value = buff;
            document.getElementById(this.id).innerHTML = "Likes: " + buff;
        }

        btnCount.style.alignSelf = "flex-end";
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

function createFooter() {
    var footer = document.createElement("footer");
    var footer_text = document.createElement("p");
    var nav_bar = document.createElement("nav");
    var divNavBar = document.createElement("div");
    var link1 = document.createElement('a');
    var linkText = document.createTextNode("Home")
    footer.id = "footer";
    link1.appendChild(linkText);
    link1.title = "Home";
    link1.href = "index.html";
    link1.style.color = "white";
    link1.style.textDecoration = "none";
    link1.style.fontSize = "x-large";
    footer.style.backgroundColor = "black";
    footer.style.height = "8vw";
    footer_text.innerHTML = "Movie Factory";
    footer_text.style.textAlign = "center";
    footer_text.style.color = "white";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    footer_text.style.margin = "0";
    document.querySelector('body').appendChild(footer);
    footer.appendChild(nav_bar);
    nav_bar.appendChild(divNavBar);
    divNavBar.appendChild(link1);
    footer.appendChild(footer_text);
}

function SortByName(x, y) {
    return ((x.movie == y.movie) ? 0 : ((x.movie > y.movie) ? 1 : -1));
}

function SortByName2(x, y) {
    return ((x.movie == y.movie) ? 0 : ((x.movie < y.movie) ? 1 : -1));
}

function SortByLikes(x, y) {
    return ((x.likes == y.likes) ? 0 : ((x.likes < y.likes) ? 1 : -1));
}

function SortByLikes2(x, y) {
    return ((x.likes == y.likes) ? 0 : ((x.likes > y.likes) ? 1 : -1));
}

createHeader();
createGallery();
createFooter();