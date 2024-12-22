/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import * as _ from 'lodash';
import { DollarSign } from 'lucide-react';
import React from 'react';
import GameList from '../List/GameList';
import Item from './Item';
import CONSTANT from '@/variables/constant';
import { IParams } from '@/variables/interface';
import { GroupInput } from './Group';

interface IItem {
  subItem: {
    param: IParams;
    attribute: any;
  };
  mainItem: {
    param: IParams;
    attribute: any;
  };
  label: string;
}

function CategoryFilter() {
  // https://api.lzt.market/{categoryName}/params => Danh sách search params
  const data = React.useMemo(() => {
    return {
      category: {
        category_id: 1,
        sub_category_id: 1,
        category_order: 10,
        category_title: 'Steam',
        category_name: 'steam',
        category_url: 'steam',
        category_description_html:
          'На нашем сайте предоставляется уникальная возможность купить аккаунты steam с %s, а так же у нас есть продажа аккаунтов стим с %s.',
        category_login_url: 'https://steamcommunity.com/login/home/',
        add_item_available: 1,
        mass_upload_item_available: 1,
        has_guarantee: 1,
        has_account_link: 1,
        require_temp_email: 1,
        recovery_link:
          'https://help.steampowered.com/en/wizard/HelpWithLoginInfo?accountsearch=1',
        check_button_enabled: 1,
        checker_enabled: 1,
        checker_partially_disabled: 0,
        support_personal_proxy: 1,
        support_email_login_data: 1,
        require_email_login_data: 0,
        display_in_list: 1,
        category_description_html_en: '',
        category_h1_html_en: '',
        account_price_min: 5,
        require_video_recording: 0,
        top_queries:
          '[{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[730],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/cs2-prime\\/","gameTitle":"CS2 Prime"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters","mail_ru"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":["native"],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[730],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/cs2-prime\\/?email_type%5b0%5d=native","gameTitle":"CS2 Prime"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[252490],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"mm_ban":"nomatter","country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/rust\\/","gameTitle":"Rust"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters","mail_ru"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[730],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"daybreak":30,"no_vac":false,"country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/cs2-prime\\/?daybreak=30","gameTitle":"CS2 Prime"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[271590],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"mm_ban":"nomatter","country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/gta-v\\/","gameTitle":"GTA V"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters","mail_ru"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[221100],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"mm_ban":"nomatter","country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/dayz\\/","gameTitle":"DayZ"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters","mail_ru"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[4000],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"mm_ban":"nomatter","country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/garry-s-mod\\/","gameTitle":"Garry\'s Mod"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters","mail_ru"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[2933620],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"mm_ban":"nomatter","country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/call-of-duty-black-ops-6\\/","gameTitle":"Call of Duty: Black Ops 6"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters","mail_ru"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[1091500],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"mm_ban":"nomatter","country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/cyberpunk-2077\\/","gameTitle":"Cyberpunk 2077"},{"categoryOrders":[],"category_id":1,"emailProviders":["other","rambler","outlook","firstmail","notletters","mail_ru"],"tag_id":[],"not_tag_id":[],"origin":[],"not_origin":[],"user_id":0,"nsb_by_me":false,"sb_by_me":false,"hide_viewed":false,"email_login_data":false,"email_provider":[],"not_email_provider":[],"email_type":[],"update_stat_after":0,"update_stat_before":0,"delete_after":0,"delete_before":0,"published_after":0,"published_before":0,"search_id":0,"auto_buy_link_id":0,"game":[553850],"hours_played":[],"hours_played_max":[],"vac":[],"vac_skip_game_check":false,"no_vac":false,"mm_ban":"nomatter","country":[],"not_country":[],"last_trans_date":0,"last_trans_date_later":0,"no_trans":false,"trans":false,"d2_last_match_date":0,"userItems":false,"userOrders":false,"searchUrl":"\\/steam\\/helldivers-2\\/","gameTitle":"HELLDIVERS 2"}]',
        require_eld_for_native_accs: 1,
        can_be_resold: 1,
        support_temp_email: 1,
        cookies: 'none',
        login_type: 'any',
        guest_hidden: 0,
        available_temp_email: 0,
        resale_duration_limit_days: 30,
        buy_without_validation: 1,
        max_invalid_upload_tries: 100,
        category_prefix_id: 105,
        view_items: 1,
        autobuy_price_coefficient: 1.5,
        proxy_error: 0
      },
      params: [
        {
          name: 'game',
          input: 'array',
          description: 'List of games'
        },
        {
          name: 'hours_played',
          input: 'array',
          description: 'List of minimum hours played by game'
        },
        {
          name: 'hours_played_max',
          input: 'array',
          description: 'List of maximum hours played by game'
        },
        {
          name: 'vac',
          input: 'array',
          description: 'List of VAC bans by game'
        },
        {
          name: 'vac_skip_game_check',
          input: 'boolean',
          description: 'Skip game existence check for search with VAC bans'
        },
        {
          name: 'rt',
          input: 'yesno',
          description: 'Has community ban',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'trade_ban',
          input: 'yesno',
          description: 'Has lifetime trade ban',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'trade_limit',
          input: 'yesno',
          description: 'Has temporary trade limit',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'daybreak',
          input: 'number',
          description: 'Number of days the account has been offline'
        },
        {
          name: 'limit',
          input: 'yesno',
          description: 'Has 5 $ limit',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'mafile',
          input: 'yesno',
          description: 'Has .mafile (Steam Guard Authenticator)',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'reg',
          input: 'number',
          description: 'How old is the account'
        },
        {
          name: 'reg_period',
          input: 'string',
          description: 'In what notation is time measured',
          values: ['day', 'month', 'year']
        },
        {
          name: 'lmin',
          input: 'number',
          description: 'Minimum level'
        },
        {
          name: 'lmax',
          input: 'number',
          description: 'Maximum level'
        },
        {
          name: 'rmin',
          input: 'number',
          description: 'Minimum rank in CS2 Matchmaking'
        },
        {
          name: 'rmax',
          input: 'number',
          description: 'Maximum rank in CS2 Matchmaking'
        },
        {
          name: 'elo_min',
          input: 'number',
          description: 'Minimum Premier ELO in CS2'
        },
        {
          name: 'elo_max',
          input: 'number',
          description: 'Maximum Premier ELO in CS2'
        },
        {
          name: 'wingman_rmin',
          input: 'number',
          description: 'Minimum rank in CS2 Wingman'
        },
        {
          name: 'wingman_rmax',
          input: 'number',
          description: 'Maximum rank in CS2 Wingman'
        },
        {
          name: 'no_vac',
          input: 'boolean',
          description: 'Has no VAC ban'
        },
        {
          name: 'mm_ban',
          input: 'yesno',
          description: 'Has CS2 Matchmaking ban',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'balance_min',
          input: 'number',
          description: 'Minimum balance'
        },
        {
          name: 'balance_max',
          input: 'number',
          description: 'Maximum balance'
        },
        {
          name: 'inv_game',
          input: 'number',
          description: 'Game ID to check inventory price'
        },
        {
          name: 'inv_min',
          input: 'number',
          description: 'Minimum inventory price for game'
        },
        {
          name: 'inv_max',
          input: 'number',
          description: 'Maximum inventory price for game'
        },
        {
          name: 'friends_min',
          input: 'number',
          description: 'Minimum number of friends'
        },
        {
          name: 'friends_max',
          input: 'number',
          description: 'Maximum number of friends'
        },
        {
          name: 'gmin',
          input: 'number',
          description: 'Minimum count of games'
        },
        {
          name: 'gmax',
          input: 'number',
          description: 'Maximum count of games'
        },
        {
          name: 'win_count_min',
          input: 'number',
          description: 'Minimum number of wins'
        },
        {
          name: 'win_count_max',
          input: 'number',
          description: 'Maximum number of wins'
        },
        {
          name: 'medal_id',
          input: 'array',
          description: 'List of medal IDs',
          values: [
            303, 306, 310, 302, 301, 298, 299, 300, 305, 304, 234, 307, 309,
            308, 229, 1, 233, 187, 280, 177, 2, 3, 4, 5, 181, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
            28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
            45, 46, 47, 48, 49, 50, 51, 52, 53, 228, 99, 193, 183, 271, 176,
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 178, 111,
            112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
            125, 126, 127, 128, 129, 130, 131, 179, 194, 239, 225, 132, 190,
            182, 267, 174, 133, 189, 134, 135, 136, 137, 138, 139, 140, 141,
            142, 143, 144, 145, 172, 226, 146, 191, 184, 270, 175, 147, 148,
            149, 150, 151, 152, 153, 154, 155, 156, 157, 173, 158, 159, 160,
            161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171
          ]
        },
        {
          name: 'medal_operator_or',
          input: 'boolean',
          description: 'Search for medals using "OR" instead of "AND"'
        },
        {
          name: 'medal_min',
          input: 'number',
          description: 'Minimum number of medals'
        },
        {
          name: 'medal_max',
          input: 'number',
          description: 'Maximum number of medals'
        },
        {
          name: 'gift',
          input: 'array',
          description: 'List of gifts',
          values: [
            {
              hash_name: "Don't Starve Together",
              title: "Don't Starve Together",
              cis_only: 0
            },
            {
              hash_name: "Don't Starve Together_cis",
              title: "Don't Starve Together",
              cis_only: 1
            },
            {
              hash_name: 'Dead Island: Epidemic Beta Gift',
              title: 'Dead Island: Epidemic Beta Gift',
              cis_only: 0
            },
            {
              hash_name: 'Killing Floor Gift',
              title: 'Killing Floor Gift',
              cis_only: 0
            },
            {
              hash_name: 'Dead Island: Epidemic',
              title: 'Dead Island: Epidemic',
              cis_only: 0
            },
            {
              hash_name: 'ARMA: Cold War Assault',
              title: 'ARMA: Cold War Assault',
              cis_only: 0
            },
            {
              hash_name: 'Minion Masters',
              title: 'Minion Masters',
              cis_only: 0
            },
            {
              hash_name: '7 Days to Die',
              title: '7 Days to Die',
              cis_only: 0
            },
            {
              hash_name: 'State of Decay: YOSE',
              title: 'State of Decay: YOSE',
              cis_only: 0
            },
            {
              hash_name: 'Steam Trading Card Beta Access - Extra Copy',
              title: 'Steam Trading Card Beta Access - Extra Copy',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2',
              title: 'Half-Life 2',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: A Merry Payday Christmas Soundtrack',
              title: 'PAYDAY 2: A Merry Payday Christmas Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Terraria',
              title: 'Terraria',
              cis_only: 0
            },
            {
              hash_name: 'Arma 3 Alpha Lite - Gift Copy - Expired',
              title: 'Arma 3 Alpha Lite - Gift Copy - Expired',
              cis_only: 0
            },
            {
              hash_name: 'Gun Monkeys',
              title: 'Gun Monkeys',
              cis_only: 0
            },
            {
              hash_name: 'Space Farmers',
              title: 'Space Farmers',
              cis_only: 0
            },
            {
              hash_name: 'The Witcher: Enhanced Edition Gift',
              title: 'The Witcher: Enhanced Edition Gift',
              cis_only: 0
            },
            {
              hash_name: 'The Crew Wild Run - Beta Gift Copy',
              title: 'The Crew Wild Run - Beta Gift Copy',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2: Episode 1',
              title: 'Half-Life 2: Episode 1',
              cis_only: 0
            },
            {
              hash_name: 'Stronghold Crusader 2',
              title: 'Stronghold Crusader 2',
              cis_only: 0
            },
            {
              hash_name: 'Killing Floor Gift_cis',
              title: 'Killing Floor Gift',
              cis_only: 1
            },
            {
              hash_name: 'The Ship - 2 Pack Gift',
              title: 'The Ship - 2 Pack Gift',
              cis_only: 0
            },
            {
              hash_name: 'Project Zomboid',
              title: 'Project Zomboid',
              cis_only: 0
            },
            {
              hash_name: 'ORION: Prelude',
              title: 'ORION: Prelude',
              cis_only: 0
            },
            {
              hash_name: 'The Ship Gift',
              title: 'The Ship Gift',
              cis_only: 0
            },
            {
              hash_name: 'Hero Siege',
              title: 'Hero Siege',
              cis_only: 0
            },
            {
              hash_name: 'Dawn of War II - Retribution - The Last Standalone',
              title: 'Dawn of War II - Retribution - The Last Standalone',
              cis_only: 0
            },
            {
              hash_name: '7 Days to Die_cis',
              title: '7 Days to Die',
              cis_only: 1
            },
            {
              hash_name:
                'An Alternative Reality: The Football Manager Documentary',
              title: 'An Alternative Reality: The Football Manager Documentary',
              cis_only: 0
            },
            {
              hash_name: 'Insurgency',
              title: 'Insurgency',
              cis_only: 0
            },
            {
              hash_name: 'Tabletop Simulator',
              title: 'Tabletop Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Move or Die',
              title: 'Move or Die',
              cis_only: 0
            },
            {
              hash_name: 'Dead Island: Epidemic_cis',
              title: 'Dead Island: Epidemic',
              cis_only: 1
            },
            {
              hash_name: 'Steam Mobile Access',
              title: 'Steam Mobile Access',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2: Deathmatch',
              title: 'Half-Life 2: Deathmatch',
              cis_only: 0
            },
            {
              hash_name: 'Super Monday Night Combat Gift',
              title: 'Super Monday Night Combat Gift',
              cis_only: 0
            },
            {
              hash_name: 'Warhammer 40,000: Eternal Crusade',
              title: 'Warhammer 40,000: Eternal Crusade',
              cis_only: 0
            },
            {
              hash_name: 'Steam Community Beta Access',
              title: 'Steam Community Beta Access',
              cis_only: 0
            },
            {
              hash_name: 'Deathgarden: BLOODHARVEST Gift',
              title: 'Deathgarden: BLOODHARVEST Gift',
              cis_only: 0
            },
            {
              hash_name: 'Street Fighter V Beta Gift',
              title: 'Street Fighter V Beta Gift',
              cis_only: 0
            },
            {
              hash_name: 'Stronghold Crusader HD',
              title: 'Stronghold Crusader HD',
              cis_only: 0
            },
            {
              hash_name: 'Magicka 2 Sneak Peek Gift',
              title: 'Magicka 2 Sneak Peek Gift',
              cis_only: 0
            },
            {
              hash_name: 'Castle Crashers®',
              title: 'Castle Crashers®',
              cis_only: 0
            },
            {
              hash_name: 'Chivalry: Medieval Warfare',
              title: 'Chivalry: Medieval Warfare',
              cis_only: 0
            },
            {
              hash_name: 'Left 4 Dead 2',
              title: 'Left 4 Dead 2',
              cis_only: 0
            },
            {
              hash_name: 'BattleBlock Theater®',
              title: 'BattleBlock Theater®',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 13499',
              title: 'Unknown package 13499',
              cis_only: 0
            },
            {
              hash_name: 'Portal',
              title: 'Portal',
              cis_only: 0
            },
            {
              hash_name: 'Super Monday Night Combat',
              title: 'Super Monday Night Combat',
              cis_only: 0
            },
            {
              hash_name: 'GTFO Alpha Gift',
              title: 'GTFO Alpha Gift',
              cis_only: 0
            },
            {
              hash_name: 'Contraption Maker',
              title: 'Contraption Maker',
              cis_only: 0
            },
            {
              hash_name: 'Minion Masters_cis',
              title: 'Minion Masters',
              cis_only: 1
            },
            {
              hash_name: 'Talisman: Digital Edition',
              title: 'Talisman: Digital Edition',
              cis_only: 0
            },
            {
              hash_name: 'Rising Storm Beta Extra Copy',
              title: 'Rising Storm Beta Extra Copy',
              cis_only: 0
            },
            {
              hash_name: 'Payday 2 Gift',
              title: 'Payday 2 Gift',
              cis_only: 0
            },
            {
              hash_name: 'Pyre',
              title: 'Pyre',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2_cis',
              title: 'Half-Life 2',
              cis_only: 1
            },
            {
              hash_name: 'ibb & obb',
              title: 'ibb & obb',
              cis_only: 0
            },
            {
              hash_name: 'Duck Game',
              title: 'Duck Game',
              cis_only: 0
            },
            {
              hash_name: 'Rise of Nations: Extended Edition',
              title: 'Rise of Nations: Extended Edition',
              cis_only: 0
            },
            {
              hash_name: 'Dying Light: Bad Blood',
              title: 'Dying Light: Bad Blood',
              cis_only: 0
            },
            {
              hash_name: 'Arma 3 Alpha Lite Gift Copy - Expired',
              title: 'Arma 3 Alpha Lite Gift Copy - Expired',
              cis_only: 0
            },
            {
              hash_name: 'Frozen Synapse Prime',
              title: 'Frozen Synapse Prime',
              cis_only: 0
            },
            {
              hash_name: 'Nuclear Dawn',
              title: 'Nuclear Dawn',
              cis_only: 0
            },
            {
              hash_name: 'Dino D-Day',
              title: 'Dino D-Day',
              cis_only: 0
            },
            {
              hash_name: 'Trine 2: Complete Story Gift',
              title: 'Trine 2: Complete Story Gift',
              cis_only: 0
            },
            {
              hash_name: 'SpeedRunners',
              title: 'SpeedRunners',
              cis_only: 0
            },
            {
              hash_name: 'Skullgirls 2nd Encore',
              title: 'Skullgirls 2nd Encore',
              cis_only: 0
            },
            {
              hash_name: 'Bombernauts',
              title: 'Bombernauts',
              cis_only: 0
            },
            {
              hash_name: 'ShellShock Live',
              title: 'ShellShock Live',
              cis_only: 0
            },
            {
              hash_name: 'Dawn of War II',
              title: 'Dawn of War II',
              cis_only: 0
            },
            {
              hash_name: 'Crash Drive 2',
              title: 'Crash Drive 2',
              cis_only: 0
            },
            {
              hash_name: 'Worms Revolution',
              title: 'Worms Revolution',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty: Black Ops III Beta GIFT',
              title: 'Call of Duty: Black Ops III Beta GIFT',
              cis_only: 0
            },
            {
              hash_name: 'Viscera Cleanup Detail Gift',
              title: 'Viscera Cleanup Detail Gift',
              cis_only: 0
            },
            {
              hash_name: 'Guns of Icarus Online',
              title: 'Guns of Icarus Online',
              cis_only: 0
            },
            {
              hash_name: 'Starbound',
              title: 'Starbound',
              cis_only: 0
            },
            {
              hash_name: 'Postal 2 Complete',
              title: 'Postal 2 Complete',
              cis_only: 0
            },
            {
              hash_name: 'Spacebase DF-9',
              title: 'Spacebase DF-9',
              cis_only: 0
            },
            {
              hash_name: 'Takedown: Red Sabre',
              title: 'Takedown: Red Sabre',
              cis_only: 0
            },
            {
              hash_name: 'Terraria_cis',
              title: 'Terraria',
              cis_only: 1
            },
            {
              hash_name: 'War of the Vikings: Bonus Coins',
              title: 'War of the Vikings: Bonus Coins',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2',
              title: 'Borderlands 2',
              cis_only: 0
            },
            {
              hash_name: 'CastleMiner Z',
              title: 'CastleMiner Z',
              cis_only: 0
            },
            {
              hash_name: 'Gauntlet™ Slayer Edition',
              title: 'Gauntlet™ Slayer Edition',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2: Episode One',
              title: 'Half-Life 2: Episode One',
              cis_only: 0
            },
            {
              hash_name: 'Yet Another Zombie Defense',
              title: 'Yet Another Zombie Defense',
              cis_only: 0
            },
            {
              hash_name: "Hack 'n' Slash",
              title: "Hack 'n' Slash",
              cis_only: 0
            },
            {
              hash_name: "Sid Meier's Civilization IV",
              title: "Sid Meier's Civilization IV",
              cis_only: 0
            },
            {
              hash_name: "Garry's Mod",
              title: "Garry's Mod",
              cis_only: 0
            },
            {
              hash_name: 'Murder Miners',
              title: 'Murder Miners',
              cis_only: 0
            },
            {
              hash_name: 'Deathgarden: BLOODHARVEST Gift (2)',
              title: 'Deathgarden: BLOODHARVEST Gift (2)',
              cis_only: 0
            },
            {
              hash_name: 'Revolution Ace',
              title: 'Revolution Ace',
              cis_only: 0
            },
            {
              hash_name: 'Space Engineers',
              title: 'Space Engineers',
              cis_only: 0
            },
            {
              hash_name: 'METAL GEAR SOLID V: THE PHANTOM PAIN',
              title: 'METAL GEAR SOLID V: THE PHANTOM PAIN',
              cis_only: 0
            },
            {
              hash_name: 'Frozen Synapse',
              title: 'Frozen Synapse',
              cis_only: 0
            },
            {
              hash_name: '100% Orange Juice',
              title: '100% Orange Juice',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2: Episode 1_cis',
              title: 'Half-Life 2: Episode 1',
              cis_only: 1
            },
            {
              hash_name: 'Portal 2',
              title: 'Portal 2',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: A Merry Payday Christmas Soundtrack_cis',
              title: 'PAYDAY 2: A Merry Payday Christmas Soundtrack',
              cis_only: 1
            },
            {
              hash_name: "Don't Starve Gift",
              title: "Don't Starve Gift",
              cis_only: 0
            },
            {
              hash_name: 'Super Hexagon',
              title: 'Super Hexagon',
              cis_only: 0
            },
            {
              hash_name: 'Risk of Rain (2013)',
              title: 'Risk of Rain (2013)',
              cis_only: 0
            },
            {
              hash_name: "Sid Meier's Civilization® V",
              title: "Sid Meier's Civilization® V",
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty: World at War',
              title: 'Call of Duty: World at War',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2 Beta Gift',
              title: 'PAYDAY 2 Beta Gift',
              cis_only: 0
            },
            {
              hash_name: 'Breach - Four Gifts',
              title: 'Breach - Four Gifts',
              cis_only: 0
            },
            {
              hash_name: 'Worlds Adrift - Standard Edition GIFT',
              title: 'Worlds Adrift - Standard Edition GIFT',
              cis_only: 0
            },
            {
              hash_name: 'Particula',
              title: 'Particula',
              cis_only: 0
            },
            {
              hash_name: 'Tomb Raider',
              title: 'Tomb Raider',
              cis_only: 0
            },
            {
              hash_name: 'ARMA: Cold War Assault_cis',
              title: 'ARMA: Cold War Assault',
              cis_only: 1
            },
            {
              hash_name: 'Magicka',
              title: 'Magicka',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders Collection Gift Copy',
              title: 'Dungeon Defenders Collection Gift Copy',
              cis_only: 0
            },
            {
              hash_name: 'Worms Ultimate Mayhem',
              title: 'Worms Ultimate Mayhem',
              cis_only: 0
            },
            {
              hash_name: 'The Crew™ 2',
              title: 'The Crew™ 2',
              cis_only: 0
            },
            {
              hash_name: 'Insurgency_cis',
              title: 'Insurgency',
              cis_only: 1
            },
            {
              hash_name: 'Zombie Army Trilogy',
              title: 'Zombie Army Trilogy',
              cis_only: 0
            },
            {
              hash_name: 'Natural Selection 2',
              title: 'Natural Selection 2',
              cis_only: 0
            },
            {
              hash_name: 'Left 4 Dead',
              title: 'Left 4 Dead',
              cis_only: 0
            },
            {
              hash_name: 'Company of Heroes: Tales of Valor',
              title: 'Company of Heroes: Tales of Valor',
              cis_only: 0
            },
            {
              hash_name: 'Carmageddon TDR 2000',
              title: 'Carmageddon TDR 2000',
              cis_only: 0
            },
            {
              hash_name: 'Divinity: Original Sin Enhanced Edition Gift',
              title: 'Divinity: Original Sin Enhanced Edition Gift',
              cis_only: 0
            },
            {
              hash_name: 'Dead Island: Epidemic Beta Gift_cis',
              title: 'Dead Island: Epidemic Beta Gift',
              cis_only: 1
            },
            {
              hash_name: 'AXYOS',
              title: 'AXYOS',
              cis_only: 0
            },
            {
              hash_name: 'Company of Heroes',
              title: 'Company of Heroes',
              cis_only: 0
            },
            {
              hash_name: 'Company of Heroes: Opposing Fronts',
              title: 'Company of Heroes: Opposing Fronts',
              cis_only: 0
            },
            {
              hash_name: 'Contagion',
              title: 'Contagion',
              cis_only: 0
            },
            {
              hash_name: 'TerraTech',
              title: 'TerraTech',
              cis_only: 0
            },
            {
              hash_name: 'Mount Your Friends',
              title: 'Mount Your Friends',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY™ The Heist',
              title: 'PAYDAY™ The Heist',
              cis_only: 0
            },
            {
              hash_name: 'Awesomenauts Gift',
              title: 'Awesomenauts Gift',
              cis_only: 0
            },
            {
              hash_name: 'ENDLESS™ Dungeon – Closed Beta',
              title: 'ENDLESS™ Dungeon – Closed Beta',
              cis_only: 0
            },
            {
              hash_name: 'Prime Status Upgrade',
              title: 'Prime Status Upgrade',
              cis_only: 0
            },
            {
              hash_name: 'METAL SLUG 3',
              title: 'METAL SLUG 3',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders',
              title: 'Dungeon Defenders',
              cis_only: 0
            },
            {
              hash_name: 'Slain: Back from Hell',
              title: 'Slain: Back from Hell',
              cis_only: 0
            },
            {
              hash_name: 'FTL: Faster Than Light',
              title: 'FTL: Faster Than Light',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Rainbow Six® Vegas",
              title: "Tom Clancy's Rainbow Six® Vegas",
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2: Episode Two',
              title: 'Half-Life 2: Episode Two',
              cis_only: 0
            },
            {
              hash_name: "Bad Rats: the Rats' Revenge",
              title: "Bad Rats: the Rats' Revenge",
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die 2 - Complete Pack 2 Gift',
              title: 'Orcs Must Die 2 - Complete Pack 2 Gift',
              cis_only: 0
            },
            {
              hash_name: 'Rust',
              title: 'Rust',
              cis_only: 0
            },
            {
              hash_name: 'Broforce',
              title: 'Broforce',
              cis_only: 0
            },
            {
              hash_name: 'Warhammer 40,000: Dawn of War II',
              title: 'Warhammer 40,000: Dawn of War II',
              cis_only: 0
            },
            {
              hash_name: 'Stronghold Crusader 2_cis',
              title: 'Stronghold Crusader 2',
              cis_only: 1
            },
            {
              hash_name: 'SNOW - The Ultimate Edition',
              title: 'SNOW - The Ultimate Edition',
              cis_only: 0
            },
            {
              hash_name: 'E.T. Armies',
              title: 'E.T. Armies',
              cis_only: 0
            },
            {
              hash_name: 'Counter-Strike: Source',
              title: 'Counter-Strike: Source',
              cis_only: 0
            },
            {
              hash_name: 'Carmageddon 1 and 2',
              title: 'Carmageddon 1 and 2',
              cis_only: 0
            },
            {
              hash_name: 'Space Farmers_cis',
              title: 'Space Farmers',
              cis_only: 1
            },
            {
              hash_name: 'Sanctum 2',
              title: 'Sanctum 2',
              cis_only: 0
            },
            {
              hash_name: 'MQEL Founders Pack Gift',
              title: 'MQEL Founders Pack Gift',
              cis_only: 0
            },
            {
              hash_name: 'XCOM: Enemy Unknown',
              title: 'XCOM: Enemy Unknown',
              cis_only: 0
            },
            {
              hash_name: 'TRISTOY',
              title: 'TRISTOY',
              cis_only: 0
            },
            {
              hash_name: 'Out of Reach',
              title: 'Out of Reach',
              cis_only: 0
            },
            {
              hash_name: 'Hero Siege_cis',
              title: 'Hero Siege',
              cis_only: 1
            },
            {
              hash_name: 'The Witcher: Enhanced Edition Gift_cis',
              title: 'The Witcher: Enhanced Edition Gift',
              cis_only: 1
            },
            {
              hash_name: 'DETOUR',
              title: 'DETOUR',
              cis_only: 0
            },
            {
              hash_name: 'DETOUR_cis',
              title: 'DETOUR',
              cis_only: 1
            },
            {
              hash_name: 'Little Racers STREET',
              title: 'Little Racers STREET',
              cis_only: 0
            },
            {
              hash_name: 'Primal Carnage: Extinction',
              title: 'Primal Carnage: Extinction',
              cis_only: 0
            },
            {
              hash_name: 'Talisman: Prologue',
              title: 'Talisman: Prologue',
              cis_only: 0
            },
            {
              hash_name: 'Risk of Rain 2',
              title: 'Risk of Rain 2',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Rainbow Six Siege - Beta Gift",
              title: "Tom Clancy's Rainbow Six Siege - Beta Gift",
              cis_only: 0
            },
            {
              hash_name: 'METAL SLUG',
              title: 'METAL SLUG',
              cis_only: 0
            },
            {
              hash_name: 'Due Process',
              title: 'Due Process',
              cis_only: 0
            },
            {
              hash_name: 'Omerta - City of Gangsters',
              title: 'Omerta - City of Gangsters',
              cis_only: 0
            },
            {
              hash_name: 'Nation Red',
              title: 'Nation Red',
              cis_only: 0
            },
            {
              hash_name: 'Move or Die_cis',
              title: 'Move or Die',
              cis_only: 1
            },
            {
              hash_name: 'AirMech 2 [NO LONGER VALID]',
              title: 'AirMech 2 [NO LONGER VALID]',
              cis_only: 0
            },
            {
              hash_name: 'Over 9000 Zombies!',
              title: 'Over 9000 Zombies!',
              cis_only: 0
            },
            {
              hash_name: 'Counter-Strike: Condition Zero',
              title: 'Counter-Strike: Condition Zero',
              cis_only: 0
            },
            {
              hash_name: 'Verdun',
              title: 'Verdun',
              cis_only: 0
            },
            {
              hash_name: 'Reign Of Kings',
              title: 'Reign Of Kings',
              cis_only: 0
            },
            {
              hash_name: 'Defy Gravity Extended',
              title: 'Defy Gravity Extended',
              cis_only: 0
            },
            {
              hash_name: 'Interstellar Marines',
              title: 'Interstellar Marines',
              cis_only: 0
            },
            {
              hash_name: 'Depth',
              title: 'Depth',
              cis_only: 0
            },
            {
              hash_name: 'Age of Empires II (Retired)',
              title: 'Age of Empires II (Retired)',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: The OVERKILL Pack',
              title: 'PAYDAY 2: The OVERKILL Pack',
              cis_only: 0
            },
            {
              hash_name: 'Killing Floor 2',
              title: 'Killing Floor 2',
              cis_only: 0
            },
            {
              hash_name: 'Orbital Gear',
              title: 'Orbital Gear',
              cis_only: 0
            },
            {
              hash_name: 'Hot Lava',
              title: 'Hot Lava',
              cis_only: 0
            },
            {
              hash_name: 'Torchlight II',
              title: 'Torchlight II',
              cis_only: 0
            },
            {
              hash_name: 'Epistory - Typing Chronicles',
              title: 'Epistory - Typing Chronicles',
              cis_only: 0
            },
            {
              hash_name: 'Meridian: New World',
              title: 'Meridian: New World',
              cis_only: 0
            },
            {
              hash_name: 'FlatOut',
              title: 'FlatOut',
              cis_only: 0
            },
            {
              hash_name: 'South Park™: The Stick of Truth™',
              title: 'South Park™: The Stick of Truth™',
              cis_only: 0
            },
            {
              hash_name: 'Hero Academy - Dark Elves Pack - Hatless Gift',
              title: 'Hero Academy - Dark Elves Pack - Hatless Gift',
              cis_only: 0
            },
            {
              hash_name: 'BattleBlock Theater®_cis',
              title: 'BattleBlock Theater®',
              cis_only: 1
            },
            {
              hash_name: 'FORCED: Slightly Better Edition',
              title: 'FORCED: Slightly Better Edition',
              cis_only: 0
            },
            {
              hash_name: 'Gas Guzzlers Extreme',
              title: 'Gas Guzzlers Extreme',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2',
              title: 'PAYDAY 2',
              cis_only: 0
            },
            {
              hash_name: 'Miscreated',
              title: 'Miscreated',
              cis_only: 0
            },
            {
              hash_name: 'Shark Attack Deathmatch 2',
              title: 'Shark Attack Deathmatch 2',
              cis_only: 0
            },
            {
              hash_name: 'Magicka 2 Sneak Peek Gift_cis',
              title: 'Magicka 2 Sneak Peek Gift',
              cis_only: 1
            },
            {
              hash_name: 'Grand Theft Auto: San Andreas',
              title: 'Grand Theft Auto: San Andreas',
              cis_only: 0
            },
            {
              hash_name: 'Hero Academy - Dwarves Pack - Hatless Gift',
              title: 'Hero Academy - Dwarves Pack - Hatless Gift',
              cis_only: 0
            },
            {
              hash_name: 'ibb &amp; obb - Gift  Luxurious Friends Forever',
              title: 'ibb &amp; obb - Gift  Luxurious Friends Forever',
              cis_only: 0
            },
            {
              hash_name:
                'Europa Universalis IV: Guns, Drums and Steel Music Pack_cis',
              title: 'Europa Universalis IV: Guns, Drums and Steel Music Pack',
              cis_only: 1
            },
            {
              hash_name: 'Rising Storm Beta Extra Copy (DE)',
              title: 'Rising Storm Beta Extra Copy (DE)',
              cis_only: 0
            },
            {
              hash_name: 'BEEP',
              title: 'BEEP',
              cis_only: 0
            },
            {
              hash_name: 'Blockstorm',
              title: 'Blockstorm',
              cis_only: 0
            },
            {
              hash_name: 'Hammerwatch',
              title: 'Hammerwatch',
              cis_only: 0
            },
            {
              hash_name: "Overkill's The Walking Dead - BETA Gift - Retired",
              title: "Overkill's The Walking Dead - BETA Gift - Retired",
              cis_only: 0
            },
            {
              hash_name: 'Bloody Trapland',
              title: 'Bloody Trapland',
              cis_only: 0
            },
            {
              hash_name: 'Defense Grid: Containment DLC',
              title: 'Defense Grid: Containment DLC',
              cis_only: 0
            },
            {
              hash_name: 'Tropico 4',
              title: 'Tropico 4',
              cis_only: 0
            },
            {
              hash_name: 'Chivalry: Medieval Warfare_cis',
              title: 'Chivalry: Medieval Warfare',
              cis_only: 1
            },
            {
              hash_name: 'Ace of Spades: Battle Builder',
              title: 'Ace of Spades: Battle Builder',
              cis_only: 0
            },
            {
              hash_name: 'FlatOut 2',
              title: 'FlatOut 2',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam 3: BFE Gift',
              title: 'Serious Sam 3: BFE Gift',
              cis_only: 0
            },
            {
              hash_name: 'Revolution Ace_cis',
              title: 'Revolution Ace',
              cis_only: 1
            },
            {
              hash_name: 'E.Y.E: Divine Cybermancy',
              title: 'E.Y.E: Divine Cybermancy',
              cis_only: 0
            },
            {
              hash_name: 'Particula_cis',
              title: 'Particula',
              cis_only: 1
            },
            {
              hash_name: 'RPG Maker VX Ace',
              title: 'RPG Maker VX Ace',
              cis_only: 0
            },
            {
              hash_name: 'Deathgarden: BLOODHARVEST Gift_cis',
              title: 'Deathgarden: BLOODHARVEST Gift',
              cis_only: 1
            },
            {
              hash_name: 'Crusader Kings II Gift',
              title: 'Crusader Kings II Gift',
              cis_only: 0
            },
            {
              hash_name: 'Torchlight',
              title: 'Torchlight',
              cis_only: 0
            },
            {
              hash_name: 'Mother Russia Bleeds',
              title: 'Mother Russia Bleeds',
              cis_only: 0
            },
            {
              hash_name: 'Hero Academy',
              title: 'Hero Academy',
              cis_only: 0
            },
            {
              hash_name: 'Warhammer 40,000: Dawn of War II - Retribution',
              title: 'Warhammer 40,000: Dawn of War II - Retribution',
              cis_only: 0
            },
            {
              hash_name: 'Bless Online',
              title: 'Bless Online',
              cis_only: 0
            },
            {
              hash_name: 'F1 2012™',
              title: 'F1 2012™',
              cis_only: 0
            },
            {
              hash_name: "Don't Starve: Reign of Giants",
              title: "Don't Starve: Reign of Giants",
              cis_only: 0
            },
            {
              hash_name: 'Savage Lands',
              title: 'Savage Lands',
              cis_only: 0
            },
            {
              hash_name: 'Talisman: Digital Classic Edition',
              title: 'Talisman: Digital Classic Edition',
              cis_only: 0
            },
            {
              hash_name: 'Nidhogg',
              title: 'Nidhogg',
              cis_only: 0
            },
            {
              hash_name: 'Bioshock',
              title: 'Bioshock',
              cis_only: 0
            },
            {
              hash_name: 'Windborne',
              title: 'Windborne',
              cis_only: 0
            },
            {
              hash_name: 'Dead by Daylight: BETA Gift - Expired',
              title: 'Dead by Daylight: BETA Gift - Expired',
              cis_only: 0
            },
            {
              hash_name: 'Defense Grid: The Awakening',
              title: 'Defense Grid: The Awakening',
              cis_only: 0
            },
            {
              hash_name: 'Dead by Daylight: BETA Gift - Expired_cis',
              title: 'Dead by Daylight: BETA Gift - Expired',
              cis_only: 1
            },
            {
              hash_name: 'Squishy the Suicidal Pig',
              title: 'Squishy the Suicidal Pig',
              cis_only: 0
            },
            {
              hash_name: 'Magicka 2',
              title: 'Magicka 2',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 13093',
              title: 'Unknown package 13093',
              cis_only: 0
            },
            {
              hash_name: 'Damned',
              title: 'Damned',
              cis_only: 0
            },
            {
              hash_name: 'Aerena',
              title: 'Aerena',
              cis_only: 0
            },
            {
              hash_name: 'ARK: Survival Evolved',
              title: 'ARK: Survival Evolved',
              cis_only: 0
            },
            {
              hash_name: 'Sanctum',
              title: 'Sanctum',
              cis_only: 0
            },
            {
              hash_name: 'Postal 2 Complete_cis',
              title: 'Postal 2 Complete',
              cis_only: 1
            },
            {
              hash_name: 'Forge - Starter Pack',
              title: 'Forge - Starter Pack',
              cis_only: 0
            },
            {
              hash_name: 'Arma 2: Combined Operations',
              title: 'Arma 2: Combined Operations',
              cis_only: 0
            },
            {
              hash_name: "Tales of Maj'Eyal",
              title: "Tales of Maj'Eyal",
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY™ The Heist_cis',
              title: 'PAYDAY™ The Heist',
              cis_only: 1
            },
            {
              hash_name: 'Dino D-Day_cis',
              title: 'Dino D-Day',
              cis_only: 1
            },
            {
              hash_name: 'The Forest',
              title: 'The Forest',
              cis_only: 0
            },
            {
              hash_name: 'Final Exam',
              title: 'Final Exam',
              cis_only: 0
            },
            {
              hash_name: 'Windward',
              title: 'Windward',
              cis_only: 0
            },
            {
              hash_name: 'Secret Ponchos',
              title: 'Secret Ponchos',
              cis_only: 0
            },
            {
              hash_name: 'Rocket League Gift',
              title: 'Rocket League Gift',
              cis_only: 0
            },
            {
              hash_name: 'LARA CROFT AND THE TEMPLE OF OSIRIS™',
              title: 'LARA CROFT AND THE TEMPLE OF OSIRIS™',
              cis_only: 0
            },
            {
              hash_name: 'Undertale',
              title: 'Undertale',
              cis_only: 0
            },
            {
              hash_name: 'Offworld Trading Company Gift Copy',
              title: 'Offworld Trading Company Gift Copy',
              cis_only: 0
            },
            {
              hash_name: 'Worms Clan Wars',
              title: 'Worms Clan Wars',
              cis_only: 0
            },
            {
              hash_name: 'Hero Academy - Tribe Pack - Hatless Gift',
              title: 'Hero Academy - Tribe Pack - Hatless Gift',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 67613',
              title: 'Unknown package 67613',
              cis_only: 0
            },
            {
              hash_name: 'SpaceChem',
              title: 'SpaceChem',
              cis_only: 0
            },
            {
              hash_name: 'Blockstorm_cis',
              title: 'Blockstorm',
              cis_only: 1
            },
            {
              hash_name: 'Day of Defeat: Source',
              title: 'Day of Defeat: Source',
              cis_only: 0
            },
            {
              hash_name: 'Trine 3: The Artifacts of Power',
              title: 'Trine 3: The Artifacts of Power',
              cis_only: 0
            },
            {
              hash_name: "Monaco: What's Yours Is Mine",
              title: "Monaco: What's Yours Is Mine",
              cis_only: 0
            },
            {
              hash_name: 'God Mode',
              title: 'God Mode',
              cis_only: 0
            },
            {
              hash_name: "Tropico 4 Collector's Bundle",
              title: "Tropico 4 Collector's Bundle",
              cis_only: 0
            },
            {
              hash_name: 'Sonic The Hedgehog Gift Copy',
              title: 'Sonic The Hedgehog Gift Copy',
              cis_only: 0
            },
            {
              hash_name: 'Squishy the Suicidal Pig_cis',
              title: 'Squishy the Suicidal Pig',
              cis_only: 1
            },
            {
              hash_name: 'Renegade Ops',
              title: 'Renegade Ops',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® Worlds',
              title: 'LEGO® Worlds',
              cis_only: 0
            },
            {
              hash_name: 'Divinity: Original Sin Enhanced Edition Gift_cis',
              title: 'Divinity: Original Sin Enhanced Edition Gift',
              cis_only: 1
            },
            {
              hash_name: 'Anomaly 2',
              title: 'Anomaly 2',
              cis_only: 0
            },
            {
              hash_name: 'The Witcher 2: Assassins of Kings Enhanced Edition',
              title: 'The Witcher 2: Assassins of Kings Enhanced Edition',
              cis_only: 0
            },
            {
              hash_name: 'Blade Symphony',
              title: 'Blade Symphony',
              cis_only: 0
            },
            {
              hash_name: 'The Binding of Isaac: Afterbirth',
              title: 'The Binding of Isaac: Afterbirth',
              cis_only: 0
            },
            {
              hash_name: 'Pandemic Express - Zombie Escape',
              title: 'Pandemic Express - Zombie Escape',
              cis_only: 0
            },
            {
              hash_name: 'Worms Reloaded',
              title: 'Worms Reloaded',
              cis_only: 0
            },
            {
              hash_name: 'Post Apocalyptic Mayhem',
              title: 'Post Apocalyptic Mayhem',
              cis_only: 0
            },
            {
              hash_name: "Garry's Mod_cis",
              title: "Garry's Mod",
              cis_only: 1
            },
            {
              hash_name: 'Tabletop Simulator_cis',
              title: 'Tabletop Simulator',
              cis_only: 1
            },
            {
              hash_name: 'Starbound_cis',
              title: 'Starbound',
              cis_only: 1
            },
            {
              hash_name: 'Rise of the Triad',
              title: 'Rise of the Triad',
              cis_only: 0
            },
            {
              hash_name: 'Stronghold Crusader HD_cis',
              title: 'Stronghold Crusader HD',
              cis_only: 1
            },
            {
              hash_name: 'Cossacks: Back to War',
              title: 'Cossacks: Back to War',
              cis_only: 0
            },
            {
              hash_name: 'Fight The Dragon',
              title: 'Fight The Dragon',
              cis_only: 0
            },
            {
              hash_name: 'Chained Together',
              title: 'Chained Together',
              cis_only: 0
            },
            {
              hash_name: 'XCOM: Enemy Unknown - Elite Soldier Pack',
              title: 'XCOM: Enemy Unknown - Elite Soldier Pack',
              cis_only: 0
            },
            {
              hash_name: 'Real Horror Stories Ultimate Edition',
              title: 'Real Horror Stories Ultimate Edition',
              cis_only: 0
            },
            {
              hash_name: 'Screencheat',
              title: 'Screencheat',
              cis_only: 0
            },
            {
              hash_name: 'Men of War: Vietnam',
              title: 'Men of War: Vietnam',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® Batman™: The Videogame',
              title: 'LEGO® Batman™: The Videogame',
              cis_only: 0
            },
            {
              hash_name: 'Down To One',
              title: 'Down To One',
              cis_only: 0
            },
            {
              hash_name: 'Binding of Isaac: Wrath of the Lamb',
              title: 'Binding of Isaac: Wrath of the Lamb',
              cis_only: 0
            },
            {
              hash_name: 'Super Meat Boy',
              title: 'Super Meat Boy',
              cis_only: 0
            },
            {
              hash_name: 'Frozen Cortex',
              title: 'Frozen Cortex',
              cis_only: 0
            },
            {
              hash_name: 'Defense Grid: Containment Bundle',
              title: 'Defense Grid: Containment Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Super Monday Night Combat Gift_cis',
              title: 'Super Monday Night Combat Gift',
              cis_only: 1
            },
            {
              hash_name: 'Barro GT',
              title: 'Barro GT',
              cis_only: 0
            },
            {
              hash_name: 'Project Zomboid_cis',
              title: 'Project Zomboid',
              cis_only: 1
            },
            {
              hash_name: 'Euro Truck Simulator 2',
              title: 'Euro Truck Simulator 2',
              cis_only: 0
            },
            {
              hash_name: 'Morphopolis',
              title: 'Morphopolis',
              cis_only: 0
            },
            {
              hash_name: 'METAL GEAR SOLID V: GROUND ZEROES',
              title: 'METAL GEAR SOLID V: GROUND ZEROES',
              cis_only: 0
            },
            {
              hash_name: 'THE KING OF FIGHTERS 2002 UNLIMITED MATCH',
              title: 'THE KING OF FIGHTERS 2002 UNLIMITED MATCH',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 13094',
              title: 'Unknown package 13094',
              cis_only: 0
            },
            {
              hash_name: 'Iron Brigade',
              title: 'Iron Brigade',
              cis_only: 0
            },
            {
              hash_name: 'Wallpaper Engine',
              title: 'Wallpaper Engine',
              cis_only: 0
            },
            {
              hash_name: 'ORION: Prelude_cis',
              title: 'ORION: Prelude',
              cis_only: 1
            },
            {
              hash_name: 'Lethal Company',
              title: 'Lethal Company',
              cis_only: 0
            },
            {
              hash_name: 'War of the Roses Gift Sub',
              title: 'War of the Roses Gift Sub',
              cis_only: 0
            },
            {
              hash_name:
                'Shower With Your Dad Simulator 2015: Do You Still Shower With Your Dad',
              title:
                'Shower With Your Dad Simulator 2015: Do You Still Shower With Your Dad',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Rainbow Six® Siege",
              title: "Tom Clancy's Rainbow Six® Siege",
              cis_only: 0
            },
            {
              hash_name: 'AudioSurf',
              title: 'AudioSurf',
              cis_only: 0
            },
            {
              hash_name: 'Out There Somewhere',
              title: 'Out There Somewhere',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands',
              title: 'Borderlands',
              cis_only: 0
            },
            {
              hash_name: 'Half Minute Hero: The Second Coming GIFT',
              title: 'Half Minute Hero: The Second Coming GIFT',
              cis_only: 0
            },
            {
              hash_name: 'Just Cause 2',
              title: 'Just Cause 2',
              cis_only: 0
            },
            {
              hash_name: 'Toybox Turbos',
              title: 'Toybox Turbos',
              cis_only: 0
            },
            {
              hash_name: 'Buckshot Roulette',
              title: 'Buckshot Roulette',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life',
              title: 'Half-Life',
              cis_only: 0
            },
            {
              hash_name: 'AXYOS_cis',
              title: 'AXYOS',
              cis_only: 1
            },
            {
              hash_name: 'Warhammer: Vermintide 2',
              title: 'Warhammer: Vermintide 2',
              cis_only: 0
            },
            {
              hash_name: 'Sniper Elite: Nazi Zombie Army 2',
              title: 'Sniper Elite: Nazi Zombie Army 2',
              cis_only: 0
            },
            {
              hash_name: 'Sins of a Solar Empire®: Rebellion',
              title: 'Sins of a Solar Empire®: Rebellion',
              cis_only: 0
            },
            {
              hash_name: 'Rampage Knights',
              title: 'Rampage Knights',
              cis_only: 0
            },
            {
              hash_name: 'Arma 3',
              title: 'Arma 3',
              cis_only: 0
            },
            {
              hash_name: 'Backgammon Blitz',
              title: 'Backgammon Blitz',
              cis_only: 0
            },
            {
              hash_name: 'SpaceChem: 63 Corvi',
              title: 'SpaceChem: 63 Corvi',
              cis_only: 0
            },
            {
              hash_name: 'Trine 2: Complete Story Gift_cis',
              title: 'Trine 2: Complete Story Gift',
              cis_only: 1
            },
            {
              hash_name: 'Blood and Bacon',
              title: 'Blood and Bacon',
              cis_only: 0
            },
            {
              hash_name:
                'Modern Warfare® III or Call of Duty®: Warzone™ Points',
              title: 'Modern Warfare® III or Call of Duty®: Warzone™ Points',
              cis_only: 0
            },
            {
              hash_name: "King Arthur's Gold",
              title: "King Arthur's Gold",
              cis_only: 0
            },
            {
              hash_name: 'LEGO® Batman™ 2: DC Super Heroes',
              title: 'LEGO® Batman™ 2: DC Super Heroes',
              cis_only: 0
            },
            {
              hash_name: 'Crash Drive 2_cis',
              title: 'Crash Drive 2',
              cis_only: 1
            },
            {
              hash_name: 'Dead Bits',
              title: 'Dead Bits',
              cis_only: 0
            },
            {
              hash_name: 'Dead Bits_cis',
              title: 'Dead Bits',
              cis_only: 1
            },
            {
              hash_name: '99 Levels to Hell Soundtrack',
              title: '99 Levels to Hell Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Lunar Flight',
              title: 'Lunar Flight',
              cis_only: 0
            },
            {
              hash_name: 'Dead by Daylight',
              title: 'Dead by Daylight',
              cis_only: 0
            },
            {
              hash_name: 'The Hat Man: Shadow Ward',
              title: 'The Hat Man: Shadow Ward',
              cis_only: 0
            },
            {
              hash_name: 'Prince of Persia®: The Sands of Time',
              title: 'Prince of Persia®: The Sands of Time',
              cis_only: 0
            },
            {
              hash_name: "Assassin's Creed 2",
              title: "Assassin's Creed 2",
              cis_only: 0
            },
            {
              hash_name: 'Wickland',
              title: 'Wickland',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands GOTY',
              title: 'Borderlands GOTY',
              cis_only: 0
            },
            {
              hash_name: 'Overture',
              title: 'Overture',
              cis_only: 0
            },
            {
              hash_name: 'Terra Incognita Chapter One: The Descendant_cis',
              title: 'Terra Incognita Chapter One: The Descendant',
              cis_only: 1
            },
            {
              hash_name: 'Magicite',
              title: 'Magicite',
              cis_only: 0
            },
            {
              hash_name: 'Rust_cis',
              title: 'Rust',
              cis_only: 1
            },
            {
              hash_name: 'BIT.TRIP RUNNER',
              title: 'BIT.TRIP RUNNER',
              cis_only: 0
            },
            {
              hash_name:
                "THE KING OF FIGHTERS '98 ULTIMATE MATCH FINAL EDITION",
              title: "THE KING OF FIGHTERS '98 ULTIMATE MATCH FINAL EDITION",
              cis_only: 0
            },
            {
              hash_name: 'Polarity',
              title: 'Polarity',
              cis_only: 0
            },
            {
              hash_name: "Zombie Tycoon 2: Brainhov's Revenge",
              title: "Zombie Tycoon 2: Brainhov's Revenge",
              cis_only: 0
            },
            {
              hash_name: 'Demigod',
              title: 'Demigod',
              cis_only: 0
            },
            {
              hash_name: 'Rocket League® - Back to the Future™ Car Pack',
              title: 'Rocket League® - Back to the Future™ Car Pack',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam 2',
              title: 'Serious Sam 2',
              cis_only: 0
            },
            {
              hash_name: 'Tower Wars',
              title: 'Tower Wars',
              cis_only: 0
            },
            {
              hash_name: 'Lethal League',
              title: 'Lethal League',
              cis_only: 0
            },
            {
              hash_name: "FlatOut: Ultimate Carnage Collector's Edition",
              title: "FlatOut: Ultimate Carnage Collector's Edition",
              cis_only: 0
            },
            {
              hash_name: 'Magicka_cis',
              title: 'Magicka',
              cis_only: 1
            },
            {
              hash_name: 'ibb & obb_cis',
              title: 'ibb & obb',
              cis_only: 1
            },
            {
              hash_name: 'TOXIKK Gift',
              title: 'TOXIKK Gift',
              cis_only: 0
            },
            {
              hash_name: 'Age of Empires II (2013): The Forgotten',
              title: 'Age of Empires II (2013): The Forgotten',
              cis_only: 0
            },
            {
              hash_name: 'BlazeRush',
              title: 'BlazeRush',
              cis_only: 0
            },
            {
              hash_name: 'Ichi',
              title: 'Ichi',
              cis_only: 0
            },
            {
              hash_name: 'Out There Somewhere_cis',
              title: 'Out There Somewhere',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 30948',
              title: 'Unknown package 30948',
              cis_only: 0
            },
            {
              hash_name: 'Caster_cis',
              title: 'Caster',
              cis_only: 1
            },
            {
              hash_name: 'UNO',
              title: 'UNO',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 67613_cis',
              title: 'Unknown package 67613',
              cis_only: 1
            },
            {
              hash_name: 'Outlast',
              title: 'Outlast',
              cis_only: 0
            },
            {
              hash_name: 'Gas Guzzlers Extreme_cis',
              title: 'Gas Guzzlers Extreme',
              cis_only: 1
            },
            {
              hash_name: 'Worms Revolution_cis',
              title: 'Worms Revolution',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 1579',
              title: 'Unknown package 1579',
              cis_only: 0
            },
            {
              hash_name: 'The Crew Wild Run - Beta Gift Copy_cis',
              title: 'The Crew Wild Run - Beta Gift Copy',
              cis_only: 1
            },
            {
              hash_name: 'The Secret of Monkey Island: Special Edition',
              title: 'The Secret of Monkey Island: Special Edition',
              cis_only: 0
            },
            {
              hash_name: 'Stardew Valley',
              title: 'Stardew Valley',
              cis_only: 0
            },
            {
              hash_name: 'Marine Sharpshooter II: Jungle Warfare',
              title: 'Marine Sharpshooter II: Jungle Warfare',
              cis_only: 0
            },
            {
              hash_name: 'Worms W.M.D',
              title: 'Worms W.M.D',
              cis_only: 0
            },
            {
              hash_name: 'The Darkness II',
              title: 'The Darkness II',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam HD: The First Encounter Gift',
              title: 'Serious Sam HD: The First Encounter Gift',
              cis_only: 0
            },
            {
              hash_name: 'Infestation: The New Beginning',
              title: 'Infestation: The New Beginning',
              cis_only: 0
            },
            {
              hash_name: 'Blockland',
              title: 'Blockland',
              cis_only: 0
            },
            {
              hash_name: 'Mirage: Arcane Warfare Beta',
              title: 'Mirage: Arcane Warfare Beta',
              cis_only: 0
            },
            {
              hash_name: 'Sniper Ghost Warrior Gold (base + 2 DLC) Gift',
              title: 'Sniper Ghost Warrior Gold (base + 2 DLC) Gift',
              cis_only: 0
            },
            {
              hash_name: 'GTFO Alpha Gift_cis',
              title: 'GTFO Alpha Gift',
              cis_only: 1
            },
            {
              hash_name: 'SPACECOM',
              title: 'SPACECOM',
              cis_only: 0
            },
            {
              hash_name: 'Mister Furry',
              title: 'Mister Furry',
              cis_only: 0
            },
            {
              hash_name: 'Lucius',
              title: 'Lucius',
              cis_only: 0
            },
            {
              hash_name: 'XCOM: Enemy Unknown - Slingshot Pack',
              title: 'XCOM: Enemy Unknown - Slingshot Pack',
              cis_only: 0
            },
            {
              hash_name: 'Trine 2: Goblin Menace',
              title: 'Trine 2: Goblin Menace',
              cis_only: 0
            },
            {
              hash_name: 'Arma X Gift Copy',
              title: 'Arma X Gift Copy',
              cis_only: 0
            },
            {
              hash_name: 'Vegas: Make It Big™',
              title: 'Vegas: Make It Big™',
              cis_only: 0
            },
            {
              hash_name: 'Overcooked! 2',
              title: 'Overcooked! 2',
              cis_only: 0
            },
            {
              hash_name: 'RUSH',
              title: 'RUSH',
              cis_only: 0
            },
            {
              hash_name: 'Company of Heroes 2 - Ardennes Assault_cis',
              title: 'Company of Heroes 2 - Ardennes Assault',
              cis_only: 1
            },
            {
              hash_name: 'Tiny Brains',
              title: 'Tiny Brains',
              cis_only: 0
            },
            {
              hash_name: 'Kingdom Come: Deliverance',
              title: 'Kingdom Come: Deliverance',
              cis_only: 0
            },
            {
              hash_name: 'DiRT Showdown GIFT',
              title: 'DiRT Showdown GIFT',
              cis_only: 0
            },
            {
              hash_name: 'Prime Status Upgrade_cis',
              title: 'Prime Status Upgrade',
              cis_only: 1
            },
            {
              hash_name: 'Borderlands 2: Ultimate Vault Hunter Upgrade Pack 2',
              title: 'Borderlands 2: Ultimate Vault Hunter Upgrade Pack 2',
              cis_only: 0
            },
            {
              hash_name: 'Defense Grid 2 Special Edition',
              title: 'Defense Grid 2 Special Edition',
              cis_only: 0
            },
            {
              hash_name: 'Bloons TD 6',
              title: 'Bloons TD 6',
              cis_only: 0
            },
            {
              hash_name: 'Barro F22',
              title: 'Barro F22',
              cis_only: 0
            },
            {
              hash_name: 'House of Caravan_cis',
              title: 'House of Caravan',
              cis_only: 1
            },
            {
              hash_name: 'Frozen Synapse Prime_cis',
              title: 'Frozen Synapse Prime',
              cis_only: 1
            },
            {
              hash_name: 'Plazma Being_cis',
              title: 'Plazma Being',
              cis_only: 1
            },
            {
              hash_name: 'Chivalry: Deadliest Warrior',
              title: 'Chivalry: Deadliest Warrior',
              cis_only: 0
            },
            {
              hash_name: 'Robot Roller-Derby Disco Dodgeball',
              title: 'Robot Roller-Derby Disco Dodgeball',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Weapon Pack #01',
              title: 'PAYDAY 2: Gage Weapon Pack #01',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Weapon Pack #02',
              title: 'PAYDAY 2: Gage Weapon Pack #02',
              cis_only: 0
            },
            {
              hash_name: 'Landmark - Trailblazer Buddy Gift',
              title: 'Landmark - Trailblazer Buddy Gift',
              cis_only: 0
            },
            {
              hash_name: 'Nuclear Throne',
              title: 'Nuclear Throne',
              cis_only: 0
            },
            {
              hash_name: 'Daedalus - No Escape',
              title: 'Daedalus - No Escape',
              cis_only: 0
            },
            {
              hash_name: 'The Walking Dead: 400 Days',
              title: 'The Walking Dead: 400 Days',
              cis_only: 0
            },
            {
              hash_name: 'Resident Evil Revelations 2',
              title: 'Resident Evil Revelations 2',
              cis_only: 0
            },
            {
              hash_name: 'Carmageddon TDR 2000_cis',
              title: 'Carmageddon TDR 2000',
              cis_only: 1
            },
            {
              hash_name: 'Grand Theft Auto V',
              title: 'Grand Theft Auto V',
              cis_only: 0
            },
            {
              hash_name: 'METAL GEAR SOLID V: THE PHANTOM PAIN_cis',
              title: 'METAL GEAR SOLID V: THE PHANTOM PAIN',
              cis_only: 1
            },
            {
              hash_name: 'World of Diving',
              title: 'World of Diving',
              cis_only: 0
            },
            {
              hash_name: 'Wanderlust: Rebirth',
              title: 'Wanderlust: Rebirth',
              cis_only: 0
            },
            {
              hash_name: 'The Binding of Isaac',
              title: 'The Binding of Isaac',
              cis_only: 0
            },
            {
              hash_name: 'Grand Theft Auto V: Premium Edition',
              title: 'Grand Theft Auto V: Premium Edition',
              cis_only: 0
            },
            {
              hash_name: 'Mother Russia Bleeds_cis',
              title: 'Mother Russia Bleeds',
              cis_only: 1
            },
            {
              hash_name: 'Magicka: Wizard Wars - Alpha Gift',
              title: 'Magicka: Wizard Wars - Alpha Gift',
              cis_only: 0
            },
            {
              hash_name: 'Lara Croft GoL: Raziel and Kain Character Pack',
              title: 'Lara Croft GoL: Raziel and Kain Character Pack',
              cis_only: 0
            },
            {
              hash_name: 'Dying Light: The Following',
              title: 'Dying Light: The Following',
              cis_only: 0
            },
            {
              hash_name: 'Deponia_cis',
              title: 'Deponia',
              cis_only: 1
            },
            {
              hash_name: "Tom Clancy's Rainbow Six® 3 Gold",
              title: "Tom Clancy's Rainbow Six® 3 Gold",
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam 3 Standard',
              title: 'Serious Sam 3 Standard',
              cis_only: 0
            },
            {
              hash_name: 'Puzzle Agent',
              title: 'Puzzle Agent',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Hotline Miami',
              title: 'PAYDAY 2: Hotline Miami',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 90424',
              title: 'Unknown package 90424',
              cis_only: 0
            },
            {
              hash_name: 'Saints Row: The Third - The Full Package',
              title: 'Saints Row: The Third - The Full Package',
              cis_only: 0
            },
            {
              hash_name: 'Depth_cis',
              title: 'Depth',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 30182',
              title: 'Unknown package 30182',
              cis_only: 0
            },
            {
              hash_name: 'Cossacks II: Battle for Europe',
              title: 'Cossacks II: Battle for Europe',
              cis_only: 0
            },
            {
              hash_name: 'ARK: Scorched Earth - Expansion Pack',
              title: 'ARK: Scorched Earth - Expansion Pack',
              cis_only: 0
            },
            {
              hash_name: 'Just Cause',
              title: 'Just Cause',
              cis_only: 0
            },
            {
              hash_name: 'Duke Nukem 3D Gift',
              title: 'Duke Nukem 3D Gift',
              cis_only: 0
            },
            {
              hash_name: 'Despair',
              title: 'Despair',
              cis_only: 0
            },
            {
              hash_name: 'Ricochet',
              title: 'Ricochet',
              cis_only: 0
            },
            {
              hash_name: 'Brutal Legend',
              title: 'Brutal Legend',
              cis_only: 0
            },
            {
              hash_name: 'Batman™: Arkham Origins',
              title: 'Batman™: Arkham Origins',
              cis_only: 0
            },
            {
              hash_name: 'The Binding of Isaac_cis',
              title: 'The Binding of Isaac',
              cis_only: 1
            },
            {
              hash_name: 'METAL SLUG_cis',
              title: 'METAL SLUG',
              cis_only: 1
            },
            {
              hash_name: 'Flower',
              title: 'Flower',
              cis_only: 0
            },
            {
              hash_name: 'Edge of Space',
              title: 'Edge of Space',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: The Diamond Heist',
              title: 'PAYDAY 2: The Diamond Heist',
              cis_only: 0
            },
            {
              hash_name: 'Metro 2033',
              title: 'Metro 2033',
              cis_only: 0
            },
            {
              hash_name: 'Space Engineers_cis',
              title: 'Space Engineers',
              cis_only: 1
            },
            {
              hash_name: 'Bully: Scholarship Edition',
              title: 'Bully: Scholarship Edition',
              cis_only: 0
            },
            {
              hash_name: 'The Red Solstice',
              title: 'The Red Solstice',
              cis_only: 0
            },
            {
              hash_name: 'Castle Crashers - Pink Knight Pack',
              title: 'Castle Crashers - Pink Knight Pack',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 1580',
              title: 'Unknown package 1580',
              cis_only: 0
            },
            {
              hash_name: '12 Labours of Hercules II: The Cretan Bull_cis',
              title: '12 Labours of Hercules II: The Cretan Bull',
              cis_only: 1
            },
            {
              hash_name: 'Air Conflicts: Pacific Carriers',
              title: 'Air Conflicts: Pacific Carriers',
              cis_only: 0
            },
            {
              hash_name: 'Outlast: Whistleblower DLC',
              title: 'Outlast: Whistleblower DLC',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 16535',
              title: 'Unknown package 16535',
              cis_only: 0
            },
            {
              hash_name: 'Trapped Dead',
              title: 'Trapped Dead',
              cis_only: 0
            },
            {
              hash_name: 'Infestation: Survivor Stories 2020',
              title: 'Infestation: Survivor Stories 2020',
              cis_only: 0
            },
            {
              hash_name: 'Unturned - Permanent Gold Upgrade',
              title: 'Unturned - Permanent Gold Upgrade',
              cis_only: 0
            },
            {
              hash_name: 'Trapped Dead: Lockdown',
              title: 'Trapped Dead: Lockdown',
              cis_only: 0
            },
            {
              hash_name: 'Air Conflicts: Secret Wars',
              title: 'Air Conflicts: Secret Wars',
              cis_only: 0
            },
            {
              hash_name: 'Minimum',
              title: 'Minimum',
              cis_only: 0
            },
            {
              hash_name: 'LIZARDS MUST DIE',
              title: 'LIZARDS MUST DIE',
              cis_only: 0
            },
            {
              hash_name: 'Uplink',
              title: 'Uplink',
              cis_only: 0
            },
            {
              hash_name: 'Waveform',
              title: 'Waveform',
              cis_only: 0
            },
            {
              hash_name: 'Cossacks: European Wars',
              title: 'Cossacks: European Wars',
              cis_only: 0
            },
            {
              hash_name: 'Onikira - Demon Killer',
              title: 'Onikira - Demon Killer',
              cis_only: 0
            },
            {
              hash_name: 'LOCKDOWN Protocol',
              title: 'LOCKDOWN Protocol',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 54030_cis',
              title: 'Unknown package 54030',
              cis_only: 1
            },
            {
              hash_name: 'Primal Carnage',
              title: 'Primal Carnage',
              cis_only: 0
            },
            {
              hash_name: 'Trine 2: Complete Story',
              title: 'Trine 2: Complete Story',
              cis_only: 0
            },
            {
              hash_name: "Bad Rats: the Rats' Revenge_cis",
              title: "Bad Rats: the Rats' Revenge",
              cis_only: 1
            },
            {
              hash_name: "Don't Starve: Shipwrecked",
              title: "Don't Starve: Shipwrecked",
              cis_only: 0
            },
            {
              hash_name: 'Ratz Instagib',
              title: 'Ratz Instagib',
              cis_only: 0
            },
            {
              hash_name:
                'Dawn of War II - Retribution - The Last Standalone_cis',
              title: 'Dawn of War II - Retribution - The Last Standalone',
              cis_only: 1
            },
            {
              hash_name: 'Overcast - Walden and the Werewolf',
              title: 'Overcast - Walden and the Werewolf',
              cis_only: 0
            },
            {
              hash_name: 'Arma 3 Karts',
              title: 'Arma 3 Karts',
              cis_only: 0
            },
            {
              hash_name: 'StarMade',
              title: 'StarMade',
              cis_only: 0
            },
            {
              hash_name: 'Medieval Engineers Deluxe Gift',
              title: 'Medieval Engineers Deluxe Gift',
              cis_only: 0
            },
            {
              hash_name: 'Skullgirls 2nd Encore_cis',
              title: 'Skullgirls 2nd Encore',
              cis_only: 1
            },
            {
              hash_name: 'Valkyria Chronicles™',
              title: 'Valkyria Chronicles™',
              cis_only: 0
            },
            {
              hash_name: 'Arma Tactics',
              title: 'Arma Tactics',
              cis_only: 0
            },
            {
              hash_name: 'Insecticide Part 1',
              title: 'Insecticide Part 1',
              cis_only: 0
            },
            {
              hash_name: 'RUNNING WITH RIFLES',
              title: 'RUNNING WITH RIFLES',
              cis_only: 0
            },
            {
              hash_name: 'Bloodsports Gift',
              title: 'Bloodsports Gift',
              cis_only: 0
            },
            {
              hash_name: 'ENDLESS™ Space - Definitive Edition',
              title: 'ENDLESS™ Space - Definitive Edition',
              cis_only: 0
            },
            {
              hash_name: 'Dungeons & Dragons: Chronicles of Mystara',
              title: 'Dungeons & Dragons: Chronicles of Mystara',
              cis_only: 0
            },
            {
              hash_name: 'DEFCON',
              title: 'DEFCON',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 2487',
              title: 'Unknown package 2487',
              cis_only: 0
            },
            {
              hash_name: 'NieR:Automata™',
              title: 'NieR:Automata™',
              cis_only: 0
            },
            {
              hash_name: 'State of Decay - Breakdown',
              title: 'State of Decay - Breakdown',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Clover Character Pack',
              title: 'PAYDAY 2: Clover Character Pack',
              cis_only: 0
            },
            {
              hash_name: 'Mercenary Kings: Reloaded Edition',
              title: 'Mercenary Kings: Reloaded Edition',
              cis_only: 0
            },
            {
              hash_name: "Who's Your Daddy?!",
              title: "Who's Your Daddy?!",
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Historical Pack',
              title: 'PAYDAY 2: Gage Historical Pack',
              cis_only: 0
            },
            {
              hash_name: 'Bloody Trapland_cis',
              title: 'Bloody Trapland',
              cis_only: 1
            },
            {
              hash_name: 'Victor Vran 4- pack gift',
              title: 'Victor Vran 4- pack gift',
              cis_only: 0
            },
            {
              hash_name: 'The Haunted: Hells Reach',
              title: 'The Haunted: Hells Reach',
              cis_only: 0
            },
            {
              hash_name: 'Monster Loves You!',
              title: 'Monster Loves You!',
              cis_only: 0
            },
            {
              hash_name: 'Splatter - Zombiecalypse Now',
              title: 'Splatter - Zombiecalypse Now',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 58514_cis',
              title: 'Unknown package 58514',
              cis_only: 1
            },
            {
              hash_name: 'Plants vs. Zombies GOTY Edition',
              title: 'Plants vs. Zombies GOTY Edition',
              cis_only: 0
            },
            {
              hash_name: 'Congo',
              title: 'Congo',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty®: Modern Warfare® 2 Stimulus Package',
              title: 'Call of Duty®: Modern Warfare® 2 Stimulus Package',
              cis_only: 0
            },
            {
              hash_name: 'SPORE™ Creepy & Cute Parts Pack',
              title: 'SPORE™ Creepy & Cute Parts Pack',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Sniper Pack',
              title: 'PAYDAY 2: Gage Sniper Pack',
              cis_only: 0
            },
            {
              hash_name: 'The Survivalists',
              title: 'The Survivalists',
              cis_only: 0
            },
            {
              hash_name: 'Interloper',
              title: 'Interloper',
              cis_only: 0
            },
            {
              hash_name: 'DRAGON BALL XENOVERSE_cis',
              title: 'DRAGON BALL XENOVERSE',
              cis_only: 1
            },
            {
              hash_name: 'How to Survive',
              title: 'How to Survive',
              cis_only: 0
            },
            {
              hash_name: 'Defiance',
              title: 'Defiance',
              cis_only: 0
            },
            {
              hash_name: 'Remnant: From the Ashes',
              title: 'Remnant: From the Ashes',
              cis_only: 0
            },
            {
              hash_name: 'BIT.TRIP BEAT',
              title: 'BIT.TRIP BEAT',
              cis_only: 0
            },
            {
              hash_name: 'Zombie Driver HD',
              title: 'Zombie Driver HD',
              cis_only: 0
            },
            {
              hash_name: 'ShellShock Live_cis',
              title: 'ShellShock Live',
              cis_only: 1
            },
            {
              hash_name: 'Hentai Furry',
              title: 'Hentai Furry',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 80561',
              title: 'Unknown package 80561',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 42337_cis',
              title: 'Unknown package 42337',
              cis_only: 1
            },
            {
              hash_name: 'Robotex',
              title: 'Robotex',
              cis_only: 0
            },
            {
              hash_name: 'Morphopolis_cis',
              title: 'Morphopolis',
              cis_only: 1
            },
            {
              hash_name: 'Hentai Furry 2',
              title: 'Hentai Furry 2',
              cis_only: 0
            },
            {
              hash_name: 'Defy Gravity Extended_cis',
              title: 'Defy Gravity Extended',
              cis_only: 1
            },
            {
              hash_name: 'Divinity: Original Sin',
              title: 'Divinity: Original Sin',
              cis_only: 0
            },
            {
              hash_name: 'Poker Night at the Inventory',
              title: 'Poker Night at the Inventory',
              cis_only: 0
            },
            {
              hash_name: 'Content Warning',
              title: 'Content Warning',
              cis_only: 0
            },
            {
              hash_name: 'Fallout New Vegas Ultimate PCR',
              title: 'Fallout New Vegas Ultimate PCR',
              cis_only: 0
            },
            {
              hash_name: 'Interstellar Marines_cis',
              title: 'Interstellar Marines',
              cis_only: 1
            },
            {
              hash_name: 'Resident Evil 5',
              title: 'Resident Evil 5',
              cis_only: 0
            },
            {
              hash_name: 'Carmageddon 1 and 2_cis',
              title: 'Carmageddon 1 and 2',
              cis_only: 1
            },
            {
              hash_name: 'Terrorhedron Tower Defense',
              title: 'Terrorhedron Tower Defense',
              cis_only: 0
            },
            {
              hash_name: 'Lara Croft and the Guardian of Light',
              title: 'Lara Croft and the Guardian of Light',
              cis_only: 0
            },
            {
              hash_name: 'Divinity: Original Sin 2 - Definitive Edition',
              title: 'Divinity: Original Sin 2 - Definitive Edition',
              cis_only: 0
            },
            {
              hash_name: 'Dead Horde',
              title: 'Dead Horde',
              cis_only: 0
            },
            {
              hash_name: 'Grand Theft Auto IV: The Complete Edition_cis',
              title: 'Grand Theft Auto IV: The Complete Edition',
              cis_only: 1
            },
            {
              hash_name: 'Stellar Impact - Artillery Ship DLC',
              title: 'Stellar Impact - Artillery Ship DLC',
              cis_only: 0
            },
            {
              hash_name: 'Star Saviors',
              title: 'Star Saviors',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - French Paint Jobs Pack',
              title: 'Euro Truck Simulator 2 - French Paint Jobs Pack',
              cis_only: 0
            },
            {
              hash_name: 'Woodle Tree Adventures',
              title: 'Woodle Tree Adventures',
              cis_only: 0
            },
            {
              hash_name: 'Saints Row 2',
              title: 'Saints Row 2',
              cis_only: 0
            },
            {
              hash_name: 'Section 8: Prejudice',
              title: 'Section 8: Prejudice',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 13095',
              title: 'Unknown package 13095',
              cis_only: 0
            },
            {
              hash_name: 'Action Henk',
              title: 'Action Henk',
              cis_only: 0
            },
            {
              hash_name: 'The Banner Saga',
              title: 'The Banner Saga',
              cis_only: 0
            },
            {
              hash_name: 'Asteria',
              title: 'Asteria',
              cis_only: 0
            },
            {
              hash_name: 'SURVIVAL: Postapocalypse Now',
              title: 'SURVIVAL: Postapocalypse Now',
              cis_only: 0
            },
            {
              hash_name: 'FlatOut 2_cis',
              title: 'FlatOut 2',
              cis_only: 1
            },
            {
              hash_name: 'LARA CROFT AND THE TEMPLE OF OSIRIS™_cis',
              title: 'LARA CROFT AND THE TEMPLE OF OSIRIS™',
              cis_only: 1
            },
            {
              hash_name: 'Deponia',
              title: 'Deponia',
              cis_only: 0
            },
            {
              hash_name: 'Deponia Doomsday_cis',
              title: 'Deponia Doomsday',
              cis_only: 1
            },
            {
              hash_name: 'Damned_cis',
              title: 'Damned',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 29197_cis',
              title: 'Unknown package 29197',
              cis_only: 1
            },
            {
              hash_name: 'CarX Street - DLC Sunset Speedway',
              title: 'CarX Street - DLC Sunset Speedway',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Rainbow Six Siege - Beta Gift_cis",
              title: "Tom Clancy's Rainbow Six Siege - Beta Gift",
              cis_only: 1
            },
            {
              hash_name: 'Black Myth: Wukong',
              title: 'Black Myth: Wukong',
              cis_only: 0
            },
            {
              hash_name: 'Stick Fight: The Game',
              title: 'Stick Fight: The Game',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - High Power Cargo Pack',
              title: 'Euro Truck Simulator 2 - High Power Cargo Pack',
              cis_only: 0
            },
            {
              hash_name: 'World of Goo',
              title: 'World of Goo',
              cis_only: 0
            },
            {
              hash_name: 'Duck Game_cis',
              title: 'Duck Game',
              cis_only: 1
            },
            {
              hash_name: 'I am Weapon: Revival',
              title: 'I am Weapon: Revival',
              cis_only: 0
            },
            {
              hash_name: 'Dead Island GOTY Gift',
              title: 'Dead Island GOTY Gift',
              cis_only: 0
            },
            {
              hash_name:
                'Civilization V - Scenario Pack: Wonders of the Ancient World',
              title:
                'Civilization V - Scenario Pack: Wonders of the Ancient World',
              cis_only: 0
            },
            {
              hash_name: 'Apewar',
              title: 'Apewar',
              cis_only: 0
            },
            {
              hash_name: 'Ostrich Island_cis',
              title: 'Ostrich Island',
              cis_only: 1
            },
            {
              hash_name: 'Broforce_cis',
              title: 'Broforce',
              cis_only: 1
            },
            {
              hash_name: 'Caster',
              title: 'Caster',
              cis_only: 0
            },
            {
              hash_name: 'Hacker Evolution: Untold',
              title: 'Hacker Evolution: Untold',
              cis_only: 0
            },
            {
              hash_name: 'Sweet SKY',
              title: 'Sweet SKY',
              cis_only: 0
            },
            {
              hash_name: 'Future Wars',
              title: 'Future Wars',
              cis_only: 0
            },
            {
              hash_name: "Magicka: Wizard's Survival Kit",
              title: "Magicka: Wizard's Survival Kit",
              cis_only: 0
            },
            {
              hash_name: 'Larva Mortus',
              title: 'Larva Mortus',
              cis_only: 0
            },
            {
              hash_name: 'I Have No Mouth, and I Must Scream',
              title: 'I Have No Mouth, and I Must Scream',
              cis_only: 0
            },
            {
              hash_name: 'Age of Empires II (2013)',
              title: 'Age of Empires II (2013)',
              cis_only: 0
            },
            {
              hash_name: 'Broken Dreams',
              title: 'Broken Dreams',
              cis_only: 0
            },
            {
              hash_name: 'METAL SLUG X',
              title: 'METAL SLUG X',
              cis_only: 0
            },
            {
              hash_name: 'Game of Thrones',
              title: 'Game of Thrones',
              cis_only: 0
            },
            {
              hash_name: "Liar's Bar",
              title: "Liar's Bar",
              cis_only: 0
            },
            {
              hash_name: 'Sniper Elite 3',
              title: 'Sniper Elite 3',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 140146',
              title: 'Unknown package 140146',
              cis_only: 0
            },
            {
              hash_name: 'The Witcher 3: Wild Hunt',
              title: 'The Witcher 3: Wild Hunt',
              cis_only: 0
            },
            {
              hash_name: 'The Binding of Isaac: Rebirth - Soundtrack',
              title: 'The Binding of Isaac: Rebirth - Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Avadon: The Black Fortress',
              title: 'Avadon: The Black Fortress',
              cis_only: 0
            },
            {
              hash_name: 'Life is Feudal: Your Own Gift (2-pack)',
              title: 'Life is Feudal: Your Own Gift (2-pack)',
              cis_only: 0
            },
            {
              hash_name: 'Space Empires V',
              title: 'Space Empires V',
              cis_only: 0
            },
            {
              hash_name: 'Layers of Fear (2016)',
              title: 'Layers of Fear (2016)',
              cis_only: 0
            },
            {
              hash_name:
                "Sid Meier's Civilization: Beyond Earth Exoplanets Map Pack",
              title:
                "Sid Meier's Civilization: Beyond Earth Exoplanets Map Pack",
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 91065',
              title: 'Unknown package 91065',
              cis_only: 0
            },
            {
              hash_name: 'DogFighter',
              title: 'DogFighter',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: The Big Bank Heist',
              title: 'PAYDAY 2: The Big Bank Heist',
              cis_only: 0
            },
            {
              hash_name:
                'Mount & Blade: Warband - Viking Conquest Reforged Edition',
              title:
                'Mount & Blade: Warband - Viking Conquest Reforged Edition',
              cis_only: 0
            },
            {
              hash_name: 'DogFighter_cis',
              title: 'DogFighter',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 48977',
              title: 'Unknown package 48977',
              cis_only: 0
            },
            {
              hash_name: 'RIFT',
              title: 'RIFT',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 11274',
              title: 'Unknown package 11274',
              cis_only: 0
            },
            {
              hash_name: "The Witcher: Enhanced Edition Director's Cut",
              title: "The Witcher: Enhanced Edition Director's Cut",
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - USA Paint Jobs Pack',
              title: 'Euro Truck Simulator 2 - USA Paint Jobs Pack',
              cis_only: 0
            },
            {
              hash_name: 'ELDEN RING Shadow of the Erdtree',
              title: 'ELDEN RING Shadow of the Erdtree',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 99222',
              title: 'Unknown package 99222',
              cis_only: 0
            },
            {
              hash_name: 'Dead Sky',
              title: 'Dead Sky',
              cis_only: 0
            },
            {
              hash_name: 'TrackMania² Stadium',
              title: 'TrackMania² Stadium',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2 Game of the Year',
              title: 'Borderlands 2 Game of the Year',
              cis_only: 0
            },
            {
              hash_name: 'Nation Red_cis',
              title: 'Nation Red',
              cis_only: 1
            },
            {
              hash_name: 'The Chaos Engine',
              title: 'The Chaos Engine',
              cis_only: 0
            },
            {
              hash_name: 'Greed Corp',
              title: 'Greed Corp',
              cis_only: 0
            },
            {
              hash_name: 'Metro 2033 Redux',
              title: 'Metro 2033 Redux',
              cis_only: 0
            },
            {
              hash_name: 'Street Fighter V Beta Gift_cis',
              title: 'Street Fighter V Beta Gift',
              cis_only: 1
            },
            {
              hash_name: 'Left 4 Dead 2 (DE)',
              title: 'Left 4 Dead 2 (DE)',
              cis_only: 0
            },
            {
              hash_name: 'Left 4 Dead 2 - Gamescon',
              title: 'Left 4 Dead 2 - Gamescon',
              cis_only: 0
            },
            {
              hash_name: 'Warhammer 40,000: Eternal Crusade_cis',
              title: 'Warhammer 40,000: Eternal Crusade',
              cis_only: 1
            },
            {
              hash_name: "Don't Starve Soundtrack",
              title: "Don't Starve Soundtrack",
              cis_only: 0
            },
            {
              hash_name: 'DARK SOULS™: Prepare To Die™ Edition_cis',
              title: 'DARK SOULS™: Prepare To Die™ Edition',
              cis_only: 1
            },
            {
              hash_name: 'Castle Crashers - Blacksmith Pack',
              title: 'Castle Crashers - Blacksmith Pack',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2 Season Pass',
              title: 'Borderlands 2 Season Pass',
              cis_only: 0
            },
            {
              hash_name: 'Microsoft Flight Simulator X: Steam Edition_cis',
              title: 'Microsoft Flight Simulator X: Steam Edition',
              cis_only: 1
            },
            {
              hash_name: 'Foreign Legion: Multi Massacre',
              title: 'Foreign Legion: Multi Massacre',
              cis_only: 0
            },
            {
              hash_name: 'Lilly and Sasha: Curse of the Immortals_cis',
              title: 'Lilly and Sasha: Curse of the Immortals',
              cis_only: 1
            },
            {
              hash_name: 'Space Forerunner Fleet Pack Gift',
              title: 'Space Forerunner Fleet Pack Gift',
              cis_only: 0
            },
            {
              hash_name:
                'Europa Universalis IV: Guns, Drums and Steel Music Pack',
              title: 'Europa Universalis IV: Guns, Drums and Steel Music Pack',
              cis_only: 0
            },
            {
              hash_name: 'FarSky',
              title: 'FarSky',
              cis_only: 0
            },
            {
              hash_name: 'Khet 2.0',
              title: 'Khet 2.0',
              cis_only: 0
            },
            {
              hash_name: 'Left 4 Dead 2_cis',
              title: 'Left 4 Dead 2',
              cis_only: 1
            },
            {
              hash_name: "Sid Meier's Civilization® V_cis",
              title: "Sid Meier's Civilization® V",
              cis_only: 1
            },
            {
              hash_name: 'Heroes of Might & Magic V: Hammers of Fate_cis',
              title: 'Heroes of Might & Magic V: Hammers of Fate',
              cis_only: 1
            },
            {
              hash_name: 'Unpacking',
              title: 'Unpacking',
              cis_only: 0
            },
            {
              hash_name:
                'Rocket League® - Batman v Superman: Dawn of Justice Car Pack',
              title:
                'Rocket League® - Batman v Superman: Dawn of Justice Car Pack',
              cis_only: 0
            },
            {
              hash_name: 'PARTICLE MACE_cis',
              title: 'PARTICLE MACE',
              cis_only: 1
            },
            {
              hash_name: 'Middle-earth™: Shadow of War™',
              title: 'Middle-earth™: Shadow of War™',
              cis_only: 0
            },
            {
              hash_name: 'Marble Mayhem: Fragile Ball',
              title: 'Marble Mayhem: Fragile Ball',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 68616',
              title: 'Unknown package 68616',
              cis_only: 0
            },
            {
              hash_name: 'Quake Live',
              title: 'Quake Live',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: The OVERKILL Pack_cis',
              title: 'PAYDAY 2: The OVERKILL Pack',
              cis_only: 1
            },
            {
              hash_name: 'POSTAL 2: Paradise Lost',
              title: 'POSTAL 2: Paradise Lost',
              cis_only: 0
            },
            {
              hash_name: 'Marble Mayhem: Fragile Ball_cis',
              title: 'Marble Mayhem: Fragile Ball',
              cis_only: 1
            },
            {
              hash_name: 'Feign',
              title: 'Feign',
              cis_only: 0
            },
            {
              hash_name: 'Worms Ultimate Mayhem_cis',
              title: 'Worms Ultimate Mayhem',
              cis_only: 1
            },
            {
              hash_name: 'Dungeon Defenders Halloween Mission Pack',
              title: 'Dungeon Defenders Halloween Mission Pack',
              cis_only: 0
            },
            {
              hash_name: 'Sanctum_cis',
              title: 'Sanctum',
              cis_only: 1
            },
            {
              hash_name: 'Detroit: Become Human',
              title: 'Detroit: Become Human',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 68943',
              title: 'Unknown package 68943',
              cis_only: 0
            },
            {
              hash_name: 'Raft',
              title: 'Raft',
              cis_only: 0
            },
            {
              hash_name: 'Cossacks II: Napoleonic Wars',
              title: 'Cossacks II: Napoleonic Wars',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 33495',
              title: 'Unknown package 33495',
              cis_only: 0
            },
            {
              hash_name: 'Power of Love',
              title: 'Power of Love',
              cis_only: 0
            },
            {
              hash_name: 'Castle Crashers®_cis',
              title: 'Castle Crashers®',
              cis_only: 1
            },
            {
              hash_name: '12 Labours of Hercules III: Girl Power',
              title: '12 Labours of Hercules III: Girl Power',
              cis_only: 0
            },
            {
              hash_name: 'Air Conflicts: Pacific Carriers_cis',
              title: 'Air Conflicts: Pacific Carriers',
              cis_only: 1
            },
            {
              hash_name: 'Outlast: Whistleblower DLC_cis',
              title: 'Outlast: Whistleblower DLC',
              cis_only: 1
            },
            {
              hash_name: 'Tales of Zestiria',
              title: 'Tales of Zestiria',
              cis_only: 0
            },
            {
              hash_name: 'Legend of Mysteria RPG',
              title: 'Legend of Mysteria RPG',
              cis_only: 0
            },
            {
              hash_name: 'Deus Ex: Game of the Year Edition',
              title: 'Deus Ex: Game of the Year Edition',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 52597',
              title: 'Unknown package 52597',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 72017',
              title: 'Unknown package 72017',
              cis_only: 0
            },
            {
              hash_name: 'NBA 2K16',
              title: 'NBA 2K16',
              cis_only: 0
            },
            {
              hash_name: 'One Shot Escape DLC',
              title: 'One Shot Escape DLC',
              cis_only: 0
            },
            {
              hash_name: 'Grid Gift',
              title: 'Grid Gift',
              cis_only: 0
            },
            {
              hash_name: 'Back 4 Blood',
              title: 'Back 4 Blood',
              cis_only: 0
            },
            {
              hash_name: 'Forza Horizon 4',
              title: 'Forza Horizon 4',
              cis_only: 0
            },
            {
              hash_name: 'Max Payne 3',
              title: 'Max Payne 3',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders II',
              title: 'Dungeon Defenders II',
              cis_only: 0
            },
            {
              hash_name: "Upgrade to Trine 2 Collector's Edition",
              title: "Upgrade to Trine 2 Collector's Edition",
              cis_only: 0
            },
            {
              hash_name: 'Darwinia',
              title: 'Darwinia',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12671',
              title: 'Unknown package 12671',
              cis_only: 0
            },
            {
              hash_name: 'The Showdown Effect Standard Gift',
              title: 'The Showdown Effect Standard Gift',
              cis_only: 0
            },
            {
              hash_name: 'Max Payne 3: Classic Max Payne Character',
              title: 'Max Payne 3: Classic Max Payne Character',
              cis_only: 0
            },
            {
              hash_name: 'X-COM: Terror From the Deep',
              title: 'X-COM: Terror From the Deep',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam HD: The Second  Encounter Gift',
              title: 'Serious Sam HD: The Second  Encounter Gift',
              cis_only: 0
            },
            {
              hash_name: 'Rogue Stormers',
              title: 'Rogue Stormers',
              cis_only: 0
            },
            {
              hash_name: 'Deadlight Original Soundtrack',
              title: 'Deadlight Original Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'DEVOUR',
              title: 'DEVOUR',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 54030',
              title: 'Unknown package 54030',
              cis_only: 0
            },
            {
              hash_name: 'Ranch Simulator: Build, Hunt, Farm',
              title: 'Ranch Simulator: Build, Hunt, Farm',
              cis_only: 0
            },
            {
              hash_name: 'Rising Storm Game of the Year Edition',
              title: 'Rising Storm Game of the Year Edition',
              cis_only: 0
            },
            {
              hash_name: 'Airscape - The Fall of Gravity_cis',
              title: 'Airscape - The Fall of Gravity',
              cis_only: 1
            },
            {
              hash_name: 'Over 9000 Zombies!_cis',
              title: 'Over 9000 Zombies!',
              cis_only: 1
            },
            {
              hash_name: 'The Elder Scrolls V: Skyrim',
              title: 'The Elder Scrolls V: Skyrim',
              cis_only: 0
            },
            {
              hash_name: 'StarForge Founders Club Gift',
              title: 'StarForge Founders Club Gift',
              cis_only: 0
            },
            {
              hash_name: 'McDROID',
              title: 'McDROID',
              cis_only: 0
            },
            {
              hash_name: 'Seven Kingdoms 2 HD',
              title: 'Seven Kingdoms 2 HD',
              cis_only: 0
            },
            {
              hash_name: 'Rising Storm Gift',
              title: 'Rising Storm Gift',
              cis_only: 0
            },
            {
              hash_name: 'Counter-Strike 2',
              title: 'Counter-Strike 2',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY™ The Heist: Wolfpack DLC',
              title: 'PAYDAY™ The Heist: Wolfpack DLC',
              cis_only: 0
            },
            {
              hash_name: 'Caveman World: Mountains of Unga Boonga',
              title: 'Caveman World: Mountains of Unga Boonga',
              cis_only: 0
            },
            {
              hash_name: '6.0',
              title: '6.0',
              cis_only: 0
            },
            {
              hash_name: 'THIEF: The Bank Heist',
              title: 'THIEF: The Bank Heist',
              cis_only: 0
            },
            {
              hash_name: "Hamilton's Great Adventure",
              title: "Hamilton's Great Adventure",
              cis_only: 0
            },
            {
              hash_name: 'Frankenstein: Master of Death',
              title: 'Frankenstein: Master of Death',
              cis_only: 0
            },
            {
              hash_name: 'GiAnt - A GiAnt Soundtrack',
              title: 'GiAnt - A GiAnt Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Lords of the Fallen - The Arcane Boost',
              title: 'Lords of the Fallen - The Arcane Boost',
              cis_only: 0
            },
            {
              hash_name: 'USFIV: All-in 2011 Costume Pack',
              title: 'USFIV: All-in 2011 Costume Pack',
              cis_only: 0
            },
            {
              hash_name: 'Savage Lands_cis',
              title: 'Savage Lands',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 54109',
              title: 'Unknown package 54109',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 18246',
              title: 'Unknown package 18246',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 36075',
              title: 'Unknown package 36075',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY™ The Heist: Wolfpack DLC_cis',
              title: 'PAYDAY™ The Heist: Wolfpack DLC',
              cis_only: 1
            },
            {
              hash_name: 'Alice: Madness Returns',
              title: 'Alice: Madness Returns',
              cis_only: 0
            },
            {
              hash_name: 'Payday 2 Gift from John Wick',
              title: 'Payday 2 Gift from John Wick',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty®: Black Ops - Rezurrection Content Pack',
              title: 'Call of Duty®: Black Ops - Rezurrection Content Pack',
              cis_only: 0
            },
            {
              hash_name: "Baldur's Gate 3",
              title: "Baldur's Gate 3",
              cis_only: 0
            },
            {
              hash_name: 'Frankenstein: Master of Death_cis',
              title: 'Frankenstein: Master of Death',
              cis_only: 1
            },
            {
              hash_name: 'Sniper: Ghost Warrior 2',
              title: 'Sniper: Ghost Warrior 2',
              cis_only: 0
            },
            {
              hash_name: 'Save Jesus',
              title: 'Save Jesus',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 54408_cis',
              title: 'Unknown package 54408',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 74582',
              title: 'Unknown package 74582',
              cis_only: 0
            },
            {
              hash_name: 'Chaos on Deponia',
              title: 'Chaos on Deponia',
              cis_only: 0
            },
            {
              hash_name: 'Overcast - Walden and the Werewolf_cis',
              title: 'Overcast - Walden and the Werewolf',
              cis_only: 1
            },
            {
              hash_name: 'Banished_cis',
              title: 'Banished',
              cis_only: 1
            },
            {
              hash_name: 'SPACECOM_cis',
              title: 'SPACECOM',
              cis_only: 1
            },
            {
              hash_name: 'Faerie Solitaire',
              title: 'Faerie Solitaire',
              cis_only: 0
            },
            {
              hash_name: 'Rubber Bandits',
              title: 'Rubber Bandits',
              cis_only: 0
            },
            {
              hash_name: 'DayZ',
              title: 'DayZ',
              cis_only: 0
            },
            {
              hash_name: 'Peekaboo',
              title: 'Peekaboo',
              cis_only: 0
            },
            {
              hash_name: 'Primal Carnage_cis',
              title: 'Primal Carnage',
              cis_only: 1
            },
            {
              hash_name: 'Blood and Ice',
              title: 'Blood and Ice',
              cis_only: 0
            },
            {
              hash_name: 'Muse Dash',
              title: 'Muse Dash',
              cis_only: 0
            },
            {
              hash_name: 'Super Hipster Lumberjack',
              title: 'Super Hipster Lumberjack',
              cis_only: 0
            },
            {
              hash_name: 'Soccer Online: Ball 3D',
              title: 'Soccer Online: Ball 3D',
              cis_only: 0
            },
            {
              hash_name: 'XCOM: Enemy Within',
              title: 'XCOM: Enemy Within',
              cis_only: 0
            },
            {
              hash_name: 'Shadowgrounds',
              title: 'Shadowgrounds',
              cis_only: 0
            },
            {
              hash_name: 'WhaleGameOnline',
              title: 'WhaleGameOnline',
              cis_only: 0
            },
            {
              hash_name: 'Deep Rock Galactic',
              title: 'Deep Rock Galactic',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 54909',
              title: 'Unknown package 54909',
              cis_only: 0
            },
            {
              hash_name: 'Risk of Rain (2013)_cis',
              title: 'Risk of Rain (2013)',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 219',
              title: 'Unknown package 219',
              cis_only: 0
            },
            {
              hash_name: 'The Forest_cis',
              title: 'The Forest',
              cis_only: 1
            },
            {
              hash_name: 'Barony',
              title: 'Barony',
              cis_only: 0
            },
            {
              hash_name: "King Arthur's Gold_cis",
              title: "King Arthur's Gold",
              cis_only: 1
            },
            {
              hash_name: 'Velvet Assassin',
              title: 'Velvet Assassin',
              cis_only: 0
            },
            {
              hash_name: 'White Noise Online',
              title: 'White Noise Online',
              cis_only: 0
            },
            {
              hash_name: 'Dirt 2',
              title: 'Dirt 2',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 55833',
              title: 'Unknown package 55833',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 783',
              title: 'Unknown package 783',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Armored Transport',
              title: 'PAYDAY 2: Armored Transport',
              cis_only: 0
            },
            {
              hash_name:
                'Call of Duty®: Black Ops II - Weaponized 115 Personalization Pack',
              title:
                'Call of Duty®: Black Ops II - Weaponized 115 Personalization Pack',
              cis_only: 0
            },
            {
              hash_name: 'THE GAME OF LIFE',
              title: 'THE GAME OF LIFE',
              cis_only: 0
            },
            {
              hash_name: 'Monday Night Combat',
              title: 'Monday Night Combat',
              cis_only: 0
            },
            {
              hash_name: 'Fallout 3: Game of the Year Edition',
              title: 'Fallout 3: Game of the Year Edition',
              cis_only: 0
            },
            {
              hash_name: 'Down To One_cis',
              title: 'Down To One',
              cis_only: 1
            },
            {
              hash_name: 'Dungeons 2',
              title: 'Dungeons 2',
              cis_only: 0
            },
            {
              hash_name: 'RUSH_cis',
              title: 'RUSH',
              cis_only: 1
            },
            {
              hash_name: 'Crosshair X',
              title: 'Crosshair X',
              cis_only: 0
            },
            {
              hash_name: 'Tomb Raider: Underworld',
              title: 'Tomb Raider: Underworld',
              cis_only: 0
            },
            {
              hash_name: 'Trine Enchanted Edition',
              title: 'Trine Enchanted Edition',
              cis_only: 0
            },
            {
              hash_name: 'TCG Card Shop Simulator',
              title: 'TCG Card Shop Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Barro',
              title: 'Barro',
              cis_only: 0
            },
            {
              hash_name: 'State of Decay - Lifeline',
              title: 'State of Decay - Lifeline',
              cis_only: 0
            },
            {
              hash_name: 'Epic Showdown',
              title: 'Epic Showdown',
              cis_only: 0
            },
            {
              hash_name: 'Fallout 4 - Automatron',
              title: 'Fallout 4 - Automatron',
              cis_only: 0
            },
            {
              hash_name: 'Yet Another Zombie Defense_cis',
              title: 'Yet Another Zombie Defense',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 7932',
              title: 'Unknown package 7932',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Assault Pack',
              title: 'PAYDAY 2: Gage Assault Pack',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Ultimate Vault Hunters Upgrade Pack',
              title: 'Borderlands 2: Ultimate Vault Hunters Upgrade Pack',
              cis_only: 0
            },
            {
              hash_name: 'Tiny Bridge: Ratventure_cis',
              title: 'Tiny Bridge: Ratventure',
              cis_only: 1
            },
            {
              hash_name: 'Team Fortress 2',
              title: 'Team Fortress 2',
              cis_only: 0
            },
            {
              hash_name: 'Children of the Nile: Alexandria',
              title: 'Children of the Nile: Alexandria',
              cis_only: 0
            },
            {
              hash_name: 'American Truck Simulator',
              title: 'American Truck Simulator',
              cis_only: 0
            },
            {
              hash_name: 'TRON RUN/r Ultimate Edition - Gift Base Game',
              title: 'TRON RUN/r Ultimate Edition - Gift Base Game',
              cis_only: 0
            },
            {
              hash_name: 'Madballs in Babo:Invasion',
              title: 'Madballs in Babo:Invasion',
              cis_only: 0
            },
            {
              hash_name:
                'Sonic and All-Stars Racing Transformed: Metal Sonic & Outrun DLC',
              title:
                'Sonic and All-Stars Racing Transformed: Metal Sonic & Outrun DLC',
              cis_only: 0
            },
            {
              hash_name: 'Crysis 2 - Maximum Edition',
              title: 'Crysis 2 - Maximum Edition',
              cis_only: 0
            },
            {
              hash_name: 'Concord™ Beta',
              title: 'Concord™ Beta',
              cis_only: 0
            },
            {
              hash_name:
                'Total War Saga: FALL OF THE SAMURAI – The Tsu Faction Pack',
              title:
                'Total War Saga: FALL OF THE SAMURAI – The Tsu Faction Pack',
              cis_only: 0
            },
            {
              hash_name: 'Among Us',
              title: 'Among Us',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Shotgun Pack',
              title: 'PAYDAY 2: Gage Shotgun Pack',
              cis_only: 0
            },
            {
              hash_name: "Five Nights at Freddy's",
              title: "Five Nights at Freddy's",
              cis_only: 0
            },
            {
              hash_name: 'Escape the Backrooms',
              title: 'Escape the Backrooms',
              cis_only: 0
            },
            {
              hash_name: 'Intergalactic Bubbles',
              title: 'Intergalactic Bubbles',
              cis_only: 0
            },
            {
              hash_name: 'Shattered Horizon',
              title: 'Shattered Horizon',
              cis_only: 0
            },
            {
              hash_name: 'Divine Divinity',
              title: 'Divine Divinity',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 593',
              title: 'Unknown package 593',
              cis_only: 0
            },
            {
              hash_name: 'Reign Of Kings_cis',
              title: 'Reign Of Kings',
              cis_only: 1
            },
            {
              hash_name: 'No Time to Relax',
              title: 'No Time to Relax',
              cis_only: 0
            },
            {
              hash_name: 'Guns n Zombies',
              title: 'Guns n Zombies',
              cis_only: 0
            },
            {
              hash_name: 'Barro T23',
              title: 'Barro T23',
              cis_only: 0
            },
            {
              hash_name: "Five Nights at Freddy's 2_cis",
              title: "Five Nights at Freddy's 2",
              cis_only: 1
            },
            {
              hash_name: 'DRAGON: A Game About a Dragon',
              title: 'DRAGON: A Game About a Dragon',
              cis_only: 0
            },
            {
              hash_name: 'How to Survive - Storm Warning Edition',
              title: 'How to Survive - Storm Warning Edition',
              cis_only: 0
            },
            {
              hash_name: "Viscera Cleanup Detail: Santa's Rampage",
              title: "Viscera Cleanup Detail: Santa's Rampage",
              cis_only: 0
            },
            {
              hash_name: 'Divinity: Dragon Commander',
              title: 'Divinity: Dragon Commander',
              cis_only: 0
            },
            {
              hash_name: 'Cube Destroyer',
              title: 'Cube Destroyer',
              cis_only: 0
            },
            {
              hash_name: 'Dead Cells',
              title: 'Dead Cells',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 28637',
              title: 'Unknown package 28637',
              cis_only: 0
            },
            {
              hash_name: 'Two Worlds II HD',
              title: 'Two Worlds II HD',
              cis_only: 0
            },
            {
              hash_name: 'Nuclear Dawn_cis',
              title: 'Nuclear Dawn',
              cis_only: 1
            },
            {
              hash_name: 'Zombie Driver HD_cis',
              title: 'Zombie Driver HD',
              cis_only: 1
            },
            {
              hash_name: 'DreadOut Soundtrack & Manga DLC',
              title: 'DreadOut Soundtrack & Manga DLC',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 42480',
              title: 'Unknown package 42480',
              cis_only: 0
            },
            {
              hash_name: 'Robotex_cis',
              title: 'Robotex',
              cis_only: 1
            },
            {
              hash_name: 'Total War: Shogun 2 - Blood Pack DLC',
              title: 'Total War: Shogun 2 - Blood Pack DLC',
              cis_only: 0
            },
            {
              hash_name: 'Abyss Odyssey',
              title: 'Abyss Odyssey',
              cis_only: 0
            },
            {
              hash_name: 'Boundel: The Second Era',
              title: 'Boundel: The Second Era',
              cis_only: 0
            },
            {
              hash_name: 'Nuclear Nightmare',
              title: 'Nuclear Nightmare',
              cis_only: 0
            },
            {
              hash_name: 'Assassin’s Creed® IV Black Flag™ – Freedom Cry',
              title: 'Assassin’s Creed® IV Black Flag™ – Freedom Cry',
              cis_only: 0
            },
            {
              hash_name: "Five Nights at Freddy's 4",
              title: "Five Nights at Freddy's 4",
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Czech Paint Jobs Pack',
              title: 'Euro Truck Simulator 2 - Czech Paint Jobs Pack',
              cis_only: 0
            },
            {
              hash_name: 'Slime Rancher',
              title: 'Slime Rancher',
              cis_only: 0
            },
            {
              hash_name: 'Hentai Furry 3',
              title: 'Hentai Furry 3',
              cis_only: 0
            },
            {
              hash_name: 'Resident Evil 6',
              title: 'Resident Evil 6',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 2916',
              title: 'Unknown package 2916',
              cis_only: 0
            },
            {
              hash_name: 'Total War: SHOGUN 2 - Rise of the Samurai Campaign',
              title: 'Total War: SHOGUN 2 - Rise of the Samurai Campaign',
              cis_only: 0
            },
            {
              hash_name: 'UFO 50',
              title: 'UFO 50',
              cis_only: 0
            },
            {
              hash_name: 'The Walking Dead',
              title: 'The Walking Dead',
              cis_only: 0
            },
            {
              hash_name: 'Booster Trooper',
              title: 'Booster Trooper',
              cis_only: 0
            },
            {
              hash_name: 'Assetto Corsa',
              title: 'Assetto Corsa',
              cis_only: 0
            },
            {
              hash_name: 'Soundpad',
              title: 'Soundpad',
              cis_only: 0
            },
            {
              hash_name: 'Hentai Furry Soundtrack',
              title: 'Hentai Furry Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'VVVVVV',
              title: 'VVVVVV',
              cis_only: 0
            },
            {
              hash_name: 'Sacred Citadel',
              title: 'Sacred Citadel',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 44220',
              title: 'Unknown package 44220',
              cis_only: 0
            },
            {
              hash_name: 'Polarity_cis',
              title: 'Polarity',
              cis_only: 1
            },
            {
              hash_name: 'Ultra Street Fighter® IV Digital Upgrade',
              title: 'Ultra Street Fighter® IV Digital Upgrade',
              cis_only: 0
            },
            {
              hash_name: 'Black Desert',
              title: 'Black Desert',
              cis_only: 0
            },
            {
              hash_name: "Boot Hill Heroes - The Hangman's Ballad",
              title: "Boot Hill Heroes - The Hangman's Ballad",
              cis_only: 0
            },
            {
              hash_name: 'THE KING OF FIGHTERS XIII STEAM EDITION',
              title: 'THE KING OF FIGHTERS XIII STEAM EDITION',
              cis_only: 0
            },
            {
              hash_name: "Zombie Tycoon 2: Brainhov's Revenge_cis",
              title: "Zombie Tycoon 2: Brainhov's Revenge",
              cis_only: 1
            },
            {
              hash_name: 'Hurtworld_cis',
              title: 'Hurtworld',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 45019',
              title: 'Unknown package 45019',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 65039_cis',
              title: 'Unknown package 65039',
              cis_only: 1
            },
            {
              hash_name: 'Dead Island (JP)',
              title: 'Dead Island (JP)',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 29177_cis',
              title: 'Unknown package 29177',
              cis_only: 1
            },
            {
              hash_name: 'Port Royale 3',
              title: 'Port Royale 3',
              cis_only: 0
            },
            {
              hash_name: 'Civilization IV®: Warlords',
              title: 'Civilization IV®: Warlords',
              cis_only: 0
            },
            {
              hash_name: 'Control Ultimate Edition',
              title: 'Control Ultimate Edition',
              cis_only: 0
            },
            {
              hash_name:
                'Total War: WARHAMMER III - Elspeth – Thrones of Decay',
              title: 'Total War: WARHAMMER III - Elspeth – Thrones of Decay',
              cis_only: 0
            },
            {
              hash_name: 'Ultratron',
              title: 'Ultratron',
              cis_only: 0
            },
            {
              hash_name: 'Anno 2070™ - The Financial Crisis Package',
              title: 'Anno 2070™ - The Financial Crisis Package',
              cis_only: 0
            },
            {
              hash_name: 'Painkiller Hell & Damnation',
              title: 'Painkiller Hell & Damnation',
              cis_only: 0
            },
            {
              hash_name: 'Brick Rigs',
              title: 'Brick Rigs',
              cis_only: 0
            },
            {
              hash_name: 'The Walking Dead: Season Two',
              title: 'The Walking Dead: Season Two',
              cis_only: 0
            },
            {
              hash_name: 'Narco Terror Gift',
              title: 'Narco Terror Gift',
              cis_only: 0
            },
            {
              hash_name: "Oddworld: Munch's Oddysee",
              title: "Oddworld: Munch's Oddysee",
              cis_only: 0
            },
            {
              hash_name: 'Black Ice',
              title: 'Black Ice',
              cis_only: 0
            },
            {
              hash_name: "Boot Hill Heroes - The Hangman's Ballad_cis",
              title: "Boot Hill Heroes - The Hangman's Ballad",
              cis_only: 1
            },
            {
              hash_name: 'The Long Dark_cis',
              title: 'The Long Dark',
              cis_only: 1
            },
            {
              hash_name: 'Habitat',
              title: 'Habitat',
              cis_only: 0
            },
            {
              hash_name: 'Stellar Impact - Science Vessel DLC',
              title: 'Stellar Impact - Science Vessel DLC',
              cis_only: 0
            },
            {
              hash_name: 'Furry Reich 🐺',
              title: 'Furry Reich 🐺',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® Worlds_cis',
              title: 'LEGO® Worlds',
              cis_only: 1
            },
            {
              hash_name: 'Magicka: Aspiring Musician Robes',
              title: 'Magicka: Aspiring Musician Robes',
              cis_only: 0
            },
            {
              hash_name:
                'South Park™: The Stick of Truth™ - Super Samurai Spaceman Pack',
              title:
                'South Park™: The Stick of Truth™ - Super Samurai Spaceman Pack',
              cis_only: 0
            },
            {
              hash_name: 'Star Saviors_cis',
              title: 'Star Saviors',
              cis_only: 1
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Halloween Paint Jobs Pack',
              title: 'Euro Truck Simulator 2 - Halloween Paint Jobs Pack',
              cis_only: 0
            },
            {
              hash_name: 'Fallout: New Vegas',
              title: 'Fallout: New Vegas',
              cis_only: 0
            },
            {
              hash_name: 'Iron Grip: Warlord',
              title: 'Iron Grip: Warlord',
              cis_only: 0
            },
            {
              hash_name: 'Zueirama',
              title: 'Zueirama',
              cis_only: 0
            },
            {
              hash_name: 'ShipLord',
              title: 'ShipLord',
              cis_only: 0
            },
            {
              hash_name: 'Smart Factory Tycoon',
              title: 'Smart Factory Tycoon',
              cis_only: 0
            },
            {
              hash_name: 'Dying Light: Bad Blood_cis',
              title: 'Dying Light: Bad Blood',
              cis_only: 1
            },
            {
              hash_name: 'Hentai no Hero',
              title: 'Hentai no Hero',
              cis_only: 0
            },
            {
              hash_name: 'Hydrophobia: Prophecy',
              title: 'Hydrophobia: Prophecy',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 84206',
              title: 'Unknown package 84206',
              cis_only: 0
            },
            {
              hash_name: 'Saints Row IV: Commander-In-Chief Pack',
              title: 'Saints Row IV: Commander-In-Chief Pack',
              cis_only: 0
            },
            {
              hash_name: 'See No Evil',
              title: 'See No Evil',
              cis_only: 0
            },
            {
              hash_name: 'See No Evil_cis',
              title: 'See No Evil',
              cis_only: 1
            },
            {
              hash_name:
                'DLC - Crusader Kings II: Europa Universalis IV Converter',
              title: 'DLC - Crusader Kings II: Europa Universalis IV Converter',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 45320',
              title: 'Unknown package 45320',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 65204',
              title: 'Unknown package 65204',
              cis_only: 0
            },
            {
              hash_name: 'Retro City Rampage™ DX',
              title: 'Retro City Rampage™ DX',
              cis_only: 0
            },
            {
              hash_name: 'Dead Island (RoW)',
              title: 'Dead Island (RoW)',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Weapon Pack #02_cis',
              title: 'PAYDAY 2: Gage Weapon Pack #02',
              cis_only: 1
            },
            {
              hash_name:
                'Port Royale 3 Gold and Patrician IV Gold - Double Pack',
              title: 'Port Royale 3 Gold and Patrician IV Gold - Double Pack',
              cis_only: 0
            },
            {
              hash_name:
                'Civilization V - Civ and Scenario Double Pack: Spain and Inca',
              title:
                'Civilization V - Civ and Scenario Double Pack: Spain and Inca',
              cis_only: 0
            },
            {
              hash_name: 'Core Keeper',
              title: 'Core Keeper',
              cis_only: 0
            },
            {
              hash_name: 'Totally Accurate Battle Simulator',
              title: 'Totally Accurate Battle Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Painkiller Redemption',
              title: 'Painkiller Redemption',
              cis_only: 0
            },
            {
              hash_name: 'The Walking Dead_cis',
              title: 'The Walking Dead',
              cis_only: 1
            },
            {
              hash_name:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst HD',
              title: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst HD',
              cis_only: 0
            },
            {
              hash_name: "Oddworld: Stranger's Wrath HD",
              title: "Oddworld: Stranger's Wrath HD",
              cis_only: 0
            },
            {
              hash_name: 'The Long Drive',
              title: 'The Long Drive',
              cis_only: 0
            },
            {
              hash_name: 'Apollo Justice: Ace Attorney Trilogy',
              title: 'Apollo Justice: Ace Attorney Trilogy',
              cis_only: 0
            },
            {
              hash_name: 'Asteroid Bounty Hunter',
              title: 'Asteroid Bounty Hunter',
              cis_only: 0
            },
            {
              hash_name: 'Swaying Girl',
              title: 'Swaying Girl',
              cis_only: 0
            },
            {
              hash_name: 'FlatOut 2™',
              title: 'FlatOut 2™',
              cis_only: 0
            },
            {
              hash_name: 'Fury Unleashed',
              title: 'Fury Unleashed',
              cis_only: 0
            },
            {
              hash_name:
                'South Park™: The Stick of Truth™ - Ultimate Fellowship Pack',
              title:
                'South Park™: The Stick of Truth™ - Ultimate Fellowship Pack',
              cis_only: 0
            },
            {
              hash_name: 'STAR WARS Jedi: Fallen Order™',
              title: 'STAR WARS Jedi: Fallen Order™',
              cis_only: 0
            },
            {
              hash_name: 'Fantasy Grounds Classic',
              title: 'Fantasy Grounds Classic',
              cis_only: 0
            },
            {
              hash_name: 'Iron Warriors: T - 72 Tank Command ',
              title: 'Iron Warriors: T - 72 Tank Command ',
              cis_only: 0
            },
            {
              hash_name: '怕不怕趴喵霸霸 Ghost Party Nyanbaba',
              title: '怕不怕趴喵霸霸 Ghost Party Nyanbaba',
              cis_only: 0
            },
            {
              hash_name: 'ShootMania Storm',
              title: 'ShootMania Storm',
              cis_only: 0
            },
            {
              hash_name: 'SMITE® - Ultimate God Pack',
              title: 'SMITE® - Ultimate God Pack',
              cis_only: 0
            },
            {
              hash_name: 'Hentai Shooter 3D',
              title: 'Hentai Shooter 3D',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 86905',
              title: 'Unknown package 86905',
              cis_only: 0
            },
            {
              hash_name: 'Saints Row IV: Re-Elected',
              title: 'Saints Row IV: Re-Elected',
              cis_only: 0
            },
            {
              hash_name: 'Saints Row: Gat out of Hell - Devil’s Workshop pack',
              title: 'Saints Row: Gat out of Hell - Devil’s Workshop pack',
              cis_only: 0
            },
            {
              hash_name: 'DLC Quest',
              title: 'DLC Quest',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 459',
              title: 'Unknown package 459',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 6639',
              title: 'Unknown package 6639',
              cis_only: 0
            },
            {
              hash_name: 'Retrovirus_cis',
              title: 'Retrovirus',
              cis_only: 1
            },
            {
              hash_name: 'Danganronpa 2: Goodbye Despair',
              title: 'Danganronpa 2: Goodbye Despair',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 135549_cis',
              title: 'Unknown package 135549',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 29360',
              title: 'Unknown package 29360',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: GOTY Edition_cis',
              title: 'PAYDAY 2: GOTY Edition',
              cis_only: 1
            },
            {
              hash_name: 'Coreborn',
              title: 'Coreborn',
              cis_only: 0
            },
            {
              hash_name: 'Universe at War',
              title: 'Universe at War',
              cis_only: 0
            },
            {
              hash_name: 'Afterfall Insanity -  Dirty Arena Edition',
              title: 'Afterfall Insanity -  Dirty Arena Edition',
              cis_only: 0
            },
            {
              hash_name: 'Palworld',
              title: 'Palworld',
              cis_only: 0
            },
            {
              hash_name:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution - DLC4 Jinchuriki Costume Pack 1',
              title:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution - DLC4 Jinchuriki Costume Pack 1',
              cis_only: 0
            },
            {
              hash_name: 'The Odyssey: Winds of Athena_cis',
              title: 'The Odyssey: Winds of Athena',
              cis_only: 1
            },
            {
              hash_name: 'Grand Theft Auto V_cis',
              title: 'Grand Theft Auto V',
              cis_only: 1
            },
            {
              hash_name: 'Mount & Blade',
              title: 'Mount & Blade',
              cis_only: 0
            },
            {
              hash_name: 'Arena Wars 2',
              title: 'Arena Wars 2',
              cis_only: 0
            },
            {
              hash_name: 'ATLAS',
              title: 'ATLAS',
              cis_only: 0
            },
            {
              hash_name: 'Stonerid',
              title: 'Stonerid',
              cis_only: 0
            },
            {
              hash_name: 'FlatOut 2™_cis',
              title: 'FlatOut 2™',
              cis_only: 1
            },
            {
              hash_name: 'South Park™: The Stick of Truth™_cis',
              title: 'South Park™: The Stick of Truth™',
              cis_only: 1
            },
            {
              hash_name: 'STAR WARS™ Battlefront II (Classic, 2005)',
              title: 'STAR WARS™ Battlefront II (Classic, 2005)',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Mighty Griffin Tuning Pack',
              title: 'Euro Truck Simulator 2 - Mighty Griffin Tuning Pack',
              cis_only: 0
            },
            {
              hash_name: 'Fantasy Wars',
              title: 'Fantasy Wars',
              cis_only: 0
            },
            {
              hash_name: 'It Takes Two',
              title: 'It Takes Two',
              cis_only: 0
            },
            {
              hash_name: 'World War Z',
              title: 'World War Z',
              cis_only: 0
            },
            {
              hash_name: 'Sneaky Sneaky',
              title: 'Sneaky Sneaky',
              cis_only: 0
            },
            {
              hash_name: 'Duck Hunting',
              title: 'Duck Hunting',
              cis_only: 0
            },
            {
              hash_name: 'Hentai Vs Furries',
              title: 'Hentai Vs Furries',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 8796',
              title: 'Unknown package 8796',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 89583',
              title: 'Unknown package 89583',
              cis_only: 0
            },
            {
              hash_name: 'Wargame: Airland Battle',
              title: 'Wargame: Airland Battle',
              cis_only: 0
            },
            {
              hash_name: 'Saints Row: The Third',
              title: 'Saints Row: The Third',
              cis_only: 0
            },
            {
              hash_name: 'DmC Devil May Cry: Weapon Bundle',
              title: 'DmC Devil May Cry: Weapon Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 47509',
              title: 'Unknown package 47509',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 66404',
              title: 'Unknown package 66404',
              cis_only: 0
            },
            {
              hash_name: 'Danganronpa S: Ultimate Summer Camp',
              title: 'Danganronpa S: Ultimate Summer Camp',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 13900',
              title: 'Unknown package 13900',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 30130',
              title: 'Unknown package 30130',
              cis_only: 0
            },
            {
              hash_name: 'Civilization V: Cradle of Civilization - DLC Bundle',
              title: 'Civilization V: Cradle of Civilization - DLC Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Corgi Warlock_cis',
              title: 'Corgi Warlock',
              cis_only: 1
            },
            {
              hash_name: 'Town of Salem',
              title: 'Town of Salem',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package (66117)',
              title: 'Unknown package (66117)',
              cis_only: 0
            },
            {
              hash_name: 'Our Wonderful World_cis',
              title: 'Our Wonderful World',
              cis_only: 1
            },
            {
              hash_name:
                'The Witcher 2: Assassins of Kings Enhanced Edition_cis',
              title: 'The Witcher 2: Assassins of Kings Enhanced Edition',
              cis_only: 1
            },
            {
              hash_name:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution - DLC5 Jinchuriki Costume Pack 2',
              title:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution - DLC5 Jinchuriki Costume Pack 2',
              cis_only: 0
            },
            {
              hash_name: 'Oh Deer',
              title: 'Oh Deer',
              cis_only: 0
            },
            {
              hash_name: 'Batman™: Arkham Knight - A Matter of Family_cis',
              title: 'Batman™: Arkham Knight - A Matter of Family',
              cis_only: 1
            },
            {
              hash_name: 'Blade Symphony Original Soundtrack',
              title: 'Blade Symphony Original Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'The Binding of Isaac: Rebirth',
              title: 'The Binding of Isaac: Rebirth',
              cis_only: 0
            },
            {
              hash_name: 'The Orange Box',
              title: 'The Orange Box',
              cis_only: 0
            },
            {
              hash_name: 'Half Dead',
              title: 'Half Dead',
              cis_only: 0
            },
            {
              hash_name: 'Mount & Blade: Warband',
              title: 'Mount & Blade: Warband',
              cis_only: 0
            },
            {
              hash_name: 'ARK: Genesis Season Pass',
              title: 'ARK: Genesis Season Pass',
              cis_only: 0
            },
            {
              hash_name: 'Storm United Gift',
              title: 'Storm United Gift',
              cis_only: 0
            },
            {
              hash_name: 'Sword Coast Legends - Gift',
              title: 'Sword Coast Legends - Gift',
              cis_only: 0
            },
            {
              hash_name: 'Space Beast Terror Fright',
              title: 'Space Beast Terror Fright',
              cis_only: 0
            },
            {
              hash_name: 'STAR WARS™ Battlefront™ II',
              title: 'STAR WARS™ Battlefront™ II',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Prehistoric Paint Jobs Pack',
              title: 'Euro Truck Simulator 2 - Prehistoric Paint Jobs Pack',
              cis_only: 0
            },
            {
              hash_name: 'Far Cry 3',
              title: 'Far Cry 3',
              cis_only: 0
            },
            {
              hash_name:
                'Jagged Alliance: Back in Action DLC: Urban Specialist Kit',
              title:
                'Jagged Alliance: Back in Action DLC: Urban Specialist Kit',
              cis_only: 0
            },
            {
              hash_name: 'Last Epoch',
              title: 'Last Epoch',
              cis_only: 0
            },
            {
              hash_name: 'Dude Simulator 3',
              title: 'Dude Simulator 3',
              cis_only: 0
            },
            {
              hash_name: 'E.T. Armies_cis',
              title: 'E.T. Armies',
              cis_only: 1
            },
            {
              hash_name: 'Warhammer 40,000: Dawn of War - Master Collection',
              title: 'Warhammer 40,000: Dawn of War - Master Collection',
              cis_only: 0
            },
            {
              hash_name: 'DmC: Devil May Cry Complete Pack',
              title: 'DmC: Devil May Cry Complete Pack',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 47804',
              title: 'Unknown package 47804',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 66703',
              title: 'Unknown package 66703',
              cis_only: 0
            },
            {
              hash_name: 'Puzzle Chronicles',
              title: 'Puzzle Chronicles',
              cis_only: 0
            },
            {
              hash_name: 'Dark Forester',
              title: 'Dark Forester',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: John Wick Heists',
              title: 'PAYDAY 2: John Wick Heists',
              cis_only: 0
            },
            {
              hash_name: 'Portal 2 - The Final Hours',
              title: 'Portal 2 - The Final Hours',
              cis_only: 0
            },
            {
              hash_name:
                'Civilization V: Korea and Wonders of the Ancient World - Combo Pack ',
              title:
                'Civilization V: Korea and Wonders of the Ancient World - Combo Pack ',
              cis_only: 0
            },
            {
              hash_name: 'TOXIKK - Triple Gift',
              title: 'TOXIKK - Triple Gift',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 101060',
              title: 'Unknown package 101060',
              cis_only: 0
            },
            {
              hash_name: 'Age of Empires II (2013): The African Kingdoms',
              title: 'Age of Empires II (2013): The African Kingdoms',
              cis_only: 0
            },
            {
              hash_name: 'Pandemic Express - Zombie Escape_cis',
              title: 'Pandemic Express - Zombie Escape',
              cis_only: 1
            },
            {
              hash_name: 'Brothers - A Tale of Two Sons',
              title: 'Brothers - A Tale of Two Sons',
              cis_only: 0
            },
            {
              hash_name:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution - DLC9 Variety Pack 3',
              title:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution - DLC9 Variety Pack 3',
              cis_only: 0
            },
            {
              hash_name: 'Oh...Sir!! The Insult Simulator',
              title: 'Oh...Sir!! The Insult Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Batman™: Arkham Knight - Harley Quinn Story Pack_cis',
              title: 'Batman™: Arkham Knight - Harley Quinn Story Pack',
              cis_only: 1
            },
            {
              hash_name: 'Blasphemous',
              title: 'Blasphemous',
              cis_only: 0
            },
            {
              hash_name: 'The Past Within',
              title: 'The Past Within',
              cis_only: 0
            },
            {
              hash_name: 'Grand Theft Auto: San Andreas (DE)',
              title: 'Grand Theft Auto: San Andreas (DE)',
              cis_only: 0
            },
            {
              hash_name: 'Half Minute Hero: The Second Coming',
              title: 'Half Minute Hero: The Second Coming',
              cis_only: 0
            },
            {
              hash_name: 'METAL SLUG X_cis',
              title: 'METAL SLUG X',
              cis_only: 1
            },
            {
              hash_name: 'Mount & Blade: Warband - Napoleonic Wars',
              title: 'Mount & Blade: Warband - Napoleonic Wars',
              cis_only: 0
            },
            {
              hash_name: 'Stranded Deep_cis',
              title: 'Stranded Deep',
              cis_only: 1
            },
            {
              hash_name: 'Swords and Soldiers HD',
              title: 'Swords and Soldiers HD',
              cis_only: 0
            },
            {
              hash_name: 'FlatOut_cis',
              title: 'FlatOut',
              cis_only: 1
            },
            {
              hash_name: 'Garfield Kart',
              title: 'Garfield Kart',
              cis_only: 0
            },
            {
              hash_name: 'MAGIX PC Check & Tuning 2015',
              title: 'MAGIX PC Check & Tuning 2015',
              cis_only: 0
            },
            {
              hash_name: 'STAR WARS™ Jedi Knight - Mysteries of the Sith™',
              title: 'STAR WARS™ Jedi Knight - Mysteries of the Sith™',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Scandinavia_cis',
              title: 'Euro Truck Simulator 2 - Scandinavia',
              cis_only: 1
            },
            {
              hash_name: 'Far Cry®',
              title: 'Far Cry®',
              cis_only: 0
            },
            {
              hash_name: "Sid Meier's Civilization V: Gods and Kings",
              title: "Sid Meier's Civilization V: Gods and Kings",
              cis_only: 0
            },
            {
              hash_name: 'Sniper Elite 3 - Camouflage Weapons Pack',
              title: 'Sniper Elite 3 - Camouflage Weapons Pack',
              cis_only: 0
            },
            {
              hash_name: 'Sniper Elite 3 Season Pass',
              title: 'Sniper Elite 3 Season Pass',
              cis_only: 0
            },
            {
              hash_name: 'EDGE',
              title: 'EDGE',
              cis_only: 0
            },
            {
              hash_name: 'Saints Row: The Third Season Pass DLC Pack',
              title: 'Saints Row: The Third Season Pass DLC Pack',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam 3: BFE Gift_cis',
              title: 'Serious Sam 3: BFE Gift',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 4829',
              title: 'Unknown package 4829',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 6685',
              title: 'Unknown package 6685',
              cis_only: 0
            },
            {
              hash_name: 'Puzzle Dimension',
              title: 'Puzzle Dimension',
              cis_only: 0
            },
            {
              hash_name: 'Dark Frame',
              title: 'Dark Frame',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 14270',
              title: 'Unknown package 14270',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 30274',
              title: 'Unknown package 30274',
              cis_only: 0
            },
            {
              hash_name: 'Portal 2_cis',
              title: 'Portal 2',
              cis_only: 1
            },
            {
              hash_name: 'Clans_cis',
              title: 'Clans',
              cis_only: 1
            },
            {
              hash_name: '//N.P.P.D. RUSH//- The milk of Ultraviolet_cis',
              title: '//N.P.P.D. RUSH//- The milk of Ultraviolet',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 1065',
              title: 'Unknown package 1065',
              cis_only: 0
            },
            {
              hash_name: 'PANICORE',
              title: 'PANICORE',
              cis_only: 0
            },
            {
              hash_name: 'The Witcher Adventure Game',
              title: 'The Witcher Adventure Game',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Rainbow Six® Vegas 2",
              title: "Tom Clancy's Rainbow Six® Vegas 2",
              cis_only: 0
            },
            {
              hash_name:
                'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution_cis',
              title: 'NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution',
              cis_only: 1
            },
            {
              hash_name: 'The Path',
              title: 'The Path',
              cis_only: 0
            },
            {
              hash_name: 'Graviteam Tactics: Operation Star',
              title: 'Graviteam Tactics: Operation Star',
              cis_only: 0
            },
            {
              hash_name: 'Avernum Bundle',
              title: 'Avernum Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Stray',
              title: 'Stray',
              cis_only: 0
            },
            {
              hash_name: 'Syberia II',
              title: 'Syberia II',
              cis_only: 0
            },
            {
              hash_name: 'Life is Strange - Episode 1',
              title: 'Life is Strange - Episode 1',
              cis_only: 0
            },
            {
              hash_name: 'Magnetis ',
              title: 'Magnetis ',
              cis_only: 0
            },
            {
              hash_name: 'STAR WARS™ Jedi Knight II - Jedi Outcast™',
              title: 'STAR WARS™ Jedi Knight II - Jedi Outcast™',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - UK Paint Jobs Pack',
              title: 'Euro Truck Simulator 2 - UK Paint Jobs Pack',
              cis_only: 0
            },
            {
              hash_name: 'Far Cry® 2',
              title: 'Far Cry® 2',
              cis_only: 0
            },
            {
              hash_name: "Sid Meier's Civilization® III Complete",
              title: "Sid Meier's Civilization® III Complete",
              cis_only: 0
            },
            {
              hash_name: 'Sniper Elite 3_cis',
              title: 'Sniper Elite 3',
              cis_only: 1
            },
            {
              hash_name: 'Dungeon Bar: Gachi Puzzles',
              title: 'Dungeon Bar: Gachi Puzzles',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 91065_cis',
              title: 'Unknown package 91065',
              cis_only: 1
            },
            {
              hash_name: 'Sakura Clicker - Striped Bikini',
              title: 'Sakura Clicker - Striped Bikini',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam 3: Jewel of the Nile',
              title: 'Serious Sam 3: Jewel of the Nile',
              cis_only: 0
            },
            {
              hash_name: 'Despair_cis',
              title: 'Despair',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 66904_cis',
              title: 'Unknown package 66904',
              cis_only: 1
            },
            {
              hash_name: 'Puzzler World',
              title: 'Puzzler World',
              cis_only: 0
            },
            {
              hash_name: 'Dark Messiah of Might & Magic',
              title: 'Dark Messiah of Might & Magic',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 148686',
              title: 'Unknown package 148686',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 30582',
              title: 'Unknown package 30582',
              cis_only: 0
            },
            {
              hash_name: "Class of '09",
              title: "Class of '09",
              cis_only: 0
            },
            {
              hash_name:
                '1... 2... 3... KICK IT! (Drop That Beat Like an Ugly Baby)',
              title:
                '1... 2... 3... KICK IT! (Drop That Beat Like an Ugly Baby)',
              cis_only: 0
            },
            {
              hash_name: 'Panzermadels: Tank Dating Simulator',
              title: 'Panzermadels: Tank Dating Simulator',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Rainbow Six® Vegas_cis",
              title: "Tom Clancy's Rainbow Six® Vegas",
              cis_only: 1
            },
            {
              hash_name: 'Omerta - City of Gangsters - GOLD EDITION',
              title: 'Omerta - City of Gangsters - GOLD EDITION',
              cis_only: 0
            },
            {
              hash_name: 'BlazeRush_cis',
              title: 'BlazeRush',
              cis_only: 1
            },
            {
              hash_name: 'The Bureau: XCOM Declassified - Light Plasma Pistol',
              title: 'The Bureau: XCOM Declassified - Light Plasma Pistol',
              cis_only: 0
            },
            {
              hash_name: 'The Planet Crafter',
              title: 'The Planet Crafter',
              cis_only: 0
            },
            {
              hash_name: 'Gravity Ghost',
              title: 'Gravity Ghost',
              cis_only: 0
            },
            {
              hash_name: 'Mount & Blade: With Fire & Sword',
              title: 'Mount & Blade: With Fire & Sword',
              cis_only: 0
            },
            {
              hash_name: 'Arma 2',
              title: 'Arma 2',
              cis_only: 0
            },
            {
              hash_name: 'Avernum: Escape From the Pit',
              title: 'Avernum: Escape From the Pit',
              cis_only: 0
            },
            {
              hash_name: 'Flower_cis',
              title: 'Flower',
              cis_only: 1
            },
            {
              hash_name: 'Lightfish',
              title: 'Lightfish',
              cis_only: 0
            },
            {
              hash_name: 'Mainframe Defenders',
              title: 'Mainframe Defenders',
              cis_only: 0
            },
            {
              hash_name:
                'STAR WARS™ Knights of the Old Republic™ II - The Sith Lords™',
              title:
                'STAR WARS™ Knights of the Old Republic™ II - The Sith Lords™',
              cis_only: 0
            },
            {
              hash_name: 'Far Cry® Primal',
              title: 'Far Cry® Primal',
              cis_only: 0
            },
            {
              hash_name: 'Just Cause 2: Monster Truck DLC',
              title: 'Just Cause 2: Monster Truck DLC',
              cis_only: 0
            },
            {
              hash_name:
                'Worms Reloaded: The "Pre-order Forts and Hats" DLC Pack',
              title: 'Worms Reloaded: The "Pre-order Forts and Hats" DLC Pack',
              cis_only: 0
            },
            {
              hash_name: 'Sniper Elite 5: Target Führer - Wolf Mountain',
              title: 'Sniper Elite 5: Target Führer - Wolf Mountain',
              cis_only: 0
            },
            {
              hash_name: 'Iesabel',
              title: 'Iesabel',
              cis_only: 0
            },
            {
              hash_name: 'SAMOLIOTIK_cis',
              title: 'SAMOLIOTIK',
              cis_only: 1
            },
            {
              hash_name: "Desperados 2: Cooper's Revenge",
              title: "Desperados 2: Cooper's Revenge",
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 49728_cis',
              title: 'Unknown package 49728',
              cis_only: 1
            },
            {
              hash_name: 'Puzzler World 2',
              title: 'Puzzler World 2',
              cis_only: 0
            },
            {
              hash_name: 'Ring Runner: Flight of the Sages',
              title: 'Ring Runner: Flight of the Sages',
              cis_only: 0
            },
            {
              hash_name: 'DARK SOULS™: Prepare To Die™ Edition',
              title: 'DARK SOULS™: Prepare To Die™ Edition',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 14907',
              title: 'Unknown package 14907',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: The Official Soundtrack',
              title: 'PAYDAY 2: The Official Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'POSTAL 2',
              title: 'POSTAL 2',
              cis_only: 0
            },
            {
              hash_name: 'Clue/Cluedo: Classic Edition',
              title: 'Clue/Cluedo: Classic Edition',
              cis_only: 0
            },
            {
              hash_name: '100 Asian Cats Deluxe Edition',
              title: '100 Asian Cats Deluxe Edition',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 11443',
              title: 'Unknown package 11443',
              cis_only: 0
            },
            {
              hash_name: 'Age of Empires II (Retired)_cis',
              title: 'Age of Empires II (Retired)',
              cis_only: 1
            },
            {
              hash_name: 'Outer Wilds',
              title: 'Outer Wilds',
              cis_only: 0
            },
            {
              hash_name: 'Paradox Grand Strategy Collection',
              title: 'Paradox Grand Strategy Collection',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Splinter Cell®",
              title: "Tom Clancy's Splinter Cell®",
              cis_only: 0
            },
            {
              hash_name: 'Omerta City of Gangsters Gift Package (KR)',
              title: 'Omerta City of Gangsters Gift Package (KR)',
              cis_only: 0
            },
            {
              hash_name: 'The Political Machine',
              title: 'The Political Machine',
              cis_only: 0
            },
            {
              hash_name: 'Arma 2 Complete Collection',
              title: 'Arma 2 Complete Collection',
              cis_only: 0
            },
            {
              hash_name: 'Awesomenauts - Cynical Vinnie & Total Spike Skin',
              title: 'Awesomenauts - Cynical Vinnie & Total Spike Skin',
              cis_only: 0
            },
            {
              hash_name: 'Lilly and Sasha: Curse of the Immortals',
              title: 'Lilly and Sasha: Curse of the Immortals',
              cis_only: 0
            },
            {
              hash_name: 'Make America Great Again: The Trump Presidency',
              title: 'Make America Great Again: The Trump Presidency',
              cis_only: 0
            },
            {
              hash_name: 'Star Wolves',
              title: 'Star Wolves',
              cis_only: 0
            },
            {
              hash_name: 'Europa Universalis III: Enlightenment SpritePack',
              title: 'Europa Universalis III: Enlightenment SpritePack',
              cis_only: 0
            },
            {
              hash_name: 'Farming Simulator 17 - KUHN Equipment Pack',
              title: 'Farming Simulator 17 - KUHN Equipment Pack',
              cis_only: 0
            },
            {
              hash_name: 'Just Cause 2_cis',
              title: 'Just Cause 2',
              cis_only: 1
            },
            {
              hash_name: 'KeyWe',
              title: 'KeyWe',
              cis_only: 0
            },
            {
              hash_name: 'Worms Revolution Pre-Order Gift',
              title: 'Worms Revolution Pre-Order Gift',
              cis_only: 0
            },
            {
              hash_name: "Sid Meier's Civilization® VI: Gathering Storm",
              title: "Sid Meier's Civilization® VI: Gathering Storm",
              cis_only: 0
            },
            {
              hash_name: 'Sniper Elite: Nazi Zombie Army',
              title: 'Sniper Elite: Nazi Zombie Army',
              cis_only: 0
            },
            {
              hash_name: 'Electronic Super Joy: Groove City',
              title: 'Electronic Super Joy: Groove City',
              cis_only: 0
            },
            {
              hash_name: 'If My Heart Had Wings',
              title: 'If My Heart Had Wings',
              cis_only: 0
            },
            {
              hash_name: 'Samudai Gift',
              title: 'Samudai Gift',
              cis_only: 0
            },
            {
              hash_name: 'Destiny 2: The Final Shape + Annual Pass',
              title: 'Destiny 2: The Final Shape + Annual Pass',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 49774_cis',
              title: 'Unknown package 49774',
              cis_only: 1
            },
            {
              hash_name: 'RIPD: The Game (ROW) Gift',
              title: 'RIPD: The Game (ROW) Gift',
              cis_only: 0
            },
            {
              hash_name: 'DEADCRAFT',
              title: 'DEADCRAFT',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 15190',
              title: 'Unknown package 15190',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 30948_cis',
              title: 'Unknown package 30948',
              cis_only: 1
            },
            {
              hash_name: 'PAYDAY 2: The OVERKILL B-Sides Soundtrack',
              title: 'PAYDAY 2: The OVERKILL B-Sides Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Coconut Simulator',
              title: 'Coconut Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Trailmakers',
              title: 'Trailmakers',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 11664',
              title: 'Unknown package 11664',
              cis_only: 0
            },
            {
              hash_name: 'Age of Empires II: Definitive Edition',
              title: 'Age of Empires II: Definitive Edition',
              cis_only: 0
            },
            {
              hash_name: 'PARTICLE MACE',
              title: 'PARTICLE MACE',
              cis_only: 0
            },
            {
              hash_name: 'Bunch of Heroes',
              title: 'Bunch of Heroes',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's Splinter Cell®_cis",
              title: "Tom Clancy's Splinter Cell®",
              cis_only: 1
            },
            {
              hash_name: 'OMORI',
              title: 'OMORI',
              cis_only: 0
            },
            {
              hash_name: 'Battlefield 4™',
              title: 'Battlefield 4™',
              cis_only: 0
            },
            {
              hash_name: 'Blightbound',
              title: 'Blightbound',
              cis_only: 0
            },
            {
              hash_name: 'Green Hell',
              title: 'Green Hell',
              cis_only: 0
            },
            {
              hash_name: 'Mount Your Friends_cis',
              title: 'Mount Your Friends',
              cis_only: 1
            },
            {
              hash_name: 'Arma 2: Army of the Czech Republic',
              title: 'Arma 2: Army of the Czech Republic',
              cis_only: 0
            },
            {
              hash_name: 'Street Fighter™ 6',
              title: 'Street Fighter™ 6',
              cis_only: 0
            },
            {
              hash_name: 'Tactical Breach Wizards',
              title: 'Tactical Breach Wizards',
              cis_only: 0
            },
            {
              hash_name: 'Manhunter_cis',
              title: 'Manhunter',
              cis_only: 1
            },
            {
              hash_name: 'Europa Universalis III: Revolution SpritePack',
              title: 'Europa Universalis III: Revolution SpritePack',
              cis_only: 0
            },
            {
              hash_name: 'Farming Simulator 2013: DLCs Pack',
              title: 'Farming Simulator 2013: DLCs Pack',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders Eternity',
              title: 'Dungeon Defenders Eternity',
              cis_only: 0
            },
            {
              hash_name: 'Elite Dangerous',
              title: 'Elite Dangerous',
              cis_only: 0
            },
            {
              hash_name: 'Immune - True Survival',
              title: 'Immune - True Survival',
              cis_only: 0
            },
            {
              hash_name: 'Warhammer 40,000: Rogue Trader',
              title: 'Warhammer 40,000: Rogue Trader',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 51149',
              title: 'Unknown package 51149',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 67652_cis',
              title: 'Unknown package 67652',
              cis_only: 1
            },
            {
              hash_name: 'Pyre_cis',
              title: 'Pyre',
              cis_only: 1
            },
            {
              hash_name: 'Darkest Dungeon®_cis',
              title: 'Darkest Dungeon®',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 31520',
              title: 'Unknown package 31520',
              cis_only: 0
            },
            {
              hash_name: 'Codename Panzers Phase Two Soundtrack',
              title: 'Codename Panzers Phase Two Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Trainz™ Simulator 12',
              title: 'Trainz™ Simulator 12',
              cis_only: 0
            },
            {
              hash_name: '12 Labours of Hercules II: The Cretan Bull',
              title: '12 Labours of Hercules II: The Cretan Bull',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 11754',
              title: 'Unknown package 11754',
              cis_only: 0
            },
            {
              hash_name: 'Age of Mythology: Extended Edition',
              title: 'Age of Mythology: Extended Edition',
              cis_only: 0
            },
            {
              hash_name: 'Outlast 2',
              title: 'Outlast 2',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Commando Domination Pack',
              title: 'Borderlands 2: Commando Domination Pack',
              cis_only: 0
            },
            {
              hash_name: 'Burnout Paradise: The Ultimate Box',
              title: 'Burnout Paradise: The Ultimate Box',
              cis_only: 0
            },
            {
              hash_name: 'The Wonderful End of the World',
              title: 'The Wonderful End of the World',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's The Division™ - Season Pass",
              title: "Tom Clancy's The Division™ - Season Pass",
              cis_only: 0
            },
            {
              hash_name: 'Natural Selection 2_cis',
              title: 'Natural Selection 2',
              cis_only: 1
            },
            {
              hash_name: 'OMSI 2 Add-on Citybus o530',
              title: 'OMSI 2 Add-on Citybus o530',
              cis_only: 0
            },
            {
              hash_name: 'Battlefield Bad Company 2: SPECACT Kit Upgrade',
              title: 'Battlefield Bad Company 2: SPECACT Kit Upgrade',
              cis_only: 0
            },
            {
              hash_name: 'Blitzkrieg 2 Anthology',
              title: 'Blitzkrieg 2 Anthology',
              cis_only: 0
            },
            {
              hash_name: 'Greyfox RPG',
              title: 'Greyfox RPG',
              cis_only: 0
            },
            {
              hash_name: 'Mountain',
              title: 'Mountain',
              cis_only: 0
            },
            {
              hash_name: 'Arma 2: British Armed Forces',
              title: 'Arma 2: British Armed Forces',
              cis_only: 0
            },
            {
              hash_name: "Axis Game Factory's AGFPRO + PREMIUM Bundle",
              title: "Axis Game Factory's AGFPRO + PREMIUM Bundle",
              cis_only: 0
            },
            {
              hash_name: 'Strike Vector',
              title: 'Strike Vector',
              cis_only: 0
            },
            {
              hash_name: 'LIMBO',
              title: 'LIMBO',
              cis_only: 0
            },
            {
              hash_name: 'Space Hack',
              title: 'Space Hack',
              cis_only: 0
            },
            {
              hash_name: 'Fear & Hunger 2: Termina',
              title: 'Fear & Hunger 2: Termina',
              cis_only: 0
            },
            {
              hash_name: 'Killer is Dead - Nightmare Edition',
              title: 'Killer is Dead - Nightmare Edition',
              cis_only: 0
            },
            {
              hash_name: 'Legend of Dungeon',
              title: 'Legend of Dungeon',
              cis_only: 0
            },
            {
              hash_name: 'Sid Meier’s Civilization® VI: Rise and Fall',
              title: 'Sid Meier’s Civilization® VI: Rise and Fall',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders Halloween Costume Pack_cis',
              title: 'Dungeon Defenders Halloween Costume Pack',
              cis_only: 1
            },
            {
              hash_name: 'Emily Wants To Play',
              title: 'Emily Wants To Play',
              cis_only: 0
            },
            {
              hash_name: 'Heroes of Might & Magic V_cis',
              title: 'Heroes of Might & Magic V',
              cis_only: 1
            },
            {
              hash_name: 'Impire: Black and White Demons',
              title: 'Impire: Black and White Demons',
              cis_only: 0
            },
            {
              hash_name: 'Unstoppable Gorg',
              title: 'Unstoppable Gorg',
              cis_only: 0
            },
            {
              hash_name:
                'Warhammer 40,000: Space Marine - Chaos Unleashed Map Pack',
              title:
                'Warhammer 40,000: Space Marine - Chaos Unleashed Map Pack',
              cis_only: 0
            },
            {
              hash_name: 'Rocket League® - Hot Wheels® Bone Shaker™',
              title: 'Rocket League® - Hot Wheels® Bone Shaker™',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 51499',
              title: 'Unknown package 51499',
              cis_only: 0
            },
            {
              hash_name: 'Rise of the Tomb Raider - Season Pass_cis',
              title: 'Rise of the Tomb Raider - Season Pass',
              cis_only: 1
            },
            {
              hash_name: 'Darksiders',
              title: 'Darksiders',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 31562',
              title: 'Unknown package 31562',
              cis_only: 0
            },
            {
              hash_name: 'CoH 2 - German Commander: Elite Troops Doctrine',
              title: 'CoH 2 - German Commander: Elite Troops Doctrine',
              cis_only: 0
            },
            {
              hash_name: 'Transistor',
              title: 'Transistor',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 118358',
              title: 'Unknown package 118358',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Commando Haggard Hunter Pack',
              title: 'Borderlands 2: Commando Haggard Hunter Pack',
              cis_only: 0
            },
            {
              hash_name:
                'Call of Duty: Black Ops III - Multiplayer Starter Pack',
              title: 'Call of Duty: Black Ops III - Multiplayer Starter Pack',
              cis_only: 0
            },
            {
              hash_name: 'Theatre of War 2: Africa 1943',
              title: 'Theatre of War 2: Africa 1943',
              cis_only: 0
            },
            {
              hash_name: 'Tom Clancy’s Splinter Cell Blacklist',
              title: 'Tom Clancy’s Splinter Cell Blacklist',
              cis_only: 0
            },
            {
              hash_name: 'Naval Warfare',
              title: 'Naval Warfare',
              cis_only: 0
            },
            {
              hash_name: 'OMSI 2 Add-on Three Generations',
              title: 'OMSI 2 Add-on Three Generations',
              cis_only: 0
            },
            {
              hash_name: 'Battlepillars Gold Edition',
              title: 'Battlepillars Gold Edition',
              cis_only: 0
            },
            {
              hash_name: 'Blitzkrieg Anthology',
              title: 'Blitzkrieg Anthology',
              cis_only: 0
            },
            {
              hash_name: 'Greyfox RPG_cis',
              title: 'Greyfox RPG',
              cis_only: 1
            },
            {
              hash_name: 'Minecraft Legends',
              title: 'Minecraft Legends',
              cis_only: 0
            },
            {
              hash_name: 'FortressCraft Evolved!_cis',
              title: 'FortressCraft Evolved!',
              cis_only: 1
            },
            {
              hash_name: 'Gauntlet™ Slayer Edition_cis',
              title: 'Gauntlet™ Slayer Edition',
              cis_only: 1
            },
            {
              hash_name: 'Little Inferno',
              title: 'Little Inferno',
              cis_only: 0
            },
            {
              hash_name: 'Little Misfortune',
              title: 'Little Misfortune',
              cis_only: 0
            },
            {
              hash_name: 'Space Hulk',
              title: 'Space Hulk',
              cis_only: 0
            },
            {
              hash_name: 'Excalibur Sim Bundle',
              title: 'Excalibur Sim Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Killer Queen Black',
              title: 'Killer Queen Black',
              cis_only: 0
            },
            {
              hash_name: 'Legend of Grimrock',
              title: 'Legend of Grimrock',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam Gold Pack',
              title: 'Serious Sam Gold Pack',
              cis_only: 0
            },
            {
              hash_name: 'Silver Chains',
              title: 'Silver Chains',
              cis_only: 0
            },
            {
              hash_name: 'Empire: Total War™ - Elite Units of America',
              title: 'Empire: Total War™ - Elite Units of America',
              cis_only: 0
            },
            {
              hash_name: 'Hitler My Friend',
              title: 'Hitler My Friend',
              cis_only: 0
            },
            {
              hash_name: 'INDIKA',
              title: 'INDIKA',
              cis_only: 0
            },
            {
              hash_name: 'Untitled Goose Game',
              title: 'Untitled Goose Game',
              cis_only: 0
            },
            {
              hash_name:
                'Warhammer 40,000: Space Marine - Emperor’s Elite Pack',
              title: 'Warhammer 40,000: Space Marine - Emperor’s Elite Pack',
              cis_only: 0
            },
            {
              hash_name: 'Rocket League® - Hot Wheels® Twin Mill™ III',
              title: 'Rocket League® - Hot Wheels® Twin Mill™ III',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 51669_cis',
              title: 'Unknown package 51669',
              cis_only: 1
            },
            {
              hash_name: 'Darksiders II',
              title: 'Darksiders II',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: The Point Break Heists',
              title: 'PAYDAY 2: The Point Break Heists',
              cis_only: 0
            },
            {
              hash_name: 'CoH 2 - Soviet Commander: Soviet Industry Tactics',
              title: 'CoH 2 - Soviet Commander: Soviet Industry Tactics',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 123216',
              title: 'Unknown package 123216',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Commando Madness Pack',
              title: 'Borderlands 2: Commando Madness Pack',
              cis_only: 0
            },
            {
              hash_name: 'THIEF DLC: Booster Pack - Opportunist',
              title: 'THIEF DLC: Booster Pack - Opportunist',
              cis_only: 0
            },
            {
              hash_name: 'Tom Clancy’s The Division™',
              title: 'Tom Clancy’s The Division™',
              cis_only: 0
            },
            {
              hash_name: 'Naviros Samurai Pack',
              title: 'Naviros Samurai Pack',
              cis_only: 0
            },
            {
              hash_name: 'One Piece Pirate Warriors 3 Story Pack_cis',
              title: 'One Piece Pirate Warriors 3 Story Pack',
              cis_only: 1
            },
            {
              hash_name: 'Battlepillars Gold Edition_cis',
              title: 'Battlepillars Gold Edition',
              cis_only: 1
            },
            {
              hash_name: 'Block King',
              title: 'Block King',
              cis_only: 0
            },
            {
              hash_name: 'The Daedalic Armageddon Bundle',
              title: 'The Daedalic Armageddon Bundle',
              cis_only: 0
            },
            {
              hash_name: 'GRID Autosport',
              title: 'GRID Autosport',
              cis_only: 0
            },
            {
              hash_name: 'Miniature Gods_cis',
              title: 'Miniature Gods',
              cis_only: 1
            },
            {
              hash_name: 'Arma 2: Operation Arrowhead',
              title: 'Arma 2: Operation Arrowhead',
              cis_only: 0
            },
            {
              hash_name: 'Forts',
              title: 'Forts',
              cis_only: 0
            },
            {
              hash_name: 'Geometry Dash',
              title: 'Geometry Dash',
              cis_only: 0
            },
            {
              hash_name: 'Getting Over It with Bennett Foddy',
              title: 'Getting Over It with Bennett Foddy',
              cis_only: 0
            },
            {
              hash_name: "Master of Orion, Collector's Edition Upgrade",
              title: "Master of Orion, Collector's Edition Upgrade",
              cis_only: 0
            },
            {
              hash_name: 'Space Pilgrim Episode I: Alpha Centauri',
              title: 'Space Pilgrim Episode I: Alpha Centauri',
              cis_only: 0
            },
            {
              hash_name: 'Expansion - Europa Universalis IV: Rights of Man_cis',
              title: 'Expansion - Europa Universalis IV: Rights of Man',
              cis_only: 1
            },
            {
              hash_name: 'FEZ',
              title: 'FEZ',
              cis_only: 0
            },
            {
              hash_name: 'Killing Floor',
              title: 'Killing Floor',
              cis_only: 0
            },
            {
              hash_name: 'Serious Sam HD',
              title: 'Serious Sam HD',
              cis_only: 0
            },
            {
              hash_name: 'Sins of a Dark Age - Early Access Gift',
              title: 'Sins of a Dark Age - Early Access Gift',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders Halloween Mission Pack_cis',
              title: 'Dungeon Defenders Halloween Mission Pack',
              cis_only: 1
            },
            {
              hash_name: 'Empire: Total War™ - Elite Units of the East',
              title: 'Empire: Total War™ - Elite Units of the East',
              cis_only: 0
            },
            {
              hash_name: 'HITMAN World of Assassination',
              title: 'HITMAN World of Assassination',
              cis_only: 0
            },
            {
              hash_name: 'Rocket League® - Marauder',
              title: 'Rocket League® - Marauder',
              cis_only: 0
            },
            {
              hash_name: 'Sang-Froid - Tales of Werewolves',
              title: 'Sang-Froid - Tales of Werewolves',
              cis_only: 0
            },
            {
              hash_name: 'Rain Blood Chronicles: Mirage',
              title: 'Rain Blood Chronicles: Mirage',
              cis_only: 0
            },
            {
              hash_name: 'Cossacks: Art of War',
              title: 'Cossacks: Art of War',
              cis_only: 0
            },
            {
              hash_name: 'Darksiders II Deathinitive Edition',
              title: 'Darksiders II Deathinitive Edition',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 17284',
              title: 'Unknown package 17284',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 33961',
              title: 'Unknown package 33961',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Yakuza Character Pack',
              title: 'PAYDAY 2: Yakuza Character Pack',
              cis_only: 0
            },
            {
              hash_name: 'Pressured',
              title: 'Pressured',
              cis_only: 0
            },
            {
              hash_name: 'Castle of Illusion',
              title: 'Castle of Illusion',
              cis_only: 0
            },
            {
              hash_name: 'Command & Conquer 3 Tiberium Wars™_cis',
              title: 'Command & Conquer 3 Tiberium Wars™',
              cis_only: 1
            },
            {
              hash_name: '12 Labours of Hercules III: Girl Power_cis',
              title: '12 Labours of Hercules III: Girl Power',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 12670',
              title: 'Unknown package 12670',
              cis_only: 0
            },
            {
              hash_name: 'Outlast_cis',
              title: 'Outlast',
              cis_only: 1
            },
            {
              hash_name: 'Pat & Mat',
              title: 'Pat & Mat',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Commando Supremacy Pack',
              title: 'Borderlands 2: Commando Supremacy Pack',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty: Black Ops III Beta GIFT_cis',
              title: 'Call of Duty: Black Ops III Beta GIFT',
              cis_only: 1
            },
            {
              hash_name: 'THIEF DLC: Booster Pack - Predator',
              title: 'THIEF DLC: Booster Pack - Predator',
              cis_only: 0
            },
            {
              hash_name: 'BBQ Simulator: The Squad',
              title: 'BBQ Simulator: The Squad',
              cis_only: 0
            },
            {
              hash_name: 'Block N Load',
              title: 'Block N Load',
              cis_only: 0
            },
            {
              hash_name: 'The Showdown Effect Digital Deluxe Gift',
              title: 'The Showdown Effect Digital Deluxe Gift',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life 2: Episode One - Gamescon',
              title: 'Half-Life 2: Episode One - Gamescon',
              cis_only: 0
            },
            {
              hash_name: 'Minimon',
              title: 'Minimon',
              cis_only: 0
            },
            {
              hash_name: 'Moving Out',
              title: 'Moving Out',
              cis_only: 0
            },
            {
              hash_name: 'Arma 2: Private Military Company',
              title: 'Arma 2: Private Military Company',
              cis_only: 0
            },
            {
              hash_name: 'Tales of Zestiria - School Costume Set',
              title: 'Tales of Zestiria - School Costume Set',
              cis_only: 0
            },
            {
              hash_name: 'Forza Horizon 5 European Automotive Car Pack',
              title: 'Forza Horizon 5 European Automotive Car Pack',
              cis_only: 0
            },
            {
              hash_name: 'Ghost Master®',
              title: 'Ghost Master®',
              cis_only: 0
            },
            {
              hash_name: 'Little Racers STREET_cis',
              title: 'Little Racers STREET',
              cis_only: 1
            },
            {
              hash_name: 'Space Pirates and Zombies',
              title: 'Space Pirates and Zombies',
              cis_only: 0
            },
            {
              hash_name: 'Fields of Mistria',
              title: 'Fields of Mistria',
              cis_only: 0
            },
            {
              hash_name: 'Legendary',
              title: 'Legendary',
              cis_only: 0
            },
            {
              hash_name: 'WRC 7 FIA World Rally Championship',
              title: 'WRC 7 FIA World Rally Championship',
              cis_only: 0
            },
            {
              hash_name: 'Hitman: Blood Money_cis',
              title: 'Hitman: Blood Money',
              cis_only: 1
            },
            {
              hash_name: 'Watch_Dogs™',
              title: 'Watch_Dogs™',
              cis_only: 0
            },
            {
              hash_name: 'Rocket League® - Supersonic Fury DLC Pack',
              title: 'Rocket League® - Supersonic Fury DLC Pack',
              cis_only: 0
            },
            {
              hash_name: 'Satisfactory',
              title: 'Satisfactory',
              cis_only: 0
            },
            {
              hash_name: 'Deadlight',
              title: 'Deadlight',
              cis_only: 0
            },
            {
              hash_name: 'Devil May Cry 5',
              title: 'Devil May Cry 5',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 52597_cis',
              title: 'Unknown package 52597',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 72159_cis',
              title: 'Unknown package 72159',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 17741',
              title: 'Unknown package 17741',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 34431',
              title: 'Unknown package 34431',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY: The Heist Soundtrack',
              title: 'PAYDAY: The Heist Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Pressured_cis',
              title: 'Pressured',
              cis_only: 1
            },
            {
              hash_name: 'Command & Conquer™ 3: Kane’s Wrath',
              title: 'Command & Conquer™ 3: Kane’s Wrath',
              cis_only: 0
            },
            {
              hash_name: 'Tree of Life',
              title: 'Tree of Life',
              cis_only: 0
            },
            {
              hash_name: '12 Labours of Hercules_cis',
              title: '12 Labours of Hercules',
              cis_only: 1
            },
            {
              hash_name: 'Borderlands 2: Headhunter 1: Bloody Harvest',
              title: 'Borderlands 2: Headhunter 1: Bloody Harvest',
              cis_only: 0
            },
            {
              hash_name: 'THIEF DLC: The Forsaken - Challenge Map',
              title: 'THIEF DLC: The Forsaken - Challenge Map',
              cis_only: 0
            },
            {
              hash_name: 'Tomb Raider VI: The Angel of Darkness',
              title: 'Tomb Raider VI: The Angel of Darkness',
              cis_only: 0
            },
            {
              hash_name:
                'Ne no Kami - The Two Princess Knights of Kyoto Extra Story',
              title:
                'Ne no Kami - The Two Princess Knights of Kyoto Extra Story',
              cis_only: 0
            },
            {
              hash_name: 'One-armed Cook: Drinks and bars',
              title: 'One-armed Cook: Drinks and bars',
              cis_only: 0
            },
            {
              hash_name: 'The Deed: Dynasty',
              title: 'The Deed: Dynasty',
              cis_only: 0
            },
            {
              hash_name: 'Grim Dawn',
              title: 'Grim Dawn',
              cis_only: 0
            },
            {
              hash_name: 'Bad Bots',
              title: 'Bad Bots',
              cis_only: 0
            },
            {
              hash_name: 'Stronghold HD (2012)',
              title: 'Stronghold HD (2012)',
              cis_only: 0
            },
            {
              hash_name: 'Forza Horizon 5 Treasure Map',
              title: 'Forza Horizon 5 Treasure Map',
              cis_only: 0
            },
            {
              hash_name: 'Ghostrunner 2',
              title: 'Ghostrunner 2',
              cis_only: 0
            },
            {
              hash_name: 'Sniper Ghost Warrior (LV) + 2 DLC Gift',
              title: 'Sniper Ghost Warrior (LV) + 2 DLC Gift',
              cis_only: 0
            },
            {
              hash_name: 'F1 RACE STARS™',
              title: 'F1 RACE STARS™',
              cis_only: 0
            },
            {
              hash_name: 'Killing Floor 2 Ultimate Edition',
              title: 'Killing Floor 2 Ultimate Edition',
              cis_only: 0
            },
            {
              hash_name: 'Legendary_cis',
              title: 'Legendary',
              cis_only: 1
            },
            {
              hash_name: 'Sir, You Are Being Hunted',
              title: 'Sir, You Are Being Hunted',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders New Heroes DLC_cis',
              title: 'Dungeon Defenders New Heroes DLC',
              cis_only: 1
            },
            {
              hash_name: 'Hitman: Contracts',
              title: 'Hitman: Contracts',
              cis_only: 0
            },
            {
              hash_name: 'Initial Drift Online',
              title: 'Initial Drift Online',
              cis_only: 0
            },
            {
              hash_name: 'Saturday Morning RPG',
              title: 'Saturday Morning RPG',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 72161',
              title: 'Unknown package 72161',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 17881',
              title: 'Unknown package 17881',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 34680_cis',
              title: 'Unknown package 34680',
              cis_only: 1
            },
            {
              hash_name: 'Pride of Nations: The Scramble for Africa',
              title: 'Pride of Nations: The Scramble for Africa',
              cis_only: 0
            },
            {
              hash_name: 'CastleMiner Z_cis',
              title: 'CastleMiner Z',
              cis_only: 1
            },
            {
              hash_name: 'Commandos 2: Men of Courage',
              title: 'Commandos 2: Men of Courage',
              cis_only: 0
            },
            {
              hash_name: 'Tree of Savior (English Ver.)',
              title: 'Tree of Savior (English Ver.)',
              cis_only: 0
            },
            {
              hash_name: '16bit Trader',
              title: '16bit Trader',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12704',
              title: 'Unknown package 12704',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Headhunter 2: Wattle Gobbler',
              title: 'Borderlands 2: Headhunter 2: Wattle Gobbler',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty® 2',
              title: 'Call of Duty® 2',
              cis_only: 0
            },
            {
              hash_name: 'Thief Simulator',
              title: 'Thief Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Tomb Raider: Anniversary',
              title: 'Tomb Raider: Anniversary',
              cis_only: 0
            },
            {
              hash_name: 'Need for Speed™ Heat',
              title: 'Need for Speed™ Heat',
              cis_only: 0
            },
            {
              hash_name: 'BEEP_cis',
              title: 'BEEP',
              cis_only: 1
            },
            {
              hash_name: 'Blocks That Matter',
              title: 'Blocks That Matter',
              cis_only: 0
            },
            {
              hash_name: 'The Silent Age',
              title: 'The Silent Age',
              cis_only: 0
            },
            {
              hash_name: 'Grim Dawn_cis',
              title: 'Grim Dawn',
              cis_only: 1
            },
            {
              hash_name: 'Mr. Prepper',
              title: 'Mr. Prepper',
              cis_only: 0
            },
            {
              hash_name: 'Multiwinia',
              title: 'Multiwinia',
              cis_only: 0
            },
            {
              hash_name: 'Styx: Shards of Darkness_cis',
              title: 'Styx: Shards of Darkness',
              cis_only: 1
            },
            {
              hash_name: 'Foul Play',
              title: 'Foul Play',
              cis_only: 0
            },
            {
              hash_name: 'Giana Sisters: Twisted Dreams',
              title: 'Giana Sisters: Twisted Dreams',
              cis_only: 0
            },
            {
              hash_name: 'Sniper Ghost Warrior 2: Siberian Strike',
              title: 'Sniper Ghost Warrior 2: Siberian Strike',
              cis_only: 0
            },
            {
              hash_name: 'Fable - The Lost Chapters',
              title: 'Fable - The Lost Chapters',
              cis_only: 0
            },
            {
              hash_name: 'Killing Floor 2_cis',
              title: 'Killing Floor 2',
              cis_only: 1
            },
            {
              hash_name:
                'LEGO Jurassic World: Jurassic Park Trilogy DLC Pack 1',
              title: 'LEGO Jurassic World: Jurassic Park Trilogy DLC Pack 1',
              cis_only: 0
            },
            {
              hash_name: 'X-COM: UFO Defense',
              title: 'X-COM: UFO Defense',
              cis_only: 0
            },
            {
              hash_name: 'Sixtieth Kilometer',
              title: 'Sixtieth Kilometer',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders: Assault Mission Pack',
              title: 'Dungeon Defenders: Assault Mission Pack',
              cis_only: 0
            },
            {
              hash_name: 'Hive With Pillbug, Ladybug, Mosquito DLC Gift',
              title: 'Hive With Pillbug, Ladybug, Mosquito DLC Gift',
              cis_only: 0
            },
            {
              hash_name: 'Injustice: Gods Among Us Ultimate Edition_cis',
              title: 'Injustice: Gods Among Us Ultimate Edition',
              cis_only: 1
            },
            {
              hash_name: 'Urban Trial Freestyle',
              title: 'Urban Trial Freestyle',
              cis_only: 0
            },
            {
              hash_name: 'Wayout',
              title: 'Wayout',
              cis_only: 0
            },
            {
              hash_name: 'Rome: Total War™ - Collection',
              title: 'Rome: Total War™ - Collection',
              cis_only: 0
            },
            {
              hash_name: 'Deadly Days',
              title: 'Deadly Days',
              cis_only: 0
            },
            {
              hash_name: 'Dig or Die',
              title: 'Dig or Die',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 72593_cis',
              title: 'Unknown package 72593',
              cis_only: 1
            },
            {
              hash_name: 'Rats - Time is running out!',
              title: 'Rats - Time is running out!',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 17881_cis',
              title: 'Unknown package 17881',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 36009',
              title: 'Unknown package 36009',
              cis_only: 0
            },
            {
              hash_name: 'Commandos 3: Destination Berlin_cis',
              title: 'Commandos 3: Destination Berlin',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 12721',
              title: 'Unknown package 12721',
              cis_only: 0
            },
            {
              hash_name: "Alan Wake's American Nightmare",
              title: "Alan Wake's American Nightmare",
              cis_only: 0
            },
            {
              hash_name: 'Over The Void_cis',
              title: 'Over The Void',
              cis_only: 1
            },
            {
              hash_name: 'Borderlands 2: Headhunter 5: Son of Crawmerax',
              title: 'Borderlands 2: Headhunter 5: Son of Crawmerax',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty®: Advanced Warfare - Season Pass',
              title: 'Call of Duty®: Advanced Warfare - Season Pass',
              cis_only: 0
            },
            {
              hash_name: 'Tomb Raider: Legend',
              title: 'Tomb Raider: Legend',
              cis_only: 0
            },
            {
              hash_name: 'NEKOPARA Vol. 0',
              title: 'NEKOPARA Vol. 0',
              cis_only: 0
            },
            {
              hash_name: 'Only Up: SKIBIDI TOGETHER',
              title: 'Only Up: SKIBIDI TOGETHER',
              cis_only: 0
            },
            {
              hash_name: 'Bejeweled Deluxe',
              title: 'Bejeweled Deluxe',
              cis_only: 0
            },
            {
              hash_name: 'The Escapists',
              title: 'The Escapists',
              cis_only: 0
            },
            {
              hash_name: 'Grotesque Tactics: Evil Heroes',
              title: 'Grotesque Tactics: Evil Heroes',
              cis_only: 0
            },
            {
              hash_name: 'Half-Life: Blue Shift',
              title: 'Half-Life: Blue Shift',
              cis_only: 0
            },
            {
              hash_name: 'Arma 3 Apex',
              title: 'Arma 3 Apex',
              cis_only: 0
            },
            {
              hash_name: 'Stargazer Christmas',
              title: 'Stargazer Christmas',
              cis_only: 0
            },
            {
              hash_name: 'Super Amazing Wagon Adventure',
              title: 'Super Amazing Wagon Adventure',
              cis_only: 0
            },
            {
              hash_name: 'Medieval Engineers',
              title: 'Medieval Engineers',
              cis_only: 0
            },
            {
              hash_name: 'Fable Anniversary_cis',
              title: 'Fable Anniversary',
              cis_only: 1
            },
            {
              hash_name:
                'LEGO Jurassic World: Jurassic Park Trilogy DLC Pack 2',
              title: 'LEGO Jurassic World: Jurassic Park Trilogy DLC Pack 2',
              cis_only: 0
            },
            {
              hash_name: 'Sex Simulator',
              title: 'Sex Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders: Barbarian Hero DLC',
              title: 'Dungeon Defenders: Barbarian Hero DLC',
              cis_only: 0
            },
            {
              hash_name: 'HOARD',
              title: 'HOARD',
              cis_only: 0
            },
            {
              hash_name: 'Inner Demons Pack - Face It + Soul Gambler',
              title: 'Inner Demons Pack - Face It + Soul Gambler',
              cis_only: 0
            },
            {
              hash_name: 'We Were Here Expeditions: The FriendShip',
              title: 'We Were Here Expeditions: The FriendShip',
              cis_only: 0
            },
            {
              hash_name: 'ROUNDS',
              title: 'ROUNDS',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 73706',
              title: 'Unknown package 73706',
              cis_only: 0
            },
            {
              hash_name: 'Rising Storm Gift (DE)',
              title: 'Rising Storm Gift (DE)',
              cis_only: 0
            },
            {
              hash_name: 'Primal Carnage Skin Bundle',
              title: 'Primal Carnage Skin Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Commandos Pack',
              title: 'Commandos Pack',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12749',
              title: 'Unknown package 12749',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Mechromancer Domination Pack',
              title: 'Borderlands 2: Mechromancer Domination Pack',
              cis_only: 0
            },
            {
              hash_name: 'This War of Mine',
              title: 'This War of Mine',
              cis_only: 0
            },
            {
              hash_name: 'Tomb Raider: Tomb of the Lost Adventurer',
              title: 'Tomb Raider: Tomb of the Lost Adventurer',
              cis_only: 0
            },
            {
              hash_name: 'NEStalgia Gift',
              title: 'NEStalgia Gift',
              cis_only: 0
            },
            {
              hash_name: 'Operation Flashpoint: Dragon Rising',
              title: 'Operation Flashpoint: Dragon Rising',
              cis_only: 0
            },
            {
              hash_name: 'Bejeweled® 3',
              title: 'Bejeweled® 3',
              cis_only: 0
            },
            {
              hash_name: 'The Escapists - Alcatraz',
              title: 'The Escapists - Alcatraz',
              cis_only: 0
            },
            {
              hash_name: 'The Escapists - Duct Tapes are Forever',
              title: 'The Escapists - Duct Tapes are Forever',
              cis_only: 0
            },
            {
              hash_name: "Hamilton's Great Adventure - Retro Fever DLC",
              title: "Hamilton's Great Adventure - Retro Fever DLC",
              cis_only: 0
            },
            {
              hash_name: 'Murder Miners_cis',
              title: 'Murder Miners',
              cis_only: 1
            },
            {
              hash_name: 'Super Bunny Man',
              title: 'Super Bunny Man',
              cis_only: 0
            },
            {
              hash_name: 'Lost Planet™: Extreme Condition',
              title: 'Lost Planet™: Extreme Condition',
              cis_only: 0
            },
            {
              hash_name: 'Empire: Total War™ - The Warpath Campaign',
              title: 'Empire: Total War™ - The Warpath Campaign',
              cis_only: 0
            },
            {
              hash_name: 'Fabula Mortis',
              title: 'Fabula Mortis',
              cis_only: 0
            },
            {
              hash_name: 'LEGO Jurassic World: Jurassic World DLC Pack',
              title: 'LEGO Jurassic World: Jurassic World DLC Pack',
              cis_only: 0
            },
            {
              hash_name: 'Sex with Stalin',
              title: 'Sex with Stalin',
              cis_only: 0
            },
            {
              hash_name: 'DOOM Eternal Standard Edition',
              title: 'DOOM Eternal Standard Edition',
              cis_only: 0
            },
            {
              hash_name: 'Dungeon Defenders: Summoner Hero DLC_cis',
              title: 'Dungeon Defenders: Summoner Hero DLC',
              cis_only: 1
            },
            {
              hash_name: 'Hollow Knight',
              title: 'Hollow Knight',
              cis_only: 0
            },
            {
              hash_name: 'Innocent Girl',
              title: 'Innocent Girl',
              cis_only: 0
            },
            {
              hash_name: 'WEBFISHING',
              title: 'WEBFISHING',
              cis_only: 0
            },
            {
              hash_name: 'Dino D-Day: Last Stand DLC',
              title: 'Dino D-Day: Last Stand DLC',
              cis_only: 0
            },
            {
              hash_name: 'Ravaged',
              title: 'Ravaged',
              cis_only: 0
            },
            {
              hash_name: 'Rising Storm Gift_cis',
              title: 'Rising Storm Gift',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 18251',
              title: 'Unknown package 18251',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 391',
              title: 'Unknown package 391',
              cis_only: 0
            },
            {
              hash_name: 'Commandos: Behind Enemy Lines',
              title: 'Commandos: Behind Enemy Lines',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12754',
              title: 'Unknown package 12754',
              cis_only: 0
            },
            {
              hash_name: 'Alien Breed 2: Assault',
              title: 'Alien Breed 2: Assault',
              cis_only: 0
            },
            {
              hash_name: 'Payday 2 Gift Pre-Order',
              title: 'Payday 2 Gift Pre-Order',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Mechromancer Madness Pack',
              title: 'Borderlands 2: Mechromancer Madness Pack',
              cis_only: 0
            },
            {
              hash_name:
                'Call of Duty®: Black Ops First Strike Content Pack_cis',
              title: 'Call of Duty®: Black Ops First Strike Content Pack',
              cis_only: 1
            },
            {
              hash_name: 'This War of Mine_cis',
              title: 'This War of Mine',
              cis_only: 1
            },
            {
              hash_name: 'Never Alone (Kisima Ingitchuna)',
              title: 'Never Alone (Kisima Ingitchuna)',
              cis_only: 0
            },
            {
              hash_name: 'Besiege_cis',
              title: 'Besiege',
              cis_only: 1
            },
            {
              hash_name: 'Beyond Gravity',
              title: 'Beyond Gravity',
              cis_only: 0
            },
            {
              hash_name: 'Blood and Bacon_cis',
              title: 'Blood and Bacon',
              cis_only: 1
            },
            {
              hash_name: 'The Escapists - Escape Team',
              title: 'The Escapists - Escape Team',
              cis_only: 0
            },
            {
              hash_name: 'Guardians of Orion',
              title: 'Guardians of Orion',
              cis_only: 0
            },
            {
              hash_name: 'Murky Divers',
              title: 'Murky Divers',
              cis_only: 0
            },
            {
              hash_name: 'StarMade_cis',
              title: 'StarMade',
              cis_only: 1
            },
            {
              hash_name: 'Freddi Fish and the Case of the Missing Kelp Seeds',
              title: 'Freddi Fish and the Case of the Missing Kelp Seeds',
              cis_only: 0
            },
            {
              hash_name: 'Medieval Engineers_cis',
              title: 'Medieval Engineers',
              cis_only: 1
            },
            {
              hash_name: 'Empyrion - Galactic Survival',
              title: 'Empyrion - Galactic Survival',
              cis_only: 0
            },
            {
              hash_name: 'Killing Floor Outbreak Character Pack',
              title: 'Killing Floor Outbreak Character Pack',
              cis_only: 0
            },
            {
              hash_name: 'LEGO Marvel Super Heroes DLC: Asgard Pack',
              title: 'LEGO Marvel Super Heroes DLC: Asgard Pack',
              cis_only: 0
            },
            {
              hash_name: 'Sex with the Devil',
              title: 'Sex with the Devil',
              cis_only: 0
            },
            {
              hash_name: 'Skullgirls: Beowulf',
              title: 'Skullgirls: Beowulf',
              cis_only: 0
            },
            {
              hash_name: 'Dota 2',
              title: 'Dota 2',
              cis_only: 0
            },
            {
              hash_name: 'Dungeonland Gift',
              title: 'Dungeonland Gift',
              cis_only: 0
            },
            {
              hash_name: 'Holodrive',
              title: 'Holodrive',
              cis_only: 0
            },
            {
              hash_name: 'VEGAS Pro 14 Edit Steam Edition',
              title: 'VEGAS Pro 14 Edit Steam Edition',
              cis_only: 0
            },
            {
              hash_name: 'Welcome to the Game - Hacker Mode',
              title: 'Welcome to the Game - Hacker Mode',
              cis_only: 0
            },
            {
              hash_name: 'Scrap Mechanic_cis',
              title: 'Scrap Mechanic',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 54471',
              title: 'Unknown package 54471',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 74582_cis',
              title: 'Unknown package 74582',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 18261',
              title: 'Unknown package 18261',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 39646',
              title: 'Unknown package 39646',
              cis_only: 0
            },
            {
              hash_name: 'Chasing Tails ~A Promise in the Snow~',
              title: 'Chasing Tails ~A Promise in the Snow~',
              cis_only: 0
            },
            {
              hash_name: '8-Bit Hordes - Soundtrack',
              title: '8-Bit Hordes - Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12764',
              title: 'Unknown package 12764',
              cis_only: 0
            },
            {
              hash_name: 'Alien Breed 3: Descent',
              title: 'Alien Breed 3: Descent',
              cis_only: 0
            },
            {
              hash_name: 'Overcooked',
              title: 'Overcooked',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Mechromancer Pack',
              title: 'Borderlands 2: Mechromancer Pack',
              cis_only: 0
            },
            {
              hash_name:
                'Call of Duty®: Black Ops II - Party Rock Personalization Pack',
              title:
                'Call of Duty®: Black Ops II - Party Rock Personalization Pack',
              cis_only: 0
            },
            {
              hash_name: 'Timberman',
              title: 'Timberman',
              cis_only: 0
            },
            {
              hash_name: 'New kind of adventure',
              title: 'New kind of adventure',
              cis_only: 0
            },
            {
              hash_name: 'Nexuiz',
              title: 'Nexuiz',
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die! - Lost Adventures',
              title: 'Orcs Must Die! - Lost Adventures',
              cis_only: 0
            },
            {
              hash_name: 'Big Journey to Home - Official Soundtrack',
              title: 'Big Journey to Home - Official Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Talisman: Digital Edition_cis',
              title: 'Talisman: Digital Edition',
              cis_only: 1
            },
            {
              hash_name: 'Gumboy Tournament',
              title: 'Gumboy Tournament',
              cis_only: 0
            },
            {
              hash_name: 'Barbie™ Dreamhouse Party™',
              title: 'Barbie™ Dreamhouse Party™',
              cis_only: 0
            },
            {
              hash_name: 'Starpoint Gemini 2',
              title: 'Starpoint Gemini 2',
              cis_only: 0
            },
            {
              hash_name: 'Fight The Dragon_cis',
              title: 'Fight The Dragon',
              cis_only: 1
            },
            {
              hash_name: 'Freedom Force',
              title: 'Freedom Force',
              cis_only: 0
            },
            {
              hash_name: 'Lucius_cis',
              title: 'Lucius',
              cis_only: 1
            },
            {
              hash_name: 'Men of War: Assault Squad 2_cis',
              title: 'Men of War: Assault Squad 2',
              cis_only: 1
            },
            {
              hash_name: 'Sparkle 2 Evo',
              title: 'Sparkle 2 Evo',
              cis_only: 0
            },
            {
              hash_name: 'Faerie Solitaire_cis',
              title: 'Faerie Solitaire',
              cis_only: 1
            },
            {
              hash_name: 'Skullgirls: Big Band',
              title: 'Skullgirls: Big Band',
              cis_only: 0
            },
            {
              hash_name: 'Double Dragon: Neon',
              title: 'Double Dragon: Neon',
              cis_only: 0
            },
            {
              hash_name: 'Dungeons',
              title: 'Dungeons',
              cis_only: 0
            },
            {
              hash_name: 'DiRT 1',
              title: 'DiRT 1',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 75200',
              title: 'Unknown package 75200',
              cis_only: 0
            },
            {
              hash_name: 'Real World Racing',
              title: 'Real World Racing',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 39877',
              title: 'Unknown package 39877',
              cis_only: 0
            },
            {
              hash_name:
                "Penny Arcade's On the Rain-Slick Precipice of Darkness 3_cis",
              title: "Penny Arcade's On the Rain-Slick Precipice of Darkness 3",
              cis_only: 1
            },
            {
              hash_name: 'Primal Fears',
              title: 'Primal Fears',
              cis_only: 0
            },
            {
              hash_name: 'Chess 2: The Sequel',
              title: 'Chess 2: The Sequel',
              cis_only: 0
            },
            {
              hash_name: 'Company of Heroes 2',
              title: 'Company of Heroes 2',
              cis_only: 0
            },
            {
              hash_name: '911 Operator',
              title: '911 Operator',
              cis_only: 0
            },
            {
              hash_name: 'Alien Rage - Unlimited',
              title: 'Alien Rage - Unlimited',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Mechromancer Steampunk Slayer Pack',
              title: 'Borderlands 2: Mechromancer Steampunk Slayer Pack',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty®: Black Ops II - Revolution_cis',
              title: 'Call of Duty®: Black Ops II - Revolution',
              cis_only: 1
            },
            {
              hash_name: 'The Sims 3 - Movie Stuff',
              title: 'The Sims 3 - Movie Stuff',
              cis_only: 0
            },
            {
              hash_name:
                'Time Gentlemen, Please! and Ben There, Dan That! Special Edition  Double Pack',
              title:
                'Time Gentlemen, Please! and Ben There, Dan That! Special Edition  Double Pack',
              cis_only: 0
            },
            {
              hash_name: 'The Sims 3: Island Paradise',
              title: 'The Sims 3: Island Paradise',
              cis_only: 0
            },
            {
              hash_name: 'Timen runner',
              title: 'Timen runner',
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die! 2',
              title: 'Orcs Must Die! 2',
              cis_only: 0
            },
            {
              hash_name: 'Bighead Runner: Original Soundtrack',
              title: 'Bighead Runner: Original Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'MX vs. ATV Unleashed',
              title: 'MX vs. ATV Unleashed',
              cis_only: 0
            },
            {
              hash_name: 'Starvoid Gift',
              title: 'Starvoid Gift',
              cis_only: 0
            },
            {
              hash_name: 'Super Lolicon Puzzle Simulator 2019',
              title: 'Super Lolicon Puzzle Simulator 2019',
              cis_only: 0
            },
            {
              hash_name: 'From Dust',
              title: 'From Dust',
              cis_only: 0
            },
            {
              hash_name:
                'Lucy Got Problems - Artbook and Wallpapers (Silver Edition)',
              title:
                'Lucy Got Problems - Artbook and Wallpapers (Silver Edition)',
              cis_only: 0
            },
            {
              hash_name: 'Sol Survivor',
              title: 'Sol Survivor',
              cis_only: 0
            },
            {
              hash_name: 'Spec Ops: The Line',
              title: 'Spec Ops: The Line',
              cis_only: 0
            },
            {
              hash_name: 'Fallen: A2P Protocol',
              title: 'Fallen: A2P Protocol',
              cis_only: 0
            },
            {
              hash_name: 'XCOM: Enemy Within_cis',
              title: 'XCOM: Enemy Within',
              cis_only: 1
            },
            {
              hash_name: 'Shadowgrounds Pack',
              title: 'Shadowgrounds Pack',
              cis_only: 0
            },
            {
              hash_name: 'Skullgirls: Color Palette Bundle',
              title: 'Skullgirls: Color Palette Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Hot Lava_cis',
              title: 'Hot Lava',
              cis_only: 1
            },
            {
              hash_name: 'Scribblenauts Unlimited',
              title: 'Scribblenauts Unlimited',
              cis_only: 0
            },
            {
              hash_name: 'Reassembly_cis',
              title: 'Reassembly',
              cis_only: 1
            },
            {
              hash_name: 'Creativerse',
              title: 'Creativerse',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 40649',
              title: 'Unknown package 40649',
              cis_only: 0
            },
            {
              hash_name: 'Phasmophobia',
              title: 'Phasmophobia',
              cis_only: 0
            },
            {
              hash_name: 'Chicken Shoot Gold',
              title: 'Chicken Shoot Gold',
              cis_only: 0
            },
            {
              hash_name: 'Trine 3: The Artifacts of Power_cis',
              title: 'Trine 3: The Artifacts of Power',
              cis_only: 1
            },
            {
              hash_name: 'Aliens versus Predator Classic 2000',
              title: 'Aliens versus Predator Classic 2000',
              cis_only: 0
            },
            {
              hash_name: 'Overcooked! 2 - Gourmet Edition',
              title: 'Overcooked! 2 - Gourmet Edition',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands 2: Mechromancer Supremacy Pack',
              title: 'Borderlands 2: Mechromancer Supremacy Pack',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty®: Black Ops II - Vengeance_cis',
              title: 'Call of Duty®: Black Ops II - Vengeance',
              cis_only: 1
            },
            {
              hash_name: "Borderlands 2: Tiny Tina's Assault on Dragon Keep",
              title: "Borderlands 2: Tiny Tina's Assault on Dragon Keep",
              cis_only: 0
            },
            {
              hash_name: 'The Sims™ 3',
              title: 'The Sims™ 3',
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die! 2 - Are We There Yeti?',
              title: 'Orcs Must Die! 2 - Are We There Yeti?',
              cis_only: 0
            },
            {
              hash_name: 'Bloodsports Gift_cis',
              title: 'Bloodsports Gift',
              cis_only: 1
            },
            {
              hash_name: 'Tattletail',
              title: 'Tattletail',
              cis_only: 0
            },
            {
              hash_name: 'Gigantus DCC-Gogo. Marking',
              title: 'Gigantus DCC-Gogo. Marking',
              cis_only: 0
            },
            {
              hash_name: 'Gun Monkeys - 2 Gift sub',
              title: 'Gun Monkeys - 2 Gift sub',
              cis_only: 0
            },
            {
              hash_name: 'MXGP - The Official Motocross Videogame',
              title: 'MXGP - The Official Motocross Videogame',
              cis_only: 0
            },
            {
              hash_name: 'Barony_cis',
              title: 'Barony',
              cis_only: 1
            },
            {
              hash_name: 'Final Exam_cis',
              title: 'Final Exam',
              cis_only: 1
            },
            {
              hash_name: 'Frontlines™: Fuel of War™',
              title: 'Frontlines™: Fuel of War™',
              cis_only: 0
            },
            {
              hash_name: 'Men of War™',
              title: 'Men of War™',
              cis_only: 0
            },
            {
              hash_name: 'Sonic & SEGA All-Stars Racing',
              title: 'Sonic & SEGA All-Stars Racing',
              cis_only: 0
            },
            {
              hash_name: 'Enter the Gungeon',
              title: 'Enter the Gungeon',
              cis_only: 0
            },
            {
              hash_name: 'Shadowrun Returns',
              title: 'Shadowrun Returns',
              cis_only: 0
            },
            {
              hash_name: 'Skullgirls: Eliza',
              title: 'Skullgirls: Eliza',
              cis_only: 0
            },
            {
              hash_name: 'Hand Simulator',
              title: 'Hand Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Hotline Miami',
              title: 'Hotline Miami',
              cis_only: 0
            },
            {
              hash_name: 'Who Wants to Be a Millionaire',
              title: 'Who Wants to Be a Millionaire',
              cis_only: 0
            },
            {
              hash_name: 'SCUM Charms pack',
              title: 'SCUM Charms pack',
              cis_only: 0
            },
            {
              hash_name:
                "Defender's Quest: Valley of the Forgotten (DX edition)",
              title: "Defender's Quest: Valley of the Forgotten (DX edition)",
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 55834',
              title: 'Unknown package 55834',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 79015',
              title: 'Unknown package 79015',
              cis_only: 0
            },
            {
              hash_name: 'Red Faction: Armageddon Path to War DLC',
              title: 'Red Faction: Armageddon Path to War DLC',
              cis_only: 0
            },
            {
              hash_name: 'Risk of Rain 2_cis',
              title: 'Risk of Rain 2',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 25601',
              title: 'Unknown package 25601',
              cis_only: 0
            },
            {
              hash_name: 'Placid Plastic Duck Simulator',
              title: 'Placid Plastic Duck Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Child of Light',
              title: 'Child of Light',
              cis_only: 0
            },
            {
              hash_name: 'Company of Heroes Complete Pack',
              title: 'Company of Heroes Complete Pack',
              cis_only: 0
            },
            {
              hash_name: 'A Game of Dwarves',
              title: 'A Game of Dwarves',
              cis_only: 0
            },
            {
              hash_name: 'Aliens vs. Predator™',
              title: 'Aliens vs. Predator™',
              cis_only: 0
            },
            {
              hash_name:
                'Call of Duty®: Black Ops III - Der Eisendrache Zombies Map',
              title:
                'Call of Duty®: Black Ops III - Der Eisendrache Zombies Map',
              cis_only: 0
            },
            {
              hash_name: 'The Sims™ 3 Generations',
              title: 'The Sims™ 3 Generations',
              cis_only: 0
            },
            {
              hash_name: 'Tiny Bridge: Ratventure',
              title: 'Tiny Bridge: Ratventure',
              cis_only: 0
            },
            {
              hash_name: 'Nightingale',
              title: 'Nightingale',
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die! 2 - Family Ties Booster Pack',
              title: 'Orcs Must Die! 2 - Family Ties Booster Pack',
              cis_only: 0
            },
            {
              hash_name: 'Girl Amazon Survival',
              title: 'Girl Amazon Survival',
              cis_only: 0
            },
            {
              hash_name: 'Gun Monkeys_cis',
              title: 'Gun Monkeys',
              cis_only: 1
            },
            {
              hash_name: 'MONOPOLY® PLUS',
              title: 'MONOPOLY® PLUS',
              cis_only: 0
            },
            {
              hash_name: 'My Dream Setup',
              title: 'My Dream Setup',
              cis_only: 0
            },
            {
              hash_name: 'Artemis Spaceship Bridge Simulator',
              title: 'Artemis Spaceship Bridge Simulator',
              cis_only: 0
            },
            {
              hash_name: 'FINAL FANTASY VII',
              title: 'FINAL FANTASY VII',
              cis_only: 0
            },
            {
              hash_name: 'Luxor 3',
              title: 'Luxor 3',
              cis_only: 0
            },
            {
              hash_name: 'Sonic 3D Blast',
              title: 'Sonic 3D Blast',
              cis_only: 0
            },
            {
              hash_name: 'SpeedRunners_cis',
              title: 'SpeedRunners',
              cis_only: 1
            },
            {
              hash_name: 'Knight Adventure',
              title: 'Knight Adventure',
              cis_only: 0
            },
            {
              hash_name: 'Shank 2',
              title: 'Shank 2',
              cis_only: 0
            },
            {
              hash_name: 'Skullgirls: Robo-Fortune',
              title: 'Skullgirls: Robo-Fortune',
              cis_only: 0
            },
            {
              hash_name: "Dracula's Legacy_cis",
              title: "Dracula's Legacy",
              cis_only: 1
            },
            {
              hash_name: 'Dungeons 2 - A Chance of Dragons',
              title: 'Dungeons 2 - A Chance of Dragons',
              cis_only: 0
            },
            {
              hash_name: 'Hard Reset Redux',
              title: 'Hard Reset Redux',
              cis_only: 0
            },
            {
              hash_name: 'Hotline Miami 2: Wrong Number',
              title: 'Hotline Miami 2: Wrong Number',
              cis_only: 0
            },
            {
              hash_name: 'Verdun_cis',
              title: 'Verdun',
              cis_only: 1
            },
            {
              hash_name: 'RUSSIAPHOBIA',
              title: 'RUSSIAPHOBIA',
              cis_only: 0
            },
            {
              hash_name: 'SCUM Female Hair Pack',
              title: 'SCUM Female Hair Pack',
              cis_only: 0
            },
            {
              hash_name: 'Disco Elysium - The Final Cut',
              title: 'Disco Elysium - The Final Cut',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 56486_cis',
              title: 'Unknown package 56486',
              cis_only: 1
            },
            {
              hash_name:
                'Red Orchestra 2: Heroes of Stalingrad with Rising Storm',
              title: 'Red Orchestra 2: Heroes of Stalingrad with Rising Storm',
              cis_only: 0
            },
            {
              hash_name: 'RISK™: Factions',
              title: 'RISK™: Factions',
              cis_only: 0
            },
            {
              hash_name: 'Dead by Daylight - Sadako Rising Chapter',
              title: 'Dead by Daylight - Sadako Rising Chapter',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 2573',
              title: 'Unknown package 2573',
              cis_only: 0
            },
            {
              hash_name: 'Plague Inc: Evolved_cis',
              title: 'Plague Inc: Evolved',
              cis_only: 1
            },
            {
              hash_name: 'Child of Light_cis',
              title: 'Child of Light',
              cis_only: 1
            },
            {
              hash_name: 'Tomb Raider_cis',
              title: 'Tomb Raider',
              cis_only: 1
            },
            {
              hash_name: 'A New Beginning - Final Cut',
              title: 'A New Beginning - Final Cut',
              cis_only: 0
            },
            {
              hash_name: 'American Conquest',
              title: 'American Conquest',
              cis_only: 0
            },
            {
              hash_name:
                "Overkill's The Walking Dead - BETA Gift - Retired_cis",
              title: "Overkill's The Walking Dead - BETA Gift - Retired",
              cis_only: 1
            },
            {
              hash_name: 'Overlord: Fellowship of Evil',
              title: 'Overlord: Fellowship of Evil',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty®: Modern Warfare® 2 (2009)',
              title: 'Call of Duty®: Modern Warfare® 2 (2009)',
              cis_only: 0
            },
            {
              hash_name: 'The Sims™ 3 Pets',
              title: 'The Sims™ 3 Pets',
              cis_only: 0
            },
            {
              hash_name: 'Nikopol: Secrets of the Immortals',
              title: 'Nikopol: Secrets of the Immortals',
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die! 2 - Fire and Water Booster Pack',
              title: 'Orcs Must Die! 2 - Fire and Water Booster Pack',
              cis_only: 0
            },
            {
              hash_name: 'Bioshock 2',
              title: 'Bioshock 2',
              cis_only: 0
            },
            {
              hash_name: 'The Hat Man: Shadow Ward_cis',
              title: 'The Hat Man: Shadow Ward',
              cis_only: 1
            },
            {
              hash_name: 'Girls! Girls! Girls!?',
              title: 'Girls! Girls! Girls!?',
              cis_only: 0
            },
            {
              hash_name: 'Gun Rocket',
              title: 'Gun Rocket',
              cis_only: 0
            },
            {
              hash_name: 'Monster Hunter Rise + Sunbreak',
              title: 'Monster Hunter Rise + Sunbreak',
              cis_only: 0
            },
            {
              hash_name: 'My Ex-Boyfriend the Space Tyrant',
              title: 'My Ex-Boyfriend the Space Tyrant',
              cis_only: 0
            },
            {
              hash_name: 'Barro F',
              title: 'Barro F',
              cis_only: 0
            },
            {
              hash_name: 'State of Decay 2: Juggernaut Edition',
              title: 'State of Decay 2: Juggernaut Edition',
              cis_only: 0
            },
            {
              hash_name: 'Firewatch',
              title: 'Firewatch',
              cis_only: 0
            },
            {
              hash_name: 'LYNE',
              title: 'LYNE',
              cis_only: 0
            },
            {
              hash_name: 'Sonic and All-Stars Racing Transformed Gift',
              title: 'Sonic and All-Stars Racing Transformed Gift',
              cis_only: 0
            },
            {
              hash_name: 'Spirit of the North',
              title: 'Spirit of the North',
              cis_only: 0
            },
            {
              hash_name: 'Epigenesis',
              title: 'Epigenesis',
              cis_only: 0
            },
            {
              hash_name: 'Fallout 4 - Wasteland Workshop',
              title: 'Fallout 4 - Wasteland Workshop',
              cis_only: 0
            },
            {
              hash_name: 'Knights and Merchants',
              title: 'Knights and Merchants',
              cis_only: 0
            },
            {
              hash_name: "YOU DON'T KNOW JACK Vol. 6 The Lost Gold_cis",
              title: "YOU DON'T KNOW JACK Vol. 6 The Lost Gold",
              cis_only: 1
            },
            {
              hash_name: 'Skulls of the Shogun',
              title: 'Skulls of the Shogun',
              cis_only: 0
            },
            {
              hash_name: 'Dragon Age II: Ultimate Edition',
              title: 'Dragon Age II: Ultimate Edition',
              cis_only: 0
            },
            {
              hash_name: 'Dungeons 2 - A Game of Winter',
              title: 'Dungeons 2 - A Game of Winter',
              cis_only: 0
            },
            {
              hash_name: 'Hearts of Iron III: Semper Fi',
              title: 'Hearts of Iron III: Semper Fi',
              cis_only: 0
            },
            {
              hash_name: 'House Flipper',
              title: 'House Flipper',
              cis_only: 0
            },
            {
              hash_name: 'SCUM Luis Moncada character pack',
              title: 'SCUM Luis Moncada character pack',
              cis_only: 0
            },
            {
              hash_name: 'Disney Princess: Enchanted Journey',
              title: 'Disney Princess: Enchanted Journey',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 57675_cis',
              title: 'Unknown package 57675',
              cis_only: 1
            },
            {
              hash_name:
                'Red Orchestra 2: Heroes of Stalingrad with Rising Storm_cis',
              title: 'Red Orchestra 2: Heroes of Stalingrad with Rising Storm',
              cis_only: 1
            },
            {
              hash_name: 'Rivals of Aether',
              title: 'Rivals of Aether',
              cis_only: 0
            },
            {
              hash_name: 'Crypt of the NecroDancer',
              title: 'Crypt of the NecroDancer',
              cis_only: 0
            },
            {
              hash_name: 'Dead by Daylight - The Halloween® Chapter',
              title: 'Dead by Daylight - The Halloween® Chapter',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12766',
              title: 'Unknown package 12766',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 27281',
              title: 'Unknown package 27281',
              cis_only: 0
            },
            {
              hash_name: 'Planetary Annihilation: TITANS',
              title: 'Planetary Annihilation: TITANS',
              cis_only: 0
            },
            {
              hash_name: 'Prison Architect',
              title: 'Prison Architect',
              cis_only: 0
            },
            {
              hash_name: 'TRISTOY_cis',
              title: 'TRISTOY',
              cis_only: 1
            },
            {
              hash_name: 'A New Beginning - Final Cut_cis',
              title: 'A New Beginning - Final Cut',
              cis_only: 1
            },
            {
              hash_name: 'A Story About My Uncle',
              title: 'A Story About My Uncle',
              cis_only: 0
            },
            {
              hash_name: 'Amnesia: The Dark Descent',
              title: 'Amnesia: The Dark Descent',
              cis_only: 0
            },
            {
              hash_name: 'Overlord™: Raising Hell',
              title: 'Overlord™: Raising Hell',
              cis_only: 0
            },
            {
              hash_name: 'PAYDAY 2: Gage Mod Courier',
              title: 'PAYDAY 2: Gage Mod Courier',
              cis_only: 0
            },
            {
              hash_name: 'Call of Duty®: Modern Warfare® 2 Resurgence Pack',
              title: 'Call of Duty®: Modern Warfare® 2 Resurgence Pack',
              cis_only: 0
            },
            {
              hash_name: 'The Sims™ 3 Showtime',
              title: 'The Sims™ 3 Showtime',
              cis_only: 0
            },
            {
              hash_name: 'Titan Quest Anniversary Edition',
              title: 'Titan Quest Anniversary Edition',
              cis_only: 0
            },
            {
              hash_name: "No Man's Sky",
              title: "No Man's Sky",
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die! 3',
              title: 'Orcs Must Die! 3',
              cis_only: 0
            },
            {
              hash_name: 'Bioshock DE',
              title: 'Bioshock DE',
              cis_only: 0
            },
            {
              hash_name: 'Teddy Floppy Ear - Mountain Adventure',
              title: 'Teddy Floppy Ear - Mountain Adventure',
              cis_only: 0
            },
            {
              hash_name: 'Goat Simulator: GoatZ',
              title: 'Goat Simulator: GoatZ',
              cis_only: 0
            },
            {
              hash_name: 'Guncraft',
              title: 'Guncraft',
              cis_only: 0
            },
            {
              hash_name: 'My Furry Dictator 🐾',
              title: 'My Furry Dictator 🐾',
              cis_only: 0
            },
            {
              hash_name: "Assassin's Creed Freedom Cry",
              title: "Assassin's Creed Freedom Cry",
              cis_only: 0
            },
            {
              hash_name: 'Firewatch Original Soundtrack',
              title: 'Firewatch Original Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Fallout 4 Far Harbor',
              title: 'Fallout 4 Far Harbor',
              cis_only: 0
            },
            {
              hash_name: 'Kopanito All-Stars Soccer',
              title: 'Kopanito All-Stars Soccer',
              cis_only: 0
            },
            {
              hash_name: 'Your Only Move Is HUSTLE',
              title: 'Your Only Move Is HUSTLE',
              cis_only: 0
            },
            {
              hash_name: 'Shark Attack Deathmatch 2_cis',
              title: 'Shark Attack Deathmatch 2',
              cis_only: 1
            },
            {
              hash_name: 'Dragon Age: Origins - Ultimate Edition',
              title: 'Dragon Age: Origins - Ultimate Edition',
              cis_only: 0
            },
            {
              hash_name: 'Dungeons 2 - A Song of Sand and Fire',
              title: 'Dungeons 2 - A Song of Sand and Fire',
              cis_only: 0
            },
            {
              hash_name: 'Heileen 3: New Horizons',
              title: 'Heileen 3: New Horizons',
              cis_only: 0
            },
            {
              hash_name: 'Viscera Cleanup Detail - House of Horror',
              title: 'Viscera Cleanup Detail - House of Horror',
              cis_only: 0
            },
            {
              hash_name: 'Rust - Instruments Pack',
              title: 'Rust - Instruments Pack',
              cis_only: 0
            },
            {
              hash_name: 'SCUM Supporter Pack',
              title: 'SCUM Supporter Pack',
              cis_only: 0
            },
            {
              hash_name: 'Disney Winnie the Pooh',
              title: 'Disney Winnie the Pooh',
              cis_only: 0
            },
            {
              hash_name: 'RoboBlitz',
              title: 'RoboBlitz',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12797',
              title: 'Unknown package 12797',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 27281_cis',
              title: 'Unknown package 27281',
              cis_only: 1
            },
            {
              hash_name: 'Project CARS - Limited Edition Upgrade',
              title: 'Project CARS - Limited Edition Upgrade',
              cis_only: 0
            },
            {
              hash_name: 'Chivalry: Complete Pack',
              title: 'Chivalry: Complete Pack',
              cis_only: 0
            },
            {
              hash_name: 'Chivalry: Complete Pack_cis',
              title: 'Chivalry: Complete Pack',
              cis_only: 1
            },
            {
              hash_name: 'A Year Of Rain 2Pack Gift',
              title: 'A Year Of Rain 2Pack Gift',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands: The Pre-Sequel Season Pass_cis',
              title: 'Borderlands: The Pre-Sequel Season Pass',
              cis_only: 1
            },
            {
              hash_name: 'The Sims™ 4',
              title: 'The Sims™ 4',
              cis_only: 0
            },
            {
              hash_name: 'Titan Quest Anniversary Edition_cis',
              title: 'Titan Quest Anniversary Edition',
              cis_only: 1
            },
            {
              hash_name: 'No Time To Live',
              title: 'No Time To Live',
              cis_only: 0
            },
            {
              hash_name: 'Orcs Must Die! Unchained - Starter Bundle',
              title: 'Orcs Must Die! Unchained - Starter Bundle',
              cis_only: 0
            },
            {
              hash_name: 'BioShock Infinite',
              title: 'BioShock Infinite',
              cis_only: 0
            },
            {
              hash_name: 'Blue Estate The Game',
              title: 'Blue Estate The Game',
              cis_only: 0
            },
            {
              hash_name: 'Terra Incognita Chapter One: The Descendant',
              title: 'Terra Incognita Chapter One: The Descendant',
              cis_only: 0
            },
            {
              hash_name: 'The Howler',
              title: 'The Howler',
              cis_only: 0
            },
            {
              hash_name: 'Guncraft_cis',
              title: 'Guncraft',
              cis_only: 1
            },
            {
              hash_name: 'Monsti',
              title: 'Monsti',
              cis_only: 0
            },
            {
              hash_name: "Assassin's Creed® Odyssey",
              title: "Assassin's Creed® Odyssey",
              cis_only: 0
            },
            {
              hash_name: 'State of Decay_cis',
              title: 'State of Decay',
              cis_only: 1
            },
            {
              hash_name: 'Super Panda Adventures',
              title: 'Super Panda Adventures',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® Batman™: The Videogame_cis',
              title: 'LEGO® Batman™: The Videogame',
              cis_only: 1
            },
            {
              hash_name: 'Magical Battle Festa',
              title: 'Magical Battle Festa',
              cis_only: 0
            },
            {
              hash_name: 'Sonic Mania',
              title: 'Sonic Mania',
              cis_only: 0
            },
            {
              hash_name: 'Fallout 4 Season Pass',
              title: 'Fallout 4 Season Pass',
              cis_only: 0
            },
            {
              hash_name: 'Krater',
              title: 'Krater',
              cis_only: 0
            },
            {
              hash_name: 'Zero Gear',
              title: 'Zero Gear',
              cis_only: 0
            },
            {
              hash_name: 'Slain: Back from Hell_cis',
              title: 'Slain: Back from Hell',
              cis_only: 1
            },
            {
              hash_name: 'Dragon Age™: The Veilguard',
              title: 'Dragon Age™: The Veilguard',
              cis_only: 0
            },
            {
              hash_name: 'Dungeons Gold Gift',
              title: 'Dungeons Gold Gift',
              cis_only: 0
            },
            {
              hash_name: 'Hell Let Loose',
              title: 'Hell Let Loose',
              cis_only: 0
            },
            {
              hash_name: 'House of Detention',
              title: 'House of Detention',
              cis_only: 0
            },
            {
              hash_name: 'Rust - Sunburn Pack',
              title: 'Rust - Sunburn Pack',
              cis_only: 0
            },
            {
              hash_name: 'SCUM Supporter Pack 2',
              title: 'SCUM Supporter Pack 2',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 41305_cis',
              title: 'Unknown package 41305',
              cis_only: 1
            },
            {
              hash_name: 'Roboquest',
              title: 'Roboquest',
              cis_only: 0
            },
            {
              hash_name: 'Crysis Warhead®',
              title: 'Crysis Warhead®',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12799',
              title: 'Unknown package 12799',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 27282',
              title: 'Unknown package 27282',
              cis_only: 0
            },
            {
              hash_name: 'Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition',
              title: 'Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition',
              cis_only: 0
            },
            {
              hash_name: 'Congo_cis',
              title: 'Congo',
              cis_only: 1
            },
            {
              hash_name: 'Total War: PHARAOH',
              title: 'Total War: PHARAOH',
              cis_only: 0
            },
            {
              hash_name: 'A.R.E.S.: Berzerker Suit',
              title: 'A.R.E.S.: Berzerker Suit',
              cis_only: 0
            },
            {
              hash_name: 'Ampersand',
              title: 'Ampersand',
              cis_only: 0
            },
            {
              hash_name:
                'Overwatch® 2 - Ultimate Battle Pass Bundle: Season 11',
              title: 'Overwatch® 2 - Ultimate Battle Pass Bundle: Season 11',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands: The Zombie Island of Dr. Ned',
              title: 'Borderlands: The Zombie Island of Dr. Ned',
              cis_only: 0
            },
            {
              hash_name: 'Call of Tomsk-7',
              title: 'Call of Tomsk-7',
              cis_only: 0
            },
            {
              hash_name: 'To The Moon Game and Soundtrack Bundle_cis',
              title: 'To The Moon Game and Soundtrack Bundle',
              cis_only: 1
            },
            {
              hash_name: 'Ori and the Will of the Wisps',
              title: 'Ori and the Will of the Wisps',
              cis_only: 0
            },
            {
              hash_name: 'BioShock Infinite: Burial at Sea - Episode One',
              title: 'BioShock Infinite: Burial at Sea - Episode One',
              cis_only: 0
            },
            {
              hash_name: 'Boid Gift',
              title: 'Boid Gift',
              cis_only: 0
            },
            {
              hash_name: 'The Howler_cis',
              title: 'The Howler',
              cis_only: 1
            },
            {
              hash_name: 'Gomo',
              title: 'Gomo',
              cis_only: 0
            },
            {
              hash_name: 'Moribund',
              title: 'Moribund',
              cis_only: 0
            },
            {
              hash_name: 'Assassin’s Creed® III',
              title: 'Assassin’s Creed® III',
              cis_only: 0
            },
            {
              hash_name: 'Barro Racing',
              title: 'Barro Racing',
              cis_only: 0
            },
            {
              hash_name: 'Supermarket Together - The Cool Pack',
              title: 'Supermarket Together - The Cool Pack',
              cis_only: 0
            },
            {
              hash_name: "Five Nights at Freddy's 2",
              title: "Five Nights at Freddy's 2",
              cis_only: 0
            },
            {
              hash_name: 'Frozenheim',
              title: 'Frozenheim',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® Marvel Super Heroes DLC: Super Pack',
              title: 'LEGO® Marvel Super Heroes DLC: Super Pack',
              cis_only: 0
            },
            {
              hash_name: 'Square Heroes',
              title: 'Square Heroes',
              cis_only: 0
            },
            {
              hash_name: 'Fallout Classic Collection',
              title: 'Fallout Classic Collection',
              cis_only: 0
            },
            {
              hash_name: "Kung Fu Strike - The Warrior's Rise",
              title: "Kung Fu Strike - The Warrior's Rise",
              cis_only: 0
            },
            {
              hash_name: 'Sleeping Dogs: Retro Triad Pack',
              title: 'Sleeping Dogs: Retro Triad Pack',
              cis_only: 0
            },
            {
              hash_name: 'Dust: An Elysian Tail',
              title: 'Dust: An Elysian Tail',
              cis_only: 0
            },
            {
              hash_name: 'HELLDIVERS™ 2',
              title: 'HELLDIVERS™ 2',
              cis_only: 0
            },
            {
              hash_name: 'Viscera Cleanup Detail Gift_cis',
              title: 'Viscera Cleanup Detail Gift',
              cis_only: 1
            },
            {
              hash_name: 'Rusty Lake Hotel_cis',
              title: 'Rusty Lake Hotel',
              cis_only: 1
            },
            {
              hash_name: 'SCUM Weapon Skins pack',
              title: 'SCUM Weapon Skins pack',
              cis_only: 0
            },
            {
              hash_name: 'Divinity Anthology',
              title: 'Divinity Anthology',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 42337',
              title: 'Unknown package 42337',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 59393_cis',
              title: 'Unknown package 59393',
              cis_only: 1
            },
            {
              hash_name:
                'Cthulhu Saves the World & Breath of Death VII Double Pack',
              title:
                'Cthulhu Saves the World & Breath of Death VII Double Pack',
              cis_only: 0
            },
            {
              hash_name: 'Dead by Daylight_cis',
              title: 'Dead by Daylight',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 12893',
              title: 'Unknown package 12893',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 28188_cis',
              title: 'Unknown package 28188',
              cis_only: 1
            },
            {
              hash_name: 'Plug & Play',
              title: 'Plug & Play',
              cis_only: 0
            },
            {
              hash_name: 'Psi Cards - Soundtrack',
              title: 'Psi Cards - Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Construction Simulator 2 US - Pocket Edition',
              title: 'Construction Simulator 2 US - Pocket Edition',
              cis_only: 0
            },
            {
              hash_name: 'Total War: ROME II - Caesar in Gaul Campaign Pack',
              title: 'Total War: ROME II - Caesar in Gaul Campaign Pack',
              cis_only: 0
            },
            {
              hash_name: 'Tropico 5',
              title: 'Tropico 5',
              cis_only: 0
            },
            {
              hash_name: 'AaAaAA!!! - A Reckless Disregard for Gravity',
              title: 'AaAaAA!!! - A Reckless Disregard for Gravity',
              cis_only: 0
            },
            {
              hash_name: 'Overwatch® 2 Starter Pack: Season 11',
              title: 'Overwatch® 2 Starter Pack: Season 11',
              cis_only: 0
            },
            {
              hash_name: 'Borderlands_cis',
              title: 'Borderlands',
              cis_only: 1
            },
            {
              hash_name: 'Cannon Brawl',
              title: 'Cannon Brawl',
              cis_only: 0
            },
            {
              hash_name: 'The Talos Principle_cis',
              title: 'The Talos Principle',
              cis_only: 1
            },
            {
              hash_name: 'Toilet Tycoon',
              title: 'Toilet Tycoon',
              cis_only: 0
            },
            {
              hash_name: 'BOKURA',
              title: 'BOKURA',
              cis_only: 0
            },
            {
              hash_name: 'The I of the Dragon',
              title: 'The I of the Dragon',
              cis_only: 0
            },
            {
              hash_name: 'Gothic 3: Forsaken Gods Enhanced Edition',
              title: 'Gothic 3: Forsaken Gods Enhanced Edition',
              cis_only: 0
            },
            {
              hash_name: 'Guns of Icarus Alliance',
              title: 'Guns of Icarus Alliance',
              cis_only: 0
            },
            {
              hash_name:
                'Assassin’s Creed® III - The Tyranny of King Washington: The Redemption',
              title:
                'Assassin’s Creed® III - The Tyranny of King Washington: The Redemption',
              cis_only: 0
            },
            {
              hash_name: 'Supreme Commander 2',
              title: 'Supreme Commander 2',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® Star Wars™ III - The Clone Wars™',
              title: 'LEGO® Star Wars™ III - The Clone Wars™',
              cis_only: 0
            },
            {
              hash_name: 'Magicite_cis',
              title: 'Magicite',
              cis_only: 1
            },
            {
              hash_name: 'Sons Of The Forest',
              title: 'Sons Of The Forest',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Cabin Accessories',
              title: 'Euro Truck Simulator 2 - Cabin Accessories',
              cis_only: 0
            },
            {
              hash_name: "Fallout New Vegas Courier's Stash",
              title: "Fallout New Vegas Courier's Stash",
              cis_only: 0
            },
            {
              hash_name: 'Interplanetary GIFT',
              title: 'Interplanetary GIFT',
              cis_only: 0
            },
            {
              hash_name: 'L.A. Noire: DLC Bundle',
              title: 'L.A. Noire: DLC Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Sleeping Dogs: The Red Envelope Pack',
              title: 'Sleeping Dogs: The Red Envelope Pack',
              cis_only: 0
            },
            {
              hash_name: 'Dustoff Heli Rescue',
              title: 'Dustoff Heli Rescue',
              cis_only: 0
            },
            {
              hash_name: 'SCUM: Danny Trejo Character Pack',
              title: 'SCUM: Danny Trejo Character Pack',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 6003_cis',
              title: 'Unknown package 6003',
              cis_only: 1
            },
            {
              hash_name: 'Remnant: From the Ashes - Swamps of Corsus Bundle',
              title: 'Remnant: From the Ashes - Swamps of Corsus Bundle',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12897',
              title: 'Unknown package 12897',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 2832',
              title: 'Unknown package 2832',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 12898',
              title: 'Unknown package 12898',
              cis_only: 0
            },
            {
              hash_name: 'Poker Night 2',
              title: 'Poker Night 2',
              cis_only: 0
            },
            {
              hash_name: 'Psychonauts',
              title: 'Psychonauts',
              cis_only: 0
            },
            {
              hash_name: 'Total War: ROME II - Greek States Culture Pack',
              title: 'Total War: ROME II - Greek States Culture Pack',
              cis_only: 0
            },
            {
              hash_name: 'Abiotic Factor',
              title: 'Abiotic Factor',
              cis_only: 0
            },
            {
              hash_name:
                'An Alternative Reality: The Football Manager Documentary_cis',
              title: 'An Alternative Reality: The Football Manager Documentary',
              cis_only: 1
            },
            {
              hash_name: 'Oxenfree',
              title: 'Oxenfree',
              cis_only: 0
            },
            {
              hash_name: 'Boson X',
              title: 'Boson X',
              cis_only: 0
            },
            {
              hash_name: 'Car Mechanic Simulator 2014',
              title: 'Car Mechanic Simulator 2014',
              cis_only: 0
            },
            {
              hash_name: 'The Technomancer',
              title: 'The Technomancer',
              cis_only: 0
            },
            {
              hash_name: 'Toki Tori',
              title: 'Toki Tori',
              cis_only: 0
            },
            {
              hash_name:
                'BIT.TRIP Presents... Runner2: Future Legend of Rhythm Alien',
              title:
                'BIT.TRIP Presents... Runner2: Future Legend of Rhythm Alien',
              cis_only: 0
            },
            {
              hash_name: 'The Journey Down: Chapter One',
              title: 'The Journey Down: Chapter One',
              cis_only: 0
            },
            {
              hash_name: 'Gothic II: Gold Edition',
              title: 'Gothic II: Gold Edition',
              cis_only: 0
            },
            {
              hash_name: 'Metal Drift',
              title: 'Metal Drift',
              cis_only: 0
            },
            {
              hash_name: 'Assassin’s Creed® III: The Betrayal',
              title: 'Assassin’s Creed® III: The Betrayal',
              cis_only: 0
            },
            {
              hash_name: 'Bastion',
              title: 'Bastion',
              cis_only: 0
            },
            {
              hash_name: 'Supreme Commander: Forged Alliance',
              title: 'Supreme Commander: Forged Alliance',
              cis_only: 0
            },
            {
              hash_name: "Five Nights at Freddy's 3",
              title: "Five Nights at Freddy's 3",
              cis_only: 0
            },
            {
              hash_name: 'FTL: Faster Than Light_cis',
              title: 'FTL: Faster Than Light',
              cis_only: 1
            },
            {
              hash_name: 'LEGO® Star Wars™: The Skywalker Saga',
              title: 'LEGO® Star Wars™: The Skywalker Saga',
              cis_only: 0
            },
            {
              hash_name: 'Soul Gambler: Dark Arts Edition',
              title: 'Soul Gambler: Dark Arts Edition',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Cabin Accessories_cis',
              title: 'Euro Truck Simulator 2 - Cabin Accessories',
              cis_only: 1
            },
            {
              hash_name: 'Fallout New Vegas Ultimate',
              title: 'Fallout New Vegas Ultimate',
              cis_only: 0
            },
            {
              hash_name: 'Labyronia RPG',
              title: 'Labyronia RPG',
              cis_only: 0
            },
            {
              hash_name: 'Shelter 2 Mountains',
              title: 'Shelter 2 Mountains',
              cis_only: 0
            },
            {
              hash_name: 'Sleeping Dogs: Wheels of Fury',
              title: 'Sleeping Dogs: Wheels of Fury',
              cis_only: 0
            },
            {
              hash_name: 'Dying Light',
              title: 'Dying Light',
              cis_only: 0
            },
            {
              hash_name: 'Human Fall Flat',
              title: 'Human Fall Flat',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 81441_cis',
              title: 'Unknown package 81441',
              cis_only: 1
            },
            {
              hash_name: 'Vlad the Impaler',
              title: 'Vlad the Impaler',
              cis_only: 0
            },
            {
              hash_name: 'RWBY: Grimm Eclipse - JNPR',
              title: 'RWBY: Grimm Eclipse - JNPR',
              cis_only: 0
            },
            {
              hash_name: 'Sea of Thieves: 2024 Edition',
              title: 'Sea of Thieves: 2024 Edition',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 62896_cis',
              title: 'Unknown package 62896',
              cis_only: 1
            },
            {
              hash_name: 'Cubicle Quest',
              title: 'Cubicle Quest',
              cis_only: 0
            },
            {
              hash_name: 'Dead Cells: Fatal Falls',
              title: 'Dead Cells: Fatal Falls',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 129360',
              title: 'Unknown package 129360',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 28637_cis',
              title: 'Unknown package 28637',
              cis_only: 1
            },
            {
              hash_name: 'PULSAR: Lost Colony',
              title: 'PULSAR: Lost Colony',
              cis_only: 0
            },
            {
              hash_name: 'Cities XL 2012',
              title: 'Cities XL 2012',
              cis_only: 0
            },
            {
              hash_name: 'UBERMOSH + Original Soundtrack',
              title: 'UBERMOSH + Original Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Anno 2070 Complete Edition',
              title: 'Anno 2070 Complete Edition',
              cis_only: 0
            },
            {
              hash_name: 'Oxygen Not Included',
              title: 'Oxygen Not Included',
              cis_only: 0
            },
            {
              hash_name: 'The Testament of Sherlock Holmes',
              title: 'The Testament of Sherlock Holmes',
              cis_only: 0
            },
            {
              hash_name: 'Toki Tori_cis',
              title: 'Toki Tori',
              cis_only: 1
            },
            {
              hash_name: 'My Name is Mayo',
              title: 'My Name is Mayo',
              cis_only: 0
            },
            {
              hash_name: 'Bombernauts_cis',
              title: 'Bombernauts',
              cis_only: 1
            },
            {
              hash_name: 'Gothic® 3',
              title: 'Gothic® 3',
              cis_only: 0
            },
            {
              hash_name: 'Guns of Icarus Online_cis',
              title: 'Guns of Icarus Online',
              cis_only: 1
            },
            {
              hash_name: 'Mortal Shell',
              title: 'Mortal Shell',
              cis_only: 0
            },
            {
              hash_name: 'Bastion_cis',
              title: 'Bastion',
              cis_only: 1
            },
            {
              hash_name: 'SteamWorld Heist_cis',
              title: 'SteamWorld Heist',
              cis_only: 1
            },
            {
              hash_name: 'Surgeon Simulator',
              title: 'Surgeon Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Furry Killer',
              title: 'Furry Killer',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® The Hobbit™_cis',
              title: 'LEGO® The Hobbit™',
              cis_only: 1
            },
            {
              hash_name: 'Soulmask',
              title: 'Soulmask',
              cis_only: 0
            },
            {
              hash_name: 'SSHDFE ROW Gift',
              title: 'SSHDFE ROW Gift',
              cis_only: 0
            },
            {
              hash_name: 'Zombie Kill of the Week - Reborn',
              title: 'Zombie Kill of the Week - Reborn',
              cis_only: 0
            },
            {
              hash_name: 'Shenmue I & II',
              title: 'Shenmue I & II',
              cis_only: 0
            },
            {
              hash_name: 'Drift racing car',
              title: 'Drift racing car',
              cis_only: 0
            },
            {
              hash_name: 'Dying Light - Ultimate Survivor Bundle_cis',
              title: 'Dying Light - Ultimate Survivor Bundle',
              cis_only: 1
            },
            {
              hash_name: 'HuniePop',
              title: 'HuniePop',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 8171',
              title: 'Unknown package 8171',
              cis_only: 0
            },
            {
              hash_name: 'VoidExpanse',
              title: 'VoidExpanse',
              cis_only: 0
            },
            {
              hash_name: 'Sable',
              title: 'Sable',
              cis_only: 0
            },
            {
              hash_name: 'Delve Deeper: Treasures and Tunnels',
              title: 'Delve Deeper: Treasures and Tunnels',
              cis_only: 0
            },
            {
              hash_name: 'Divinity: Original Sin - Enhanced Edition',
              title: 'Divinity: Original Sin - Enhanced Edition',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 43381',
              title: 'Unknown package 43381',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 63446',
              title: 'Unknown package 63446',
              cis_only: 0
            },
            {
              hash_name: 'Rochard: Hard Times',
              title: 'Rochard: Hard Times',
              cis_only: 0
            },
            {
              hash_name: 'Cubicle Quest_cis',
              title: 'Cubicle Quest',
              cis_only: 1
            },
            {
              hash_name: 'Dead Cells: The Bad Seed',
              title: 'Dead Cells: The Bad Seed',
              cis_only: 0
            },
            {
              hash_name: 'D.W.A.R.F.S.',
              title: 'D.W.A.R.F.S.',
              cis_only: 0
            },
            {
              hash_name: 'Dead Effect',
              title: 'Dead Effect',
              cis_only: 0
            },
            {
              hash_name: 'Punch Club',
              title: 'Punch Club',
              cis_only: 0
            },
            {
              hash_name: 'Cities XXL',
              title: 'Cities XXL',
              cis_only: 0
            },
            {
              hash_name: 'ACE COMBAT™ 7: SKIES UNKNOWN',
              title: 'ACE COMBAT™ 7: SKIES UNKNOWN',
              cis_only: 0
            },
            {
              hash_name: 'Anno 2070™  - The Nordamark Complete Package',
              title: 'Anno 2070™  - The Nordamark Complete Package',
              cis_only: 0
            },
            {
              hash_name:
                'PAC-MAN Championship Edition DX+ All You Can Eat Edition Bundle',
              title:
                'PAC-MAN Championship Edition DX+ All You Can Eat Edition Bundle',
              cis_only: 0
            },
            {
              hash_name:
                "Tom Clancy's  The Division™ -  Military Specialists Outfits Pack",
              title:
                "Tom Clancy's  The Division™ -  Military Specialists Outfits Pack",
              cis_only: 0
            },
            {
              hash_name: 'My Sexy Waitress Soundtrack',
              title: 'My Sexy Waitress Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'Bit.Trip.Runner 2 Giftable',
              title: 'Bit.Trip.Runner 2 Giftable',
              cis_only: 0
            },
            {
              hash_name: "Grand Pigeon's Duty_cis",
              title: "Grand Pigeon's Duty",
              cis_only: 1
            },
            {
              hash_name: "Guns'N'Zombies: N'Aliens",
              title: "Guns'N'Zombies: N'Aliens",
              cis_only: 0
            },
            {
              hash_name: 'METAL GEAR SOLID V: The Definitive Experience',
              title: 'METAL GEAR SOLID V: The Definitive Experience',
              cis_only: 0
            },
            {
              hash_name: 'Mortal Shell: The Virtuous Cycle',
              title: 'Mortal Shell: The Virtuous Cycle',
              cis_only: 0
            },
            {
              hash_name: 'Batman: Arkham City - Game of the Year Edition',
              title: 'Batman: Arkham City - Game of the Year Edition',
              cis_only: 0
            },
            {
              hash_name: 'Stellar 2D',
              title: 'Stellar 2D',
              cis_only: 0
            },
            {
              hash_name: 'Surgeon Simulator + I Am Bread',
              title: 'Surgeon Simulator + I Am Bread',
              cis_only: 0
            },
            {
              hash_name: 'Furry Love',
              title: 'Furry Love',
              cis_only: 0
            },
            {
              hash_name: 'LEGO® The Lord of the Rings™_cis',
              title: 'LEGO® The Lord of the Rings™',
              cis_only: 1
            },
            {
              hash_name: 'SSHDSE ROW Gift',
              title: 'SSHDSE ROW Gift',
              cis_only: 0
            },
            {
              hash_name: 'Euro Truck Simulator 2 - Fantasy Paint Jobs Pack',
              title: 'Euro Truck Simulator 2 - Fantasy Paint Jobs Pack',
              cis_only: 0
            },
            {
              hash_name: "Fallout New Vegas: Courier's Stash",
              title: "Fallout New Vegas: Courier's Stash",
              cis_only: 0
            },
            {
              hash_name: 'Invite the Dwarves to Dinner_cis',
              title: 'Invite the Dwarves to Dinner',
              cis_only: 1
            },
            {
              hash_name: 'Wonky Pigeon!',
              title: 'Wonky Pigeon!',
              cis_only: 0
            },
            {
              hash_name: 'Ship of Fools',
              title: 'Ship of Fools',
              cis_only: 0
            },
            {
              hash_name: 'Slime Rancher 2',
              title: 'Slime Rancher 2',
              cis_only: 0
            },
            {
              hash_name: 'Driver® Parallel Lines',
              title: 'Driver® Parallel Lines',
              cis_only: 0
            },
            {
              hash_name: 'Dying Light Definitive Edition',
              title: 'Dying Light Definitive Edition',
              cis_only: 0
            },
            {
              hash_name: 'Hunted: One Step Too Far - Reborn Edition_cis',
              title: 'Hunted: One Step Too Far - Reborn Edition',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 83256',
              title: 'Unknown package 83256',
              cis_only: 0
            },
            {
              hash_name: 'Secret World Legends',
              title: 'Secret World Legends',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 6346',
              title: 'Unknown package 6346',
              cis_only: 0
            },
            {
              hash_name:
                'Resident Evil Re:Verse - Hunk Skin: Grim Reaper (The Mercenaries 3D)',
              title:
                'Resident Evil Re:Verse - Hunk Skin: Grim Reaper (The Mercenaries 3D)',
              cis_only: 0
            },
            {
              hash_name: 'Rocket League&amp;reg;',
              title: 'Rocket League&amp;reg;',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 29177',
              title: 'Unknown package 29177',
              cis_only: 0
            },
            {
              hash_name: 'Cities: Skylines',
              title: 'Cities: Skylines',
              cis_only: 0
            },
            {
              hash_name: 'Contraption Maker_cis',
              title: 'Contraption Maker',
              cis_only: 1
            },
            {
              hash_name: 'Total War: SHOGUN 2 - The Hattori Clan Pack',
              title: 'Total War: SHOGUN 2 - The Hattori Clan Pack',
              cis_only: 0
            },
            {
              hash_name: 'Anno 2070™ - Deep Ocean',
              title: 'Anno 2070™ - Deep Ocean',
              cis_only: 0
            },
            {
              hash_name: 'Original War',
              title: 'Original War',
              cis_only: 0
            },
            {
              hash_name: 'Pacify',
              title: 'Pacify',
              cis_only: 0
            },
            {
              hash_name: 'Breath of Death VII',
              title: 'Breath of Death VII',
              cis_only: 0
            },
            {
              hash_name: "Tom Clancy's EndWar™",
              title: "Tom Clancy's EndWar™",
              cis_only: 0
            },
            {
              hash_name: 'Napoleon: Total War™ - The Peninsular Campaign',
              title: 'Napoleon: Total War™ - The Peninsular Campaign',
              cis_only: 0
            },
            {
              hash_name: 'Octodad: Dadliest Catch + Soundtrack',
              title: 'Octodad: Dadliest Catch + Soundtrack',
              cis_only: 0
            },
            {
              hash_name: 'The Albino Hunter (Original)_cis',
              title: 'The Albino Hunter (Original)',
              cis_only: 1
            },
            {
              hash_name: 'Gunsmith Simulator',
              title: 'Gunsmith Simulator',
              cis_only: 0
            },
            {
              hash_name: 'Mosaique Neko Waifus 5',
              title: 'Mosaique Neko Waifus 5',
              cis_only: 0
            },
            {
              hash_name: 'Assetto Corsa_cis',
              title: 'Assetto Corsa',
              cis_only: 1
            },
            {
              hash_name: 'Surgeon Simulator_cis',
              title: 'Surgeon Simulator',
              cis_only: 1
            },
            {
              hash_name: 'Furry Orgasm',
              title: 'Furry Orgasm',
              cis_only: 0
            },
            {
              hash_name: 'Fallout New Vegas®: Lonesome Road™',
              title: 'Fallout New Vegas®: Lonesome Road™',
              cis_only: 0
            },
            {
              hash_name: 'Ship Simulator Extremes: Ferry Pack',
              title: 'Ship Simulator Extremes: Ferry Pack',
              cis_only: 0
            },
            {
              hash_name: 'Small World',
              title: 'Small World',
              cis_only: 0
            },
            {
              hash_name: 'Drunken Robot Pornography',
              title: 'Drunken Robot Pornography',
              cis_only: 0
            },
            {
              hash_name: 'Hentai hentai',
              title: 'Hentai hentai',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 83886_cis',
              title: 'Unknown package 83886',
              cis_only: 1
            },
            {
              hash_name: 'Demigod_cis',
              title: 'Demigod',
              cis_only: 1
            },
            {
              hash_name: 'Unknown package 4433',
              title: 'Unknown package 4433',
              cis_only: 0
            },
            {
              hash_name: 'Unknown package 64902_cis',
              title: 'Unknown package 64902',
              cis_only: 1
            }
          ]
        },
        {
          name: 'gift_min',
          input: 'number',
          description: 'Minimum number of gifts'
        },
        {
          name: 'gift_max',
          input: 'number',
          description: 'Maximum number of gifts'
        },
        {
          name: 'recently_hours_min',
          input: 'number',
          description: 'Minimum number of recently played hours'
        },
        {
          name: 'recently_hours_max',
          input: 'number',
          description: 'Maximum number of recently played hours'
        },
        {
          name: 'country',
          input: 'array',
          description: 'List of allowed countries'
        },
        {
          name: 'not_country',
          input: 'array',
          description: 'List of disallowed countries'
        },
        {
          name: 'cs2_profile_rank_min',
          input: 'number',
          description: 'Minimum CS2 rank'
        },
        {
          name: 'cs2_profile_rank_max',
          input: 'number',
          description: 'Maximum CS2 rank'
        },
        {
          name: 'cs2_map_rank',
          input: 'number',
          description: 'Map for rank in CS2'
        },
        {
          name: 'cs2_map_rmin',
          input: 'number',
          description: 'Minimum rank in CS2 on a certain map'
        },
        {
          name: 'cs2_map_rmax',
          input: 'number',
          description: 'Maximum rank in CS2 on a certain map'
        },
        {
          name: 'solommr_min',
          input: 'number',
          description: 'Minimum number of Dota 2 MMR'
        },
        {
          name: 'solommr_max',
          input: 'number',
          description: 'Maximum number of Dota 2 MMR'
        },
        {
          name: 'd2_game_count_min',
          input: 'number',
          description: 'Minimum number of Dota 2 games'
        },
        {
          name: 'd2_game_count_max',
          input: 'number',
          description: 'Maximum number of Dota 2 games'
        },
        {
          name: 'd2_win_count_min',
          input: 'number',
          description: 'Minimum number of Dota 2 wins'
        },
        {
          name: 'd2_win_count_max',
          input: 'number',
          description: 'Maximum number of Dota 2 wins'
        },
        {
          name: 'cards_min',
          input: 'number',
          description: 'Minimum number of available to collect trading cards'
        },
        {
          name: 'cards_max',
          input: 'number',
          description: 'Maximum number of available to collect trading cards'
        },
        {
          name: 'cards_games_min',
          input: 'number',
          description:
            'Minimum number of available games with available to collect trading cards'
        },
        {
          name: 'cards_games_max',
          input: 'number',
          description:
            'Maximum number of available games with available to collect trading cards'
        },
        {
          name: 'd2_behavior_min',
          input: 'number',
          description: 'Minimum number of Dota 2 behavior'
        },
        {
          name: 'd2_behavior_max',
          input: 'number',
          description: 'Maximum number of Dota 2 behavior'
        },
        {
          name: 'faceit_lvl_min',
          input: 'number',
          description: 'Minimum FACEIT level'
        },
        {
          name: 'faceit_lvl_max',
          input: 'number',
          description: 'Maximum FACEIT level'
        },
        {
          name: 'faceit_csgo_lvl_min',
          input: 'number',
          description: 'Minimum FACEIT level'
        },
        {
          name: 'faceit_csgo_lvl_max',
          input: 'number',
          description: 'Maximum FACEIT level'
        },
        {
          name: 'has_faceit',
          input: 'yesno',
          description: 'Has FACEIT account',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'points_min',
          input: 'number',
          description: 'Minimum number of Steam points'
        },
        {
          name: 'points_max',
          input: 'number',
          description: 'Maximum number of Steam points'
        },
        {
          name: 'relevant_gmin',
          input: 'number',
          description: 'Minimum number of relevant games'
        },
        {
          name: 'relevant_gmax',
          input: 'number',
          description: 'Maximum number of relevant games'
        },
        {
          name: 'last_trans_date',
          input: 'number',
          description: 'How old is last transaction'
        },
        {
          name: 'last_trans_date_period',
          input: 'string',
          description: 'In what notation is time measured',
          values: ['day', 'month', 'year']
        },
        {
          name: 'last_trans_date_later',
          input: 'number',
          description: 'How new is last transaction'
        },
        {
          name: 'last_trans_date_period_later',
          input: 'string',
          description: 'In what notation is time measured',
          values: ['day', 'month', 'year']
        },
        {
          name: 'no_trans',
          input: 'boolean',
          description: 'Has no transactions'
        },
        {
          name: 'trans',
          input: 'boolean',
          description: 'Has transactions'
        },
        {
          name: 'has_activated_keys',
          input: 'yesno',
          description: 'Has activated keys',
          values: ['yes', 'no', 'nomatter']
        },
        {
          name: 'rust_deaths_min',
          input: 'number',
          description: 'Minimum number of Rust deaths'
        },
        {
          name: 'rust_deaths_max',
          input: 'number',
          description: 'Maximum number of Rust deaths'
        },
        {
          name: 'rust_kills_min',
          input: 'number',
          description: 'Minimum number of Rust kills'
        },
        {
          name: 'rust_kills_max',
          input: 'number',
          description: 'Maximum number of Rust kills'
        },
        {
          name: 'gifts_purchase_min',
          input: 'number',
          description: 'Minimum amount spent on gifts'
        },
        {
          name: 'gifts_purchase_max',
          input: 'number',
          description: 'Maximum amount spent on gifts'
        },
        {
          name: 'refunds_purchase_min',
          input: 'number',
          description: 'Minimum amount of refunds'
        },
        {
          name: 'refunds_purchase_max',
          input: 'number',
          description: 'Maximum amount of refunds'
        },
        {
          name: 'ingame_purchase_min',
          input: 'number',
          description: 'Minimum spend amount on in-game purchases'
        },
        {
          name: 'ingame_purchase_max',
          input: 'number',
          description: 'Maximum spend amount on in-game purchases'
        },
        {
          name: 'games_purchase_min',
          input: 'number',
          description: 'Minimum spend amount on game purchases'
        },
        {
          name: 'games_purchase_max',
          input: 'number',
          description: 'Maximum spend amount on game purchases'
        },
        {
          name: 'purchase_min',
          input: 'number',
          description: 'Minimum spend amount on all purchases'
        },
        {
          name: 'purchase_max',
          input: 'number',
          description: 'Maximum spend amount on all purchases'
        },
        {
          name: 'd2_last_match_date',
          input: 'number',
          description: 'How old is last match of Dota 2'
        },
        {
          name: 'd2_last_match_date_period',
          input: 'string',
          description: 'In what notation is time measured',
          values: ['day', 'month', 'year']
        }
      ],
      base_params: [
        {
          name: 'pmin',
          input: 'number',
          description: 'Minimum price'
        },
        {
          name: 'pmax',
          input: 'number',
          description: 'Maximum price'
        },
        {
          name: 'title',
          input: 'string',
          description: 'Title'
        },
        {
          name: 'order_by',
          input: 'string',
          description: 'Order by',
          values: {
            price_to_up: ['item.price', 'asc'],
            price_to_down: ['item.price', 'desc'],
            pdate_to_down: ['item.refreshed_date', 'desc'],
            pdate_to_down_upload: ['item.published_date', 'desc'],
            pdate_to_up: ['item.refreshed_date', 'asc'],
            pdate_to_up_upload: ['item.published_date', 'asc'],
            edate_to_up: ['item.edit_date', 'asc'],
            edate_to_down: ['item.edit_date', 'desc'],
            ddate_to_up: ['deletion_log.delete_date', 'asc'],
            ddate_to_down: ['deletion_log.delete_date', 'desc']
          }
        },
        {
          name: 'show',
          input: 'string',
          description: 'Type of account',
          values: ['active', 'closed', 'awaiting', 'deleted']
        },
        {
          name: 'tag_id',
          input: 'array',
          description: 'List of tag ids'
        },
        {
          name: 'not_tag_id',
          input: 'array',
          description: "List of tag ids that won't be included"
        },
        {
          name: 'origin',
          input: 'array',
          description: 'List of account origins',
          values: [
            'brute',
            'fishing',
            'stealer',
            'personal',
            'resale',
            'autoreg',
            'self_registration',
            'retrieve',
            'dummy'
          ]
        },
        {
          name: 'not_origin',
          input: 'array',
          description: "List of account origins that won't be included",
          values: [
            'brute',
            'fishing',
            'stealer',
            'personal',
            'resale',
            'autoreg',
            'self_registration',
            'retrieve',
            'dummy'
          ]
        },
        {
          name: 'user_id',
          input: 'number',
          description: 'Search accounts of user'
        },
        {
          name: 'nsb',
          input: 'boolean',
          description: 'Not sold before'
        },
        {
          name: 'sb',
          input: 'boolean',
          description: 'Sold before'
        },
        {
          name: 'nsb_by_me',
          input: 'boolean',
          description: 'Not sold by me before'
        },
        {
          name: 'sb_by_me',
          input: 'boolean',
          description: 'Sold by me before'
        },
        {
          name: 'eg',
          input: 'string',
          description:
            'Guarantee period. -1 = 12 hours, 0 = 24 hours, 1 = 72 hours',
          values: ['-1', '0', '1']
        },
        {
          name: 'hide_viewed',
          input: 'boolean',
          description: 'Hide viewed accounts'
        },
        {
          name: 'currency',
          input: 'string',
          description:
            'Currency in which the cost of the account will be searched. ISO 3166'
        },
        {
          name: 'email_login_data',
          input: 'boolean',
          description: 'Has email login data'
        },
        {
          name: 'item_domain',
          input: 'string',
          description: 'Domain of native/autoreg email'
        },
        {
          name: 'not_item_domain',
          input: 'string',
          description: 'Excluded domain of native/autoreg email'
        },
        {
          name: 'email_provider',
          input: 'array',
          description: 'List of allowed email providers',
          values: [
            'other',
            'rambler',
            'outlook',
            'firstmail',
            'notletters',
            'mail_ru'
          ]
        },
        {
          name: 'not_email_provider',
          input: 'array',
          description: 'List of excluded email providers',
          values: [
            'other',
            'rambler',
            'outlook',
            'firstmail',
            'notletters',
            'mail_ru'
          ]
        },
        {
          name: 'email_type',
          input: 'array',
          description: 'Email type',
          values: ['autoreg', 'native', 'market', 'no']
        },
        {
          name: 'login',
          input: 'string',
          description: 'Login of account (Works only for owned accounts)'
        },
        {
          name: 'username',
          input: 'string',
          description:
            'Seller or buyer username (Works only for purchased/sold accounts)'
        },
        {
          name: 'delete_reason',
          input: 'string',
          description:
            'Delete reason of account (Works only for owned deleted accounts)'
        },
        {
          name: 'delete_username',
          input: 'string',
          description:
            'Item deleted by X (Works only for owned deleted accounts)'
        }
      ],
      system_info: {
        visitor_id: 8878438,
        time: 1734799383
      }
    };
  }, []);

  const getParamByName = (name: string) => {
    const param: any = [...data?.params, ...data.base_params]?.find(
      (item) => item.name === name
    );
    return param;
  };
  const getParamsByNames = (names: string[]) => {
    return _.compact(names.map((name) => getParamByName(name)));
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 w-fit'>
          <div className='w-8 h-8 bg-secondaryCustoms rounded-md flex items-center justify-center'>
            <img
              className='w-5 h-5 object-cover bg-secondaryCustoms'
              src={`steam.svg`}
              alt={'logo'}
            />
          </div>
          <h3 className='text-lg font-normal text-secondaryCustoms'>
            Often searched in Steam
          </h3>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <GameList />
        <div className='p-2 bg-secondaryCustoms rounded-md'>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-4 flex-shrink-0 w-2/5 overflow-hidden'>
              <div className='flex items-center gap-2 w-full'>
                <Item
                  params={getParamByName(CONSTANT.PARAMS.PMIN)}
                  icon={<DollarSign size={16} />}
                />
                <Item
                  params={getParamByName(CONSTANT.PARAMS.PMAX)}
                  icon={<DollarSign size={16} />}
                />
              </div>
              <data className='flex flex-col gap-2'>
                {getParamsByNames([
                  CONSTANT.PARAMS.GAME,
                  CONSTANT.PARAMS.EMAIL_TYPE,
                  CONSTANT.PARAMS.ITEM_DOMAIN,
                  CONSTANT.PARAMS.NOT_ITEM_DOMAIN,
                  CONSTANT.PARAMS.EMAIL_PROVIDER,
                  CONSTANT.PARAMS.NOT_EMAIL_PROVIDER,
                  CONSTANT.PARAMS.NSB,
                  CONSTANT.PARAMS.SB,
                  CONSTANT.PARAMS.NSB_BY_ME,
                  CONSTANT.PARAMS.SB_BY_ME
                ]).map((item) => (
                  <Item
                    key={item?.name}
                    params={item as any}
                    value=''
                    onChange={(e) => {
                      console.log('e');
                    }}
                  />
                ))}
                <div>
                  <div className='grid grid-cols-2 gap-2'>
                    {getParamsByNames([
                      CONSTANT.PARAMS.PMIN,
                      CONSTANT.PARAMS.PMAX,
                      CONSTANT.PARAMS.LMIN,
                      CONSTANT.PARAMS.LMAX,
                      CONSTANT.PARAMS.FRIENDS_MIN,
                      CONSTANT.PARAMS.FRIENDS_MAX,
                      CONSTANT.PARAMS.GMIN,
                      CONSTANT.PARAMS.GMAX,
                      CONSTANT.PARAMS.RELEVANT_GMIN,
                      CONSTANT.PARAMS.RELEVANT_GMAX
                    ]).map((item) => (
                      <Item
                        key={item?.name}
                        params={item as any}
                        value=''
                        onChange={(e) => {
                          console.log('e');
                        }}
                      />
                    ))}
                  </div>
                </div>
              </data>
            </div>
            <div className='flex flex-col gap-4 flex-1 w-full'>
              <div className='w-full'>
                <Item
                  params={{
                    name: 'pmin',
                    input: 'number',
                    description: 'Search by title, Stream ID'
                  }}
                />
              </div>
              <div className='flex gap-2'>
                <div className='w-1/2 flex flex-col gap-2'>
                  {getParamsByNames([
                    CONSTANT.PARAMS.COUNTRY,
                    CONSTANT.PARAMS.NOT_COUNTRY,
                    CONSTANT.PARAMS.DAYBREAK,
                    CONSTANT.PARAMS.EG
                  ]).map((item) => (
                    <Item
                      key={item?.name}
                      params={item as any}
                      value=''
                      onChange={(e) => {
                        console.log('e');
                      }}
                    />
                  ))}
                  <div className='flex flex-col gap-2 p-2 rounded-md bg-primaryCustoms'>
                    {/* First GR */}
                    {[
                      {
                        label: 'Last transaction date more',
                        subItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.LAST_TRANS_DATE
                          ),
                          attribute: null
                        },
                        mainItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.LAST_TRANS_DATE_PERIOD
                          ),
                          attribute: null
                        }
                      },
                      {
                        label: 'Last transaction date not later',
                        subItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.LAST_TRANS_DATE_LATER
                          ),
                          attribute: null
                        },
                        mainItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.LAST_TRANS_DATE_PERIOD_LATER
                          ),
                          attribute: null
                        }
                      }
                    ].map((item) => (
                      <GroupInput key={item?.label} {...item} />
                    ))}
                    {/* Second Gr */}
                    {getParamsByNames([
                      CONSTANT.PARAMS.NO_TRANS,
                      CONSTANT.PARAMS.TRANS
                    ]).map((item) => (
                      <Item
                        key={item?.name}
                        params={item as any}
                        value=''
                        onChange={(e) => {
                          console.log('e');
                        }}
                      />
                    ))}
                    {/* Third GR */}
                    {[
                      {
                        subItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.GAMES_PURCHASE_MIN
                          ),
                          attribute: null
                        },
                        mainItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.GAMES_PURCHASE_MAX
                          ),
                          attribute: null
                        }
                      },
                      {
                        subItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.REFUNDS_PURCHASE_MIN
                          ),
                          attribute: null
                        },
                        mainItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.REFUNDS_PURCHASE_MAX
                          ),
                          attribute: null
                        }
                      },
                      {
                        label: 'Total games',
                        subItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.INGAME_PURCHASE_MIN
                          ),
                          attribute: null
                        },
                        mainItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.INGAME_PURCHASE_MAX
                          ),
                          attribute: null
                        }
                      },
                      {
                        label: 'Purchased games from',
                        subItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.GAMES_PURCHASE_MIN
                          ),
                          attribute: null
                        },
                        mainItem: {
                          param: getParamByName(
                            CONSTANT.PARAMS.GAMES_PURCHASE_MAX
                          ),
                          attribute: null
                        }
                      },
                      {
                        label: 'Purchase amount',
                        subItem: {
                          param: getParamByName(CONSTANT.PARAMS.PURCHASE_MIN),
                          attribute: null
                        },
                        mainItem: {
                          param: getParamByName(CONSTANT.PARAMS.PURCHASE_MAX),
                          attribute: null
                        }
                      }
                    ].map((item) => (
                      <GroupInput key={item?.label} {...item} />
                    ))}
                  </div>
                </div>
                <div className='w-1/2'>2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
