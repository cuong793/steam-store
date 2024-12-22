import { IGame } from '@/variables/interface';
import React from 'react';
import Item from './Item';

function GameList() {
  // https://api.lzt.market/{categoryName}/games
  const games: IGame[] = [
    {
      app_id: '578080',
      title: 'PUBG: BATTLEGROUNDS',
      abbr: 'PUBG',
      category_id: 1,
      img: '',
      url: 'pubg',
      ru: 'пабг, пабгом, пубгом'
    },
    {
      app_id: '570',
      title: 'Dota 2',
      abbr: 'Dota 2',
      category_id: 1,
      img: '',
      url: 'dota-2',
      ru: 'дота 2, дотой 2, доту 2'
    },
    {
      app_id: '730',
      title: 'CS2 Prime',
      abbr: 'CS2 Prime',
      category_id: 1,
      img: '',
      url: 'cs2-prime',
      ru: 'ксго прайм, cs 2, cs2, кс2, кс 2, кс го, counter-strike 2, counter strike 2'
    },
    {
      app_id: '433850',
      title: 'Z1 Battle Royale',
      abbr: 'Z1 Battle Royale',
      category_id: 1,
      img: '',
      url: 'z1-battle-royale',
      ru: 'З1 батл рояль, h1z1'
    },
    {
      app_id: '440',
      title: 'Team Fortress 2',
      abbr: 'Team Fortress 2',
      category_id: 1,
      img: '',
      url: 'team-fortress-2',
      ru: 'тим фортресс 2'
    },
    {
      app_id: '271590',
      title: 'GTA V',
      abbr: 'GTA V',
      category_id: 1,
      img: '',
      url: 'gta-v',
      ru: 'Гта 5'
    },
    {
      app_id: '359550',
      title: "Tom Clancy's Rainbow Six Siege",
      abbr: 'Rainbow Six Siege',
      category_id: 1,
      img: '',
      url: 'rainbow-six-siege',
      ru: 'Радуга, Радугу, Радугой'
    },
    {
      app_id: '238960',
      title: 'Path of Exile',
      abbr: 'Path of Exile',
      category_id: 1,
      img: '',
      url: 'path-of-exile',
      ru: 'ПоЕ, Патч оф экзайл'
    },
    {
      app_id: '230410',
      title: 'Warframe',
      abbr: 'Warframe',
      category_id: 1,
      img: '',
      url: 'warframe',
      ru: 'Варфрейм'
    },
    {
      app_id: '4000',
      title: "Garry's Mod",
      abbr: "Garry's Mod",
      category_id: 1,
      img: '',
      url: 'garry-s-mod',
      ru: 'Гаррис мод, Гэррис мод'
    },
    {
      app_id: '346110',
      title: 'ARK: Survival Evolved',
      abbr: 'ARK: Survival Evolved',
      category_id: 1,
      img: '',
      url: 'ark-survival-evolved',
      ru: 'арк сурвайвал еволвед'
    },
    {
      app_id: '252950',
      title: 'Rocket League',
      abbr: 'Rocket League',
      category_id: 1,
      img: '',
      url: 'rocket-league',
      ru: 'Рокет лига, Рокет лигой, рокет лигу'
    }
  ];
  return (
    <div className='flex items-center gap-2 overflow-x-auto max-w-[calc(1076px - 240px)]'>
      {games.map((game) => (
        <Item key={game?.app_id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
