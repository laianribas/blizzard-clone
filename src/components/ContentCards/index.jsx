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
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/bltf5ec57e2c9547ed2/61a50ea7878b145513ea64c3/WoWClassic.jpg?auto=webp"
          title="World of Warcraft Classic"
          description="MMORPG"
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt0e720bb61b0f19a5/61e85470e474e449e9aeeca4/darkergray-overwatch.jpg?auto=webp"
          title="Overwatch"
          description="AÇÃO EM EQUIPE"
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
          battle
          apple
          playstore
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blte81fae3d9d76ebe8/61a50ff62e73ff101cdc1c8f/starcraft-remastered.jpg?auto=webp"
          title="StarCraft: Remastered"
          description="ESTRATÉGIA EM TEMPO REAL"
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt3873027b9450f357/61a50f033c4e21100a80f1fc/starcraft2.jpg?auto=webp"
          title="StarCraft II"
          description="ESTRATÉGIA EM TEMPO REAL"
          battle
        />
        <GameCard
          link="https://diablo2.blizzard.com/pt-br/"
          image="https://images.blz-contentstack.com/v3/assets/blta8f9a8e092360c6c/blt1315e30958e75426/61a50f460df21d7804454d88/diablo3.jpg?auto=webp"
          title="Diablo III"
          description="RPG DE AÇÃO"
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
