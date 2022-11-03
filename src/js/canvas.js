/// WALLET ///
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletLink from "walletlink";
import WalletConnectProvider from "@walletconnect/web3-provider";
import metamaskImg from '../IMG/metamask.png';
import walletConnectImg from '../IMG/walletconnectImg.png';
import coinbaseImg from '../IMG/coinbase.png';
/// WALLET ///

/// MAKYAJ ///
import bakbak from '../fonts/BakbakOneRegular.woff'
import poppins from '../fonts/Poppins.ttf'
///

import PeanutPosition from '../json/peanutPositions.json';
import positions from '../json/platforms.json';
import playerConfig from '../json/player.json';

import bgElephant from '../IMG/background.png';
import companyLogo from '../IMG/logo.png';

import creator1 from '../IMG/ali.png';
import creator2 from '../IMG/berkay.jpg';
import creator3 from '../IMG/ahmet.jpg';


/// GAME IMAGES IMPORT ///
import platformlv1 from '../IMG/gameAssets/platformlv1.png';
import platformlv2 from '../IMG/gameAssets/platformlv2.png';
import platformlv3 from '../IMG/gameAssets/platformlv3.png';
import groundlv1 from '../IMG/gameAssets/lv2ground.png';
import groundlv2 from '../IMG/gameAssets/lv2ground.png';
import groundlv3 from '../IMG/gameAssets/lvl3ground.png';
import groundlv32 from '../IMG/gameAssets/lvl3ground2.png';
import gameBackgroundlvl1 from '../IMG/gameAssets/lvl1background.png';
import gameBackgroundlvl2 from '../IMG/gameAssets/lvl2background.png';
import gameBackgroundlvl3 from '../IMG/gameAssets/lvl3background.png';
import peanutIMG from '../IMG/gameAssets/peanut1.png';
import Playeroneright from '../IMG/gameAssets/playeroneright.png';
import Playeroneleft from '../IMG/gameAssets/playeroneleft.png';
import Playertworight from '../IMG/gameAssets/playertworight.png';
import Playertwoleft from '../IMG/gameAssets/playertwoleft.png';
import Playerthreeright from '../IMG/gameAssets/playerthreeright.png';
import Playerthreeleft from '../IMG/gameAssets/playerthreeleft.png';
/// GAME IMAGES IMPORT ///

/// SOCIAL MEDIA ///
import discord from '../IMG/discord.png';
import walletIm from '../IMG/wallet.png';
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
/// SOCIAL MEDIA ///



///  HTML ITEMS ///
let web3;
const backgroundEl = document.getElementById('backgroundEl');
const faqs = document.querySelectorAll('.faq');
const home = document.querySelector('body');
const mainDiv = document.getElementById('home');
const RoadmapImageOne = document.getElementById('roadmapImgOne');
const RoadmapImageTwo = document.getElementById('roadmapImgTwo');
const RoadmapImageThree = document.getElementById('roadmapImgThree');
const rightImages = document.getElementById('rightImages');
const roadmapBtnOne = document.getElementById('roadmapBtnOne');
const roadmapBtnTwo = document.getElementById('roadmapBtnTwo');
const roadmapBtnThree = document.getElementById('roadmapBtnThree');
const playername = document.getElementById('playername');
const discordNameError = document.getElementById('discordNameError');
const topMenuLogo = document.getElementById('topMenuLogo');
const bottomMenuLogo = document.getElementById('bottomMenuLogo');

// const subCount = document.getElementById('subCount');

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
const dcU = document.getElementById('discordUst');
const walletImg = document.getElementById('walletImg');
const tw = document.getElementById('twitter');
const yt = document.getElementById('youtube');
const tl = document.getElementById('telegram');
const fb = document.getElementById('facebook');
const tt = document.getElementById('tiktok');

const metamask = document.getElementById('metamask');
const walletConnect = document.getElementById('walletConnect');
const coinbase = document.getElementById('coinbase');
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
const stroyOne = document.getElementById('stroyone');
const stroyTwo = document.getElementById('stroytwo');
const stroyThree = document.getElementById('stroythree');
const stroyFour = document.getElementById('stroyfour');
const creator1El = document.getElementById('creator1');
const creator2El = document.getElementById('creator2');
const creator3El = document.getElementById('creator3');

const walletConnectModal = document.getElementById("walletConnectModal");
const storyModal = document.getElementById("storyModal");
const manifestModal = document.getElementById("manifestModal");
const whitelistModal = document.getElementById("whitelistModal");
const storyReadMore = document.getElementById("storyReadMore");
const manifest = document.getElementById("manifest");
const topMailError = document.getElementById("topMailError");
const bottomMailError = document.getElementById("bottomMailError");

const topMenuDiv = document.getElementById("topMenuDiv");
const wallet = document.getElementById('wallet');
const metamaskConnect = document.getElementById('metamaskConnect');
const walletConnectBtn = document.getElementById('walletConnectBtn');
const walletLinkBtn = document.getElementById('walletLinkBtn');

wallet.onclick = async () => {
    if (wallet.innerHTML.includes("0x")) return;
    modalOpen(walletConnectModal);
}

metamaskConnect.onclick = async () => {
    await getWallet('metamask');
}

walletConnectBtn.onclick = async () => {
    await getWallet('walletconnect');
}

walletLinkBtn.onclick = async () => {
    await getWallet('walletlink');
}

let writableAdress = null;
const getWallet = async (walletProvider) => {
    console.log(walletProvider);
    if (walletProvider === 'metamask') {
        web3 = new Web3(window.ethereum);
        window.ethereum.request({ method: 'eth_requestAccounts' }).then((at) => {
            if ((window.ethereum.networkVersion) != 1) {
                changeNetwork();
            }
            writableAdress = at[0].slice(0, 9);
            writableAdress += '...';
            wallet.innerHTML = writableAdress;

        });
        closeModals();
        return;
    }
    const provider = await web3Modal.connectTo(walletProvider).then(async () => {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then((at) => {
            if ((window.ethereum.networkVersion) != 1) {
                changeNetwork();
            }
            writableAdress = at[0].slice(0, 9);
            writableAdress += '...';
            wallet.innerHTML = writableAdress;

        })
    })
    closeModals();
}

function changeNetwork() {
    window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: '0x1',
            }
        ]
    });
    if ((web3.eth.getChainId()) == 1) {
        window.location.reload();
    }
};

const modalOpen = (modalName) => {
    modalName.style.display = "block";
    home.style.overflowY = "hidden";
    topMenuDiv.style.paddingRight = "17px";
}



topWhiteList.onclick = function () {
    modalOpen(whitelistModal);
}

bottomWhiteList.onclick = function () {
    modalOpen(whitelistModal);
}

storyReadMore.onclick = function () {
    modalOpen(storyModal);
}

manifest.onclick = function () {
    modalOpen(manifestModal);
}

addEventListener('keydown', ({ keyCode }) => {
    if (keyCode == 27) {
        closeModals();
    }
})

const closeModals = () => {
    home.style.overflow = "scroll";
    home.style.overflowX = "hidden";
    topMenuDiv.style.paddingRight = "0";
    walletConnectModal.style.display = "none";
    storyModal.style.display = "none";
    manifestModal.style.display = "none";
    whitelistModal.style.display = "none";
}

window.onclick = function (event) {
    if (
        event.target == storyModal ||
        event.target == manifestModal ||
        event.target == whitelistModal ||
        event.target == walletConnectModal
    ) {
        closeModals();
    }
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
walletImg.src = walletIm;
dcU.src = discord;
tw.src = twitter;
yt.src = youtube;
tl.src = telegram;
fb.src = facebook;
tt.src = tiktok;
topMenuLogo.src = companyLogo;
bottomMenuLogo.src = companyLogo;

metamask.src = metamaskImg;
walletConnect.src = walletConnectImg;
coinbase.src = coinbaseImg;
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

let scrollpos;
window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= 150) { 
        topMenuDiv.style.borderBottom = '1px solid #21E786';
     }
     else {
        topMenuDiv.style.borderBottom = 'none';
     }
  })

let playerConfigs = playerConfig;
let Positions = positions;
let peanutPositions = PeanutPosition;

/// LEVEL-PLAYER SETTİNGS ///
let levelup = 3;
const gravity = .5;
let playerspeed = 5;
/// LEVEL-PLAYER SETTİNGS ///

let animationID;
let animationx;
let level = 0;
let sayac = 0;
let timeMin = 0, timeSec = 0, timeSal = 0, score, compaireablescore;
let peanut;
let player;
const platfroms = [];
canvas.width = 1410;
canvas.height = 698;

const data = {};
let isTableCreated = 0;
var td = [];
let levelchechk = 1;
let playerImg = 0;

let random = Math.floor(Math.random() * peanutPositions[level].length);
let randomex = random;

const gameBgImages = [createImage(gameBackgroundlvl1), createImage(gameBackgroundlvl2), createImage(gameBackgroundlvl3)]
const platformImages = [createImage(platformlv1), createImage(platformlv2), createImage(platformlv3)];
const groundImages = [createImage(groundlv1), createImage(groundlv2), createImage(groundlv3), createImage(groundlv32)];
c.drawImage(gameBgImages[level], 0, 0);
let peanutImage = createImage(peanutIMG);

const keys = { right: { pressed: false }, left: { pressed: false } };

window.onload = () => {
    initf();
    animate();
    setTimeout(() => {
        cancelAnimationFrame(animationID);
    }, 10);
}

sayacLabel.style.display = 'none';
sayacLabel.innerHTML = "00:00";
goscore.innerHTML = "00:00:00";
whoIsHaveBiggestScore();
radioBttn1.onchange = function chg() {
    player.currentsprite = player.sprites.run[0].right; playerImg = 0
    initf();
    animate();
    setTimeout(() => {
        cancelAnimationFrame(animationID);
    }, 1);
};
radioBttn2.onchange = function chg() {
    player.currentsprite = player.sprites.run[1].right; playerImg = 1
    initf();
    animate();
    setTimeout(() => {
        cancelAnimationFrame(animationID);
    }, 1);
};
radioBttn3.onchange = function chg() {
    player.currentsprite = player.sprites.run[2].right; playerImg = 2
    initf();
    animate();
    setTimeout(() => {
        cancelAnimationFrame(animationID);
    }, 1);
};

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
        this.width = 80;
        this.height = 80;
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
    levelChangeHandle();
    peanut = new Peanut({ x: peanutPositions[level][random].x, y: peanutPositions[level][random].y, image: peanutImage });
    player = new Player({ x: playerConfigs[level].playerx, y: playerConfigs[level].playery });
}

const beforeStart = () => {
    initf()
    animate();
    setTimeout(() => {
        cancelAnimationFrame(animationID);
    }, 10);
}
beforeStart();

function animate() {
    animationID = requestAnimationFrame(animate);
    c.drawImage(gameBgImages[level], 0, -3);
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
            player.position.x + player.width >= platform.position.x + 10 &&
            player.position.x <= platform.position.x + platform.width - 10) {
            player.velocity.y = 0;
        }

        if (player.position.x + player.width >= peanut.position.x + peanut.width - 50 &&
            player.position.y + player.height >= peanut.position.y + peanut.height - 50 &&
            player.position.x + player.width <= peanut.position.x + peanut.width + 50 &&
            player.position.y + player.height <= peanut.position.y + peanut.height + 50) {
            sayac++;
            // GameOver Check Point
            if (level == 3) {
                peanut.position.x = -50;
                peanut.position.y = -50;
                menu.style.display = 'block';
                sayacLabel.style.display = 'none';
                cancelAnimationFrame(animationID);
                data.userName = playername.value;
                addNewScore(data);
                whoIsHaveBiggestScore();
            }
            // Level UP POINT
            if (sayac % levelup == 0 && sayac != 0) {
                level++;
                if (level != 3) {
                    levelChangeHandle();
                    player.position.y = playerConfigs[level].playery;
                    player.position.x = playerConfigs[level].playerx;
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
        // if ((sayac % levelup == 0) && levelchechk == 1) {
        //     levelchechk = 0;
            
        // }
    })
}


addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            player.currentsprite = player.sprites.run[playerImg].left;
            keys.left.pressed = true;
            break;
        case 37:
            player.currentsprite = player.sprites.run[playerImg].left;
            keys.left.pressed = true;
            break;
        case 68:
            player.currentsprite = player.sprites.run[playerImg].right;
            keys.right.pressed = true;
            break;
        case 39:
            player.currentsprite = player.sprites.run[playerImg].right;
            keys.right.pressed = true;
            break;
        case 87: if (player.velocity.y == 0) { player.velocity.y -= 14.5; }; break;
        case 38: if (player.velocity.y == 0) { player.velocity.y -= 14.5; }; break;
        case 32: if (player.velocity.y == 0) { player.velocity.y -= 14.5; e.preventDefault();}; break;
        case 83: if ((level != 2 && player.position.y <= 556) || (level == 2 && player.position.y <= 519) ) { player.velocity.y += 1; }; break;
        case 40: if ((level != 2 && player.position.y <= 556) || (level == 2 && player.position.y <= 519) ) { player.velocity.y += 1; }; break;
        default: break;

    }
});

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65: keys.left.pressed = false; break;
        case 37: keys.left.pressed = false; break;
        case 68: keys.right.pressed = false; break;
        case 39: keys.right.pressed = false; break;
        case 87: player.velocity.y -= 0.1; break;
        case 38: player.velocity.y -= 0.1; break;
        case 32: player.velocity.y -= 0.1; break;
        default: break;
    }
})


function levelChangeHandle() {
    let platformy = 657;
    if (level == 2) {
        platformy = 620;
        platfroms[7] = new Platform({x: 750, y: platformy, image: groundImages[level+1]});
    }
    platfroms[0] = new Platform({x: 0, y: platformy, image: groundImages[level]});
    for (var i = 0; i < Positions[level].length; i++) {
        platfroms[i + 1] = new Platform({x: Positions[level][i]['platform-x'], y: Positions[level][i]['platform-y'], image: platformImages[level]});
    }
    c.drawImage(gameBgImages[level], 0, 0);
};

startbutton.addEventListener('click', () => {
    const discordValidation = /^((?!(discordtag|everyone|here)#)((?!@|#|:|```).{2,32})#\d{4})/;
    if (playername.value != '' && discordValidation.test(playername.value)) {
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
    } else {
        discordNameError.style.opacity = 1;
        discordNameError.style.display = 'block';
        setTimeout(() => {
            fadeOut(discordNameError);
        }, 2000);
    }
})

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
        value: 0,
        color: 'black',
        head: 'PHASE 1',
        text1: 'Game demo version',
        text2: 'Private mint - Airdrop',
        text3: 'Story Season 1',
        text4: 'Public mint'
    },
    btn2: {
        value: 1,
        color: 'green',
        head: 'PHASE 2',
        text1: 'Game beta',
        text2: 'Story season 2',
        text3: 'New NFT Mechanics',
        text4: 'World Wide Party Details'
    },
    btn3: {
        value: 2,
        color: 'gray',
        head: 'PHASE 3',
        text1: 'Game full version - With tournaments',
        text2: 'Story season 3',
        text3: 'Creating third generating coffe shop',
        text4: 'Worl Wide Party'
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
    switch (changeValue.value) {
        case 0:
            RoadmapImageOne.style.display = 'block';
            RoadmapImageTwo.style.display = 'block';
            RoadmapImageThree.style.display = 'block';
            RoadmapImageTwo.style.width = '225px';
            RoadmapImageThree.style.width = '225px';
            RoadmapImageTwo.style.height = '225px';
            rightImages.style.marginLeft = '0';
            break;
        case 1:
            RoadmapImageOne.style.display = 'none';
            RoadmapImageTwo.style.display = 'block';
            RoadmapImageThree.style.display = 'block';
            RoadmapImageTwo.style.width = '717px';
            RoadmapImageThree.style.width = '717px';
            RoadmapImageTwo.style.height = '225px';
            rightImages.style.marginLeft = '48px';
            break;
        case 2:
            RoadmapImageOne.style.display = 'none';
            RoadmapImageTwo.style.display = 'block';
            RoadmapImageThree.style.display = 'none';
            RoadmapImageTwo.style.width = '717px';
            RoadmapImageTwo.style.height = '470px';
            rightImages.style.marginLeft = '48px';
            break;
    }
    roadmapHead.innerHTML = changeValue.head;
    roadmapText1.innerHTML = changeValue.text1;
    roadmapText2.innerHTML = changeValue.text2;
    roadmapText3.innerHTML = changeValue.text3;
    roadmapText4.innerHTML = changeValue.text4;
};

const oyunBozanSpan = document.getElementById('oyunBozanSpan');

if (window.innerWidth < 1536) {
    oyunBozanSpan.style.width = 190 + 'px';
} else {
    oyunBozanSpan.style.width = 190 + 'px';
}

window.addEventListener('resize', () => {
    mainDiv.style.width = window.innerWidth;
    if (window.innerWidth < 1536) {
        oyunBozanSpan.style.width = 190 + 'px';
    } else {
        oyunBozanSpan.style.width = 190 + 'px';
    }
});

const onEmailSubmit = (element, returnData, color) => {
    element.value = '';
    const subEl = element.id == 'topSubMail' ? topMailError : bottomMailError;
    subEl.style.display = 'block';
    subEl.style.opacity = 1;
    subEl.style.backgroundColor = color == 'error' ? '#FB550E' : 'rgb(91, 202, 110)';
    subEl.innerHTML = `${returnData}`;
    element.focus();
    setTimeout(() => {
        element.style.borderWidth = '0px';
        fadeOut(subEl);
    }, 3000);
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            element.style.opacity = 0;
            element.style.display = 'none';
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);
}

const isEmailValid = (mail, element) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(mail)) {
        onEmailSubmit(element, 'Please enter valid email adress!', 'error');
        return false;
    }
    return true;
}

const subscribeBtnClick = async (data, element) => {
    const response = await fetch('http://142.132.232.70:3003/subscribe', {
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
                onEmailSubmit(element, 'Email sucsessfuly added!', 'sucses');
            } else {
                onEmailSubmit(element, 'This email is already exist!', 'error');
            }

        });
}

topSubBtn.addEventListener('click', () => {
    const valid = isEmailValid(topSubMail.value, topSubMail);
    if (valid) {
        subscribeBtnClick(topSubMail.value, topSubMail);
        subCountHandler();
    }
});

bottomSubBtn.addEventListener('click', () => {
    const valid = isEmailValid(bottomSubMail.value, bottomSubMail);
    if (valid) {
        subscribeBtnClick(bottomSubMail.value, bottomSubMail);
        subCountHandler();
    }
});

async function fetchText(i, j) {
    fetch('http://142.132.232.70:3003/score')
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
    const response = await fetch('http://142.132.232.70:3003/score', {
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

async function subCountHandler() {
    fetch('http://142.132.232.70:3003/subscribe')
        .then(response => response.json())
        .then(data => {
            subCount.innerHTML = data[0].subcount;
        })
}

// subCountHandler();

let acc = document.getElementsByClassName('accordion');

// Creating a loop to add eventListener to all .accordion classes

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {

        let panel = this.nextElementSibling
        //if panel is open, then this block will close it on mouse click
        if (panel.style.maxHeight) {
            panel.style.paddingBottom = 0 + 'px';
            panel.style.maxHeight = null;
            this.classList.remove('open')
            this.getElementsByClassName('icon')[0].innerHTML = '+';

        }
        //if panel is closed, then this block will open it on mouse click
        else {
            //Removes everthing on previous accordion on new mouse click
            //by this for loop
            for (let x = 0; x < acc.length; x++) {
                acc[x].classList.remove('open')
                acc[x].nextElementSibling.style.maxHeight = null;
                acc[x].getElementsByClassName('icon')[0].innerHTML = '+';

            }
            //if panel is closed, then these codes will open it on mouse click & set those specific rules mentioned below.
            panel.style.maxHeight = panel.scrollHeight + 'px';
            this.classList.toggle('open')
            this.getElementsByClassName('icon')[0].innerHTML = '-'
        }
    })
}

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "429845bc7d2f45ab9e2bf08230783036"
        }
    },
    walletlink: {
        package: WalletLink,
        options: {
            appName: "Elephant Yatch Club",
            infuraId: "429845bc7d2f45ab9e2bf08230783036",
            rpc: "",
            chainId: 1,
            appLogoUrl: null,
            darkMode: true
        }
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet",
    theme: "dark",
    providerOptions
});

window.onload = () => {
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
        mainDiv.style.width = window.innerWidth + 'px';
}