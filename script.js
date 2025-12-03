function typeWriterMain() {
    if(index < fullText.length){
        mainText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeWriterMain, 15); // speed tez kar di
    } else {
        setTimeout(typeWriterSecond, 300); // pause before next line
    }
}

function typeWriterSecond() {
    let text2 = "I love youuuu for the sake of Allah ❤️❤️";
    let i2 = 0;

    function type2() {
        if(i2 < text2.length){
            secondText.textContent += text2.charAt(i2);
            i2++;
            setTimeout(type2, 30); // tez
        } else {
            setTimeout(typeWriterThird, 200); // pause before third line
        }
    }
    type2();
}

function typeWriterThird() {
    let text3 = "from Flamingo";
    let i3 = 0;

    function type3() {
        if(i3 < text3.length){
            thirdText.textContent += text3.charAt(i3);
            i3++;
            setTimeout(type3, 30); // tez
        } else {
            btn.style.display = "inline-block"; // show button
        }
    }
    type3();
}
