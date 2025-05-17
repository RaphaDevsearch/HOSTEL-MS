function loadPage(pageName) {
    fetch(`./section/${pageName}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        })
        .catch(err => {
            document.getElementById("main-content").innerHTML = "<p class='text-danger'>Failed to load page.</p>";
            console.error(err);
        });
}

document.querySelectorAll('.sidebar a[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        loadPage(page);
    });
});

// Optional: load dashboard by default
// loadPage('dashboard');