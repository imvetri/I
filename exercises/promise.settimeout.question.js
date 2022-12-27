function a() {
    setTimeout(() => {
       console.log(1);
     }, 0);
     
     Promise.resolve(1).then(() => {
       console.log(2);
     });
     
     console.log(3);
 }
 
 a()