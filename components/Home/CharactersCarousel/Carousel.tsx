import React, { Component } from "react";
import Slider from "react-slick";
import s from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class SimpleSlider extends Component {

  render() {
    return (
      <Carousel
        autoPlay={true}
        showIndicators={false}
        infiniteLoop={true}
        swipeable={false}
      >
        <div className="flex flex-col items-center">
          <div {...s.charactersContent}>
            <div {...s.charactersImageContent} style={{ minWidth: "360px" }}>
              <Image
                {...s.characterImage}
                src="/characters-cowboy.png"
                alt="Cowboy"
                width={440}
                height={440}
              />
            </div>
            <div {...s.charactersTextContent}>
              <h5 {...s.charactersTextContentTitle}>Faction</h5>
              <h4 {...s.charactersTextContentSubtitle}>Outrider</h4>
              <p {...s.charactersTextContentText}>
                The Destorian Outriders are an organization of rangers that keep
                the peace in all the southern and central territories of Ordos
                Prime. They are characterized by their pneumatic weaponry,
                tactical armor and gas masks. Alongside the long coats and hats
                they wear as part of their uniform. They are often seen
                patrolling Ordos Prime on their newly developed hover bikes.
              </p>
              <div {...s.characterImage}>
                {/* <Image
                  src="/characters-outrider-status.svg"
                  alt="Burger Menu"
                  width={440}
                  height={71}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  w-full">
          <div {...s.charactersContentBlurred}>
            <div
              {...s.charactersImageContentBlurred}
              style={{ minWidth: "360px" }}
            >
              <Image
                {...s.characterImage}
                src="/characters-newone.png"
                alt="Burger Menu"
                width={440}
                height={440}
                style={{ position: "absolute", minWidth: "360px" }}
              />
            </div>
            <div {...s.charactersTextContent}>
              <h5 {...s.charactersTextContentTitle}>Faction</h5>
              <h4 {...s.charactersTextContentSubtitle}>Tegrak </h4>
              <p {...s.charactersTextContentTextBlurred}>
                The Fists of Tegrak are a group of combined tribal forces that guard the villages of
                the tribal people located in the northern mountainous region of Ordos Prime.
                Apart from their excellent skills in close combat, they are also masters of
                spiritual magic which they utilize in battle. The shamans are the most important
                members of the Fist of Tegrak as they are able to cover an entire unit with
                spectral armor or large shields to protect against missiles. The Fists of Tegrak
                also use magically enhanced animals such as battle bears.
              </p>
              <div>
                <div {...s.characterImageBlurred}>
                  {/* <Image
                    src="/characters-outrider-status.svg"
                    alt="Burger Menu"
                    width={440}
                    height={71}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  w-full">
          <div {...s.charactersContentBlurred}>
            <div
              {...s.charactersImageContentBlurred}
              style={{ minWidth: "360px" }}
            >
              <Image
                {...s.characterImage}
                src="/characters-newtwo.png"
                alt="Burger Menu"
                width={440}
                height={440}
                style={{ position: "absolute", minWidth: "360px" }}
              />
            </div>
            <div {...s.charactersTextContent}>
              <h5 {...s.charactersTextContentTitle}>Faction</h5>
              <h4 {...s.charactersTextContentSubtitle}>Laidar</h4>
              <p {...s.charactersTextContentTextBlurred}>
                The Shimmering Legion is an elite fighting order housed on the floating ship
                which serves as the home of the Laidar. They are characterized by their
                glowing power armor (hence the name shimmering) and deadly energy weapons.
                The Iaidar also favor using shields and flamethrowers in combat, which
                is why they can be seen in a testudo battle formation whenever they are in combat.
              </p>
              <div>
                <div {...s.characterImageBlurred}>
                  {/* <Image
                    src="/characters-outrider-status.svg"
                    alt="Burger Menu"
                    width={440}
                    height={71}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
