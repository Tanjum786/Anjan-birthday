import React from "react";
import "./bithday.css";
let wishes = [
  {
    id: 1,
    name: "Deepak",
    wish:
      "Happy Bday Anjana… Have a great year ahead full of learning, achievements, and fun ",
  },
  {
    id: 2,
    wish:
      "Hi Anjana, Happy birthday to you. May this year brings all the happiness you deserve. May all your functions return true and all your building blocks will have awesome CSS included 😅.",
    name: "DP",
  },
  {
    id: 3,
    wish: "happy birthday!",
    name: "Harpal",
  },
  {
    id: 4,
    wish:
      "Wish you a wonderful birthday and may you continue to trouble Mayank as much you do, if not more!",
    name: "AV",
  },
  {
    id: 5,
    wish:
      "Happy birthday, Anjana! Hope you have a great year full of happiness, success and everything that you want.❣️",
    name: "Anoushka",
  },
  {
    id: 7,
    wish:
      "May your birthday brings a lot of smile to your face, and many blessings to your whole life and hope you’ll show the best growth here",
    name: "Kamal",
  },
  {
    id: 7,
    wish:"Happiest Birthday Anjana! Always be cheerful and wish you lots of progress ahead",
    name: "Shashank ",
  },

  {
    id: 8,
    name: "Suma",
    wish:
      "Keep your zest for life alive and burning! And spread the radiance! Happy birthday, Anjana!",
  },
  {
    id: 9,
    name: "Natasha",
    wish:
      "Happy birthday anjana 🎉💜. Enjoy this day n everyday to the fullest 💃🏻 ",
  },
  {
    id: 10,
    name: "Chirag",
    wish:
      "Happy birthday! I hope all your birthday wishes and dreams come true.",
  },
  {
    id: 11,
    name: "Purnima",
    wish:"Wish you a Very happy Birthday dear Anjana.Tumare aane wale sabhi saal tumare jivan me bhot sari khushiyan or safalta le kar aaye, Tum kewal hasne muskurane me hi saath nhi deti balki apne dosto aage badhne me bhi bhot help krti hu ❣️Once again wish you a very happy birthday 🥳🥳🥳🥳dear Mayank ki sister 😅😅"
  },
  {
    id: 12,
    name: "Tanjum",
    wish:"te deseo un feliz cumpleanos😊 Anjana!Tumhara Nature mujhe bahut Achcha lagat h har ek sath itane pyar aur apnepan se tum baat karti  ho hamesha aisi hi rehana .. aur kushiyan pyar batate rehana.Have a wonderful and successful  year ahead ,God Bless with everything you wish💞💞once again Happy Birthday"
  },
  {
    id: 12,
    name: "Manoj",
    wish:"Happy Birthday Meri Pyari Badi Behan💞 har kadam pe mile khushiya dee bahaar khoob tarakki karo aur tennu mile sariya da pyaar.Sending you smiles for every moment of your special day…Have a wonderful time  Have a wonderful Birthday🥳🥳"
    
  },
];
export const Birthdaywishes = () => {
  return (
    <div>
      <div class="bday-cards-container">
        {wishes.map((wis) => {
          return (
            <>
              <div class="card">
                <div class="back"></div>
                <div class="front">
                  <div class="imgset">
                    <img
                      width="100%"
                      src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    />
                  </div>
                </div>
                <div class="text-container">
                  <p id="head">Happy Birthday Anjana!</p>
                  <p>{wis.wish}</p>
                  <p>{wis.name}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
