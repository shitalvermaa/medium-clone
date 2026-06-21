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