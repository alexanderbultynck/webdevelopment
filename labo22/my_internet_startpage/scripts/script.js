const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

const setup = () => {
    const btn = document.getElementById("btn");
    const inputField = document.getElementById("zoekopdracht");
    const historyContainer = document.getElementById("history");

    btn.addEventListener("click", () => {
        const input = inputField.value.trim();
        const regex = /^\/([a-z])\s+(.+)/;
        const match = input.match(regex);

        if (!match) {
            if (input.startsWith("/")) {
                alert("Unknown command prefix");
            } else {
                alert("Invalid command");
            }
            return;
        }

        const command = match[1];
        const query = match[2];
        let title, url, color;

        switch (command) {
            case "g":
                title = "Google";
                url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                color = "#4285F4";
                break;
            case "y":
                title = "YouTube";
                url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                color = "#FF0000";
                break;
            case "x":
                title = "Twitter";
                url = `https://x.com/hashtag/${encodeURIComponent(query)}`;
                color = "#1DA1F2";
                break;
            case "i":
                title = "Instagram";
                url = `https://www.instagram.com/explore/tags/${encodeURIComponent(query)}/`;
                color = "#C13584";
                break;
            default:
                alert("Unknown command prefix");
                return;
        }

        window.open(url, "_blank");

        const historyEntry = { title, text: query, url };
        searchHistory.push(historyEntry);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

        renderHistory();
        inputField.value = "";

        historyContainer.classList.add("updated-history")
    });

    renderHistory();
};

const renderHistory = () => {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "";

    searchHistory.forEach((entry) => {
        const card = document.createElement("div");
        card.className = "col-md-4";

        card.innerHTML = `
            <div class="card text-white mb-3" style="background-color: ${getThemeColor(entry.title)};">
                <div class="card-header">${entry.title}</div>
                <div class="card-body">
                    <p class="card-text">${entry.text}</p>
                    <a href="${entry.url}" target="_blank" class="btn btn-light">Go!</a>
                </div>
            </div>
        `;

        historyContainer.appendChild(card);
    });
};

const getThemeColor = (title) => {
    const colors = {
        "Google": "#4285F4",
        "YouTube": "#FF0000",
        "Twitter": "#1DA1F2",
        "Instagram": "#C13584"
    };
    return colors[title] || "#6c757d";
};

window.addEventListener("load", setup);