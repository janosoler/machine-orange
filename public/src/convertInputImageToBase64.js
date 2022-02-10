

 document.getElementById("imageDumper").addEventListener('change', async e => {
    const file = e.currentTarget.files[0];
    let canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload =  function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const base64Stringified = JSON.stringify({"content": canvas.toDataURL('image/jpeg').split(",")[1], "name":file.name});
        document.getElementById("hiddenBase64").setAttribute("value", base64Stringified);  
    };
    
    img.src = URL.createObjectURL(file);  
 });
