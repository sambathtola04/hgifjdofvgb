function showOption(value) {
    const output = document.getElementById("output");
    const img = document.getElementById("countryImage");

    switch(value) {
        case "Thailand":
            output.textContent = "Thailand is​Thief";
            img.src = "https://tse4.mm.bing.net/th/id/OIP.E-2Uw70bdFbBBd-gi0SO7AHaFj?w=245&h=184&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1";
            img.style.display = "block";
            break;
        case "Cambodia":
            output.textContent = "Cambodia is amazing!";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/4/41/Angkor_Wat.jpg";
            img.style.display = "block";
            break;
        case "Vietnam":
            output.textContent = "Vietnam is wonderful!";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Halong_Bay_2.jpg";
            img.style.display = "block";
            break;
        case "Japan":
            output.textContent = "Japan is fascinating!";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Lake_Kawaguchi.jpg";
            img.style.display = "block";
            break;
        case "India":
            output.textContent = "India is diverse and colorful!";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/4/41/Taj_Mahal_in_March_2004.jpg";
            img.style.display = "block";
            break;
        case "China":
            output.textContent = "China is historic and vast!";
            img.src = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Great_Wall_of_China_July_2006.JPG";
            img.style.display = "block";
            break;
        default:
            output.textContent = "";
            img.style.display = "none";
            break;
    }
}