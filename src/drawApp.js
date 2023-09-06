import React from 'react'


function DrawApp(props) {
    const type = props.type;
    const member = props.member.split("\n").filter(item => item !== null && item !== undefined && item !== "");;
    const groupSize = props.groupSize;
    const numberOfWinner = props.numberOfWinner;
    let winner = [];

    if (type === "classic") {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(member);

        for (let i = 0; i < numberOfWinner; i++) {
            winner.push(member[i])
        }


    }
    else if (type === "christmas") {
        const member2 = member.slice()
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function compareArrays(arr1, arr2) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] === arr2[i]) {
                    return true;
                }
            }
            return false;
        }

        let sameOrder = true;

        while (sameOrder) {
            shuffleArray(member2);
            sameOrder = compareArrays(member, member2);
        }
        for (let i = 0; i < member.length; i++)
            winner.push(`${member[i]} => ${member2[i]} \n`);

    }

    else if (type === "grouping") {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(member);

        const grup = [];
        while (groupSize <= member.length) {

            const gruplar = []
            for (let i = 0; i < groupSize; i++) {
                gruplar.push(` ${member[0]}`);
                member.shift();

            }

            grup.push(`${gruplar} `);
            console.log(grup)
        }
        winner = grup




    }
    else if (type === "pairing") {
        const member2 = props.member2.split("\n");
        const pairs = []
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(member)
        for (let i = 0; i < member.length; i += 1) {
            const onepair = `${member[i]} - ${member2[i]} \n `;
            pairs.push(onepair);
        }
        winner = pairs
    }



    return (

        <div>
            {winner.map((item, index) => (
                <span key={index}>
                    {index + 1}. {item}
                    {index < winner.length - 1 && <br />}
                </span>
            ))}
        </div>
    )

}
export default DrawApp
