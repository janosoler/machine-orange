const path = require("path");


exports.getLandingPage = (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
}

/*exports.getResults = (req, res)=>{
  console.log(req.body);
 
  res.send("hola");
  //res.render("resultsReport", {"img64": base64ImgClassified, )

  
}*/




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

exports.attends404 = () => {
 res.send("<p>Resource not found</p>")
}

