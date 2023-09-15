import React from 'react';

function DrawApp(props) {
    const type = props.type;
    const member = props.member.split("\n").filter(item => item !== null && item !== undefined && item !== "");;
    const groupSize = props.groupSize;
    const numberOfWinner = props.numberOfWinner;
    const matchValue1 = props.matchValue1;
    const matchValue2 = props.matchValue2;
    const dontMatchValue1 = props.dontMatchValue1;
    const dontMatchValue2 = props.dontMatchValue2;
    let winner = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function christmas() {
        const member2 = member.slice();
        winner = []

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
        for (let i = 0; i < member.length; i++) {
            winner.push(`${member[i]} => ${member2[i]} \n`);
        }

        if (matchValue1.trim() !== '' && matchValue2.trim() !== '') {
            let found = false;
            for (const sublist of winner) {
                let index1 = sublist.indexOf(matchValue1);
                let index2 = sublist.indexOf(matchValue2);
                if (index1 !== -1 && index2 !== -1) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                christmas();
            }
        }
        if (dontMatchValue1.trim() !== '' && dontMatchValue2.trim() !== '') {
            for (const sublist of winner) {
                let index1 = sublist.indexOf(dontMatchValue1);
                let index2 = sublist.indexOf(dontMatchValue2);
                if (index1 !== -1 && index2 !== -1) {
                    christmas();
                }
            }
        }
    }

    function grouping() {
        const memberTry = member.slice();
        shuffleArray(memberTry);
        const group = [];

        while (groupSize <= memberTry.length) {
            const groups = [];
            for (let i = 0; i < groupSize; i++) {
                groups.push(` ${memberTry[0]}`);
                memberTry.shift();
            }
            group.push(`${groups} `);
        }
        winner = group;

        if (matchValue1.trim() !== '' && matchValue2.trim() !== '') {
            let found = false;
            for (const sublist of group) {
                let index1 = sublist.indexOf(matchValue1);
                let index2 = sublist.indexOf(matchValue2);
                if (index1 !== -1 && index2 !== -1) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                grouping();
            }
        }
        if (dontMatchValue1.trim() !== '' && dontMatchValue2.trim() !== '') {
            for (const sublist of group) {
                let index1 = sublist.indexOf(dontMatchValue1);
                let index2 = sublist.indexOf(dontMatchValue2);
                if (index1 !== -1 && index2 !== -1) {
                    grouping();
                }
            }
        }
    }

    function pairing() {
        const member2 = props.member2.split("\n");
        const pairs = [];
        shuffleArray(member);

        for (let i = 0; i < member.length; i += 1) {
            const onepair = `${member[i]} - ${member2[i]} \n `;
            pairs.push(onepair);
        }
        winner = pairs;

        if (matchValue1.trim() !== '' && matchValue2.trim() !== '') {
            let found = false;
            for (const sublist of pairs) {
                let index1 = sublist.indexOf(matchValue1);
                let index2 = sublist.indexOf(matchValue2);
                if (index1 !== -1 && index2 !== -1) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                pairing();
            }
        }
        if (dontMatchValue1.trim() !== '' && dontMatchValue2.trim() !== '') {
            for (const sublist of pairs) {
                let index1 = sublist.indexOf(dontMatchValue1);
                let index2 = sublist.indexOf(dontMatchValue2);
                if (index1 !== -1 && index2 !== -1) {
                    pairing();
                }
            }
        }
    }

    if (type === "classic") {
        shuffleArray(member);
        for (let i = 0; i < numberOfWinner; i++) {
            winner.push(member[i]);
        }
    } else if (type === "christmas") {
        christmas();
    } else if (type === "grouping") {
        grouping();
    } else if (type === "pairing") {
        pairing();
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
    );
}

export default DrawApp;
