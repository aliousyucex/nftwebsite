/// WALLET ///
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletLink from "walletlink";
import WalletConnectProvider from "@walletconnect/web3-provider";
import metamaskImg from '../IMG/web3Icons/metamask.png';
import walletConnectImg from '../IMG/web3Icons/walletconnectImg.png';
import coinbaseImg from '../IMG/web3Icons/coinbase.png';
import walletIm from '../IMG/wallet.png';
/// WALLET ///

import companyLogo from '../IMG/logo.png';

/// SOCIAL MEDIA ///
import discordImg  from '../IMG/socialMediaIcons/discord.png';
import twitterImg  from '../IMG/socialMediaIcons/twitter.png';
import mediumImg   from '../IMG/socialMediaIcons/medium.png';
import redditImg   from '../IMG/socialMediaIcons/reddit.png';
import linkedinImg from '../IMG/socialMediaIcons/linkedin.png';
import twitterFooterImg  from '../IMG/socialMediaIcons/twitterSmall.png';
import redditFooterImg   from '../IMG/socialMediaIcons/redditSmall.png';
import linkedinFooterImg from '../IMG/socialMediaIcons/linkedinSmall.png';
import mediumFooterImg   from '../IMG/socialMediaIcons/mediumSmall.png';
import discordFooterImg  from '../IMG/socialMediaIcons/discordSmall.png';
import instagrams from '../IMG/socialMediaIcons/instagramSmall.png';
import linkedins from '../IMG/socialMediaIcons/linkedinSmall.png';
const twitter   = document.getElementById('twitter');
const reddit    = document.getElementById('reddit');
const linkedin  = document.getElementById('linkedin');
const medium    = document.getElementById('medium');
const discord   = document.getElementById('discord');
const twitterFooter = document.getElementById('twitterFooter');
const redditFooter = document.getElementById('redditFooter');
const linkedinFooter = document.getElementById('linkedinFooter');
const mediumFooter = document.getElementById('mediumFooter');
const discordFooter = document.getElementById('discordFooter');
twitter.src  = twitterImg; 
reddit.src   = redditImg;
linkedin.src = linkedinImg;
medium.src   = mediumImg;  
discord.src  = discordImg;  
twitterFooter.src =  twitterFooterImg;
redditFooter.src =   redditFooterImg;
linkedinFooter.src = linkedinFooterImg;
mediumFooter.src =   mediumFooterImg;
discordFooter.src =  discordFooterImg;
/// SOCIAL MEDIA ///

///  HTML ITEMS ///
let web3;
const faqs = document.querySelectorAll('.faq');
const home = document.querySelector('body');
const topMenuLogo = document.getElementById('topMenuLogo');
const bottomMenuLogo = document.getElementById('bottomMenuLogo');

const topWhiteList = document.getElementById('topWhiteList');
const bottomWhiteList = document.getElementById('bottomWhiteList');

/// IMAGES ///
const dcU = document.getElementById('discordUst');
const walletImg = document.getElementById('walletImg');

const metamask = document.getElementById('metamask');
const walletConnect = document.getElementById('walletConnect');
const coinbase = document.getElementById('coinbase');
const logo = document.getElementById('logo');
const logo2 = document.getElementById('logo2');


const ln = document.getElementById('linkedinSmall');
const igs = document.getElementById('instagramSmall');

const ln1 = document.getElementById('linkedinSmall1');
const igs1 = document.getElementById('instagramSmall1');

const ln2 = document.getElementById('linkedinSmall2');
// const igs2 = document.getElementById('instagramSmall2');

const contactUs = document.getElementById("contactUs");
const contactUsModal = document.getElementById("contactUsModal");
const walletConnectModal = document.getElementById("walletConnectModal");
const storyModal = document.getElementById("storyModal");
const manifestModal = document.getElementById("manifestModal");
const whitelistModal = document.getElementById("whitelistModal");
const storyReadMore = document.getElementById("storyReadMore");
const manifest = document.getElementById("manifest");

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

contactUs.onclick = function () {
    modalOpen(contactUsModal);
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
    contactUsModal.style.display = "none";
}

window.onclick = function (event) {
    if (
        event.target == storyModal ||
        event.target == manifestModal ||
        event.target == whitelistModal ||
        event.target == walletConnectModal ||
        event.target == contactUsModal
    ) {
        closeModals();
    }
}

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
});

walletImg.src = walletIm;
dcU.src = discordImg;

topMenuLogo.src = companyLogo;
bottomMenuLogo.src = companyLogo;

metamask.src = metamaskImg;
walletConnect.src = walletConnectImg;
coinbase.src = coinbaseImg;
logo.src = discordImg;
logo2.src = discordImg;

ln.src = linkedins;
igs.src = instagrams;

ln1.src = linkedins;
igs1.src = instagrams;

ln2.src = linkedins;

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

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const countDownFunction = () => {
    const countDownEnd = new Date('26 Feb 2023');
    const currentDate = new Date();

    const totalSeconds = (countDownEnd - currentDate) / 1000;

    daysEl.innerHTML = Math.floor(totalSeconds / 3600 / 24);
    hoursEl.innerHTML = Math.floor(totalSeconds / 3600) % 24;
    minutesEl.innerHTML = Math.floor(totalSeconds / 60) % 60;
    secondsEl.innerHTML = Math.floor(totalSeconds) % 60;
}

countDownFunction();
setInterval(countDownFunction, 1000);

let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {

        let panel = this.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.paddingBottom = 0 + 'px';
            panel.style.maxHeight = null;
            this.classList.remove('open')
            this.getElementsByClassName('icon')[0].innerHTML = '+';

        }
        else {
            for (let x = 0; x < acc.length; x++) {
                acc[x].classList.remove('open')
                acc[x].nextElementSibling.style.maxHeight = null;
                acc[x].getElementsByClassName('icon')[0].innerHTML = '+';

            }
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

window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});