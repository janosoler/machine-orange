
 
 document.getElementById("imageDumper").addEventListener('change', e => {
    const files = e.currentTarget.files;
    const base64images = [];
    for (let file of files){
        let canvas = document.getElementById('mycanvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            
            ctx.drawImage(img, 0, 0);
            
            base64images.push(canvas.toDataURL('image/jpeg'));
        };
        img.src = URL.createObjectURL(file);
    }
    console.log(base64images);
 });