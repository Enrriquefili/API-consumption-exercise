

(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr=document.getElementById("xhr"),
    $fragment=document.createDocumentFragment();

    xhr.addEventListener("readystatechange",(e)=>{
        if (xhr.readyState!==4) return;
        if (xhr.status>=200 && xhr.status<300){
            console.log("tuviste exito");
        }else{
            console.log("al parecer hubo un error");
        }
        console.log(xhr); 
        let json=JSON.parse(xhr.response);
        console.log(json);
        json.forEach((el) => {
            const $li= document.createElement("li");
            $li.innerHTML=`${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);


            
        });

        $xhr.appendChild($fragment);
     });

     xhr.open("GET","https://jsonplaceholder.typicode.com/users");
     xhr.send();
})();