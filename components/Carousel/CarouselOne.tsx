import {v4 as uuidv4} from "uuid";
import s from './styles'

const slides = [
    {
      key: uuidv4(),
      content: (
        <div className="cards-carousel cards-carousel-left flex flex-col pt-10 md:pt-20 items-center max-w-xs h-full">
        <div className="flex flex-col items-center h-full">
          <h4 {...s.cardTitle}>
            MMORPG
          </h4>
          <p  {...s.cardContent}>
            Lose yourself and the reality of time in Destoria as you focus on the combat and real
            P2E possibilities. Explore our biomes and a multitude of opportunities as you engage
            with enemies, NPC's and other players within the environments. But never forget that
            every action within Destoria will affect your path forward... PLAY WISELY
          </p>
          <h4 {...s.cardBottomSpecial} style={{color: "#F0F0F0", filter: 'blur(1px)'}}>
            coming soon...
          </h4>
        </div>
      </div>
      )
    },
    {
      key: uuidv4(),
      content: (
        <div className="cards-carousel cards-carousel-middle flex flex-col pt-10 md:pt-20 items-center max-w-xs h-full">
        <div className="flex flex-col items-center h-full">
          <h4 {...s.cardTitle}>
            Metaverse
          </h4>
          <p  {...s.cardContent}  style={{marginBottom: '20px'}}>
            In conjunction with our dev team you will be able to set up an island with passive income
            opportunities, a real life or virtual business or even host your own P2E experiences. Be a
            Destorian mechanic, a landlord, or sell your services or products from your virtual business
            within Destorias Metaverse. Utilise your island by adding your NFT's and developing P2E
            games of your own that can enhance your project's utilities.
          </p>
          <h4 {...s.cardBottom} style={{color: "#F0F0F0", filter: 'blur(1px)'}}>
            coming soon...
          </h4>
        </div>
      </div>
      )
    },
    {
      key: uuidv4(),
      content: (
        <div className="cards-carousel cards-carousel-right flex flex-col pt-10 md:pt-20 items-center max-w-xs">
        <div className="flex flex-col items-center h-full">
          <h4 {...s.cardTitle}>
            Battle Royale
          </h4>
          <p  {...s.cardContent}>
            Welcome and get ready for the future of Battle Royale. The ultimate BR within a P2E environment.
            Create your account on our site and you will be able to trade your earned XP or Minerals for our
            $STORI token that is exchangeable on the Eth blockchain. Prepare yourself to play to earn like
            never before on your console.
          </p>
          <h4 {...s.cardBottom} style={{color: "#F0F0F0", filter: 'blur(1px)'}}>
            coming soon...
          </h4>
        </div>
      </div>
      )
    },
]
	
export default slides