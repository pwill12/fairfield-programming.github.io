const title=document.getElementById("title"),questionName=document.getElementById("questionName"),questionIcon=document.getElementById("questionIcon"),questionUsername=document.getElementById("questionUsername");fetch("https://fpa-questions.herokuapp.com/question/1").then((e=>(200!=e.status&&(window.location.href="/"),e))).then((e=>e.json())).then((e=>{title.innerHTML=e.body,console.log(e)}));
//# sourceMappingURL=index.60b18b8b.js.map