interface Item {
  type: string;
  author?: string;
  title?: string;
  name?: string;
  canReturnUntil: string;
  price: number;
}

interface Order {
  orderNumber: string;
  placedOn: string;
  total: number;
  recipient: string;
  deliveredOn: string;
  items: Item[];
}

const orderHistory: Order[] = [
  {
    orderNumber: '114-3941689-8772232',
    placedOn: '08/04/2020',
    total: 34,
    recipient: 'JS Masher',
    deliveredOn: '08/08/2020',
    items: [
      {
        type: 'book',
        author: 'Rauschmayer, Dr. Axel',
        title: 'JavaScript for impatient programmers',
        canReturnUntil: '9/7/2020',
        price: 31.55,
      },
    ],
  },
  {
    orderNumber: '113-9984268-1280257',
    placedOn: '07/19/2020',
    total: 44.53,
    recipient: 'JS Masher',
    deliveredOn: '07/20/2020',
    items: [
      {
        type: 'book',
        author: 'Alexander, Christopher',
        title: 'The Timeless Way of Building',
        canReturnUntil: '08/19/2020',
        price: 41.33,
      },
    ],
  },
  {
    orderNumber: '114-2875557-9059409',
    placedOn: '07/04/2020',
    total: 17.22,
    recipient: 'JS Masher',
    deliveredOn: '07/04/2020',
    items: [
      {
        type: 'hardware',
        canReturnUntil: '08/05/2020',
        price: 15.98,
      },
    ],
  },
  {
    orderNumber: '113-2883177-2648248',
    placedOn: '07/03/2020',
    total: 138.93,
    recipient: 'JS Masher',
    deliveredOn: '07/03/2020',
    items: [
      {
        type: 'hardware',
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch',
        canReturnUntil: '08/04/2020',
        price: 94.95,
      },
      {
        type: 'book',
        author: 'Faroult, Stephane',
        title: 'The Art Of Sql',
        canReturnUntil: '08/04/2020',
        price: 33.99,
      },
    ],
  },
];
