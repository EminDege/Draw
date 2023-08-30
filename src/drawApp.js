import React, { useState } from 'react'


function DrawApp(props) {
    const tur = props.tur;
    const uye = props.uye.split("\n");

    let winner = '';

    if (tur === "klasik") {
        const index = Math.floor(Math.random() * (uye.length))
        winner = uye[index];
    }
    else if (tur === "yilbasi") {
        const uye2 = uye.slice()
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function compareArrays(arr1, arr2) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] === arr2[i]) {
                    return true; // Elemanlar eşleşiyor
                }
            }
            return false; // Elemanlar eşleşmiyor
        }

        let sameOrder = true;

        while (sameOrder) {
            shuffleArray(uye2);
            sameOrder = compareArrays(uye, uye2);
        }
        for (let i = 0; i < uye.length; i++)
            winner += `${uye[i]}, ${uye2[i]}'a alacak\n`;
        console.log(winner);
    }

    else if (tur === "gruplama") {

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function splitListIntoPairs(array) {
            shuffleArray(array);
            const pairs = [];
            for (let i = 0; i < array.length; i += 2) {
                pairs.push([array[i], array[i + 1]]);
            }
            return pairs;
        }

        const winners = splitListIntoPairs(uye);

        for (let i = 0; i < winners.length; i++) {
            const pair = winners[i];
            winner += `${pair.join(" - ")} `;

        }


    }
    return (
        <div>{winner}</ div>
    )

}
export default DrawApp





// const verenler = [];
// const alanlar = [];
// const uye2 = uye.slice();

// while (uye.length > 0 && uye2.length > 0) {
//     const randomIndex = Math.floor(Math.random() * uye.length);
//     const randomIndex2 = Math.floor(Math.random() * uye2.length);

//     if (uye[randomIndex] !== uye2[randomIndex2]) {
//         const veren = uye.splice(randomIndex, 1)[0];
//         const alan = uye2.splice(randomIndex2, 1)[0];
//         verenler.push(veren);
//         alanlar.push(alan);
//     }
//     else continue;
// }

// for (let i = 0; i < verenler.length; i++) {
//     winner += `${verenler[i]}, ${alanlar[i]} 'a alıyor\n`;
// }

