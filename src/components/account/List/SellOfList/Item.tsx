/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import { Dot, Star, ThumbsDown, ThumbsUp } from 'lucide-react';
import Chip from '@/components/common/Chip';

interface IProps {
  account: any;
}
function Item({ user }: IProps) {
  const item = {
    item_id: 144543630,
    item_state: 'active',
    category_id: 1,
    published_date: 1731617027,
    title:
      'CS2 Prime + 6 Medals | Dota 2 386 hrs | 602 Матчей | 113 items+arcana pudge | last played on 18 Aug',
    description: '',
    price: 1990,
    update_stat_date: 0,
    refreshed_date: 1734744903,
    edit_date: 1734744903,
    view_count: 81,
    is_sticky: 1,
    item_origin: 'stealer',
    extended_guarantee: 0,
    nsb: 1,
    allow_ask_discount: 1,
    title_en:
      'CS2 Prime + 6 Medals | Dota 2 386 hrs | 602 Matches | 113 items+arcana pudge | last played on 18 Aug',
    description_en: '',
    email_type: '',
    email_provider: 'outlook',
    item_domain: 'hotmail.com',
    resale_item_origin: '',
    steam_item_id: 144543630,
    steam_country: 'India',
    steam_register_date: 1479859200,
    steam_last_activity: 1723939200,
    steam_full_games: {
      list: {
        '570': {
          appid: 570,
          playtime_forever: 386.25,
          internal_game_id: 2,
          abbr: 'Dota 2',
          title: 'Dota 2',
          parentGameId: 570,
          img: 'https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg'
        },
        '730': {
          appid: 730,
          playtime_forever: 579.43,
          internal_game_id: 3,
          abbr: 'CS2 Prime',
          title: 'CS2 Prime',
          parentGameId: 730,
          img: 'https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg'
        }
      },
      total: 8
    },
    steam_community_ban: 0,
    steam_bans: '',
    steam_cs2_profile_rank: 7,
    steam_balance: '₹ 0',
    steam_cs2_rank_id: 0,
    steam_is_limited: 1,
    steam_level: 0,
    steam_friend_count: 62,
    steam_cs2_last_activity: 1700380671,
    steam_dota2_solo_mmr: 1155,
    steam_cs2_ban_date: 0,
    steam_converted_balance: 0,
    steam_cards_count: 9,
    steam_cards_games: 2,
    steam_pubg_inv_value: 0,
    steam_cs2_inv_value: 0,
    steam_dota2_inv_value: 0,
    steam_tf2_inv_value: 0,
    steam_rust_inv_value: 0,
    steam_cs2_wingman_rank_id: 0,
    steam_game_count: 10,
    steam_steam_inv_value: 0,
    steam_inv_value: 0,
    steam_cs2_win_count: 0,
    steam_dota2_game_count: 602,
    steam_dota2_lose_count: 298,
    steam_dota2_win_count: 304,
    steam_hours_played_recently: '0.00',
    steam_has_faceit: null,
    steam_faceit_cs2_level: 0,
    steam_faceit_csgo_level: null,
    steam_points: 0,
    steam_last_transaction_date: 0,
    steam_relevant_game_count: 2,
    steam_gift_count: 0,
    steam_limit_spent: '$0.00 / $5.00 USD',
    steam_dota2_behavior: 10226,
    steam_mfa: 1,
    steam_market: 0,
    steam_market_restrictions: 16808,
    steam_market_ban_end_date: 1734209025,
    steam_unturned_inv_value: 0,
    steam_cs2_last_launched: 1700378225,
    steam_kf2_inv_value: 0,
    steam_dst_inv_value: 0,
    steam_cs2_premier_elo: 0,
    steam_has_activated_keys: 0,
    steam_cs2_ban_type: 0,
    steam_rust_kill_player: 0,
    steam_rust_deaths: 0,
    steam_total_gifts_rub: 0,
    steam_total_refunds_rub: 0,
    steam_total_ingame_rub: 0,
    steam_total_games_rub: 0,
    steam_total_purchased_rub: 0,
    steam_dota2_last_match_date: 1714495320,
    feedback_data: '{"1":{"positive":860,"negative":35}}',
    isIgnored: false,
    priceWithSellerFee: 1930.3,
    guarantee: {
      duration: 86400,
      class: 'simpleGuarantee',
      durationPhrase: '24 часа',
      endDate: null,
      active: null,
      cancelled: null,
      remainingTime: null
    },
    canViewLoginData: false,
    canUpdateItemStats: false,
    canReportItem: false,
    canViewEmailLoginData: false,
    copyFormatData: {
      title_link:
        'https://lzt.market/144543630/ - CS2 Prime + 6 Medals | Dota 2 386 hrs | 602 Матчей | 113 items+arcana pudge | last played on 18 Aug'
    },
    showGetEmailCodeButton: false,
    canOpenItem: false,
    canCloseItem: false,
    canEditItem: false,
    canDeleteItem: false,
    canStickItem: false,
    canUnstickItem: false,
    bumpSettings: {
      canBumpItem: false,
      canBumpItemGlobally: false,
      shortErrorPhrase: null,
      errorPhrase: null
    },
    isPersonalAccount: false,
    canBumpItem: false,
    canBuyItem: true,
    rub_price: 1990,
    price_currency: 'rub',
    priceWithSellerFeeLabel: '1930,30 ₽',
    canValidateAccount: false,
    canResellItemAfterPurchase: true,
    steamData: {
      steam_ban_type_id: []
    },
    removed_games: {
      '386360': {
        appid: 386360,
        playtime_forever: 0
      },
      '444090': {
        appid: 444090,
        playtime_forever: 0.03
      }
    },
    steamRelevantGameCount: 2,
    isSmallExf: false,
    account_last_activity: 1723939200,
    hasCs2: true,
    hasDota2: true,
    hasPubg: false,
    hasTf2: false,
    hasRust: false,
    steam_cs2_ban_date_active: false,
    dota2CalibrationWarning: false,
    displayConvertedBalance: true,
    inventoryValue: {
      '570': {
        title: 'Dota 2',
        value: 0,
        column: 'steam_dota2_inv_value'
      },
      '730': {
        title: 'CS2',
        value: 0,
        column: 'steam_cs2_inv_value'
      }
    },
    steamCs2Medals: [
      {
        title: 'Global Offensive Badge',
        medal_id: 234,
        image_url:
          '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fROuk2fDQQFp7a1FU4-rxLVc1h_LOcGQQvovux9fbwKKsMumAxz0CvMYk2b2To9Tz3gD6ux07ellOukQ'
      },
      {
        title: 'Медаль за службу в 2023',
        medal_id: 194,
        image_url:
          '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fVOG_wcbQVmJ5IABWuoX3e1Uz7P_efWwM7YTjltSIk_GlNuOFkDJS6cYn2LrA842iiw3l_EdlMTjyd4KUdgFvN0aQpAY8KmuErw'
      },
      {
        title: 'Монета за 5 лет службы',
        medal_id: 135,
        image_url:
          '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fEv2o1t3QXFR6a1xUsLzyLV8zhvGeKTgXvN-0kobYwfGiZuuBxjMA6cEi2bvHpYqkjlD6ux07kojlYcY'
      },
      {
        title: 'Медаль за службу в 2021',
        medal_id: 131,
        image_url:
          '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fVOG_wcbQVmJ5IABWuoX3e1Ux7P_efWwMuozvkdOJxafyNuLUlDMFupEl3rvH9tWj0FXnqEJuam6gIoOUIAc6NEaQpAZnUMgZRQ'
      },
      {
        title: 'Медаль за верность',
        medal_id: 124,
        image_url:
          '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fV_ak2srsUVxwIgEZtO6nflNmgfbNc20XvY20ldWIwfKmY7nTwm5X6pQi0-2Xp4mhjAfhql0sPT450jjYFg'
      },
      {
        title: 'Медаль за службу в 2018',
        medal_id: 128,
        image_url:
          '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fVOG_wcbQVmJ5IABWuoX3e1Y47P_efWwMuIXiktXfw_OiNe6Bzj1Xv5x3j76Z9Nui3lbj_xA5Ymmgd4-cdwY2MEaQpAZgQwKjOQ'
      }
    ],
    steamGifts: [],
    cs2RankExpired: true,
    steamDota2WinRate: 50,
    steamTransactions: [],
    hasPossibleBanInDota2: false,
    chineseAccount: false,
    cs2MapsRanks: [
      {
        item_id: 144543630,
        rank_id: 0,
        map_id: 1,
        map_win: 1,
        map_name: 'Dust II'
      },
      {
        item_id: 144543630,
        rank_id: 0,
        map_id: 2,
        map_win: 1,
        map_name: 'Mirage'
      },
      {
        item_id: 144543630,
        rank_id: 0,
        map_id: 6,
        map_win: 1,
        map_name: 'Inferno'
      }
    ],
    cs2PremierElo: [],
    steamLifetimeTradeBan: false,
    canViewAccountLink: true,
    accountLinks: [
      {
        link: 'https://lzt.market/144543630/steam-preview?type=profiles',
        text: 'Steam Preview: Profile',
        iconClass: 'steam'
      },
      {
        link: 'https://lzt.market/144543630/steam-preview?type=games',
        text: 'Steam Preview: Games',
        iconClass: 'steam'
      }
    ],
    accountLink: 'https://lzt.market/144543630/steam-preview?type=profiles',
    emailLoginUrl: 'https://outlook.com',
    canChangePassword: false,
    uniqueKeyExists: true,
    itemOriginPhrase: 'Стилер',
    sold_items_category_count: 15601,
    restore_items_category_count: 70,
    tags: [],
    note_text: null,
    hasPendingAutoBuy: false,
    descriptionHtml: '',
    descriptionEnHtml: '',
    descriptionPlain: '',
    descriptionEnPlain: '',
    seller: {
      user_id: 284255,
      sold_items_count: 15783,
      active_items_count: 1036,
      restore_data: '{"11":4,"5":1,"7":4,"9":1,"1":70}',
      username: 'Borland',
      avatar_date: 1698489970,
      is_banned: 0,
      display_style_group_id: 265,
      restore_percents: 0
    }
  };
  return (
    <Card>
      <CardHeader className='p-4'>
        <CardTitle className='flex justify-between'>
          <Link href={'/'} className='text-base font-semibold'>
            CS2 Prime 7 medals + 39 private rank + native pass + inactive 741
            days + 95 games
          </Link>
          <p className='flex items-center text-md font-semibold text-white h-7 p-4 rounded-md bg-gradient-to-r from-primaryCustoms to-primaryCustoms/50'>
            $ 48.67
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-wrap items-center gap-2'>
        <Chip variant='success'>
          <ThumbsUp size={20} />
          <span>Last seen on Oct 31, 2024</span>
        </Chip>
        <Chip variant='error'>
          <ThumbsDown size={20} />
          <span>Limited</span>
        </Chip>
        <Chip variant='success'>
          <ThumbsUp size={20} />
          <span>Access to email(native)</span>
        </Chip>
        <Chip variant='success'>
          <ThumbsUp size={20} />
          <span>3 days warranty</span>
        </Chip>
        <Chip variant='warning'>
          <ThumbsUp size={20} />
          <span>4849.70 hrs. total played for 2 weeks</span>
        </Chip>
      </CardContent>
      <CardFooter className='p-4'>
        <div className='flex flex-col  gap-2'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <div className='w-7 h-7 bg-primaryCustoms rounded-md flex items-center justify-center'>
                <img className='w-5 h-5' src='steam.svg' alt='1' />
              </div>
              <p className='px-2 h-7 flex items-center justify-center bg-primaryCustoms rounded-md'>
                CS2 Prime 2 lvl
              </p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='w-7 h-7 bg-primaryCustoms rounded-md flex items-center justify-center'>
                <img className='w-5 h-5' src='fortnite.svg' alt='1' />
              </div>
              <p className='px-2 h-7 flex items-center justify-center bg-primaryCustoms rounded-md'>
                Unturned
              </p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-5 h-5' src='steam.svg' alt='1' />
            <Link href={'/'} className='font-bold text-white'>
              Bederatzi
            </Link>
            <p className='flex items-center gap-2 justify-center bg-primaryCustoms rounded-md p-1 px-2'>
              <Star size={20} />
              <span>87%</span>
              <span>(1497)</span>
            </p>
            <p className='flex items-center gap-1'>
              <Dot size={20} />3 minutes ago
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Item;
