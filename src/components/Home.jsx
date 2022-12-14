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
                <h3 className=" mb-4 fontColorDarkBrown text-center">Profile</h3>
                <p>
                  Olen Felix Hietaranta, 26-vuotias ja opiskelen viimeistä vuotta Hämeen
                  ammattikorkeakoulussa (tieto- ja viestintätekniikan insinöörikoulutus).
                  Opintokokonaisuudestani puuttuu enää työharjoittelu ja opinnäytetyö. Etsin
                  insinöörikoulutukseeni kuuluvaa harjoittelupaikkaa ja toiveenani on, että voisin
                  jatkaa töissä myös harjoittelujakson jälkeen.
                </p>
                <p>
                  Olen tehnyt koulussa monta erilaista projektia ja pari kesäprojektia.
                  Projektiryhmässä työskentely on minusta mukavaa, mutta pystyn myös työskentelemään
                  itsenäisesti tarpeen vaatien. Olen kiinnostunut eniten junior front-end ja
                  web-ohjelmointi töistä ja olen tehnyt eniten projekteja front-endin puolelta. Full
                  stack kiinnostaisi, mutta back-endistä ei ole niin paljoa kokemusta, kuin
                  koulutunneilta, jolloin käytimme Djangoa. Djangolla teimme pienen projektityön,
                  joka oli yksinkertainen tekstipeli (pelissä pääsi tekemään valintoja eri tekstejä
                  klikkaamalla). Sen lisäksi olen kiinnostunut myös muistakin IT-tehtävistä. Olen
                  halukas oppimaan uutta ja olen varma, että alan ammattilaisten kanssa
                  työskennellessä pystyn syventämään ja laajentamaan koulussa oppimiani tietoja ja
                  taitoja.
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
