import React from 'react';
import Card from './Card';
import './store'
import './List.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
        <Card
        key={card.id}
        title={card.title}
        content={card.content}
        />
      )}
        <button 
          type='button'
          className='List-add-button'
        >
          Add A random Card
        </button>
      </div>
    </section>
  )
} 