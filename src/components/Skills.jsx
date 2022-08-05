import React from "react";

// refreshing web page = scroll back to the top.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function Skills() {
  return (
    <div>
      {/* START */}
      <div>
        <h3 className="text-center mb-4 SkillsMarginTop125px fontColorDarkBrown">
          Skills
        </h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <div className="card h-100 border-0 SkillCardBackgroundColor">
              <div className="card-body">
                <h4 className="card-title">Visual Studio Code</h4>
                <p>
                  Ohjelmointityökaluista olen tehnyt eniten hommia Visual Studio
                  Codella ja se on minulle tutuin työkalu. Tämä nettisivukin on
                  tehty VS codella. VS coden lisäksi, olen käyttänyt visual
                  studio 2019, mutta enimmäkseen vaan kouluhommissa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 SkillCardBackgroundColor">
              <div className="card-body">
                <h4 className="card-title">Ohjelmointikielet ja muut</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item SkillCardBackgroundColor">
                    Tuoreimmassa muistissa ovat Javascript, HTML, CSS ja React,
                    jota opiskelen parhaillaan.
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Koulussa muita ohjelmointikieliä, joita olemme käyttäneet
                    ovat: C#, Python ja C++.
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Linuxin ja MySQL:n perusteet
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Microsoft word ja powerpoint
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Photoshopin perusteet
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 SkillCardBackgroundColor">
              <div className="card-body">
                <h4 className="card-title">Kielitaito</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item SkillCardBackgroundColor">
                    Suomi: äidinkieli
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Englanti: sujuva
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Ruotsi: hyvä ( olen käynyt ruotsinkielisen armeijan )
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Latina: perusteet ( taito on erittäin ruostunut, mutta kävin
                    latinan luokan yläkoulussa )
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 SkillCardBackgroundColor">
              <div className="card-body">
                <h4 className="card-title">Työkokemus</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item SkillCardBackgroundColor">
                    K-supermarket Perniö, myyjä ja välillä hyllytys
                    21.08.2015-30.11.2015 ja 26.05.2017-04.03.2018
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Hästön maatila, puutarhatyö 09.06.2014-27.06.2014
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Bulevardin klinikka, toimistoapulainen 18.06.2012-29.06.2012
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 SkillCardBackgroundColor">
              <div className="card-body">
                <h4 className="card-title">Koulutus</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item SkillCardBackgroundColor">
                    Hämeen ammattikorkeakoulu, tieto-ja viestintätekniikan
                    insinööri 2018-2023
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Perniön lukio, ylioppilas 2012-2015
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 SkillCardBackgroundColor">
              <div className="card-body">
                <h4 className="card-title">Varusmiespalvelus</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item SkillCardBackgroundColor">
                    Kävin varusmiespalveluksen Uudenmaan prikaatissa
                    Dragsvikissä Tammisaaressa.
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Olin armeijassa vuoden eli 347 päivää ja minut koulutettiin
                    viesti-alikersantiksi.
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Varusmiespalvelus oli enimmäkseen ruotsiksi, joten opin
                    samalla myös kieltä.
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 SkillCardBackgroundColor">
              <div className="card-body">
                <h4 className="card-title">Harrastukset</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item SkillCardBackgroundColor">
                    Laskettelu
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Sijoittaminen, esim: rahastot ja kryptovaluutat
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor">
                    Videopelit
                  </li>
                  <li className="list-group-item SkillCardBackgroundColor"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="SkillsMarginBottom45px"></div>
      </div>
    </div>
  );
}

export default Skills;

/*

<div className="bg-2">
        <div className="container-fluid home text-center">
          <div className="container justify-content-md-center">
            <h3 className="text-center mb-4 mt-4 fontColorDarkBrown">
              IT-osaaminen
            </h3>
            <h3 className="font-weight-light text-center mb-3">
              Visual studio code
            </h3>

            <div className="row d-flex justify-content-center">
              <div className="col-md-7">
                Ohjelmointityökaluista olen tehnyt eniten hommia Visual Studio
                Codella ja se on minulle tutuin työkalu. Tämä nettisivukin on
                tehty VS codella. VS coden lisäksi, olen käyttänyt visual studio
                2019, mutta enimmäkseen vaan kouluhommissa.
              </div>
            </div>

            <h3 className="font-weight-light text-center mt-5 mb-3">
              Ohjelmointikielet ja muut
            </h3>

            <ul className="list-group list-group-flush mb-4 listWidth">
              <li className="list-group-item text-center bg-2">
                Tuoreimmassa muistissa ovat Javascript, HTML, CSS ja React, jota
                opiskelen parhaillaan.
              </li>
              <li className="list-group-item text-center bg-2">
                Koulussa muita ohjelmointikieliä, joita olemme käyttäneet ovat:
                C#, Python ja C++.
              </li>
              <li className="list-group-item text-center bg-2">
                Linuxin ja MySQL:n perusteet
              </li>
              <li className="list-group-item text-center bg-2">
                Microsoft word ja powerpoint
              </li>
              <li className="list-group-item text-center bg-2">
                Photoshopin perusteet
              </li>
              <li className="list-group-item bg-2"></li>
            </ul>
          </div>

          <div className="container text-center">
            <div className="">
              <div className="">
                <h3 className="text-center mb-4 mt-4 fontColorDarkBrown">
                  Muut tiedot
                </h3>
                <h3 className="font-weight-light text-center mt-5 mb-4">
                  Kielitaidot
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center bg-2">
                    Suomi: äidinkieli
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Englanti: sujuva
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Ruotsi: hyvä (olen käynyt ruotsinkielisen armeijan)
                  </li>
                  <li className="list-group-item bg-2"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container text-center">
            <div className="">
              <div className="">
                <h3 className="font-weight-light text-center mt-5 mb-4">
                  Työkokemus
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center bg-2">
                    K-supermarket Perniö, myyjä ja välillä hyllytys
                    21.08.2015-30.11.2015 ja 26.05.2017-04.03.2018
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Hästön maatila, puutarhatyö 09.06.2014-27.06.2014
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Bulevardin klinikka, toimistoapulainen 18.06.2012-29.06.2012
                  </li>
                  <li className="list-group-item bg-2"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container text-center">
            <div className="">
              <div className="">
                <h3 className="font-weight-light text-center mt-5 mb-4">
                  Koulutus
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center bg-2">
                    Hämeen ammattikorkeakoulu, tieto-ja viestintätekniikan
                    insinööri 2018-2023
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Perniön lukio, ylioppilas 2012-2015
                  </li>
                  <li className="list-group-item bg-2"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container bg-2 text-center">
            <div className="">
              <div className="">
                <h3 className="font-weight-light text-center mt-5 mb-4">
                  Varusmiespalvelus
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center bg-2">
                    Kävin varusmiespalveluksen Uudenmaan prikaatissa
                    Dragsvikissä Tammisaaressa.
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Olin armeijassa vuoden eli 347 päivää ja minut koulutettiin
                    viesti-alikersantiksi.
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Varusmiespalvelus oli enimmäkseen ruotsiksi, joten opin
                    samalla myös kieltä.
                  </li>
                  <li className="list-group-item bg-2"></li>
                </ul>
              </div>
            </div>
            <div className="bg-2 mb-4"></div>
          </div>

          <div className="container bg-2 text-center">
            <div className="">
              <div className="">
                <h3 className="font-weight-light text-center mt-5 mb-4">
                  Harrastukset
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center bg-2">
                    Laskettelu
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Sijoittaminen, esim: rahastot ja kryptovaluutat
                  </li>
                  <li className="list-group-item text-center bg-2">
                    Videopelit
                  </li>
                  <li className="list-group-item bg-2"></li>
                </ul>
              </div>
            </div>
            <div className="bg-2 mb-4"></div>
          </div>
        </div>
      </div>


*/
