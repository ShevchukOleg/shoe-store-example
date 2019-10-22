import { Injectable } from '@angular/core';
import { Sneakers } from '../interfaces/sneakers';

@Injectable()
export class ContentService {
  private offersList: Sneakers[] = [
    {
      manufacturer: 'Puma',
      vendorCode: 'OG 36980101',
      price: 4190,
      color: 'black',
      picture: 'assets/images/goods/1 puma_4060981124740_images_13815032701_compressed.jpg'
    },
    {
      manufacturer: 'New Balance',
      vendorCode: 'MRL247OK',
      price: 1400,
      color: 'gray',
      picture: 'assets/images/goods/2 new_balance_192662839644_images_13152061368_compressed.jpg'
    },
    {
      manufacturer: 'Geox',
      vendorCode: 'U52T5C/022ME/CF47J',
      price: 2929,
      color: 'dark blue',
      picture: 'assets/images/goods/3 geox_8058279562332_images_12653447890_compressed.jpg'
    },
    {
      manufacturer: 'Puma',
      vendorCode: '365 FF 3 CT 104913 03',
      price: 1599,
      color: 'green',
      picture: 'assets/images/goods/4 puma_4059506455438_images_12177436408_compressed.jpg'
    },
    {
      manufacturer: 'Columbia',
      vendorCode: '1553001-010',
      price: 3999,
      color: 'black',
      picture: 'assets/images/goods/5 columbia_0887921327177_images_13816002643_compressed.jpg'
    },
    {
      manufacturer: 'Fila',
      vendorCode: '1VB90158-113',
      price: 2919,
      color: 'black and white',
      picture: 'assets/images/goods/6 fila_2991017644616_images_13816867729_compressed.jpg'
    },
    {
      manufacturer: 'Salomon',
      vendorCode: 'GTX L40616100',
      price: 2516,
      color: 'blue',
      picture: 'assets/images/goods/7 salomon_0889645792873_images_12316923542_compressed.jpg'
    },
    {
      manufacturer: 'Salomon',
      vendorCode: 'L40731900',
      price: 2610,
      color: 'black',
      picture: 'assets/images/goods/8 salomon_193128081706_images_13954068406_compressed.jpg'
    },
    {
      manufacturer: 'Saucony',
      vendorCode: '2044-512s',
      price: 1210,
      color: 'blue-gray',
      picture: 'assets/images/goods/9 saucony_44209796470_images_11323960074_compressed.jpg'
    },
    {
      manufacturer: 'PEAK',
      vendorCode: 'E72977E-WHI',
      price: 1250,
      color: 'white',
      picture: 'assets/images/goods/10 peak_6956251184447_images_12330908450_compressed.jpg'
    },
    {
      manufacturer: 'New Balance',
      vendorCode: '574 ML574SNR',
      price: 3299,
      color: 'black',
      picture: 'assets/images/goods/11 new_balance_193362337256_images_13150723266_compressed.jpg'
    },
    {
      manufacturer: 'Columbia',
      vendorCode: '1865011-010',
      price: 2499,
      color: 'black',
      picture: 'assets/images/goods/12 columbia_0192660440675_images_13697842615_compressed.jpg'
    },
    {
      manufacturer: 'Salomon',
      vendorCode: 'GTX L40923000',
      price: 3509,
      color: 'gray with black',
      picture: 'assets/images/goods/13 salomon_193128081324_images_13954076452_compressed.jpg'
    },
    {
      manufacturer: 'New Balance',
      vendorCode: '574 ML574ECC',
      price: 2699,
      color: 'dark blue',
      picture: 'assets/images/goods/14 new_balance_193362355748_images_13150681458_compressed.jpg'
    },
    {
      manufacturer: 'ASICS',
      vendorCode: 'G-Tx 1011A210/400',
      price: 2899,
      color: 'gray-blue',
      picture: 'assets/images/goods/15 asics_4550214942772_images_13958066392_compressed.jpg'
    },
    {
      manufacturer: 'Salomon',
      vendorCode: 'GTX L40478400',
      price: 5104,
      color: 'gray with black',
      picture: 'assets/images/goods/16 salomon_889645770048_images_13954050700_compressed.jpg'
    },
    {
      manufacturer: 'Nike',
      vendorCode: 'Xi 616544-007',
      price: 1899,
      color: 'black',
      picture: 'assets/images/goods/17 nike_616544_007_9.5_images_1749465040_compressed.jpg'
    },
    {
      manufacturer: 'ASICS',
      vendorCode: '1011A167/003',
      price: 1399,
      color: 'black',
      picture: 'assets/images/goods/18 asics_4550214041161_images_12301234778_compressed.jpg'
    },
    {
      manufacturer: 'ASICS',
      vendorCode: '1011A256/405',
      price: 1899,
      color: 'dark blue',
      picture: 'assets/images/goods/19 asics_4550214962480_images_13958067286_compressed.jpg'
    },
    {
      manufacturer: 'Fila',
      vendorCode: '1FM01DR2-001',
      price: 3599,
      color: 'black',
      picture: 'assets/images/goods/20 fila_2991026208281_images_13814708641_compressed.jpg'
    },
    {
      manufacturer: 'ASICS',
      vendorCode: 'T669N-5806',
      price: 1400,
      color: 'dark blue',
      picture: 'assets/images/goods/21 asics_8718833694410_images_11311394904_compressed.jpg'
    },
    {
      manufacturer: 'Under Armour',
      vendorCode: '3021951-001',
      price: 3390,
      color: 'black',
      picture: 'assets/images/goods/22 under_armour_192811284363_images_13526081612_compressed.jpg'
    },
    {
      manufacturer: 'New Balance',
      vendorCode: 'M576CNN',
      price: 6799,
      color: 'blue',
      picture: 'assets/images/goods/23 new_balance_889116071162_images_14256884772_compressed.jpg'
    },
    {
      manufacturer: 'ASICS',
      vendorCode: '1011A167/004',
      price: 1399,
      color: 'black and blue',
      picture: 'assets/images/goods/24 asics_4550214943175_images_13958061352_compressed.jpg'
    },
  ];

  constructor() { }

  get getofferList(): Sneakers[] {
    return this.offersList;
  }
}
