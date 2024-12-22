function getData() {
  const base_params = [
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
      values: ['autoreg', 'native', '', 'market', 'no']
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
      description: 'Item deleted by X (Works only for owned deleted accounts)'
    }
  ];
  base_params.map((param) => {
    console.log(`${param.name.toUpperCase()}: '${param.name}',`);
  });
}
getData();
