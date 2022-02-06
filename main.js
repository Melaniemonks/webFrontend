const links = [
    {
      label: "Week1 (Porfolio Introduction)",
      url: "week1/index.html"
    },

    {
      label: "Week2",
      url: "week2/index.html"
    },

    {
      label: "Objects, DOM and Events",
      url: "week3/index.html"
    },

    {
      label: "Object Oriented Programming, Forms ",
      url: "week4/index.html"
    },

    {
      label: "ToDo List",
      url: "week5/index.html"
    }

]

const name1 = document.getElementById("weeks")

for (let i=0 ; i < links.length; i++){
    var ttt = document.createElement("li");
    var aaa = document.createElement("a");

    aaa.textContent=links[i].label;
    aaa.setAttribute("href", links[i].url);

    ttt.appendChild(aaa);
    name1.append(ttt);

}