let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input')[0];

left_btn.addEventListener('click', ()=>{
  cards.scrollLeft -=400;
})

right_btn.addEventListener('click', ()=>{
  cards.scrollLeft +=400;
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
  data.forEach(ele, i => {
    let {name, imdb, date, sposter, bposter, gener, url, } = ele;
    let movie_list_title = document.createElement('a');
    movie_list_title.classList.add('movie_list_title')
    movie_list_title.href = url;
    movie_list_title.innerHTML = `
    <img class="movie_list_item_img" src="${sposter}" alt="${name}">
                        <div class="rest-card">
                            <img src="${bposter}" alt="">
                        <div class="movie-list-item-title">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${gener}, ${date}</p>
                                <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                            </div>
                        </div>
                        </div>
    `
    cards.appendChild(movie_list_title);
  });
  document.getElementById('title').innerText = data[0].name;
  document.getElementById('gen').innerText = data[0].name;
  document.getElementById('date').innerText = data[0].name;
  document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}`

  //search data load

  data.forEach(element => {
    let {name, imdb, date, sposter, gener, url, } = element;
    let movie_list_title = document.createElement('a');
    movie_list_title.classList.add('movie_list_title')
    movie_list_title.href = url;
    movie_list_title.innerHTML = `
    <img src="${sposter}" alt="">
    <div class="cont">
        <h3>${name}</h3>
        <p>${gener}, ${date}, <span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</p>
    </div>
    `
    search.appendChild(movie_list_title);
  });
  //searc filter

  search_input.addEventListener('keyup', () => {
    let filter = search_input.value.toUppercase();
    let a = search.getElementsByTagName('a')
    
    for (let index = 0; index < a.length; index++) {
      let b = a[index].getElementsByClassName('cont')[0];
     // console.log(a.textContent)

     let TextValue = b.textContent || b.innerText;
     if (TextValue.toUppercase().indexOf(filter) > -1) {
      a[index].style.display ="flex";
      search.style.visibility = "visible";
      search.style.opacity = 1;
     } else {
      a[index].style.display ="none";
     }
      if (search_input.value == 0) {
        search.style.visibility = "hidden";
        search.style.opacity = 0;        
      }
      
    }
  })
});
