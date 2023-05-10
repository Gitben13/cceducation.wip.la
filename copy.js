function copy(data){
  if (!window.isSecureContext){
    alert("This site is not using HTTPS, therefore I could not copy the code.");
  }
  //var data = [new ClipboardItem({ "text/plain": new Blob([window.code], { type: "text/plain" }) })];
  var data = window.code;
  try{
    navigator.clipboard.writeText(data).then(function() {
       console.log("Copied to clipboard successfully!");
    }, function() {
      console.error("Unable to write to clipboard. :-(");
    });
  }
  catch(e){
    console.log(e);
    //alert("This site is not using HTTPS, therefore I could not copy the code.");
  }
}

// USAGE: copy('hello world')
