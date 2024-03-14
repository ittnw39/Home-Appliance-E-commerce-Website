export class Product {
  constructor(
    name,
    brand,
    id,
    price,
    mainImage,
    subImage,
    size,
    energy,
    color,
    category,
    quantity
  ) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.mainImage = mainImage;
    this.subImage = subImage;
    this.size = size;
    this.energy = energy;
    this.color = color;
    this.category = category;
    this.quantity = quantity;
  }
}

const tv = [];
tv.name = 'tv';
const washer = [];
washer.name = 'washer';
const airconditioner = [];
airconditioner.name = 'airconditioner';
const dryer = [];
dryer.name = 'dryer';
const airCleaner = [];
airCleaner.name = 'airCleaner';
const refrigerator = [];
refrigerator.name = 'refrigerator';

export const products = [
  tv,
  washer,
  airconditioner,
  dryer,
  airCleaner,
  refrigerator,
];
tv.push(
  new Product(
    '삼성전자 FHD LED TV',
    '삼성',
    0,
    '422,240',
    ['Object/TV/MainImage/image000.png'],
    ['Object/TV/SubImage/image000.jpg'],
    '43인치',
    '2등급',
    'black',
    'TV',
    1
  )
);
tv.push(
  new Product(
    '삼성전자 4K QLED TV',
    '삼성',
    1,
    '825,610',
    ['Object/TV/MainImage/image010.png'],
    ['Object/TV/SubImage/image010.png'],
    '55인치',
    '1등급',
    'black',
    'TV',
    1
  )
);
tv.push(
  new Product(
    '삼성전자 4K UHD The Serif TV',
    '삼성',
    2,
    '967,670',
    ['Object/TV/MainImage/image020.png'],
    ['Object/TV/SubImage/image020.png'],
    '43인치',
    '1등급',
    'white',
    'TV',
    1
  )
);
tv.push(
  new Product(
    'LG전자 올레드 TV',
    'LG',
    3,
    '1,993,110',
    ['Object/TV/MainImage/image030.png'],
    ['Object/TV/SubImage/image030.png'],
    '65인치',
    '1등급',
    'black',
    'TV',
    1
  )
);
tv.push(
  new Product(
    'LG전자 울트라HD LED TV',
    'LG',
    4,
    '626,530',
    ['Object/TV/MainImage/image040.png'],
    ['Object/TV/SubImage/image040.png'],
    '43인치',
    '2등급',
    'black',
    'TV',
    1
  )
);
tv.push(
  new Product(
    'LG전자 올레드 TV',
    'LG',
    5,
    '1,413,870',
    ['Object/TV/MainImage/image050.png'],
    ['Object/TV/SubImage/image050.png'],
    '42인치',
    '2등급',
    'white',
    'TV',
    1
  )
);
tv.push(
  new Product(
    'TCL 안드로이드11 4K UHD TV 50인치',
    'TCL',
    6,
    '399,000',
    ['Object/TV/MainImage/image060.png'],
    ['Object/TV/SubImage/image060.png'],
    '50인치',
    '2등급',
    'black',
    'TV',
    1
  )
);
tv.push(
  new Product(
    'TCL 안드로이드11 4K UHD TV 43인치',
    'TCL',
    7,
    '325,000',
    ['Object/TV/MainImage/image070.png'],
    ['Object/TV/SubImage/image070.png'],
    '43인치',
    '2등급',
    'black',
    'TV',
    1
  )
);
tv.push(
  new Product(
    '유맥스 4K UHD LED TV',
    '유맥스',
    8,
    '288,000',
    ['Object/TV/MainImage/image080.png'],
    ['Object/TV/SubImage/image080.png'],
    '50인치',
    '1등급',
    'black',
    'TV',
    1
  )
);
tv.push(
  new Product(
    '유맥스 FHD LED TV',
    '유맥스',
    9,
    '178,130',
    ['Object/TV/MainImage/image090.png'],
    ['Object/TV/SubImage/image090.png'],
    '43인치',
    '1등급',
    'black',
    'TV',
    1
  )
);

washer.push(
  new Product(
    '삼성전자 그랑데 통버블 세탁기',
    '삼성',
    10,
    '432,960',
    [
      'Object/세탁기/MainImage/image100.png',
      'Object/세탁기/MainImage/image101.png',
    ],
    ['Object/세탁기/SubImage/image100.png'],
    '16kg',
    '2등급',
    'gray',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    '삼성전자 그랑데 AI 세탁기 그레이지',
    '삼성',
    11,
    '1,259,000',
    [
      'Object/세탁기/MainImage/image110.png',
      'Object/세탁기/MainImage/image111.png',
    ],
    ['Object/세탁기/SubImage/image110.png'],
    '23kg',
    '2등급',
    'greieg',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    '삼성전자 전자동 워블 세탁기 화이트',
    '삼성',
    12,
    '347,360',
    ['Object/세탁기/MainImage/image120.png'],
    ['Object/세탁기/SubImage/image120.png'],
    '10kg',
    '3등급',
    'white',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    'LG전자 통돌이 세탁기',
    'LG',
    13,
    '661,500',
    ['Object/세탁기/MainImage/image130.png'],
    ['Object/세탁기/SubImage/image130.png'],
    '19kg',
    '1등급',
    'black',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    'LG전자 통돌이 일반세탁기',
    'LG',
    14,
    '360,430',
    [
      'Object/세탁기/MainImage/image140.png',
      'Object/세탁기/MainImage/image141.png',
    ],
    ['Object/세탁기/SubImage/image140.png'],
    '10kg',
    '3등급',
    'white',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    'LG전자 트롬 세탁기',
    'LG',
    15,
    '1,108,690',
    [
      'Object/세탁기/MainImage/image150.png',
      'Object/세탁기/MainImage/image151.png',
    ],
    ['Object/세탁기/SubImage/image150.png'],
    '24kg',
    '1등급',
    'gray',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    '위니아 공기방울 4D 통돌이 세탁기',
    '위니아',
    16,
    '400,000',
    [
      'Object/세탁기/MainImage/image160.png',
      'Object/세탁기/MainImage/image161.png',
    ],
    ['Object/세탁기/SubImage/image160.png'],
    '15kg',
    '3등급',
    'white',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    '위니아 입체물살 세탁기',
    '위니아',
    17,
    '310,000',
    [
      'Object/세탁기/MainImage/image170.png',
      'Object/세탁기/MainImage/image171.png',
    ],
    ['Object/세탁기/SubImage/image170.png'],
    '12kg',
    '3등급',
    'white',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    '위니아 공기방울 드럼세탁기',
    '위니아',
    18,
    '813,100',
    [
      'Object/세탁기/MainImage/image180.png',
      'Object/세탁기/MainImage/image181.png',
    ],
    ['Object/세탁기/SubImage/image180.png'],
    '21kg',
    '1등급',
    'gray',
    '세탁기',
    1
  )
);
washer.push(
  new Product(
    '하이얼 소형 통돌이 세탁기',
    '하이얼',
    19,
    '242,730',
    ['Object/세탁기/MainImage/image190.png'],
    ['Object/세탁기/SubImage/image190.png'],
    '6kg',
    '2등급',
    'gray',
    '세탁기',
    1
  )
);

// airconditioner의 size 필드는 냉방면적(㎡)
airconditioner.push(
  new Product(
    '삼성전자 62.6㎡ Q9000 에어컨',
    '삼성',
    20,
    '1,501,240',
    [
      'Object/에어컨/MainImage/image200.png',
      'Object/에어컨/MainImage/image201.png',
    ],
    ['Object/에어컨/SubImage/image200.png'],
    '62.6㎡',
    '3등급',
    'white',
    '에어컨',
    1
  )
);
airconditioner.push(
  new Product(
    '삼성전자 BESPOKE 무풍클래식 에어컨',
    '삼성',
    21,
    '1,765,230',
    [
      'Object/에어컨/MainImage/image210.png',
      'Object/에어컨/MainImage/image211.png',
    ],
    ['Object/에어컨/SubImage/image210.png'],
    '56.9㎡',
    '3등급',
    'white',
    '에어컨',
    1
  )
);
airconditioner.push(
  new Product(
    '삼성전자 56.9㎡+18.7㎡ BESPOKE 에어컨',
    '삼성',
    22,
    '2,785,260',
    ['Object/에어컨/MainImage/image220.png'],
    ['Object/에어컨/SubImage/image220.png'],
    '56.9㎡',
    '4등급',
    'gray',
    '에어컨',
    1
  )
);
airconditioner.push(
  new Product(
    'LG전자 인버터 56.9㎡ 타워에어컨 스탠드형 히트',
    'LG',
    23,
    '2,183,810',
    ['Object/에어컨/MainImage/image230.png'],
    ['Object/에어컨/SubImage/image230.png'],
    '56.9㎡',
    '2등급',
    'gray',
    '에어컨',
    1
  )
);
airconditioner.push(
  new Product(
    'LG전자 인버터 스탠드 휘센 빅토리 에어컨',
    'LG',
    24,
    '1,518,290',
    ['Object/에어컨/MainImage/image240.png'],
    [
      'Object/에어컨/SubImage/image240.png',
      'Object/에어컨/SubImage/image241.png',
    ],
    '58.5㎡',
    '3등급',
    'white',
    '에어컨',
    1
  )
);

airconditioner.push(
  new Product(
    '위니아대우 둘레바람 에어컨',
    '위니아',
    25,
    '845,000',
    ['Object/에어컨/MainImage/image250.png'],
    ['Object/에어컨/SubImage/image250.png'],
    '56.2㎡',
    '3등급',
    'white',
    '에어컨',
    1
  )
);
airconditioner.push(
  new Product(
    '위니아 인버터 22.8㎡ 바이브 벽걸이형 에어컨',
    '위니아',
    26,
    '530,100',
    [
      'Object/에어컨/MainImage/image260.png',
      'Object/에어컨/MainImage/image261.png',
      'Object/에어컨/MainImage/image262.png',
      'Object/에어컨/MainImage/image263.png',
    ],
    ['Object/에어컨/SubImage/image260.png'],
    '22.8㎡',
    '3등급',
    'gray',
    '에어컨',
    1
  )
);
airconditioner.push(
  new Product(
    '위니아 인버터 56.2㎡ 스탠드 둘레바람 에어컨',
    '위니아',
    27,
    '910,000',
    [
      'Object/에어컨/MainImage/image270.png',
      'Object/에어컨/MainImage/image271.png',
    ],
    ['Object/에어컨/SubImage/image270.png'],
    '56.2㎡',
    '3등급',
    'white',
    '에어컨',
    1
  )
);
airconditioner.push(
  new Product(
    '캐리어 인버터 스탠드 에어로18단 에어컨',
    '캐리어',
    28,
    '1,031,610',
    ['Object/에어컨/MainImage/image280.png'],
    ['Object/에어컨/SubImage/image280.png'],
    '56.2㎡',
    '4등급',
    'white',
    '에어컨',
    1
  )
);

airconditioner.push(
  new Product(
    '캐리어 인버터 18.7㎡ 벽걸이 에어컨 ',
    '캐리어',
    29,
    '432,250',
    [
      'Object/에어컨/MainImage/image290.png',
      'Object/에어컨/MainImage/image291.png',
    ],
    ['Object/에어컨/SubImage/image290.png'],
    '18.7㎡',
    '4등급',
    'white',
    '에어컨',
    1
  )
);

dryer.push(
  new Product(
    '삼성전자 그랑데 건조기 화이트',
    '삼성',
    30,
    '804,550',
    ['Object/건조기/MainImage/image300.png'],
    ['Object/건조기/SubImage/image301.png'],
    '17kg',
    '1등급',
    'white',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    '삼성전자 BESPOKE 그랑데 AI 건조기 이녹스',
    '삼성',
    31,
    '1,008,800',
    ['Object/건조기/MainImage/image310.png'],
    ['Object/건조기/SubImage/image311.png'],
    '17kg',
    '1등급',
    'gray',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    '삼성전자 건조기 DV90TA040TE 9kg',
    '삼성',
    32,
    '1,008,800',
    ['Object/건조기/MainImage/image320.png'],
    ['Object/건조기/SubImage/image321.png'],
    '9kg',
    '2등급',
    'white',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    '삼성전자 인버터 건조기',
    '삼성',
    33,
    '697,680',
    ['Object/건조기/MainImage/image330.png'],
    ['Object/건조기/SubImage/image331.png'],
    '9kg',
    '1등급',
    'black',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    'LG전자 트롬 건조기',
    'LG',
    34,
    '1,176,770',
    ['Object/건조기/MainImage/image340.png'],
    ['Object/건조기/SubImage/image341.png'],
    '18kg',
    '1등급',
    'gray',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    'LG전자 트롬 오브제 컬렉션 건조기',
    'LG',
    35,
    '1,490,000',
    ['Object/건조기/MainImage/image350.png'],
    ['Object/건조기/SubImage/image351.png'],
    '20kg',
    '1등급',
    'black',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    'LG전자 트롬 듀얼인버터 건조기',
    'LG',
    36,
    '1,059,000',
    ['Object/건조기/MainImage/image360.png'],
    ['Object/건조기/SubImage/image361.png'],
    '9kg',
    '1등급',
    'gray',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    '위니아 NEW mini 건조기',
    '위니아',
    37,
    '267,750',
    ['Object/건조기/MainImage/image370.png'],
    ['Object/건조기/SubImage/image371.png'],
    '3kg',
    '5등급',
    'gray',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    'SK매직 인버터 히트펌프 건조기',
    'SK',
    38,
    '878,140',
    ['Object/건조기/MainImage/image380.png'],
    ['Object/건조기/SubImage/image381.png'],
    '10kg',
    '2등급',
    'gray',
    '건조기',
    1
  )
);
dryer.push(
  new Product(
    '미디어 인버터 히트펌프 전기 의류 건조기',
    '미디어',
    39,
    '540,550',
    ['Object/건조기/MainImage/image390.png'],
    ['Object/건조기/SubImage/image391.png'],
    '10kg',
    '2등급',
    'white',
    '건조기',
    1
  )
);

airCleaner.push(
  new Product(
    '삼성전자 블루스카이 3100 공기청정기',
    '삼성',
    40,
    '163,900',
    [
      'Object/공기청정기/MainImage/image000.jpg',
      'Object/공기청정기/MainImage/image001.jpg',
    ],
    ['Object/공기청정기/SubImage/image000.jpg'],
    '33.1㎡',
    '3등급',
    'greige',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    '삼성전자 블루스카이 7000 공기청정기',
    '삼성',
    41,
    '494,000',
    [
      'Object/공기청정기/MainImage/image010.jpg',
      'Object/공기청정기/MainImage/image011.jpg',
      'Object/공기청정기/MainImage/image012.jpg',
    ],
    ['Object/공기청정기/SubImage/image010.jpg'],
    '90㎡',
    '3등급',
    'white',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    '삼성전자 BESPOKE 큐브TM Air 공기청정기',
    '삼성',
    42,
    '1,254,240',
    ['Object/공기청정기/MainImage/image020.jpg'],
    ['Object/공기청정기/SubImage/image020.jpg'],
    '106㎡',
    '2등급',
    'greige',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    'SK매직 올클린 공기청정기',
    'SK',
    43,
    '530,000',
    [
      'Object/공기청정기/MainImage/image030.jpg',
      'Object/공기청정기/MainImage/image031.jpg',
      'Object/공기청정기/MainImage/image032.jpg',
    ],
    ['Object/공기청정기/SubImage/image030.jpg'],
    '82.4㎡',
    '1등급',
    'white',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    'SK매직 코어360 펫공기청정기',
    'SK',
    44,
    '160,550',
    [
      'Object/공기청정기/MainImage/image040.jpg',
      'Object/공기청정기/MainImage/image041.jpg',
      'Object/공기청정기/MainImage/image042.jpg',
    ],
    ['Object/공기청정기/SubImage/image040.jpg'],
    '42.9㎡',
    '1등급',
    'white',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    'SK매직 코어 MAX 공기청정기 블랙',
    'SK',
    45,
    '217,550',
    [
      'Object/공기청정기/MainImage/image050.jpg',
      'Object/공기청정기/MainImage/image051.jpg',
      'Object/공기청정기/MainImage/image052.jpg',
      'Object/공기청정기/MainImage/image053.jpg',
    ],
    ['Object/공기청정기/SubImage/image050.jpg'],
    '62.7㎡',
    '1등급',
    'black',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    '블루에어 Blue 3410 공기청정기',
    '블루에어',
    46,
    '207,200',
    [
      'Object/공기청정기/MainImage/image060.jpg',
      'Object/공기청정기/MainImage/image061.jpg',
    ],
    ['Object/공기청정기/SubImage/image060.jpg'],
    '53.8㎡',
    '2등급',
    'gray',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    'LG전자 퓨리케어 공기청정기 38.9㎡',
    'LG',
    47,
    '239,000',
    [
      'Object/공기청정기/MainImage/image070.jpg',
      'Object/공기청정기/MainImage/image071.jpg',
    ],
    ['Object/공기청정기/SubImage/image070.jpg'],
    '38.9㎡',
    '3등급',
    'gray',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    'LG전자 퓨리케어 오브제컬렉션 360도 공기청정기',
    'LG',
    48,
    '1,431,000',
    ['Object/공기청정기/MainImage/image080.jpg'],
    ['Object/공기청정기/SubImage/image080.jpg'],
    '114㎡',
    '2등급',
    'beige',
    '공기청정기',
    1
  )
);
airCleaner.push(
  new Product(
    'LG전자 퓨리케어 360도 공기청정기 플러스',
    'LG',
    49,
    '829,000',
    ['Object/공기청정기/MainImage/image090.png'],
    ['Object/공기청정기/SubImage/image090.jpg'],
    '61.2㎡',
    '2등급',
    'white',
    '공기청정기',
    1
  )
);
refrigerator.push(
  new Product(
    '삼성전자 일반형냉장고',
    '삼성',
    50,
    '346,620',
    [
      'Object/냉장고/MainImage/image000.jpg',
      'Object/냉장고/MainImage/image001.jpg',
    ],
    ['Object/냉장고/SubImage/image000.jpg'],
    '255L',
    '2등급',
    'gray',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    '삼성전자 양문형냉장고',
    '삼성',
    51,
    '990,000',
    [
      'Object/냉장고/MainImage/image010.jpg',
      'Object/냉장고/MainImage/image011.jpg',
    ],
    ['Object/냉장고/SubImage/image010.jpg'],
    '815L',
    '2등급',
    'gray',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    '삼성전자 비스포크 프리스탠딩 4도어 냉장고 875L ',
    '삼성',
    52,
    '1,699,870',
    ['Object/냉장고/MainImage/image020.jpg'],
    ['Object/냉장고/SubImage/image020.jpg'],
    '875L',
    '1등급',
    'white',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    '삼성전자 패밀리 냉동고',
    '삼성',
    53,
    '514,620',
    ['Object/냉장고/MainImage/image030.jpg'],
    ['Object/냉장고/SubImage/image030.jpg'],
    '247L',
    '1등급',
    'gray',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    'LG전자 디오스 오브제컬렉션 4도어 냉장고 메탈 870L',
    'LG',
    54,
    '1,701,400',
    ['Object/냉장고/MainImage/image040.jpg'],
    ['Object/냉장고/SubImage/image040.jpg'],
    '870L',
    '2등급',
    'gray',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    'LG전자 일반형 냉장고',
    'LG',
    55,
    '341,780',
    ['Object/냉장고/MainImage/image050.jpg'],
    ['Object/냉장고/SubImage/image050.jpg'],
    '189L',
    '3등급',
    'white',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    'LG전자 디오스 일반형냉장고',
    'LG',
    56,
    '635,800',
    [
      'Object/냉장고/MainImage/image060.jpg',
      'Object/냉장고/MainImage/image061.jpg',
    ],
    ['Object/냉장고/SubImage/image060.jpg'],
    '480L',
    '3등급',
    'white',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    '위니아 세미빌트인 4도어 냉장고 479L',
    '위니아',
    57,
    '810,000',
    ['Object/냉장고/MainImage/image070.jpg'],
    ['Object/냉장고/SubImage/image070.jpg'],
    '479L',
    '3등급',
    'gray',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    '캐리어 클라윈드 피트인 양문형 냉장고 535L',
    '캐리어',
    58,
    '698,000',
    ['Object/냉장고/MainImage/image080.jpg'],
    ['Object/냉장고/SubImage/image080.jpg'],
    '535L',
    '3등급',
    'gray',
    '냉장고',
    1
  )
);
refrigerator.push(
  new Product(
    '캐리어 클라윈드 슬림 일반형 냉장고 255L',
    '캐리어',
    59,
    '698,000',
    ['Object/냉장고/MainImage/image090.jpg'],
    ['Object/냉장고/SubImage/image090.jpg'],
    '255L',
    '3등급',
    'white',
    '냉장고',
    1
  )
);
export const convertCategory = (category) => {
  switch (category) {
    case 'TV':
      return 'tv';
    case '세탁기':
      return 'washer';
    case '에어컨':
      return 'airconditioner';
    case '건조기':
      return 'dryer';
    case '공기청정기':
      return 'airCleaner';
    case '냉장고':
      return 'refrigerator';
  }
};
export const findObject = (category, id) => {
  for (let i = 0; i < products.length; i++) {
    if (category == products[i].name) {
      for (let j = 0; j < products[i].length; j++) {
        if (id == products[i][j].id) {
          return products[i][j];
        }
      }
    }
  }
};
// const object = findObject('냉장고', 55); 카테고리 이름과 ID로 해당 객체 리턴

export const findCategory = (category) => {
  for (let i = 0; i < products.length; i++) {
    if (category == products[i].name) {
      return products[i];
    }
  }
};

export const findCategoryProducts = (category) => {
  return products.filter((products) => products.category === category);
};
// const category = findCategory('냉장고'); 해당 카테고리 전체 리턴
// console.log(category[2]); 냉장고의 2번 index 요소

export const choiceRandom = () => {
  let randomCategory = Math.floor(Math.random() * 6);
  let randomObject = Math.floor(Math.random() * 10);
  return products[randomCategory][randomObject];
};
// 랜덤으로 객체 선택

export const choiceNum = (numItem) => {
  let itemArray = [];
  while (itemArray.length < numItem) {
    let choiceItem = choiceRandom();
    for (let j = 0; j < itemArray.length; j++) {
      if (itemArray[j] == choiceItem) {
        itemArray.splice(j, 1);
        break;
      }
    }
    itemArray.push(choiceItem);
  }
  return itemArray;
};
// n개의 랜덤한 아이템 반환

export const priceToInt = (stringPrice) => {
  let noCommas = stringPrice.replace(/,/g, '');
  let price = parseInt(noCommas, 10);
  return price;
};
// 문자열 가격 -> 정수로

export const updateBuyStorage = (updateArray) => {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    let key = localStorage.key(i);
    if (key.startsWith('BuyItem_')) {
      localStorage.removeItem(key);
    }
  }

  for (let i = 0; i < updateArray.length; i++) {
    localStorage.setItem(
      `BuyItem_${Date.now() + i}`,
      JSON.stringify(updateArray[i])
    );
  }
};
