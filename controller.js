import path from "path";
import fetch from 'node-fetch';

const getLandingPage = (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
}

const sendDataToGoogleAPIForClassify = async (req, res)=>{
  
  const requestBodyToAPI = {"images": [JSON.parse(req.body.base64)]};
  const responseFromGoogleCloud = await fetch("https://api-be3kih2vua-ew.a.run.app", {
        method: 'POST', 
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        cache: 'no-cache', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(requestBodyToAPI)
    });
    const responseFromGoogleCloudJSON = await responseFromGoogleCloud.json();
    res.render('resultsReport',{data:responseFromGoogleCloudJSON.response[0]});
}


/*.fileSavingAndConvertBase64 = (req, res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(files);
      var oldpath = files.imageDumper.filepath;
      const fileReader = new FileReader();
      const base64 = 
      var newpath = path.join(__dirname,"savedImages",files.imageDumper.originalFilename);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
}*/

export {getLandingPage, sendDataToGoogleAPIForClassify}