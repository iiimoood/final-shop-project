import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: '337r-rr65-rr75-ag85',
      title: 'Koszulka numer 1',
      price: 35,
      mainPhoto: '/uploads/koszulka-numer-jeden-1.jpg',
      description: 'Koszulka numer 1 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-jeden-2.jpg',
        '/uploads/koszulka-numer-jeden-3.jpg',
        '/uploads/koszulka-numer-jeden-4.jpg',
      ],
    },
    {
      id: '337r-rr65-rr75-bg86',
      title: 'Koszulka numer 2',
      price: 41,
      mainPhoto: '/uploads/koszulka-numer-dwa-1.jpg',
      description: 'Koszulka numer 2 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-dwa-2.jpg',
        '/uploads/koszulka-numer-dwa-3.jpg',
        '/uploads/koszulka-numer-dwa-4.jpg',
      ],
    },
    {
      id: '337r-rr65-rr75-cg75',
      title: 'Koszulka numer 3',
      price: 20,
      mainPhoto: '/uploads/koszulka-numer-trzy-1.jpg',
      description: 'Koszulka numer 3 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-trzy-2.jpg',
        '/uploads/koszulka-numer-trzy-3.jpg',
        '/uploads/koszulka-numer-trzy-4.jpg',
      ],
    },
    {
      id: '337r-rr65-rr75-dg89',
      title: 'Koszulka numer 4',
      price: 38,
      mainPhoto: '/uploads/koszulka-numer-cztery-1.jpg',
      description: 'Koszulka numer 4 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-cztery-2.jpg',
        '/uploads/koszulka-numer-cztery-3.jpg',
        '/uploads/koszulka-numer-cztery-4.jpg',
      ],
    },
    {
      id: '337r-rr65-rj75-eg85',
      title: 'Koszulka numer 5',
      price: 50,
      mainPhoto: '/uploads/koszulka-numer-pięć-1.jpg',
      description: 'Koszulka numer 5 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-pięć-2.jpg',
        '/uploads/koszulka-numer-pięć-3.jpg',
        '/uploads/koszulka-numer-pięć-4.jpg',
      ],
    },
    {
      id: '337r-jr65-rr75-fg85',
      title: 'Koszulka numer 6',
      price: 33,
      mainPhoto: '/uploads/koszulka-numer-sześć-1.jpg',
      description: 'Koszulka numer 6 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-sześć-2.jpg',
        '/uploads/koszulka-numer-sześć-3.jpg',
        '/uploads/koszulka-numer-sześć-4.jpg',
      ],
    },
    {
      id: '330r-rr65-rr75-gg85',
      title: 'Koszulka numer 7',
      price: 27,
      mainPhoto: '/uploads/koszulka-numer-siedem-1.jpg',
      description: 'Koszulka numer 7 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-siedem-2.jpg',
        '/uploads/koszulka-numer-siedem-3.jpg',
        '/uploads/koszulka-numer-siedem-4.jpg',
      ],
    },
    {
      id: '344r-rr65-rr75-hg85',
      title: 'Koszulka numer 8',
      price: 41,
      mainPhoto: '/uploads/koszulka-numer-osiem-1.jpg',
      description: 'Koszulka numer 8 to jeden z naszych kultowych produktów.',
      photos: [
        '/uploads/koszulka-numer-osiem-2.jpg',
        '/uploads/koszulka-numer-osiem-3.jpg',
        '/uploads/koszulka-numer-osiem-4.jpg',
      ],
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map(async (product) => {
      const { photos, ...productData } = product;
      const createdProduct = await db.product.create({
        data: {
          ...productData,
          photos: {
            createMany: {
              data: photos.map((photo) => ({ url: photo })),
            },
          },
        },
      });
    }),
  );
}

seed();
