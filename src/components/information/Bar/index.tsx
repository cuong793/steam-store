import {
  Activity,
  Book,
  CircleHelp,
  Code,
  DollarSign,
  FileText,
  Flag,
  Settings,
  ThumbsUp,
  TrendingUp
} from 'lucide-react';

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command';
import React from 'react';

export function GeneralInformationBar() {
  const navs = React.useMemo(
    () => [
      {
        key: 'general',
        items: [
          {
            icon: <Book />,
            title: ' Rules and guarantee'
          },
          {
            icon: <CircleHelp />,
            title: ' Advices & Guides'
          },
          {
            icon: <Settings />,
            title: ' Market settings'
          },
          {
            icon: <TrendingUp />,
            title: ' Account Upgrades'
          },
          {
            icon: <DollarSign />,
            title: ' Currency Exchange Rates',
            separator: true
          }
        ]
      },
      {
        key: 'features',
        items: [
          {
            icon: <Activity />,
            title: ' New features'
          },
          {
            icon: <Flag />,
            title: ' Report a bug'
          },
          {
            icon: <ThumbsUp />,
            title: ' Suggest an idea'
          },
          {
            icon: <Code />,
            title: ' API Access',
            separator: true
          }
        ]
      }
      // {
      //   key: 'information',
      //   items: [
      //     {
      //       icon: (
      //         <Image
      //           alt='stream-icon'
      //           src='/steam.svg'
      //           width={8}
      //           height={8}
      //           className='w-4 h-4 text-[rgb(151, 151, 151) / var(--tw-text-opacity, 1)]'
      //         />
      //       ),
      //       title: ' Steam item value sorter'
      //     },
      //     {
      //       icon: <img src='/steam.svg' alt='' />,
      //       title: ' Top up steam balance'
      //     },
      //   ]
      // }
    ],
    []
  );

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Command className='p-1 rounded-lg bg-secondaryCustoms unset max-h-full'>
        <CommandList className='max-h-full'>
          {navs.map((item, idx) => (
            <CommandGroup key={item.key} heading={item?.heading}>
              {item.items.map((navItem, index) => (
                <React.Fragment key={index}>
                  <CommandItem>
                    {navItem.icon}
                    <span>{navItem.title}</span>
                  </CommandItem>
                  {index === item.items.length - 1 &&
                    idx !== navs.length - 1 && (
                      <CommandSeparator className='my-2' />
                    )}
                </React.Fragment>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
      <Command className='p-1 rounded-lg bg-secondaryCustoms unset max-h-full'>
        <CommandList className='max-h-full'>
          <CommandGroup>
            <CommandItem className='data-[selected=true]:bg-transparent'>
              <FileText />
              <span>Legal Information</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
