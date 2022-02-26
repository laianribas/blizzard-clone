import React from 'react'
import GameCard from '../GameCard'

const ContentCards = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt71e1f3ec632b3fe3/61a5156d43af6d102dc88ace/d2.jpg?auto=webp"
          title="Diablo II: Resurrected"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/bltf82c19e7714f988c/61a50ce53c4e21100a80f1f6/d2-logo.png?auto=webp"
          description="RPG DE AÇÃO"
          battle
          xbox
          playstation
          nintendo
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt034b4b560b7bbee5/61952a0c3829134cfb2cc41b/wow.jpg?auto=webp"
          title="World of Warcraft"
          description="MMORPG"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt83481be830451a94/61a6a97b0df21d7804454dbe/wow-logo.png?auto=webp"
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/bltf5ec57e2c9547ed2/61a50ea7878b145513ea64c3/WoWClassic.jpg?auto=webp"
          title="World of Warcraft Classic"
          description="MMORPG"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt6f4fafd8dccab48c/61a50eb33c4e21100a80f1f8/WoWClassic-logo.png?auto=webp"
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt0e720bb61b0f19a5/61e85470e474e449e9aeeca4/darkergray-overwatch.jpg?auto=webp"
          title="Overwatch"
          description="AÇÃO EM EQUIPE"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt87d6d118d9558c22/61e75617819be248ba631579/whiteoverwatch-logo-.png?auto=webp"
          battle
          xbox
          playstation
          nintendo
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blte99b6e82225fcae2/61b2559926aee30d7ce81123/hearthstone.jpg?auto=webp"
          title="Hearthstone"
          description="JOGO DE CARDS ESTRATÉGICO"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blte71bd76dd11584bf/61b255afccc06b0d66f4d3b1/hearthstone-logo.png?auto=webp"
          battle
          apple
          playstore
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blte81fae3d9d76ebe8/61a50ff62e73ff101cdc1c8f/starcraft-remastered.jpg?auto=webp"
          title="StarCraft: Remastered"
          description="ESTRATÉGIA EM TEMPO REAL"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt09182b9d436fa757/61a510005cc2951022f367b0/starcraft-remastered-logo.png?auto=webp"
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt3873027b9450f357/61a50f033c4e21100a80f1fc/starcraft2.jpg?auto=webp"
          title="StarCraft II"
          description="ESTRATÉGIA EM TEMPO REAL"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/bltcc2433ae5cec2aa4/61a50f08628d9155190ceaee/starcraft2-logo.png?auto=webp"
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt1315e30958e75426/61a50f460df21d7804454d88/diablo3.jpg?auto=webp"
          title="Diablo III"
          description="RPG DE AÇÃO"
          logo="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blta812d3f5cffc4d45/61a50f493d781a1034046a41/diablo3-logo.png?auto=webp"
          battle
          xbox
          playstation
          nintendo
        />
      </div>
    </div>
  )
}

export default ContentCards
