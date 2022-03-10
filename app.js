const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    // getElementById way. Gotta change title and text classes to id in index.html
    /* document.getElementById("title").innerHTML = `Advice #${data.slip.id}`;
    document.getElementById("text").innerHTML = `"${data.slip.advice}"`; */

    document.querySelector(".title").innerHTML = `Advice #${data.slip.id}`
    document.querySelector(".text").innerHTML = `"${data.slip.advice}"`
}

fetchAdvice();