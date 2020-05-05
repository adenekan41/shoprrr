const initialState = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/0M7CKz3/1-1-3-433x516.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/Q9d6pJq/cat-2.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/G0XJb1R/S2.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/cyQFwSn/cat-4.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/zZRtpg6/1-640x800.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
