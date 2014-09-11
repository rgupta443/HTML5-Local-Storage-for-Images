var x=localStorage.getItem('img');
var y=localStorage.getItem('img2');
var z=localStorage.getItem('img3');

  if(x) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img class="thumb" src="', x,
                            '" title="test"/>'].join('');

          document.getElementById('list').insertBefore(span, null);
    
    }
	
	if(y) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img class="thumb" src="', y,
                            '" title="test"/>'].join('');

          document.getElementById('list2').insertBefore(span, null);
    
    }
	
	if(z) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img class="thumb" src="', z,
                            '" title="test"/>'].join('');

          document.getElementById('list3').insertBefore(span, null);
    
    }

