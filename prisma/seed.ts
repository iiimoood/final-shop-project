import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17666',
      title: 'Koszulka Ofelia',
      price: 35,
      mainPhoto: 'Koszulka Ofelia-1.jpg',
      description: 'Koszulka Ofelia to jeden z naszych kultowych produktów.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17699',
      title: 'Koszulka Jane',
      price: 41,
      mainPhoto: 'Koszulka Jane-1.jpg',
      description: 'Koszulka Jane to jeden z naszych kultowych produktów.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17888',
      title: 'Koszulka Margaret',
      price: 20,
      mainPhoto: 'Koszulka Margaret-1.jpg',
      description: 'Koszulka Margaret to jeden z naszych kultowych produktów.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17500',
      title: 'Koszulka Ann',
      price: 38,
      mainPhoto: 'Koszulka Ann-1.jpg',
      description: 'Koszulka Ann to jeden z naszych kultowych produktów.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17333',
      title: 'Koszulka Eva',
      price: 50,
      mainPhoto: 'Koszulka Eva-1.jpg',
      description: 'Koszulka Eva to jeden z naszych kultowych produktów.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17224',
      title: 'Koszulka Angie',
      price: 33,
      mainPhoto: 'Koszulka Angie-1.jpg',
      description: 'Koszulka Angie to jeden z naszych kultowych produktów.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17171',
      title: 'Koszulka Doris',
      price: 27,
      mainPhoto: 'Koszulka Doris-1.jpg',
      description: 'Koszulka Doris to jeden z naszych kultowych produktów.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17771',
      title: 'Koszulka Claire',
      price: 41,
      mainPhoto: 'Koszulka Claire-1.jpg',
      description: 'Koszulka Claire to jeden z naszych kultowych produktów.',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();
