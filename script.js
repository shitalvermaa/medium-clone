const menuToggle = document.querySelector('.menu-toggle');
const leftSidebar = document.querySelector('.left-sidebar');

if (menuToggle && leftSidebar) {
    menuToggle.addEventListener('click', function() {
        leftSidebar.classList.toggle('hide-sidebar');
    });
} else {
    console.log("JS Error: Elements not found");
}


const searchInput = document.querySelector(".search-box input");
const posts = document.querySelectorAll(".post-card");

if(searchInput){

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    posts.forEach(function(post) {

        const title = post.querySelector(".post-title").textContent.toLowerCase();

        const subtitle = post.querySelector(".post-subtitle").textContent.toLowerCase();

        const author = post.querySelector(".author-name").textContent.toLowerCase();

        if (
            title.includes(searchValue) ||
            subtitle.includes(searchValue) ||
            author.includes(searchValue)
        ) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }

    });

});

}


const writeBtn = document.getElementById("writeBtn");

if(writeBtn){
    writeBtn.addEventListener("click", function(){
        window.location.href = "write.html";
    });
}


const publishBtn = document.getElementById("publishBtn");

if(publishBtn){

publishBtn.addEventListener("click", function(){

    let title = document.getElementById("storyTitle").value;
    let content = document.getElementById("storyContent").value;

    if(title === "" || content === ""){
        alert("Please fill all fields");
        return;
    }

    let article = {
        title:title,
        content:content
    };

    localStorage.setItem("article", JSON.stringify(article));

    alert("Article Published");

    window.location.href = "index.html";

});

const savedArticle = JSON.parse(localStorage.getItem("article"));

if(savedArticle){

    let article = document.createElement("div");

    article.className = "post-card";

    article.innerHTML = `
        <h2 class="post-title">${savedArticle.title}</h2>
        <p class="post-subtitle">${savedArticle.content}</p>
        <p class="author-name">You</p>
    `;

    document.querySelector(".posts").prepend(article);

}

}