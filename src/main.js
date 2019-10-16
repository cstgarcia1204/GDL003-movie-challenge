//Hide sections when website started
document.getElementById("secondScreen").style.display = "none";
document.getElementById("happyPhrase").style.display = "none";
document.getElementById("heartPhrase").style.display = "none";
document.getElementById("passionPhrase").style.display = "none";
document.getElementById("randomPhrase").style.display = "none";

//Function to go back to Home page
const backButton = () =>{
	document.getElementById("firstScreen").style.display = "block";
  document.getElementById("secondScreen").style.display = "none";
  location.reload(true);
};
document.getElementById("backButton").addEventListener("click", backButton);

//Happy mood, Show data
const showHappyMovies=()=>{ /*This function returns the id's of the movies accordingly to the Mood-Array*/
 happyMovies.forEach(function(movieId){
 getInfoHappyMovies('http://www.omdbapi.com/?apikey=64145534&i='+movieId)
 });
}
const pageForHappyMovies=()=>{ /* This function is to show the HAPPY section*/
 document.getElementById("firstScreen").style.display = "none";
 document.getElementById('secondScreen').style.display='block';
 document.getElementById("happyPhrase").style.display = "block";
 showHappyMovies();
};
document.getElementById('happyButton').addEventListener('click',pageForHappyMovies);


/*This function bring the API information by FETCH*/
const getInfoHappyMovies=(movieLink)=>{
 fetch(movieLink)
   .then(function(response){
     return response.json();
   })
   .then(function(movie){
   createMovie(movie)
   });
}

const createMovie=(movie)=>{
 let htmlElement=document.createElement('section');
   htmlElement.innerHTML='<section class="movieCard"><img src="'+movie.Poster+'"><h3>'+movie.Title+'</h3><p>'+movie.Released+'</p><p>'+movie.Runtime+'</p></section>';
   document.getElementById("happyScreen").appendChild(htmlElement);

}

//Heart broken  mood, Show data

const showHeartbrokenMovies=()=>{ /*This function returns the id's of the movies accordingly to the Mood-Array*/
 brokenHeartMovieArray.forEach(function(movieTitle){
 getInfoHappyMovies('http://www.omdbapi.com/?apikey=64145534&t='+movieTitle)
 });
}

const pageForHeartbrokenMovies=()=>{ /*This function is to show the HEART BROKEN section*/
  document.getElementById("firstScreen").style.display = "none";
  document.getElementById('secondScreen').style.display='block';
  document.getElementById("heartPhrase").style.display = "block";
 showHeartbrokenMovies();
};
document.getElementById('heartbrokenButton').addEventListener('click',pageForHeartbrokenMovies);



//Passion  mood, Show data
const showPassionMovies=()=>{ /*This function returns the id's of the movies accordingly to the Mood-Array*/
passionMovies.forEach(function(movieId){
  getInfoHappyMovies('http://www.omdbapi.com/?apikey=64145534&i='+movieId)
});
}
const pageForPassionMovies=()=>{ /*This function is to show the PASSION section*/
  document.getElementById("firstScreen").style.display = "none";
  document.getElementById('secondScreen').style.display='block';
  document.getElementById("passionPhrase").style.display = "block";
  showPassionMovies();
};
document.getElementById('passionButton').addEventListener('click',pageForPassionMovies);



//Random  mood, Show data

const showRandomMovies=()=>{ /*This function returns the id's of the movies accordingly to the Mood-Array*/
 randomMovies.forEach(function(movieId){
 getInfoHappyMovies('http://www.omdbapi.com/?apikey=64145534&i='+movieId)
 });
}

const pageForRandomMovies=()=>{ /* This function is to show the RANDOM section*/
 document.getElementById("firstScreen").style.display = "none";
 document.getElementById('secondScreen').style.display='block';
 document.getElementById("randomPhrase").style.display = "block";
 showRandomMovies();
};
document.getElementById('randomButton').addEventListener('click',pageForRandomMovies);



/*const brokenHeart=()=>{

 let brokenHeartMovieArray=[
   'Forrest Gump',
   'Casablanca',
   'Eternal Sunshine of the Spotless Mind',
   'Slumdog Millionaire',
   'The Legend of 1900',
   'La La Land',
   'Titanic',
   'The Curious Case of Benjamin Button',
   'Brokeback Mountain',
   'A Very Long Engagement',
   'The Shape of Water'];
   //Obteneiendo el indice del elemento random de nuestro array
   let randomNumber=Math.floor((Math.random()*brokenHeartMovieArray.length-1)+1);
   //console.log(randomNumber);//verificando que funcione el randomNumber

   //obteniendo la peli random

 let randomMovie= brokenHeartMovieArray[randomNumber];
   console.log(randomMovie);//verificando que funcione randomMovie

   return randomMovie;
};



const phraseBroken= () =>{

   //array de nuestra seleccion de peliculas basasdas en genero Drama&Romance y ranking IMDb
   let phraseArray= [
   'Situación sentimental: Mágica... nada por aquí, nada por allá!!! \<\\3 . <br> Mejor ve una película, I Film You te recomienda hoy:',
   'Situación sentimental: Cupido me está haciendo bullying \<\\3. <br> I Film You te recomienda hoy:',
   'Situación sentimental: Hasta rexona me abandona \<\\3. <br>I Film You te recomienda hoy:',
   'Tantos buenos eventos y tu sin dinero \<\\3 . <br> I Film You te recomienda hoy:',
   'Cuando se autoproclaman gamers, solo porque han jugado con tu corazón \<\\3  . <br>I Film You te recomienda hoy:',
   ];
   //Obteneiendo el indice del elemento random de nuestro array
   let randomPhrase=Math.floor((Math.random()*phraseArray.length-1)+1);
   //console.log(randomNumber);//verificando que funcione el randomNumber

   //obteniendo la peli random
   let randomPhraseMovie= phraseArray[randomPhrase];
   //console.log(randomPhraseMovie);//verificando que funcione randomMovie

   return randomPhraseMovie;
};*/

//EMOCION PASSION, MUESTRA DATOS
