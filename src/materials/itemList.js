export const TITLE_MUSTIKKA_5KG = 'MUSTIKKA 5KG';
export const TITLE_MUSTIKKA_3KG = 'MUSTIKKA 3KG';

export const initalProductList = [
    {
        id: 0,
        title: TITLE_MUSTIKKA_5KG,
        mainPic: 'img/5kg-box-nobg.jpg',
        description: 'Tällä 5 kg laatikolla nautit mustikasta koko kesän ja voit jopa jättää osan talven varalle. Suositeltavaa säilyttää alle 5 °C tai pakastaa pienissä pusseissa.',
        pics: [],
        numBox: 1,
        price: 59.99
    },
    {
        id: 1,
        title: TITLE_MUSTIKKA_3KG,
        mainPic: 'img/3kg-box-nobg.jpg',
        description: 'Tämä 3 kg laatikko on tarkoitettu pienempään jääkaappiin. Tällä pääset nauttimaan "kesän mausta", mutta tilaa jää muillekin asioille. Suositeltavaa säilyttää alle 5 °C.',
        pics: [],
        numBox: 0,
        price: 39.99
    }
];

export const initalOrderList = [
    {
        id: 0,
        title: TITLE_MUSTIKKA_5KG,
        mainPic: 'img/5kg-box-nobg.jpg',
        order: 0,
        price: 59.99
    },
    {
        id: 1,
        title: TITLE_MUSTIKKA_3KG,
        mainPic: 'img/3kg-box-nobg.jpg',
        order: 0,
        price: 39.99
    }
];