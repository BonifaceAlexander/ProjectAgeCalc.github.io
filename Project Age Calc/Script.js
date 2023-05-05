function calculate(){
    setInterval(() => {
     let birthdate=new Date(document.getElementById('birthdate').value); 
     let now =new Date();  
     
     /*if(now<birthdate)
     {
      alert("Enter Valid date");
      
     }*/


     let ageinMs=now.getTime() - birthdate.getTime();

        let ageinS =ageinMs/1000;
        let ageinMins =ageinS/60;
        let ageinHrs =ageinMins/60;
        let ageinDays =ageinHrs/24;
        let ageinMonths =ageinDays/30.4375;
        let ageinYears =ageinMonths/12;

        document.querySelector('#years').innerHTML = Math.floor(ageinYears);
        document.querySelector('#months').innerHTML = Math.floor(ageinMonths%12);
        document.querySelector('#days').innerHTML = Math.floor(ageinDays%30.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageinHrs%24);
        document.querySelector('#minutes').innerHTML = Math.floor(ageinMins%60);
        document.querySelector('#seconds').innerHTML = Math.floor(ageinS%60);
        document.querySelector('#seconds').style.borderBottom='1px grey solid';},1000);
        

    }
    function reset(){
        window.location.reload();

    }

    
