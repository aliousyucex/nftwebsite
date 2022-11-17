/// Main Buttons ///
const project = document.getElementById('project');
const roadmap = document.getElementById('roadmap');
const nfts = document.getElementById('nfts');
const game = document.getElementById('game');
const story = document.getElementById('story');
const marketing = document.getElementById('marketing');
const offer = document.getElementById('offer');
/// Main Buttons ///

/// Modals ///
const roadmapModal = document.getElementById('roadmapModal');
const projectModal = document.getElementById('projectModal');
const nftsModal = document.getElementById('nftsModal');
const gameModal = document.getElementById('gameModal');
const storyModal = document.getElementById('storyModal');
const marketingModal = document.getElementById('marketingModal');
const offerModal = document.getElementById('offerModal');
/// Modals ///

/// Inner Buttons ///
const roadmapRightButton = document.getElementById('roadmapRightArrow');
const roadmapLeftButton = document.getElementById('roadmapLeftArrow');
/// Inner Buttons ///

const roadmapModalContent = document.getElementById('roadmapModalContent');

const changeValue = {
    btn1: {
        value: 0,
        head: 'PHASE 1',
        text1: 'Story Season 1',
        text2: 'Game Alpha Version',
        text3: 'Private Mint - Airdrop',
        text4: 'Public Mint'
    },
    btn2: {
        value: 1,
        head: 'PHASE 2',
        text1: 'Story Season 2',
        text2: 'Game Open Beta',
        text3: 'New NFT Mechanics',
        text4: 'World Wide Party Details'
    },
    btn3: {
        value: 2,
        head: 'PHASE 3',
        text1: 'Story Season 3',
        text2: 'Game Full Version',
        text3: 'Worl Wide Party',
        text4: `3'th Generating Coffe Shop`
    }
}
let roadmapLevel = 0;

roadmapLeftButton.addEventListener('click', () => {
    if (roadmapLevel === 0) return;
    roadmapLevel--;
    decideRoadmapLevel(roadmapLevel);
});

roadmapRightButton.addEventListener('click', () => {
    console.log(roadmapLevel)
    if (roadmapLevel === 2) return;
    roadmapLevel++;
    decideRoadmapLevel(roadmapLevel);
});

const decideRoadmapLevel = (level) => {
    switch (roadmapLevel) {
        case 0:
            roadmapChange(changeValue.btn1);
            break;
        case 1:
            roadmapChange(changeValue.btn2);
            break;
        case 2:
            roadmapChange(changeValue.btn3);
            break;
    }
    roadmapModalContent.classList.add('change');
    setTimeout(() => {
        roadmapModalContent.classList.remove('change');
    }, 300);
}

function roadmapChange(changeValue) {
    switch (changeValue.value) {
        case 0:
            roadmapPhase1.style.display = 'flex';
            roadmapPhase2.style.display = 'none';
            roadmapPhase3.style.display = 'none';
            break;
        case 1:
            roadmapPhase1.style.display = 'none';
            roadmapPhase2.style.display = 'flex';
            roadmapPhase3.style.display = 'none';
            break;
        case 2:
            roadmapPhase1.style.display = 'none';
            roadmapPhase2.style.display = 'none';
            roadmapPhase3.style.display = 'flex';
            break;
    }
    roadmapHead.innerHTML = changeValue.head;
    roadmapText1.innerHTML = changeValue.text1;
    roadmapText2.innerHTML = changeValue.text2;
    roadmapText3.innerHTML = changeValue.text3;
    roadmapText4.innerHTML = changeValue.text4;
};

/// Modal Open ///
const modalOpen = (modalName) => {
    modalName.style.display = "block";}
roadmap.onclick = () => {
    modalOpen(roadmapModal);}
project.onclick = () => {
    modalOpen(projectModal);}
nfts.onclick = () => {
    modalOpen(nftsModal);}
game.onclick = () => {
    modalOpen(gameModal);}
story.onclick = () => {
    modalOpen(storyModal);}
marketing.onclick = () => {
    modalOpen(marketingModal);}
offer.onclick = () => {
    modalOpen(offerModal);}
/// Modal Open ///

/// Modal Close ///
addEventListener('keydown', ({ keyCode }) => {
    if (keyCode == 27) {
        closeModals();
}})
window.onclick = function (event) {
    if (
        event.target == roadmapModal ||
        event.target == projectModal ||
        event.target == nftsModal ||
        event.target == gameModal ||
        event.target == storyModal ||
        event.target == marketingModal ||
        event.target == offerModal
        ) {
            closeModals();
        }
}
const closeModals = () => {
    roadmapModal.style.display = "none";
    projectModal.style.display = "none";
    nftsModal.style.display = "none";
    gameModal.style.display = "none";
    storyModal.style.display = "none";
    marketingModal.style.display = "none";
    offerModal.style.display = "none";

}
/// Modal Close ///