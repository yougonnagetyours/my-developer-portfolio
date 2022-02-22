export const projects = [
  {
    title: 'Travelfolio',
    description:`Travelfolio is the blog created with Next.js and it is connected with headless CMS - GraphCMS. All queries are made via GraphQL. People have opporunity to comment each post and they could save their nick and email in the browser local storage.`,
    image: '/images/travelfolio.png',
    tags: ['Next.js', 'GraphQL', 'CMS',],
    source: 'https://github.com/yougonnagetyours/travelfolio',
    visit: 'https://travelfolio.vercel.app',
    id: 1,
  },
  {
    title: 'E-commerce shop',
    description: `This project is made with Create React App. Main technology is React.js, styling via Tailwind 
                  CSS. The shop is joined to Commerce.js via API to add products to the shop, manage cart, control orders 
                  etc. For this shop is also implemented Stripe for card transactions.`,
      image: '/images/1.png',
      tags: ['React', 'Tailwind', 'Stripe',],
    source: 'https://github.com/yougonnagetyours/kangur-makes-candles',
    visit: 'https://kangur-makes-candles.netlify.app/',
    id: 0,
  },
];

export const images = {
  heroImage: '/images/hero-profile.jpg',
}
 
