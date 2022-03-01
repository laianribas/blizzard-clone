import React from 'react'
import GameCard from '../GameCard'
import data from '../../cardData'

const ContentCards = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
        {data.map((card) => {
          return (
            <GameCard
              link={card.link}
              image={card.image}
              title={card.title}
              description={card.description}
              logo={card.logo}
              battle={card.battle}
              xbox={card.xbox}
              playstation={card.playstation}
              nintendo={card.nintendo}
              apple={card.apple}
              playstore={card.playstore}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ContentCards
