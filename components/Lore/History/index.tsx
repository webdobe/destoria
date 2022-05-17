import s from "./styles";
import {
  FunctionComponent,
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import Faqbox from "./FaqBox";
const Faq: FunctionComponent = function () {
  const containerRef = useRef(null);
  return (
    <section {...s.faq}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div {...s.containerFaq} style={{ maxWidth: "1440px", width: "100%" }}>
          <div {...s.containerFaqBordered}>
            <div {...s.faqContent}>
              <h3 {...s.titles}>
                “The voices chose the wrong island to save.“<br/> – Head Outrider
                Calos Mossargen
              </h3>
              Destoria is an island nation founded a year after The Withering
              and is currently the only known living remnant of civilization on
              the world of Ordos Prime. The Destorian Settlers, Tegrak Tribes,
              and the Laidar are the three main factions that founded the
              nation. The nation’s name is derived from the names of the people
              that founded it. It is led by the Three Patriot Council (TPC) and
              its military force are called the "Gatekeepers". Although it is
              only a hundred years old, Destoria was shaped into a force to be
              reckoned with by the blood and sweat of its people. They are
              currently preoccupied with their most ambitious project yet, a
              large scale operation called "The Leap". <br/><br/>Before the withering,
              Destoria was an island belonging to the Destorian Republic, a
              country which spanned the entire western coast of the continent of
              Narkan. The island’s original inhabitants were the primitive
              Tegrak tribes which the Destorian Republic allowed to stay on the
              island and treated them as a protectorate. The only condition was
              that the Tegrak tribes would allow the republic to build a single
              settlement on the southern tip of the island, the city of
              Kentolica. <br/> <br/>This agreement kept the peace and so the settlers of
              the republic and the tribal natives lived in peace for a long
              time. However, when the day of the withering came, everything
              changed. As the mainland of Narkan was consumed by the withering,
              the frightened masses of the Destorian Republic boarded their
              ships and fled to the relative safety of the island. The Tegrak
              tribes were not happy about this, but they realised the withering
              would reach the island as well and did not want to spend their
              last days embroiled in pointless bloodshed. Both the Destorian
              settlers and the Tegrak tribesmen waited for the withering to
              claim them.<br/> <br/>However, a miracle happened as the death fog, known as
              the withering, approached the island. On the very top of the
              northern mountains, a circle of twelve runic pillars came to life.
              The pillars produced a melodic chanting which covered the entire
              island with an aegis of emerald green light. Due to the melodic
              chanting they produced, the pillars were named "The Voices". <br/><br/> The
              island was spared from the horrors of the withering, and so the
              Destorian and Tegrak tribes were now faced with the prospect of
              living together. At first, it seemed like the Destorian would
              determine all the rules for sharing the island due to their
              technological superiority. However, when the Tegrak tribes began
              to awaken powerful innate magic fuelled by the pillars, they
              gained a lot of bargaining power and were able to negotiate better
              terms of living. The northern part of the island was given to the
              tribes while the south belonged to the Destorian settlers. <br/><br/>For
              twenty years, they lived in relative harmony and did their best to
              keep the flame of civilization burning. One day, a flying ship
              made from an unknown crimson metal crashed through the aegis and
              into the nearby sea. A kind of emergency system kicked in and the
              ship did not sink, but rather remained afloat. The Destorian
              outriders got on their patrol boats and went to investigate. <br/><br/> Here
              they were introduced to the Laidar, an alien race of thin
              humanoids with two eyes and vibrant colors as their most
              distinctive features. Some time passed before they could
              communicate properly, but eventually the tribals and the
              destorians learned from the Laidar that the whole of Ordos Prime
              was covered in this fog save for their island. The Laidar flew too
              close to the fog and so their ship became damaged and they were
              forced to land in the protective field of the island. After weeks
              of negotiation, the Laidar were given a plot of land in the centre
              of the island, but most of them remained on their ship which
              served as a floating city. The Laidar would do their best to try
              and repair their ship, but they knew that even if they succeeded,
              they would not be able to leave the planet due to the withering.<br/>
              <h2 {...s.titleContent}>OPERATION LEAP</h2>
              Another eighty years passed and the three factions struggled to
              coexist, especially the laidar. One day, another miracle occurred.
              The deadly fog of withering began to dissipate and in a few months
              it had completely disappeared. As soon as the fog disappeared, so
              did the protective aegis around the island. To the horror of all
              the tribals, nine of the twelve voices lost their power. Only
              three pillars remained active and produced the melodic chanting
              which had saved them all a hundred years earlier. With the loss of
              the pillars, the tribal’s magic was also affected. The Destorians
              and the Laidar were not affected by this as much, but rather set
              their sights on exploration, or in the case of the Laidar,
              departure. <br/><br/>Each faction now had something to do off the island.
              The Destorians wanted to re-establish civilization on the
              mainland, the Laidar wanted to search for a fuel source for their
              ship and the Tegrak tribes wanted to find a cure for the waning
              power of the voices. <br/><br/>As a result of their mutual need, Operation
              Leap was created and its goal is the exploration and reclamation
              of the old world. The operation is still in the planning stage.
              <h2 {...s.titleContent}>GEOGRAPHY</h2>
              The island is located in the northern hemisphere of Ordos Prime.
              The southern and central parts of the island consist mostly of
              plains and low hills, while the northern part of the island is
              characterized by mountainous terrain.
              <h2 {...s.titleContent}>CLIMATE</h2>
              The climate of the island is temperate with mild summers and cool
              winters. When the lake Okara, which is located in the centre of
              the island, begins to freeze, the inhabitants know that winter has
              come. Due to a heavy rain season, the Destorians settlers were
              able to build a stable agriculture on the fertile plains of the
              south, thus providing all three factions with food.
              <h2 {...s.titleContent}>RELIGION</h2>
              The tribals of the island worship Tegrak, father of creation, and
              they believe that the twelve pillars that saved them were gifts
              from their God. The Destorian settlers are devout worshipers of
              Saint Marzica, a legendary healer who saved Ordos Prime from a
              catastrophic plague hundreds of years ago with what could only be
              described as the Light of Heaven. The Laidar, on the other hand,
              worship an entity known as the Trinity, but they did not share any
              further information on it.
              <h2 {...s.titleContent}>NOTABLE FACTIONS</h2>
              <span {...s.descriptive}>The Destorian Outriders</span> are a military organization of rangers
              that keep the peace in all the southern and central territories of
              the island. They are characterised by their pneumatic weaponry,
              tactical armour and gas masks as well as the long coats and hats
              they wear as part of their uniform. They also prefer to patrol the
              land on their newly created hover bikes. <br/><br/> <span {...s.descriptive}>The Fists of Tegrak</span> are a
              group of combined tribal forces that guard the villages of the
              tribal peoples located in the northern mountainous region. Apart
              from their excellent skills in close combat, they are also masters
              of spiritual magic which they utilize in battle. The shamans are
              the most important members of the Fist of Tegrak as they are able
              to cover an entire unit with spectral armour or large shields to
              protect against missiles. The Fists also use magically enhanced
              animals such as battle bears. <br/><br/><span {...s.descriptive}>The Shimmering Legion</span> is an elite
              fighting order housed on the floating ship which serves as the
              home of the Laidar. They are characterised by their glowing power
              armours (hence the name shimmering) and deadly energy weapons. The
              Iaidar also favour using shields and flamethrowers in combat,
              which is why they can be seen in a testudo battle formation
              whenever they are in combat.
              <h2 {...s.titleContent}>NOTABLE SETTLEMENTS</h2>
              <span {...s.descriptive}>Kentolica</span> is the capital of the Destorian settlers, located on one
              of the largest cliffs on the southern coast of the island. Its
              most notable feature is Saint Marzica’s statue, which holds a
              bright flame of life in its hands that is always burning.<br/><br/><span {...s.descriptive}>Utak Goa</span>
              (Ebon Village) is the capital of the tribes of Tegrak and is
              located on a mountain peak near the magical pillars that guard the
              island. It is a city of vibrant colors because of the huts and
              tents belonging to the various tribes that have made the city
              their home. <br/><br/><span {...s.descriptive}>Ves’ el Ador</span> is the name of the floating alien ship of
              the Laidar. The ship is made from a bright crimson metal and
              resembles a large triangle with a sphere in the middle. However,
              very few non-aidarians know what the ship actually looks like on
              the inside.
              <h2 {...s.titleContent}>CALENDER</h2>
              With the destruction of the old world, the tribals and the
              Destorians began using a new calendar, one which starts after the
              calamity. The current year for them is 100 P. W. (Post Withering).<br/>
              The Laidar use their own unique calendar which they do not share
              with the other factions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;

//garagem 412
