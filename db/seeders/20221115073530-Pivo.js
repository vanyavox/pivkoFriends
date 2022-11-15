/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const pivko = [
      {
        title: 'Bud',
        desc: 'Самое лучшее пивко для спортсменов',
        pic: 'https://icf.listex.info/med/d9c1ea09-0243-7f90-39ec-4543be387891.jpg',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Жигуль Барное',
        desc: 'Всегда по акции',
        pic: 'https://lasmarket.ru/wp-content/uploads/2020/06/2371_0.jpg',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Liebenbrau',
        desc: 'Пивко для ценителей германского пивка',
        pic: 'https://shop.beerimport.ru/image/cache/catalog/pivo/Germany/Liebenbrau/Helles-but-500x500.jpg',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tsingtao',
        desc: 'Вкусно, но дорого',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRdwoNRvC-Rt1UXVQ_K_omjm79oyDh_fGMIuyQHyukX-EBlXIWvCS5BVkHQzPfMNl9j8&usqp=CAU',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Pivos', pivko);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Pivos');
  },
};
