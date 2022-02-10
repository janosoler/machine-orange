const sendImgToApi = async event =>{
    event.preventDefault();
    const hiddenValueImage = JSON.parse(document.getElementById("hiddenBase64").getAttribute("value"));
    const requestBodyToAPI = {"images": [hiddenValueImage]};
    
    const response = await fetch("https://api-be3kih2vua-ew.a.run.app", {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: requestBodyToAPI
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
}

document.getElementById("orangeImageForm").addEventListener("submit", sendImgToApi);