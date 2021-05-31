window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();
        let formData = new FormData(form);
        // formData.append("id", Math.random());

        // let obj = {};

        // formData.forEach((value, key) => {
        //     obj[key] = value;

        // });

        // let json = JSON.stringify(obj);
        // console.log(json);
    
                // отправка данных на сервер

        const request = new XMLHttpRequest();
        request.open('POST', '../api.php');// 'http://localhost:3000/people' json
        // request.setRequestHeader('Content-type', 'multipart/form-data'); для форм-дата не нужно //'application/json; charset=utf-8' для для json
        request.send(formData);     // json для json
        request.addEventListener('load', () => {
            if (request.status == 200) {
                // let data = JSON.parse(request.response); для json
                console.log(response.request);
                // createCards(data);

            } else {
                console.error('Что-то пошло не так...');
            }
    
        });
    
    // let subbutton = document.querySelector('.subbutton');
    

    // 

        // получение данных с сервера
        // const request = new XMLHttpRequest();
        // request.open('GET', 'http://localhost:3000/people');
        // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // request.send();
        // request.addEventListener('readystatechange', () => {
        //     if (request.readyState === 4 && request.status == 200) {
        //         let data = JSON.parse(request.response);
        //         console.log(data);
        //         createCards(data);


        //     } else {
        //         console.error('Что-то пошло не так...');
        //     }
        // });
        
        // fetch('http://localhost:3000/people')
        //     .then(data => data.json())
        // getResource('../api.php', formData)
        //     .then(data => console.log(data)) //второй раз data только для axios
        //     .catch(err => console.error(err));
        // this.remove();

        // axios.post('http://localhost:3000/people', obj);
    }    
    
    // form.addEventListener('click', (e) => req(e), {'once':true});
    // document.querySelector('button').addEventListener('click', (e) => req(e), {'once':true}); просто для получения кнопки и добавления обработчика


    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: 'POST',
            // headers: {'Content-type': 'multipart/form-data'},
            body: data

        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.text();
    }

    // async function getResource(url) {
    //     const res = await axios(`${url}`);

    //     if (res.status !== 200) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return res;
    // }

    form.addEventListener('submit', (e) => req(e), {'once':true});

    // function createCards(response) {
    //     response.forEach(item => {
    //         let card = document.createElement('div');
    
    //         card.classList.add('card');
    
    //         let icon;
    //         if (item.sex === 'male'){
    //             icon = 'icons/mars.png';
    //         } else {
    //             icon = 'icons/female.png';
    //         }
    
    
    
    //         card.innerHTML = `
    //             <img src='${item.photo}' alt="photo"></img>
    //             <div class='name'>${item.name} ${item.surname}</div>
    //             <div class='sex'>
    //                 <img src=${icon} alt='sex'>
    //             </div>
    //             <div class='age'>${item.age}</div>
    //         `;
    //     document.querySelector('.app').appendChild(card);
    //     });
    // }
});

