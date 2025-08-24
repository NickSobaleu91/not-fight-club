const register = document.querySelector('.register')
const text = document.querySelector('.text')
const start = document.querySelector('.start')
const menu = document.querySelector(".menu")
const Fightbutton = document.querySelector('.Fightbutton')
const input = document.querySelector('.text');
const CharacterPageContainer = document.querySelector('.CharacterPageContainer')
const put2 = document.querySelector('.put2')
const put3 = document.querySelector('.put3')
const main = document.querySelector('.main')
const photo1 = document.querySelector('.photo1')
const allHeroes = document.querySelectorAll('.heroes')
const icone = document.querySelector('.icone')
const popup = document.querySelector('.pop-up')
const cross = document.querySelector('.cross')
const icone2 = document.querySelectorAll('.icone2')
const put1 = document.querySelector('.put1')
const settings = document.querySelector('.settings')
const edit = document.querySelector('.edit')
const editname = document.querySelector('.editname')
const ourname1 = document.querySelector('.ourname1')
const savename = document.querySelector('.savename')
const editInput = document.querySelector('.newname');




                                                                                // кликаем на кнопку после регистрации

start.addEventListener('click', () => {
    const name = input.value.trim();                              // читаем введённое имя из input котоый мы задали и убираем пробелы, input.value — это содержимое текстового поля, которое ввёл пользователь.
    localStorage.setItem('playerName', name);                     // сохраняем имя в localStorage

     if (!name) return alert("было бы не плохо ввести имя");  
     

    register.style.display = "none";
    menu.style.display = 'flex'
    Fightbutton.style.display = 'block'


  
});
                                                                                    // кликаем на нопку характеристику после регистрации
put2.addEventListener('click', () =>{
    const savedName = localStorage.getItem('playerName'); // достаём сохранённое имя , getItem(key) — метод, который достаёт из хранилища значение по ключу key 
    document.querySelector('.ourname').textContent = savedName; // вставляем в нужный элемент
   
    CharacterPageContainer.style.display ='flex'
    main.textContent = "Character"
    Fightbutton.style.display = 'none'
    settings.style.display = 'none';
})



                                                                                     // кликаем на нопку дом

put1.addEventListener('click', () =>{
  CharacterPageContainer.style.display = 'none';
  main.textContent = "Main";
  Fightbutton.style.display = 'block';
  
  
})

                                                                                    //кликаем на нопку настройки

put3.addEventListener('click', () =>{
  main.textContent = "Settings";
  Fightbutton.style.display = 'none';
  CharacterPageContainer.style.display = 'none';
  settings.style.display = 'block';

  const savedName1 = localStorage.getItem('playerName'); // достаём сохранённое имя , getItem(key) — метод, который достаёт из хранилища значение по ключу key 
    document.querySelector('.ourname1').textContent = savedName1; // вставляем в нужный элемент
   
  
})


                                                                            // открытие меню перезаписи имени 

edit.addEventListener('click', () =>{
editname.style.display ='block';
edit.style.display ='none';
ourname1.textContent = '';
savename.style.display ='block'; 
})
const inpute = document.querySelector('.newname')               //объявляем новую переменную текстового поля 
const newname = localStorage.getItem('playerName') || ''        // объявляем новую переменную для локальной переменной
inpute.value = newname                                          //значение поля будет равно локальной переменной

                                                                                  //сохрание нового имени

savename.addEventListener('click', () =>{
    let name = editInput.value.trim();                        
    localStorage.setItem('playerName', name); 
    ourname1.textContent = 'block';
    edit.style.display ='block';
    savename.style.display ='none';            
})


                                                                                //    pop-up

icone.addEventListener('click', () =>{
    popup.classList.toggle('hidden')
})
cross.addEventListener('click', () =>{
    popup.classList.toggle('hidden')
})
popup.addEventListener('click', (event) => {
  if(event.target.classList.contains('pop-up')){
    popup.classList.toggle('hidden')
  }
  })

                                                                         // меняем фон при наведении на картинки в попапе



const changebackground = (element) => {
  const overlay = element.querySelector('.overlay2')
  overlay.style.opacity = '1'
  overlay.style.zIndex = '2'
}

const appearbutton = (element) => {
  const icon = element.querySelector('.icone2')
  icon.style.opacity = '1'
  icon.style.zIndex = '3'
}
const changebackgroundoff = (element) => {
  const overlay = element.querySelector('.overlay2')
  overlay.style.opacity = '0'
  overlay.style.zIndex = '0'
}

const appearbuttonoff = (element) => {
  const icon = element.querySelector('.icone2')
  icon.style.opacity = '0'
  icon.style.zIndex = '0'
}





const changeEvery = (event) =>{
    const brn = event.target;
    changebackground(brn)
    appearbutton(brn)
}
const offEvery = (event) =>{
    const brn = event.target;
    changebackgroundoff(brn)
    appearbuttonoff(brn)
}





allHeroes.forEach(hero => {
  hero.addEventListener('mouseenter', changeEvery);
  hero.addEventListener('mouseleave', offEvery);
});


                                                                                            //выбор фото героя

const green = document.querySelector('.green')
const red = document.querySelector('.red')



document.querySelectorAll('.icone2').forEach(icon => {
  icon.addEventListener('click', () => {
    const hero = icon.closest('.heroes')       // находим родительский блок
    const smallPhoto = hero.querySelector('.photo2') // находим фото рядом
    photo1.src = smallPhoto.src             // копируем ссылку

    green.textContent = `Wins: ${smallPhoto.dataset.wins}` //data-* атрибуты через них мы берем с html данные и вставляем на страницу
    red.textContent = `Loses: ${smallPhoto.dataset.loses}`
  })
})

Fightbutton.addEventListener('click', () =>{
  alert('извините, я даун, больше за 3 дня не успел, занимался зубрешкой js и не успел')
})