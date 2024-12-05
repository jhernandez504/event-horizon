import React, { FC } from 'react';

interface CardType {
  card_id(card_id: any): unknown;
  duration: number;
  id: number;
  name: string;
  damage: number;
  armor: number;
  description: string;
}

interface CardProps {
  card: CardType;
  setCardToPlay: any
  setCardId: any
  playerAction: any
  setActiveLoading: any

  playerHand: any
  setPlayerHand: any
  user: any
}

const Card: FC<CardProps> = ({ card, setCardToPlay, playerAction, setActiveLoading, setCardId, playerHand, setPlayerHand, user }) => {

  const cardSelect = (card: CardType) =>{

    console.log("CARD CLICKED: ", card)
    
    setCardToPlay([card.name, card.damage, card.armor, card.description, card.id, card.duration])

    setCardId(card.card_id)

    setActiveLoading(true)

    // console.log("PLAYER HAND", playerHand)

    // setPlayerHand(playerHand.filter((handCard: { card_id: number; })=> handCard.card_id !== card.id))
   

  }

  return (
    <>

    {playerAction === 'LOAD' ?

    <div
    onClick={()=>cardSelect(card)}

    className="bg-white border-8 border-yellow-300 rounded-lg shadow-md p-4 m-2 w-40 h-60 flex flex-col items-center justify-between hover:scale-110"
    >

      <h2 className="text-lg font-bold mb-2 text-center">{card.name}</h2>

      <div className="text-center">
        <div>`IMAGE`</div>
        <p className="text-gray-700 mb-1">
          <strong>Attack:</strong> {card.damage}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Defense:</strong> {card.armor}
        </p>
      </div>
      <p className="text-gray-600 text-sm text-center">{card.description}</p>
    </div>

    :

    <div
    className="cursor-not-allowed bg-white border rounded-lg shadow-md p-4 m-2 w-40 h-60 flex flex-col items-center justify-between">

      <h2 className="text-lg font-bold mb-2 text-center">{card.name}</h2>

      <div className="text-center">
        <div>`IMAGE`</div>
        <p className="text-gray-700 mb-1">
          <strong>Attack:</strong> {card.damage}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Defense:</strong> {card.armor}
        </p>
      </div>
      <p className="text-gray-600 text-sm text-center">{card.description}</p>
    </div>
    }

    </>

  );
}
export default Card;
