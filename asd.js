let isAlreadyExist = false;

topSubBtn.addEventListener('click', () => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(topSubMail.value)) {
            topSubMail.value = '';
            topSubMail.style.border = '1px solid rgb(247, 0, 0)';
            setTimeout(() => {
                topSubMail.value = '';
                topSubMail.style.borderWidth = '0px';
            }, 3000);
            topSubMail.placeholder = 'Duzgun mail gir göt';
        return false;
    }
    getEmail(topSubMail.value);      
});

const putEmail = async (data) => {
    const response = await fetch('http://localhost:3003/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            email: data,
        })
    })
    .then(response => response.json());
    console.log('you add yourself to subs');
}

const getEmail = async (data) => {
    let mydata = fetch('http://localhost:3003/')
    .then(response => response.json())
    .then((response) => {
        response.map((a) => {
            if (a.email == data) {
                isAlreadyExist = true;
            }
        })
        if (isAlreadyExist) {
            topSubMail.value = '';
            topSubMail.style.border = '1px solid rgb(247, 0, 0)';
            topSubMail.placeholder = 'You are already subscribed';
            setTimeout(() => {
                topSubMail.value = '';
                topSubMail.style.borderWidth = '0px';
            }, 3000);
        } else {
            putEmail(topSubMail.value);
            
            topSubMail.style.border = '2px solid rgba(31, 247, 103, 0.15)'
            topSubMail.placeholder = 'You susseccesfuly subscribed!';
            setTimeout(() => {
                topSubMail.value = '';
                topSubMail.style.borderWidth = '0px';
            }, 3000);
        }
    });
}