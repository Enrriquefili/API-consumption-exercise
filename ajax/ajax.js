

(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr=document.getElementById("xhr");

    xhr.addEventListener("readystatechange",(e)=>{
        if (xhr.readyState!==4) return;
        if (xhr.status>=200 && xhr.status<300){
            console.log("tuviste exito");
        }else{
            console.log("al parecer hubo un error");
        }
         console.log(xhr); 
         console.log(xhr.response);
         let json=JSON.parse(xhr.responseText);
         console.log(json);

     });

     xhr.open("GET","https://jsonplaceholder.typicode.com/users");
     xhr.send();
})();