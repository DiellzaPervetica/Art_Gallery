const data = {
  products: [
    {
      _id: '1',
      name: 'Horse Sculpture Australia ',
      category: 'Skulptur',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'alia',
      rating: 4.5,
      numReviews: 10,
      description: 'Skulptur e veqant e nje kali',
    },
    {
      _id: '2',
      name: 'The Scream',
      category: 'Abstrakt',
      image: '/images/p2.jpg',
      price: 3200,
      countInStock: 1,
      brand: 'alia',
      rating: 4.4,
      numReviews:9,
      description: 'Pershkrimi i nje drame',
    },
    {
      _id: '3',
      name: 'Colorful',
      category: 'Abstrakt',
      image: '/images/p3.jpg',
      price: 4220,
      countInStock: 1,
      brand: 'alia',
      rating: 4.8,
      numReviews: 10,
      description: 'Figur shumefigurshe dhe unike',
    },
    {
      _id: '4',
      name: 'Silence',
      category: 'Fotografi',
      image: '/images/p4.jpg',
      price: 324,
      countInStock: 5,
      brand: 'alia',
      rating: 4.58,
      numReviews: 14,
      description: 'pakistanis silenced refugees',
    },
    {
      _id: '5',
      name: 'Frozen',
      category: 'Fotografi',
      image: '/images/p5.jpg',
      price: 777,
      countInStock: 5,
      brand: 'alia',
      rating: 4.5,
      numReviews: 10,
      description: 'Fish eaters and rock collecters caught in lens',
    },
    {
      _id: '6',
      name: 'The Evolution',
      category: 'Fotografi',
      image: '/images/p6.jpg',
      price: 1390,
      countInStock: 12,
      brand: 'alia',
      rating: 4.5,
      numReviews: 5,
      description: 'Stillness in moving',
    },
    {
      _id: '7',
      name: 'Realism6',
      category: 'Pikture',
      image: '/images/p7.jpg',
      price: 5000,
      countInStock: 1,
      brand: 'basquiat',
      rating: 4.5,
      numReviews: 5,
      description: 'Pikture',
    },
    {
      _id: '8',
      name: 'Rosa Bonheur ',
      category: 'Pikture',
      image: '/images/p8.jpg',
      price: 467,
      countInStock: 1,
      brand: 'basquiat',
      rating: 4.4,
      numReviews: 8,
      description: 'Protrait',
    },
    {
      _id: '9',
      name: 'Mary Cassatt',
      category: 'Pikture',
      image: '/images/p9.jpg',
      price: 1111,
      countInStock: 1,
      brand: 'basquiat',
      rating: 4.5,
      numReviews: 8,
      description: 'Tea time',
    },
    {
      _id: '10',
      name: 'Maryy Cassatt',
      category: 'Pikture',
      image: '/images/p10.jpg',
      price: 800,
      countInStock: 1,
      brand: 'basquiat',
      rating: 3.2,
      numReviews: 3,
      description: ' Theater',
    },
    {
      _id: '11',
      name: 'Frida Kahlo',
      category: 'Pikture',
      image: '/images/p11.jpg',
      price: 4559,
      countInStock: 1,
      brand: 'basquiat',
      rating: 1.5,
      numReviews: 5,
      description: 'One with nature',
    },
    {
      _id: '12',
      name: ' Francesca Benett',
      category: 'Skulpture',
      image: '/images/p12.jpg',
      price: 4500,
      countInStock: 7,
      brand: 'basquiat',
      rating: 3.4,
      numReviews: 9,
      description: 'Death',
    },
    {
      _id: '13',
      name: 'Scott Trossel',
      category: 'Pikture',
      image: '/images/p13.jpg',
      price: 1300,
      countInStock: 1,
      brand: 'basquiat',
      rating: 3.0,
      numReviews: 2,
      description: 'Compositons',
    },
    {
      _id: '14',
      name: 'Francesca Benett',
      category: 'Pikture',
      image: '/images/p14.jpg',
      price: 4000,
      countInStock: 1,
      brand: 'basquiat',
      rating: 3.3,
      numReviews: 6,
      description: 'Compositons',
    },
    {
      _id: '16',
      name: 'Jan Hendrix',
      category:  'Abstract',
      image: '/images/p15.jpg',
      price: 2700,
      countInStock: 1,
      brand: 'basquiat',
      rating: 2.0,
      numReviews: 1,
      description: 'Challenges',
    },
    {
      _id: '16',
      name: 'The kiss gustav klimt',
      category: 'Abstract',
      image: '/images/p16.jpg',
      price: 3000,
      countInStock: 1,
      brand: 'basquiat',
      rating:4.8,
      numReviews: 8,
      description: 'Discover Art',
    },
    {
      _id: '17',
      name: 'CARMEL, SUNSET ON OCEAN AVENUE',
      category: 'Abstract',
      image: '/images/p17.jpg',
      price: 1250,
      countInStock: 1,
      brand: 'alia',
      rating: 4.5,
      numReviews: 3,
      description: 'Ten years ago I painted Carmel, Ocean Avenue on a Rainy Afternoon, and from the day I finished it, I dreamed of working on a second view of the famous scene.',
    },
    {
      _id: '18',
      name: 'Afremov Prints',
      category: 'Abstract',
      image: '/images/p18.jpg',
      price: 3100,
      countInStock: 1,
      brand: 'alia',
      rating: 3.0,
      numReviews: 10,
      description: 'paintin abstract',
    },
    {
      _id: '19',
      name: 'Frida kahlo masterworks',
      category: 'Portrait',
      image: '/images/p19.jpg',
      price: 4000,
      countInStock: 1,
      brand: 'alia',
      rating: 3.8,
      numReviews: 5,
      description: 'Life portret',
    },
    {
      _id: '20',
      name: 'Art Prints',
      category: 'Abstrakt',
      image: '/images/p20.jpg',
      price: 4800,
      countInStock: 1,
      brand: 'aila',
      rating: 4.5,
      numReviews: 8,
      description: 'Apstrakt art',
    },
  ],
};
export default data;
