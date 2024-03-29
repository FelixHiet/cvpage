import React from "react";

// refreshing web page = scroll back to the top.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function Skills() {
  return (
    <div>
      <div>
        {/* START */}
        <div>
          <h3 className="text-center mb-4 SkillsMarginTop125px fontColorDarkBrown">Taidot (FI)</h3>
        </div>

        <div className="container skillSectionPadding">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Visual Studio Code</h4>
                  <p>
                    Ohjelmointityökaluista olen tehnyt eniten hommia Visual Studio Codella ja se on
                    minulle tutuin työkalu. Tämä nettisivukin on tehty VS codella. VS coden lisäksi,
                    olen käyttänyt visual studio 2019, mutta enimmäkseen vaan kouluhommissa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container skillSectionPadding">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Ohjelmointikielet, API:t ja muut</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item SkillCardBackgroundColor">
                      Tuoreimmassa muistissa ovat Javascript, HTML, CSS ja React, jota opiskelen
                      parhaillaan. Olen siis koodaillut eniten projekteja Javascriptillä.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Koulussa muita ohjelmointikieliä, joita olemme käyttäneet ovat: C#, Python ja
                      C++.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      API:t joita olen käyttänyt ovat esim: commercejs, stripe, rapid api ja ombd
                      api.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      CSS lisäksi Bootstrap ja hieman material ui:ta.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">Wordpress</li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Linuxin ja MySQL:n perusteet.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Microsoft word ja Powerpoint.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Photoshopin perusteet.
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
                    <li className="list-group-item SkillCardBackgroundColor">Suomi: äidinkieli</li>
                    <li className="list-group-item SkillCardBackgroundColor">Englanti: sujuva</li>
                    <li className="list-group-item SkillCardBackgroundColor">Ruotsi: hyvä</li>
                    <li className="list-group-item SkillCardBackgroundColor">Latina: perusteet</li>
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
                      Kansanedustajaehdokkaan nettisivujen luominen 12.12.2022 -
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      K-supermarket Perniö, myyjä ja välillä hyllytys 21.08.2015-30.11.2015 ja
                      26.05.2017-04.03.2018
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
                      Hämeen ammattikorkeakoulu, tieto-ja viestintätekniikan insinööri 2018-2023
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
                      Uudenmaan prikaati, Dragsvik.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Päivämäärä: 3.1.2016-16.12.2016
                    </li>

                    <li className="list-group-item SkillCardBackgroundColor">Viestialikersantti</li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Varusmiespalvelus oli enimmäkseen ruotsiksi.
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
                    <li className="list-group-item SkillCardBackgroundColor">Laskettelu.</li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Sijoittaminen, esim: rahastot ja kryptovaluutat.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">Videopelit.</li>
                    <li className="list-group-item SkillCardBackgroundColor"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="SkillsMarginBottom45px"></div>
        </div>
      </div>

      <div>
        {/* START */}
        <div>
          <h3 className="text-center mb-4 SkillsMarginTop125px fontColorDarkBrown">Skills (EN)</h3>
        </div>

        <div className="container skillSectionPadding">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Visual Studio Code</h4>
                  <p>
                    Of the programming tools, I have done the most work with Visual Studio Code and
                    that's it the most familiar tool to me. This website is also made with VS code.
                    In addition to VS Code, I have used visual studio 2019, but mostly only for
                    schoolwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container skillSectionPadding">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Programming languages, APIs and others</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item SkillCardBackgroundColor">
                      In the most recent memory are Javascript, HTML, CSS and React, which I am
                      studying presently. So I have coded most projects with Javascript.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      At school, other programming languages we have used are: C#, Python and C++.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      The APIs I have used are e.g.: commercejs, stripe, rapid api and ombd api.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      In addition to CSS also Bootstrap and material UI
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">Wordpress</li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Linux and MySQL basics
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Microsoft word and Powerpoint.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Basics of Photoshop.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Language skills</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item SkillCardBackgroundColor">
                      Finnish: mothertongue
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">English: fluent</li>
                    <li className="list-group-item SkillCardBackgroundColor">Swedish: good</li>
                    <li className="list-group-item SkillCardBackgroundColor">Latin: basics</li>
                    <li className="list-group-item SkillCardBackgroundColor"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Work experience</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item SkillCardBackgroundColor">
                      Creating a website for a candidate for parliament 12.12.2022 -
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      K-supermarket Perniö, seller and sometimes shelving 21.08.2015-30.11.2015 and
                      26.05.2017-04.03.2018
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Hästö farm, gardening helper 09.06.2014-27.06.2014
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Bulevardin klinikka, office assistant 18.06.2012-29.06.2012
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Education</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item SkillCardBackgroundColor">
                      HAMK Häme University of Applied Sciences, information and communication
                      technology engineer 2018-2023
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Perniön lukio, secondary school graduate 2012-2015
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Military service</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item SkillCardBackgroundColor">
                      Uudenmaan prikaati, Dragsvik.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Date: 3.1.2016-16.12.2016
                    </li>

                    <li className="list-group-item SkillCardBackgroundColor">Viestialikersantti</li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      The conscript service was mostly in Swedish.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 SkillCardBackgroundColor">
                <div className="card-body">
                  <h4 className="card-title">Hobbies</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item SkillCardBackgroundColor">Downhillskiing.</li>
                    <li className="list-group-item SkillCardBackgroundColor">
                      Investment, for example: fund and cryptocurrencies.
                    </li>
                    <li className="list-group-item SkillCardBackgroundColor">Videogames.</li>
                    <li className="list-group-item SkillCardBackgroundColor"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="SkillsMarginBottom45px"></div>
        </div>
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
