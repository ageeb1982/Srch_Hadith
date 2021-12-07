function check_hadith() {

    let sky = document.getElementById("skey").value;
    let dorar = document.getElementById("dorar");
    let tmp = "";


    // let url = "http://dorar.net/dorar_api.json?skey=" + sky + "&callback=?";
    // try {
    // 	let z = await fetch(url);
    // 	console.log("z=>", z);
    // } catch (e) {
    // 	console.log("e=>", e)
    // }
    // return;
    // const xhttp = new XMLHttpRequest();
    // //xhttp.setRequestHeader('Content-type', 'application/ecmascript');
    // xhttp.onload = function () {

    //     let vx = "";
    //     const datajson = this.responseText;
    //     console.log("datajson=>", datajson);
    //     let data = JSON.parse(datajson);
    //     data.forEach((item) => {
    //         console.log("item=>", item);
    //         tmp += "<div>" + item + "</div>";
    //     });
    //     dorar.innerHTML = tmp;
    // };
    // xhttp.open("GET", url);
    // xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    // xhttp.setRequestHeader("Access-Control-Allow-Methods", "*");
    // xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
    // // xhttp.setRequestHeader('Content-Type', 'application/json');
    // // xhttp.setRequestHeader('user-agent', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36");
    // // xhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    // // xhttp.withCredentials = false;
    // console.log(xhttp);


    // xhttp.send();

    let url = "http://dorar.net/dorar_api.json?skey=" + sky + "&callback=?";
    let response = fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers:
        {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials': "true"
        }
    }).then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
        }).catch(err => console.log(err));

    ;


    // fetch(url)
    //     .then(res => res.json())
    //     .then((out) => {
    //         console.log('Output: ', out);
    //     }).catch(err => console.error(err));



    // var headers = {};

    // fetch(url, {
    //     method: "GET",
    //     mode: 'no-cors',
    //     headers: headers
    // })
    //     .then((response) => {
    //         if (!response.ok) {
    //             console.log(response);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);

    //     });
};
