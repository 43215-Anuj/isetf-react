import React from "react";
import Footer from "../../components/Footer/Footer";
import BannerHeading from "../../components/BannerHeading/Banner";
import Gallery from "react-grid-gallery";
import { Container } from "reactstrap";

import img1 from "../../assets/img/events/1.jpg";
import img2 from "../../assets/img/events/2.jpg";
import img3 from "../../assets/img/events/3.jpg";
import img4 from "../../assets/img/events/4.jpg";
import img5 from "../../assets/img/events/5.jpg";
import img6 from "../../assets/img/events/6.jpg";
import img7 from "../../assets/img/events/7.jpg";
import img8 from "../../assets/img/events/8.jpg";
import img9 from "../../assets/img/events/9.jpg";
import img10 from "../../assets/img/events/10.jpg";
import img11 from "../../assets/img/events/11.jpg";
import img12 from "../../assets/img/events/12.jpg";
import img13 from "../../assets/img/events/13.jpg";
import img14 from "../../assets/img/events/14.jpg";
import img15 from "../../assets/img/events/15.jpg";
import img16 from "../../assets/img/events/16.jpg";
import img17 from "../../assets/img/events/17.jpg";
import img18 from "../../assets/img/events/18.jpg";
import img19 from "../../assets/img/events/19.jpg";
import img20 from "../../assets/img/events/20.jpg";
import img21 from "../../assets/img/events/21.jpg";
import img22 from "../../assets/img/events/22.jpg";
import img23 from "../../assets/img/events/23.jpg";
import img24 from "../../assets/img/events/24.jpg";
import img25 from "../../assets/img/events/25.jpg";
import img26 from "../../assets/img/events/26.jpg";
import img27 from "../../assets/img/events/27.jpg";
import img28 from "../../assets/img/events/28.jpg";
import img29 from "../../assets/img/events/29.jpg";
import img30 from "../../assets/img/events/30.jpg";
import img31 from "../../assets/img/events/31.jpg";
import img32 from "../../assets/img/events/32.jpg";
import img33 from "../../assets/img/events/33.jpg";
import img34 from "../../assets/img/events/34.jpg";
import img35 from "../../assets/img/events/35.jpg";
import img36 from "../../assets/img/events/36.jpg";

const IMAGES = [
  {
    src: img1,
    thumbnail: img1,
    thumbnailWidth: 1000,
    thumbnailHeight: 750,
    caption:
      "Awareness Programme For Farmers: In The Collaboration With The UP-CST Focussing On The New Technology And Information About Machines Used For Paddy Cutting In Efficient Way.",
  },
  {
    src: img2,
    thumbnail: img2,
    thumbnailWidth: 263,
    thumbnailHeight: 250,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img3,
    thumbnail: img3,
    thumbnailWidth: 263,
    thumbnailHeight: 250,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img4,
    thumbnail: img4,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img5,
    thumbnail: img5,
    thumbnailWidth: 263,
    thumbnailHeight: 350,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img6,
    thumbnail: img6,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img7,
    thumbnail: img7,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img8,
    thumbnail: img8,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Health Camp: A Medical Camp With Free Medicine Distribution Was Organized By ISET Foundation. More Than 400 People Visited And Benefited From This Event.",
  },
  {
    src: img9,
    thumbnail: img9,
    thumbnailWidth: 1024,
    thumbnailHeight: 575,
    caption:
      "Health Camp: A Medical Camp With Free Medicine Distribution Was Organized By ISET Foundation. More Than 400 People Visited And Benefited From This Event.",
  },
  {
    src: img10,
    thumbnail: img10,
    thumbnailWidth: 1280,
    thumbnailHeight: 640,
    caption:
      "Experimental Workshop On Basic Scientific Facts At Primary School, Pune: Rajnikant Mendhe Showed Some Reaction Like A Reaction Of Ammonium Thiocyanate,& Ferric Chloride With Lemon Producing Red Blood Colored Drops.",
  },
  {
    src: img11,
    thumbnail: img11,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Seminar At Primary School. Lanka, BHU, Varanasi: ISET Volunteers Interacted With Students And Discussed Surrounding Phenomenon Involving Science In Our Daily Life And Also Natural Phenomenon Happening Surrounding Us With Scientific Facts.",
  },
  {
    src: img12,
    thumbnail: img12,
    thumbnailWidth: 1152,
    thumbnailHeight: 862,
    caption:
      "Covid-19 Awareness Programmes.",
  },
  {
    src: img13,
    thumbnail: img13,
    thumbnailWidth: 1600,
    thumbnailHeight: 1200,
    caption:
      "Scientific Seminar At Primary School, Trivediganj, Barabnaki: Mr Abhay Pratap Singh And Mr Kshitij Tiwari Interacted And Make Them Aware About Some Scientific Facts About The Science, Science Concepts Along With The Basic Simple And Brief Explanation.",
  },
  {
    src: img14,
    thumbnail: img14,
    thumbnailWidth: 1642,
    thumbnailHeight: 1956,
    caption:
      "Awareness Programme For Farmers: In The Collaboration With The UP-CST Focussing On The New Technology And Information About Machines Used For Paddy Cutting In Efficient Way.",
  },
  {
    src: img15,
    thumbnail: img15,
    thumbnailWidth: 2039,
    thumbnailHeight: 1295,
    caption:
      "Awareness Programme For Farmers: In The Collaboration With The UP-CST Focussing On The New Technology And Information About Machines Used For Paddy Cutting In Efficient Way.",
  },
  {
    src: img16,
    thumbnail: img16,
    thumbnailWidth: 2040,
    thumbnailHeight: 1530,
    caption:
      "Awareness Programme For Farmers: In The Collaboration With The UP-CST Focussing On The New Technology And Information About Machines Used For Paddy Cutting In Efficient Way.",
  },
  {
    src: img17,
    thumbnail: img17,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Experimental Workshop On Basic Scientific Facts At Primary School, Pune: Rajnikant Mendhe Showed Some Reaction Like A Reaction Of Ammonium Thiocyanate,& Ferric Chloride With Lemon Producing Red Blood Colored Drops.",
  },
  {
    src: img18,
    thumbnail: img18,
    thumbnailWidth: 1280,
    thumbnailHeight: 960,
    caption:
      "Experimental Workshop On Basic Scientific Facts At Primary School, Pune: Rajnikant Mendhe Showed Some Reaction Like A Reaction Of Ammonium Thiocyanate,& Ferric Chloride With Lemon Producing Red Blood Colored Drops.",
  },
  {
    src: img19,
    thumbnail: img19,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Experimental Workshop On Basic Scientific Facts At Primary School, Pune: Rajnikant Mendhe Showed Some Reaction Like A Reaction Of Ammonium Thiocyanate,& Ferric Chloride With Lemon Producing Red Blood Colored Drops.",
  },
  {
    src: img20,
    thumbnail: img20,
    thumbnailWidth: 1000,
    thumbnailHeight: 750,
    caption:
      "Free Eye Checkup Camp At Village Kakri, Barabnaki: ISET Foundation Has Organized A Free Eye Checkup Camp And Free Medicine Distribution At JBS Academy, Kakri, Trivediganj, Barabanki.",
  },
  {
    src: img21,
    thumbnail: img21,
    thumbnailWidth: 263,
    thumbnailHeight: 350,
    caption:
      "Scientific Seminar At Primary School, Trivediganj, Barabnaki: Mr Abhay Pratap Singh And Mr Kshitij Tiwari Interacted And Make Them Aware About Some Scientific Facts About The Science, Science Concepts Along With The Basic Simple And Brief Explanation.",
  },
  {
    src: img22,
    thumbnail: img22,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Seminar At Primary School, Trivediganj, Barabnaki: Mr Abhay Pratap Singh And Mr Kshitij Tiwari Interacted And Make Them Aware About Some Scientific Facts About The Science, Science Concepts Along With The Basic Simple And Brief Explanation.",
  },
  {
    src: img23,
    thumbnail: img23,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Seminar At Primary School, Trivediganj, Barabnaki: Mr Abhay Pratap Singh And Mr Kshitij Tiwari Interacted And Make Them Aware About Some Scientific Facts About The Science, Science Concepts Along With The Basic Simple And Brief Explanation.",
  },
  {
    src: img24,
    thumbnail: img24,
    thumbnailWidth: 1000,
    thumbnailHeight: 750,
    caption:
      "Awareness Programme For Farmers: In The Collaboration With The UP-CST Focussing On The New Technology And Information About Machines Used For Paddy Cutting In Efficient Way.",
  },
  {
    src: img25,
    thumbnail: img25,
    thumbnailWidth: 263,
    thumbnailHeight: 350,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img26,
    thumbnail: img26,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Health Camp: A Medical Camp With Free Medicine Distribution Was Organized By ISET Foundation. More Than 400 People Visited And Benefited From This Event.",
  },
  {
    src: img27,
    thumbnail: img27,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Health Camp: A Medical Camp With Free Medicine Distribution Was Organized By ISET Foundation. More Than 400 People Visited And Benefited From This Event.",
  },
  {
    src: img28,
    thumbnail: img28,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Health Camp: A Medical Camp With Free Medicine Distribution Was Organized By ISET Foundation. More Than 400 People Visited And Benefited From This Event.",
  },
  {
    src: img29,
    thumbnail: img29,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Health Camp: A Medical Camp With Free Medicine Distribution Was Organized By ISET Foundation. More Than 400 People Visited And Benefited From This Event.",
  },
  {
    src: img30,
    thumbnail: img30,
    thumbnailWidth: 350,
    thumbnailHeight: 233,
    caption:
      "Health Camp: A Medical Camp With Free Medicine Distribution Was Organized By ISET Foundation. More Than 400 People Visited And Benefited From This Event.",
  },
  {
    src: img31,
    thumbnail: img31,
    thumbnailWidth: 233,
    thumbnailHeight: 350,
    caption:
      "Awareness Programme For Farmers: In The Collaboration With The UP-CST Focussing On The New Technology And Information About Machines Used For Paddy Cutting In Efficient Way.",
  },
  {
    src: img32,
    thumbnail: img32,
    thumbnailWidth: 1000,
    thumbnailHeight: 750,
    caption:
      "Scientific Session At Inter College, Balia, UP: The Main Aim Of The Event Was To Spread Awareness About Science Education And Technology In Rural Part Of India. Approximately 250 Students From Class 5-12th Have Actively Participated With Full Enthusiasm.",
  },
  {
    src: img33,
    thumbnail: img33,
    thumbnailWidth: 350,
    thumbnailHeight: 192,
    caption:
      "Awareness Programme For Farmers: In The Collaboration With The UP-CST Focussing On The New Technology And Information About Machines Used For Paddy Cutting In Efficient Way.",
  },
  {
    src: img34,
    thumbnail: img34,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Seminar At Primary School, Trivediganj, Barabnaki: Mr Abhay Pratap Singh And Mr Kshitij Tiwari Interacted And Make Them Aware About Some Scientific Facts About The Science, Science Concepts Along With The Basic Simple And Brief Explanation.",
  },
  {
    src: img35,
    thumbnail: img35,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Seminar At Primary School, Trivediganj, Barabnaki: Mr Abhay Pratap Singh And Mr Kshitij Tiwari Interacted And Make Them Aware About Some Scientific Facts About The Science, Science Concepts Along With The Basic Simple And Brief Explanation.",
  },
  {
    src: img36,
    thumbnail: img36,
    thumbnailWidth: 350,
    thumbnailHeight: 263,
    caption:
      "Scientific Seminar At Primary School, Trivediganj, Barabnaki: Mr Abhay Pratap Singh And Mr Kshitij Tiwari Interacted And Make Them Aware About Some Scientific Facts About The Science, Science Concepts Along With The Basic Simple And Brief Explanation.",
  }
];

const Events = () => {
  return (
    <div>
      <BannerHeading title="Events" />
      <Container style={{ paddingTop: "2rem", height: 1750 }}>
        <Gallery
          rowHeight={200}
          images={IMAGES}
          maxRows={8}
          enableImageSelection={false}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Events;
