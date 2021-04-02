// let options = {
//     width: '500px',
//     height: '300px',
//     background:'green',
//     font: {
//         size: '20px',
//         color: '#fff'
//     }
// };

// console.log(JSON.stringify(options));

// let optJson = '{"width":"500px","height":"300px","background":"green","font":{"size":"20px","color":"#fff"}}';

// console.log(JSON.parse(optJson));

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'); 
    
inputRub.addEventListener('input', () => {

    function catchData() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');

            request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
            request.send();

            request.onload = function() {
                if(request.readyState === 4) {
                    if(request.status == 200) {
                        resolve(this.response)
                    }
                    else {
                        reject();
                    }
                }
            }
        });
    };
    
    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = (inputRub.value / data.usd).toFixed(2);
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так")
});
    

    // request.open('method', 'url', 'async', 'login', 'pass');


        // ответы:
        //1. status - код 404; 200; и т.д.
        //2. statusText
        //3. responseText / response
        //4. readyState
    