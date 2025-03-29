const setup = () => {
    let global = {
        IMAGE_COUNT: 5,
        IMAGE_SIZE: 48,
        IMAGE_PATH_PREFIX: "images/",
        IMAGE_PATH_SUFFIX: ".png",
        MOVE_DELAY: 1000,
        score: 0,
        timeoutId: 0,
        gameOver: false,
        FIELD_WIDTH: 800,
        FIELD_HEIGHT: 600
    };

    const playField = document.getElementById("playField");
    const figure = document.getElementById("target");
    const scoreElement = document.getElementById("score");
    const startButton = document.getElementById("startButton");

    const updateScore = () => {
        scoreElement.textContent = global.score;
    };

    const endGame = () => {
        global.gameOver = true;
        clearTimeout(global.timeoutId);
        figure.style.display = "none";
    };

    const clickFigure = () => {
        if (figure.src.includes("0.png")) {
            alert("Boom! Spel afgelopen.");
            endGame();
        } else {
            global.score++;
            updateScore();
        }
    };

    const moveFigure = () => {
        if (global.gameOver) return;

        let index = Math.floor(Math.random() * global.IMAGE_COUNT);
        figure.src = `${global.IMAGE_PATH_PREFIX}${index}${global.IMAGE_PATH_SUFFIX}`;

        let x = Math.random() * (global.FIELD_WIDTH - global.IMAGE_SIZE);
        let y = Math.random() * (global.FIELD_HEIGHT - global.IMAGE_SIZE);

        figure.style.left = `${x}px`;
        figure.style.top = `${y}px`;
        figure.style.display = "block";

        global.timeoutId = setTimeout(moveFigure, global.MOVE_DELAY);
    };

    const startGame = () => {
        global.score = 0;
        global.gameOver = false;
        updateScore();
        moveFigure();
    };

    figure.addEventListener("click", clickFigure);
    startButton.addEventListener("click", startGame);

    figure.style.display = "none"; // start verborgen
};

window.addEventListener("load", setup);
