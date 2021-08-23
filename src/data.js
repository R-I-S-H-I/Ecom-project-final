import acouticGuitar from './img/acoustic_guitar.jpg';
import electricGuitar from './img/electric_guitar.jpg';
const data = [
    {
        id: 1,
        prod_name: 'prod1',
        prod_price: 10000,
        prod_img: acouticGuitar,
        rating: 'four and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 2,
        prod_name: 'prod2',
        prod_price: 15000,
        prod_img: acouticGuitar,
        rating: 'three and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 3,
        prod_name: 'prod3',
        prod_price: 20000,
        prod_img: electricGuitar,
        rating: 'two and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 4,
        prod_name: 'prod4',
        prod_price: 25000,
        prod_img: electricGuitar,
        rating: 'one and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 5,
        prod_name: 'prod5',
        prod_price: 30000,
        prod_img: acouticGuitar,
        rating: 'four and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 6,
        prod_name: 'prod6',
        prod_price: 35000,
        prod_img: acouticGuitar,
        rating: 'three and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 7,
        prod_name: 'prod7',
        prod_price: 40000,
        prod_img: electricGuitar,
        rating: 'two and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 8,
        prod_name: 'prod8',
        prod_price: 45000,
        prod_img: electricGuitar,
        rating: 'one and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 9,
        prod_name: 'prod9',
        prod_price: 50000,
        prod_img: acouticGuitar,
        rating: 'four and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 10,
        prod_name: 'prod10',
        prod_price: 55000,
        prod_img: acouticGuitar,
        rating: 'three and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 11,
        prod_name: 'prod11',
        prod_price: 12500,
        prod_img: electricGuitar,
        rating: 'two and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 12,
        prod_name: 'prod12',
        prod_price: 22500,
        prod_img: electricGuitar,
        rating: 'one and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 13,
        prod_name: 'prod13',
        prod_price: 32500,
        prod_img: acouticGuitar,
        rating: 'four and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 14,
        prod_name: 'prod14',
        prod_price: 42500,
        prod_img: acouticGuitar,
        rating: 'three and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 15,
        prod_name: 'prod15',
        prod_price: 52500,
        prod_img: electricGuitar,
        rating: 'two and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 16,
        prod_name: 'prod16',
        prod_price: 17500,
        prod_img: electricGuitar,
        rating: 'one and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 17,
        prod_name: 'prod17',
        prod_price: 27500,
        prod_img: acouticGuitar,
        rating: 'four and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 18,
        prod_name: 'prod18',
        prod_price: 37500,
        prod_img: acouticGuitar,
        rating: 'three and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 19,
        prod_name: 'prod19',
        prod_price: 47500,
        prod_img: electricGuitar,
        rating: 'two and above',
        type: 'electric',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    },
    {
        id: 20,
        prod_name: 'prod20',
        prod_price: 57500,
        prod_img: acouticGuitar,
        rating: 'one and above',
        type: 'acoustic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget massa tristique, luctus dui non, interdum velit. Nunc et gravida eros. Nam non placerat risus, nec consequat justo. Morbi odio sapien, venenatis quis purus eu, ultrices tincidunt metus. Donec vehicula tortor nec tortor tempus convallis. Integer venenatis elementum arcu, sit amet rhoncus mauris tempus non. Vivamus sed purus in arcu vestibulum venenatis et ac nibh. Donec accumsan, mauris non gravida pellentesque, arcu ante facilisis nunc, commodo ultrices sem erat at tortor. Cras risus velit, pulvinar a dolor ut, malesuada efficitur libero. Sed malesuada id urna dignissim ultricies. Nullam ac urna risus.'
    }
]

export default data;