import React from "react";
import cvKuva from "../images/cvKuva.JPG";
import mountain from "../images/mountain.jpg";

// refreshing web page = scroll back to the top.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${mountain})` }}
        className="container-fluid homeContainerColor homePictureContainer"
      >
        <div className="container text-center">
          <div className="">
            <div className="">
              <img className="AddBoxShadow" src={cvKuva} alt="" width="300" height="380" />
            </div>
          </div>
        </div>
      </div>

      <div className="container profileSectionPadding">
        <div className="row">
          <div className="col-lg-12 mb-4 mt-4">
            <div className="card h-100 border-0 mt-2">
              <div className="card-body">
                <h3 className=" mb-4 fontColorDarkBrown text-center">Profiili (FI)</h3>
                <p>
                  Olen Felix Hietaranta, 26-vuotias ja opiskelen viimeistä vuotta Hämeen
                  ammattikorkeakoulussa (tieto- ja viestintätekniikan insinöörikoulutus).
                  Opintokokonaisuudestani puuttuu enää opinnäytetyö. Teen työharjoittelua
                  parhaillaan. Etsin insinöörikoulutukseeni sopivaa työpaikkaa.
                </p>
                <p>
                  Työkokemus: Aloitin työharjoittelun 12.12.2022. Teen kansanedustajaehdokkaalle
                  nettisivuja, jotka on nyt jo julkaistu, joita päivittelen aina tarpeen mukaan.
                  Olen vastannut yksin nettisivujen tekemisestä ja projektissa on mukana myös
                  graafikko, jonka editoimia kuvia olen lisännyt sivustolle. Sen lisäksi tein
                  opiskelukaverin kanssa ensimmäisen lukuvuoden aikana braintreellä kesäprojektin
                  sovelluskontti nimiselle yritykselle.
                </p>
                <p>
                  Olen tehnyt koulussa monta erilaista projektia ja pari kesäprojektia.
                  Projektiryhmässä työskentely on minusta mukavaa, mutta pystyn myös työskentelemään
                  itsenäisesti tarpeen vaatien. Olen kiinnostunut eniten junior front-end ja
                  web-ohjelmointi töistä ja olen tehnyt eniten projekteja front-endin puolelta. Full
                  stack kiinnostaisi myös, koulutunneilla, jolloin käytimme Djangoa. Djangolla
                  teimme pienen projektityön, joka oli yksinkertainen tekstipeli (pelissä pääsi
                  tekemään valintoja eri tekstejä klikkaamalla). Sen lisäksi olemme tehneet koulussa
                  muitakin IT-opintoja ihan laidasta laitaan. Olen halukas oppimaan uutta ja olen
                  varma, että alan ammattilaisten kanssa työskennellessä pystyn syventämään ja
                  laajentamaan koulussa oppimiani tietoja ja taitoja.
                </p>
                <p>
                  Haluaisin oppia lisää front-endin ja web-ohjelmoinnin puolelta, esim: Reactia ja
                  muita teknologiota. Sen lisäksi projektihommat ja muu IT yms taitojen oppiminen
                  olisi mukavaa. Olen rakentanut tätä sivua tutorialin avulla käyttäen Reactia ja
                  Bootstrappia. Olen lisäksi koodaillut muitakin hommia Reactilla ja Javascriptillä.
                  Näihin projekteihin kuuluu pari nettikauppaa, matkailusovellus, Youtube-clone appi
                  ja gym-sovellus sekä paljon muuta. Projektit löytyvät Githubistani. Seuraavat
                  projektit, joita olen tekemässä on Google klooni sovellus ja oman apin tekeminen.
                </p>
                <p>
                  Kiinnostavin kouluprojekti, jonka teimme oli pelikurssilla tehty videopeli, jonka
                  teimme ryhmässä kolmen luokkakaverin kanssa. Peli oli toteutettu
                  Unity-pelimoottorilla. Videopeli oli yksinkertainen toimintaroolipeli, jossa
                  taisteltiin zombeja vastaan miekalla. Peliä kuvattiin ylhäältä päin kolmannesta
                  persoonasta ja pelissä oli kolme tasoa: alkutaso, joka oli tutoriaali, toinen taso
                  joka oli kanjoni ja sitten viimeinen taso, jossa oli eniten tekemistä. Projektissa
                  oma työpanokseni oli start game valikon tekeminen ja kolmannen tason tekeminen.{" "}
                  <a
                    className="textColorBlack"
                    href="https://sharemygame.com/@colorz/macarthur-game-design-project-hamk"
                  >
                    Linkki videopeliin tässä, peli saattaa ladata minuutin tai kaksi.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container profileSectionPadding">
        <div className="row">
          <div className="col-lg-12 mb-4 mt-4">
            <div className="card h-100 border-0 mt-2">
              <div className="card-body">
                <h3 className=" mb-4 fontColorDarkBrown text-center">Profile (EN)</h3>
                <p>
                  I'm Felix Hietaranta, 26 years old and I'm in my last year studying at Häme
                  university of applied sciences (engineering education in information and
                  communication technology). A thesis is the only thing missing from my studies. I'm
                  doing an internship presently. I am looking for a job suitable for my engineering
                  education.
                </p>
                <p>
                  Work experience: I started an internship on 12 December 2022. I'm doing it for a
                  candidate for parliament. Website has already been published, which I always
                  update as needed. I have been solely responsible for making the website and I am
                  also involved in the project with a graphic artist, whose edited pictures I have
                  added to the site. Besides that, I made a summer project with a fellow student
                  during the first academic year which was a braintree project for a company called
                  sovelluskontti.
                </p>
                <p>
                  I have done many different projects at school and a couple of summer projects.
                  Working in a project group is nice for me, but I can also work independently as
                  needed. I am most interested in junior front-end and web programming from work and
                  I have done most projects from the front-end side. Full stack would also be
                  interesting, in school lessons when we used Django. With Django we did a small
                  project work, which was a simple text game (in the game you could to make choices
                  by clicking on different texts). In addition to that, we have done at school all
                  kinds of IT studies. I am willing to learn new things and I am sure that by
                  working with professionals in the field I will be able to deepen and to expand the
                  knowledge and skills I learned in school.
                </p>
                <p>
                  I would like to learn more about front-end and web programming, for example: React
                  and other technologies. In addition to that, project work and other IT etc.
                  learning skills it would be nice. I have built this page with a tutorial using
                  React and Bootstrap. I have also coded other jobs with React and Javascript. These
                  projects include a couple of online stores, a travel app, and a Youtube clone app
                  and gym app and much more. The projects can be found on my Github.
                </p>
                <p>
                  The most interesting school project we did was a video game made in the game
                  course, which we did in a group with three classmates. The game was done With the
                  Unity game engine. The video game was a simple action RPG where the main character
                  fought zombies with a sword. The game was filmed from above, from the third about
                  the person and the game had three levels: the initial level which was a tutorial,
                  the second level which was the canyon and then the last level with the most things
                  to do. In the project my own contribution was making the start game menu and
                  making the third level.{" "}
                  <a
                    className="textColorBlack"
                    href="https://sharemygame.com/@colorz/macarthur-game-design-project-hamk"
                  >
                    Link to the video game here, the game may take a minute or two to load.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

/* bootstrap: 
   my-5 = top
   my-lg-0 = bottom

   <div class="row"> makes a row...

   !!!IMPORTANT!!! mt-5 is now set to be margin-top: 70px; 
*/

/*
<div className="container">
        <div className="row align-items-center my-lg-5">
          <div className="col-lg-3">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={cvKuva}
              alt=""
            />
          </div>

          <div className="col-lg-5">
            <h1 className="font-weight-light">Hello World</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>
        </div>
      </div>
*/

/*

https://sharemygame.com/@colorz/macarthur-game-design-project-hamk

*/

/*

<div className="container-fluid home text-center bg-2">
        <div className="container mt-4">
          <h3 className=" mb-4 fontColorDarkBrown">Profile</h3>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 mb-3">
              Olen Felix Hietaranta, 26-vuotias ja opiskelen viimeistä vuotta
              Hämeen ammattikorkeakoulussa ( tieto- ja viestintätekniikan
              insinöörikoulutus ). Minulta puuttuu työharjoittelu ja
              opinnäytetyön tekeminen. Tarvitsen työtä, jotta saisin hoidettua
              työharjoittelun pois alta. Jatkaisin myös mielelläni töissä
              harjoittelun jälkeen, koska opintoja ei ole kauheasti jäljellä ja
              työkokemus on tärkeää, olisi myös mukavaa päästä työelämään omalle
              alalle.
            </div>
            <div className="col-md-12 mb-3">
              Olen kiinnostunut eniten junior front-end ja web-ohjelmointi
              hommista ja olen tehnyt eniten projekteja front-endin puolelta.
              Junior full stack voisi myös kiinnostaa, mutta back-endistä ei ole
              niin paljoa kokemusta, kuin koulutunneilta, jolloin käytimme
              Djangoa. Djangolla teimme pienen projektityön, joka oli
              yksinkertainen tekstipeli ( pelissä pääsi tekemään valintoja eri
              tekstejä klikkaamalla ). Olen myös valmis oppimaan uutta ja olen
              kuullut, että töissä oppii varmasti paremmin kuin koulussa.
            </div>
            <div className="col-md-12 mb-3">
              Haluaisin oppia lisää front-endin ja web-ohjelmoinnin puolelta,
              esim: Reactia ja muita teknologiota. Olen rakentanut tätä sivua
              tutorialin avulla käyttäen Reactia ja Bootstrappia. Olen lisäksi
              koodaillut muitakin hommia Reactilla ja Javascriptillä.
              Esimerkiksi Javascriptillä tehdyn chrome extensionin ( joka on
              periaatteessa kirjanmerkkisovellus ), yksinkertaisen
              blackjack-pelin Javascriptillä ja Reactilla koodatun meme
              generatorin, joka nimensä mukaisesti luo meemejä ( pystyt
              kirjoittamaan itse tekstit ja valitsemaan monesta eri kuvasta
              meemin ). Projektit löytyvät Githubistani.
            </div>
            <div className="col-md-12 mb-4">
              Kiinnostavin kouluprojekti, jonka teimme oli pelikurssilla tehty
              videopeli, jonka teimme ryhmässä kolmen luokkakaverin kanssa. Peli
              oli toteutettu Unity-pelimoottorilla. Videopeli oli yksinkertainen
              toimintaroolipeli, jossa taisteltiin zombeja vastaan miekalla.
              Peliä kuvattiin ylhäältä päin kolmannesta persoonasta ja pelissä
              oli kolme tasoa: alkutaso, joka oli tutoriaali, toinen taso joka
              oli kanjoni ja sitten viimeinen taso, jossa oli eniten tekemistä.
              Projektissa oma työpanokseni oli start game valikon tekeminen ja
              kolmannen tason tekeminen.{" "}
              <a
                className="textColorBlack"
                href="https://sharemygame.com/@colorz/macarthur-game-design-project-hamk"
              >
                Linkki videopeliin tässä, peli saattaa ladata minuutin tai
                kaksi.
              </a>
            </div>
          </div>
        </div>
      </div>

*/

/*
<div className="container text-center">
          <div className="">
            <div className="">
              <img
                className="img-thumbnail pictureBackgroundBorderColor"
                src={cvKuva}
                alt=""
                width="304"
                height="236"
              />
            </div>
          </div>
        </div>
        */
