import 'regenerator-runtime/runtime';
import PeanutPosition from '../json/peanutPositions.json';
import positions from '../json/platforms.json';
import playerConfig from '../json/player.json';

import font from '../fonts/ocraext.ttf';
import platformlv1 from '../IMG/platformlv1.png';
import platformlv2 from '../IMG/platformlv1.png';
import platformlv3 from '../IMG/platformlv3.png';
import peanutIMG from '../IMG/peanut1.png';
import Roadmap from '../IMG/Roadmap.png';
import gfil1 from '../IMG/gizlifil1.png'
import gfil2 from '../IMG/gizlifil2.png'
import gfil3 from '../IMG/gizlifil3.png'
import gfil4 from '../IMG/gizlifil4.png'
import Playeroneright from '../IMG/playeroneright.png';
import Playeroneleft from '../IMG/playeroneleft.png';
import Playertworight from '../IMG/playertworight.png';
import Playertwoleft from '../IMG/playertwoleft.png';
import Playerthreeright from '../IMG/playerthreeright.png';
import Playerthreeleft from '../IMG/playerthreeleft.png';
import creators from '../IMG/creators.png'
import discord from '../IMG/discord.png';
import twitter from '../IMG/twitter.png';
import linkedins from '../IMG/linkedinSmall.png';
import facebooks from '../IMG/facebookSmall.png';
import instagrams from '../IMG/instagramSmall.png';
import telegrams from '../IMG/telegramSmall.png';
import youtube from '../IMG/youtube.png';
import telegram from '../IMG/telegram.png';
import facebook from '../IMG/facebook.png';
import tiktok from '../IMG/tiktok.png';
import opensea from '../IMG/opensea.png';
import storyone from '../IMG/storyone.png';
import storytwo from '../IMG/storyone.png';
import storythree from '../IMG/storyone.png';
import storyfour from '../IMG/storyone.png';
import bgElephant from '../IMG/background.png';
import creator1 from '../IMG/ali.png';
import creator2 from '../IMG/berkay.jpg';
import creator3 from '../IMG/ahmet.jpg';

///  HTML ITEMS ///
let web3;
const backgroundEl = document.getElementById('backgroundEl');
const faqs = document.querySelectorAll('.faq');
const home = document.querySelector('body');
const RoadmapImageOne = document.getElementById('roadmapImgOne');
const RoadmapImageTwo = document.getElementById('roadmapImgTwo');
const RoadmapImageThree = document.getElementById('roadmapImgThree');
const roadmapBtnOne = document.getElementById('roadmapBtnOne');
const roadmapBtnTwo = document.getElementById('roadmapBtnTwo');
const roadmapBtnThree = document.getElementById('roadmapBtnThree');
const playername = document.getElementById('playername');

const subCount = document.getElementById('subCount');

const topSubBtn = document.getElementById('topSubBtn');
const topSubMail = document.getElementById('topSubMail');

const bottomSubBtn = document.getElementById('bottomSubBtn');
const bottomSubMail = document.getElementById('bottomSubMail');

const topWhiteList = document.getElementById('topWhiteList');
const bottomWhiteList = document.getElementById('bottomWhiteList');

const roadmapModal = document.getElementById('roadmapModal');
const roadmapHead = document.getElementById('roadmapHead');
const roadmapText1 = document.getElementById('roadmapText1');
const roadmapText2 = document.getElementById('roadmapText2');
const roadmapText3 = document.getElementById('roadmapText3');
const roadmapText4 = document.getElementById('roadmapText4');
const roadmapLeftArrow = document.getElementById('roadmapLeftArrow');
const roadmapRightArrow = document.getElementById('roadmapRightArrow');


/// CANVAS ITEMS ///
const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');
const sayacLabel = document.getElementById('score');
const menu = document.getElementById('menu');
const goscore = document.getElementById('goscore');
const startbutton = document.getElementById('start');
const radioBttn1 = document.getElementById('r1');
const radioBttn2 = document.getElementById('r2');
const radioBttn3 = document.getElementById('r3');
/// IMAGES ///
const pImg1 = document.getElementById('p1');
const pImg2 = document.getElementById('p2');
const pImg3 = document.getElementById('p3');
const dc = document.getElementById('discord');
const tw = document.getElementById('twitter');
const yt = document.getElementById('youtube');
const tl = document.getElementById('telegram');
const fb = document.getElementById('facebook');
const tt = document.getElementById('tiktok');

const logo = document.getElementById('logo');
const logo2 = document.getElementById('logo2');

const twf = document.getElementById('twitterfooter');
const fbf = document.getElementById('facebookfooter');
const tlf = document.getElementById('telegramfooter');
const ytf = document.getElementById('youtubefooter');
const ttf = document.getElementById('tiktokfooter');
const dcf = document.getElementById('discordfooter');

const ln = document.getElementById('linkedinSmall');
const igs = document.getElementById('instagramSmall');

const ln1 = document.getElementById('linkedinSmall1');
// const fbs1 = document.getElementById('facebookSmall1');
const igs1 = document.getElementById('instagramSmall1');
// const tls1 = document.getElementById('telegramSmall1');

const ln2 = document.getElementById('linkedinSmall2');
// const fbs2 = document.getElementById('facebookSmall2');
// const igs2 = document.getElementById('instagramSmall2');
// const tls2 = document.getElementById('telegramSmall2');

const op = document.getElementById('opensea');
const giFil1 = document.getElementById('gfil1');
const giFil2 = document.getElementById('gfil2');
const giFil3 = document.getElementById('gfil3');
const giFil4 = document.getElementById('gfil4');
const stroyOne = document.getElementById('stroyone');
const stroyTwo = document.getElementById('stroytwo');
const stroyThree = document.getElementById('stroythree');
const stroyFour = document.getElementById('stroyfour');
const creator1El = document.getElementById('creator1');
const creator2El = document.getElementById('creator2');
const creator3El = document.getElementById('creator3');

const modal = document.getElementById("storyModal");
const storyReadMore = document.getElementById("storyReadMore");
const span = document.getElementsByClassName("close")[0];

storyReadMore.onclick = function() {
    home.style.overflow = "hidden";
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        home.style.overflow = "auto";
        home.style.overflowX = "hidden";
        modal.style.display = "none";
    }
  }

  span.onclick = function() {
    home.style.overflow = "auto";
    home.style.overflowX = "hidden";
    modal.style.display = "none";
  }


creator1El.src = creator1;
creator2El.src = creator2;
creator3El.src = creator3;

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
});

const levelbgcolors = ['#383D7D', '#543F57', 'rgb(171, 163, 255)'];


backgroundEl.style.backgroundImage = `url(${bgElephant})`;
pImg1.src = Playeroneright;
pImg2.src = Playertworight;
pImg3.src = Playerthreeright;
dc.src = discord;
tw.src = twitter;
yt.src = youtube;
tl.src = telegram;
fb.src = facebook;
tt.src = tiktok;

logo.src = discord;
logo2.src = discord;

dcf.src = discord;
twf.src = twitter;
ytf.src = youtube;
tlf.src = telegram;
fbf.src = facebook;
ttf.src = tiktok;

ln.src = linkedins;
igs.src = instagrams;

ln1.src = linkedins;
// fbs1.src = facebooks;
igs1.src = instagrams;
// tls1.src = telegrams;

ln2.src = linkedins;
// fbs2.src = facebooks;
// igs2.src = instagrams;
// tls2.src = telegrams;
// op.src = opensea;



let playerConfigs = playerConfig;
let Positions = positions;
let peanutPositions = PeanutPosition;

/// LEVEL-PLAYER SETTİNGS ///
let levelup = 3;
const gravity = .5;
let playerspeed = 7;
/// LEVEL-PLAYER SETTİNGS ///

let animationID;
let level = 0;
let sayac = 0;
let timeMin = 0, timeSec = 0, timeSal = 0, score, compaireablescore;
let peanut;
let player;
const platfroms = [];
canvas.width = 1000;
canvas.height = 750;
c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);
const data = {};
let isTableCreated = 0;
var td = [];
let levelchechk = 1;
let playerImg = 0;

let random = Math.floor(Math.random() * peanutPositions[level].length);
let randomex = random;
let platformImagelv1 = createImage(platformlv1);
let platformImagelv2 = createImage(platformlv2);
let platformImagelv3 = createImage(platformlv3);
let platformImage = [platformImagelv1, platformImagelv2, platformImagelv3];
let peanutImage = createImage(peanutIMG);

const keys = { right: { pressed: false }, left: { pressed: false } };

sayacLabel.style.display = 'none';
sayacLabel.innerHTML = "00:00";
goscore.innerHTML = "00:00:00";
whoIsHaveBiggestScore();
radioBttn1.onchange = function chg() { player.currentsprite = player.sprites.run[0].right; playerImg = 0 };
radioBttn2.onchange = function chg() { player.currentsprite = player.sprites.run[1].right; playerImg = 1 };
radioBttn3.onchange = function chg() { player.currentsprite = player.sprites.run[2].right; playerImg = 2 };

class Player {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.image = createImage(Playeroneleft);
        this.speed = playerspeed;
        this.width = 50;
        this.height = 50;
        this.sprites = {
            run: [
                {
                    left: createImage(Playeroneleft),
                    right: createImage(Playeroneright)
                },
                {
                    left: createImage(Playertwoleft),
                    right: createImage(Playertworight)
                },
                {
                    left: createImage(Playerthreeleft),
                    right: createImage(Playerthreeright)
                }
            ]
        }
        this.currentsprite = this.sprites.run[playerImg].left;
    }
    draw() {
        c.drawImage(this.currentsprite, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= canvas.height - 3)
            this.velocity.y += gravity
        else this.velocity.y = 0;
    }
}
player = new Player({ x: playerConfigs[level].playerx, y: playerConfigs[level].playery });

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.width = image.width;
        this.height = image.height;

        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
class Peanut {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

function createImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image;
}

const initf = function init() {
    PlatformsCreate();
    peanut = new Peanut({ x: peanutPositions[level][random].x, y: peanutPositions[level][random].y, image: peanutImage });
    player = new Player({ x: playerConfigs[level].playerx, y: playerConfigs[level].playery });
}

function animate() {
    animationID = requestAnimationFrame(animate);
    c.fillStyle = levelbgcolors[level];
    c.fillRect(0, 0, canvas.width, canvas.height);
    platfroms.forEach(platform => {
        platform.draw();
    })
    peanut.draw();
    player.update();
    if (keys.right.pressed && player.position.x + player.width < canvas.width) {

        player.velocity.x = player.speed;
    }
    else if (keys.left.pressed && player.position.x > 0) {

        player.velocity.x = -player.speed;
    }
    else player.velocity.x *= 0;

    platfroms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0;
        }

        if (player.position.x + player.width >= peanut.position.x + peanut.width - 25 &&
            player.position.y + player.height >= peanut.position.y + peanut.height - 25 &&
            player.position.x + player.width <= peanut.position.x + peanut.width + 25 &&
            player.position.y + player.height <= peanut.position.y + peanut.height + 25) {
            sayac++;
            // GameOver Check Point
            if (level == 3) {
                peanut.position.x = -50;
                peanut.position.y = -50;
                cancelAnimationFrame(animationID);
                menu.style.display = 'flex';
                sayacLabel.style.display = 'none';

                data.userName = playername.value;
                addNewScore(data);
                whoIsHaveBiggestScore();
            }
            // Level UP POINT
            if (sayac % levelup == 0 && sayac != 0) {
                level++;
                if (level != 3) {
                    levelchechk = 1;
                    PlatformsCreate();
                }
            }
            while (randomex == random && level != 3) {
                random = Math.floor(Math.random() * peanutPositions[level].length);
            }
            if (level != 3) {
                peanut.position.x = peanutPositions[level][random].x;
                peanut.position.y = peanutPositions[level][random].y;
            }
            randomex = random;
        }
        if ((sayac % levelup == 0) && levelchechk == 1) {
            levelchechk = 0;
            player.position.y = playerConfigs[level].playery;
            player.position.x = playerConfigs[level].playerx;
        }
    })
}

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            player.currentsprite = player.sprites.run[playerImg].left;
            keys.left.pressed = true;
            break;
        case 68:
            player.currentsprite = player.sprites.run[playerImg].right;
            keys.right.pressed = true;
            break;
        case 87: if (player.velocity.y == 0) { player.velocity.y -= 14.5; }; break;
        case 83: if (player.position.y <= 624) { player.velocity.y += 1; }; break;
        default: break;
    }
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65: keys.left.pressed = false; break;
        case 68: keys.right.pressed = false; break;
        case 87: player.velocity.y -= 0.1; break;
        default: break;
    }
})

function PlatformsCreate() {

    for (var i = 0; i < Positions[level].length; i++) {
        platfroms[i] = new Platform({ x: Positions[level][i]['platform-x'], y: Positions[level][i]['platform-y'], image: platformImage[level] });
    }
};

startbutton.addEventListener('click', () => {
    if (playername.value == '') {
        console.log('isim girsene orospu çocu');
        window.alert('Please enter your Discord Nickname');
    } else {
        timeMin = 0;
        timeSec = 0;
        level = 0;
        sayac = 0;
        sayacLabel.style.display = 'flex';
        sayacLabel.innerHTML = "00:00";
        goscore.innerHTML = sayacLabel.innerHTML;
        sayacLabel.style.display = 'flex';
        initf();
        animate();
        var myfunc = setInterval(function Gametime() {
            timeSal++;
            if (timeSal == 100) {
                timeSal = 0;
                timeSec++;
                if (timeSec == 60) {
                    timeMin++;
                    timeSec = 0;
                }
            }
            score = String(timeMin).padStart(2, '0') + ":" + String(timeSec).padStart(2, '0') + ":" + String(timeSal).padStart(2, '0');
            sayacLabel.innerHTML = score;
            goscore.innerHTML = score;
            data.scoreInt = String(timeMin).padStart(2, '0') + String(timeSec).padStart(2, '0') + String(timeSal).padStart(2, '0');
            data.scoreText = score;
            if (level == Positions.length) {
                clearInterval(myfunc);
            }
        }, 10)
        menu.style.display = 'none';
    }
})

// window.onload = () => {
//     web3 = new Web3(window.ethereum);
//     try {
//         if (!window.ethereum) throw new Error('Metamask is not installed! Please install Metamask.');
//         let adress = window.ethereum.request({ method: 'eth_requestAccounts' });
//         if ((web3.eth.getChainId()) != 1) {
//             changeNetwork();
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }

// };

// const networkCheck = () => {
//     if ((web3.eth.getChainId()) != 1) {
//         changeNetwork();
//     }
// }
// setInterval(networkCheck, 5000);

function changeNetwork() {
    window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: '0x1',
            }
        ]
    });
};


const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const countDownFunction = () => {
    const countDownEnd = new Date('11 Dec 2022');
    const currentDate = new Date();

    const totalSeconds = (countDownEnd - currentDate) / 1000;

    daysEl.innerHTML = Math.floor(totalSeconds / 3600 / 24);
    hoursEl.innerHTML = Math.floor(totalSeconds / 3600) % 24;
    minutesEl.innerHTML = Math.floor(totalSeconds / 60) % 60;
    secondsEl.innerHTML = Math.floor(totalSeconds) % 60;
}

countDownFunction();
setInterval(countDownFunction, 1000);

const changeValue = {
    btn1: {
        color: 'black',
        head: 'PHASE 1',
        text1: 'Patates',
        text2: 'Sucuk',
        text3: 'At',
        text4: 'It'
    },
    btn2: {
        color: 'green',
        head: 'PHASE 2',
        text1: 'Sucuk',
        text2: 'Patates',
        text3: 'At',
        text4: 'It'
    },
    btn3: {
        color: 'gray',
        head: 'PHASE 3',
        text1: 'At',
        text2: 'Sucuk',
        text3: 'Patates',
        text4: 'It'
    }
}
let roadmapLevel = 0;

roadmapLeftArrow.addEventListener('click', () => {
    console.log(roadmapLevel)
    if (roadmapLevel === 0) return;
    roadmapLevel--;
    decideRoadmapLevel(roadmapLevel);
});

roadmapRightArrow.addEventListener('click', () => {
    console.log(roadmapLevel)
    if (roadmapLevel === 2) return;
    roadmapLevel++;
    decideRoadmapLevel(roadmapLevel);
});

const decideRoadmapLevel = (level) => {
    switch (roadmapLevel) {
        case 0:
            roadmapBtnOne.style.background = '#21E786';
            roadmapBtnTwo.style.background = '#888B8E';
            roadmapBtnThree.style.background = '#888B8E';
            roadmapChange(changeValue.btn1);
            break;
        case 1:
            roadmapBtnOne.style.background = '#888B8E';
            roadmapBtnTwo.style.background = '#21E786';
            roadmapBtnThree.style.background = '#888B8E';
            roadmapChange(changeValue.btn2);
            break;
        case 2:
            roadmapBtnOne.style.background = '#888B8E';
            roadmapBtnTwo.style.background = '#888B8E';
            roadmapBtnThree.style.background = '#21E786';
            roadmapChange(changeValue.btn3);
            break;
    }
    roadmapModal.classList.add('change');
    setTimeout(() => {
        roadmapModal.classList.remove('change');
    }, 300);
}


roadmapBtnOne.addEventListener('click', () => {
    if (roadmapLevel == 0) return;
    roadmapLevel = 0;
    decideRoadmapLevel(roadmapLevel);
});

roadmapBtnTwo.addEventListener('click', () => {
    if (roadmapLevel == 1) return;
    roadmapLevel = 1;
    decideRoadmapLevel(roadmapLevel);
});

roadmapBtnThree.addEventListener('click', () => {
    if (roadmapLevel == 2) return;
    roadmapLevel = 2;
    decideRoadmapLevel(roadmapLevel);
});

function roadmapChange(changeValue) {
    RoadmapImageOne.style.backgroundColor = changeValue.color;
    RoadmapImageTwo.style.backgroundColor = changeValue.color;
    RoadmapImageThree.style.backgroundColor = changeValue.color;
    RoadmapImageThree.style.display = 'none';
    roadmapHead.innerHTML = changeValue.head;
    roadmapText1.innerHTML = changeValue.text1;
    roadmapText2.innerHTML = changeValue.text2;
    roadmapText3.innerHTML = changeValue.text3;
    roadmapText4.innerHTML = changeValue.text4;
};

home.style.width = window.innerWidth;

window.addEventListener('resize', () => {
    home.style.width = window.innerWidth;
});

const onEmailSubmit = (data, elementName, returnData, color) => {
    elementName = elementName == 'topSubMail' ? elementName = topSubMail : elementName = bottomSubMail;
    elementName.value = '';
    elementName.style.border = color == 'error' ? '1px solid #FF0D47' : '2px solid rgba(31, 247, 103, 0.85)';
    elementName.placeholder = `${returnData}`;
    setTimeout(() => {
        elementName.style.borderWidth = '0px';
    }, 3000);
}

const isEmailValid = (mail, elementName) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(mail)) {
        onEmailSubmit(mail, elementName, 'Please enter valid email adress!', 'error');
        return false;
    }
    return true;
}

const subscribeBtnClick = async (data, elementName) => {
    const response = await fetch('http://localhost:3003/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data,
        })
    })
        .then(response => {
            if (response.status == 200) {
                onEmailSubmit(data, elementName, 'Email sucsessfuly added!', 'sucsess');
            } else {
                onEmailSubmit(data, elementName, 'This email is already exist!', 'error');
            }

        });
}

topSubBtn.addEventListener('click', () => {
    const valid = isEmailValid(topSubMail.value, 'topSubMail');
    if (valid) {
        subscribeBtnClick(topSubMail.value, 'topSubMail');
        subCountHandler();
    }
});

bottomSubBtn.addEventListener('click', () => {
    const valid = isEmailValid(bottomSubMail.value, 'bottomSubMail');
    if (valid) {
        subscribeBtnClick(bottomSubMail.value, 'bottomSubMail');
        subCountHandler();
    }
});

async function fetchText(i, j) {
    fetch('http://localhost:3003/score')
    .then(response => {
        return response.json();
    })
        .then(data => {
            if (data[i].userName.length > 14) {
                let tempData = data[i].userName;
                tempData = tempData.slice(0, 14);
                tempData += '...';
                data[i].userName = tempData;
            }
            td[i + 2 + j].innerHTML = data[i].userName;
            td[i + 3 + j].innerHTML = data[i].scoreText;
        })
        ;
}

function whoIsHaveBiggestScore() {
    let tableEl = document.getElementById('ScoreTable');
    let j = 0;
    for (let i = 0; i < 5; i++) {
        if (isTableCreated == 0) {
            var tr = document.createElement('tr');
            td[i + 1 + j] = document.createElement('td');
            td[i + 2 + j] = document.createElement('td');
            td[i + 3 + j] = document.createElement('td');
            td[i + 1 + j].innerHTML = i + 1;
            tr.appendChild(td[i + 1 + j]);
            tr.appendChild(td[i + 2 + j]);
            tr.appendChild(td[i + 3 + j]);
            tableEl.appendChild(tr);
            td[i + 1 + j].className = "scoreTableUsers";
            td[i + 2 + j].className = "pl-12 scoreTableUsers";
            td[i + 3 + j].className = "pl-12 scoreTableUsers";
        }
        fetchText(i, j);    
        j += 3;
    }

    isTableCreated = 1;
}

const addNewScore = async (data) => {
    const response = await fetch('http://localhost:3003/score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: data.userName,
                scoreText: data.scoreText,
                scoreInt: data.scoreInt,
            })
        }).then(response => response.json());
}
const detail = document.getElementById('faqWhiteList');

topWhiteList.addEventListener('click', () => {
    setTimeout(() => {
        detail.open = true;
        detail.toggle;
    }, 1000);
});

bottomWhiteList.addEventListener('click', () => {
    setTimeout(() => {
        detail.open = true;
        detail.toggle;
    }, 1500);
});

async function subCountHandler() {
    fetch('http://localhost:3003/subscribe')
    .then(response => response.json())
        .then(data => {
        subCount.innerHTML = data[0].subcount;
    })
}

subCountHandler();