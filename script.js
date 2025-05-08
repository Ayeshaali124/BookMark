const bookmarkName=document.getElementById("bookmark-name")
const bookmarkUrl=document.getElementById("bookmark-url")
const addBookmark=document.getElementById("add-bookmark-button")
const bookmarkList=document.getElementById("bookmark-list")

let bookmarks=JSON.parse(localStorage.getItem("bookmarks")) || []

if (!Array.isArray(bookmarks)) {
  bookmarks = [];
}


function displayBookmarks(){
bookmarkList.innerHTML=""

bookmarks.forEach((bookmark,index) =>{
  const  li=document.createElement("li")
li.innerHTML=`<a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
      <button onclick="removeBookmark(${index})" id="remove-bookmark-button">Remove</button>`
bookmarkList.appendChild(li)
});  

}

addBookmark.addEventListener("click",()=>{
const name=bookmarkName.value.trim()
const url=bookmarkUrl.value.trim()

if(name && url){
const newBookmark={name,url}
bookmarks.push(newBookmark)
localStorage.setItem("bookmarks",JSON.stringify(bookmarks))

bookmarkName.value=""
bookmarkUrl.value=""

displayBookmarks();

}else{
alert("Please enter correct Name or URL")
}
})

function removeBookmark(index){
bookmarks.splice(index,1)
localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
displayBookmarks();
}

displayBookmarks();
