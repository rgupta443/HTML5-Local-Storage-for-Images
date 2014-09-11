 document.getElementById('files1').addEventListener('change', handleFileSelect1, false);
 document.getElementById('files2').addEventListener('change', handleFileSelect2, false);
 document.getElementById('files3').addEventListener('change', handleFileSelect3, false);

  function handleFileSelect1(evt) {
	
	    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
			//alert(files[i].length());
          // Render thumbnail.
          var pair=e.target.result;
         // document.getElementById('list').insertBefore(span, null);
          localStorage.setItem('img',pair );
		  
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
  
  function handleFileSelect2(evt) {
	
	    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
			//alert(files[i].length());
          // Render thumbnail.
          var pair2=e.target.result;
         // document.getElementById('list').insertBefore(span, null);
          localStorage.setItem('img2',pair2);
		  
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

 function handleFileSelect3(evt) {
	
	    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
			//alert(files[i].length());
          // Render thumbnail.
          var pair3=e.target.result;
         // document.getElementById('list').insertBefore(span, null);
          localStorage.setItem('img3',pair3);
		  
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
