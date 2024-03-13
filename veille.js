function sortArticle(event) {
    const sortType = event.target.value; 

    const container = document.querySelector(".articles");
    const articles = Array.from(container.children); 

    if (sortType === "date") {
        NewList = articles.sort((a, b) => {
            const dateA = new Date(a.querySelector(".date").dataset.date);
            const dateB = new Date(b.querySelector(".date").dataset.date);
            return dateB - dateA;
        });
    } else if (sortType === "notes") {
        NewList = articles.sort((a, b) => {
            const noteA = parseInt(a.querySelector(".note").dataset.note, 10);
            const noteB = parseInt(b.querySelector(".note").dataset.note, 10);
            return noteB - noteA; 
        });
    }

        NewList.forEach((articlesEl, i)=> {
            articlesEl.style.order = i;
        })

}
