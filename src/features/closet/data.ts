interface Clothes {
  id: string
  description: string
  brand: string
  size: {
    category: string
    centimeters: number
  }[]
  materials: {
    material: string
    percentage: number
  }[]
  washingInstructions: string[]
  countryOfOrigin: string
}

export const clothesData: Clothes[] = [
  {
    id: 'clothes01',
    description: 'ウールのエレガントなブラックコート',
    brand: 'A.P.C.',
    size: [
      {
        category: '胸囲',
        centimeters: 120,
      },
      {
        category: '袖丈',
        centimeters: 63,
      },
      {
        category: '肩幅',
        centimeters: 53.5,
      },
      {
        category: '着丈',
        centimeters: 121.5,
      },
    ],
    materials: [{
      material: '毛',
      percentage: 80,
    }, {
      material: 'ナイロン',
      percentage: 20,
    }],
    washingInstructions: ['BleachProhibited', 'DryCleaning', 'Iron110C', 'NoWashing', 'TumbleDryProhibited', 'WetCleaningProhibited'],
    countryOfOrigin: 'ルーマニア',
  },
  {
    id: 'clothes02',
    description: '生成のフェイクシープスキンノースリーブブルゾン',
    brand: 'A.P.C.',
    size: [
      {
        category: '胸囲',
        centimeters: 121,
      },
      {
        category: '袖丈',
        centimeters: 46.5,
      },
      {
        category: '着丈',
        centimeters: 64.5,
      },
    ],
    materials: [{
      material: 'ポリエステル',
      percentage: 100,
    }],
    washingInstructions: ['BleachProhibited', 'DryCleaning', 'Iron110C', 'NoWashing', 'TumbleDryProhibited', 'WetCleaningProhibited'],
    countryOfOrigin: 'ルーマニア',
  },
  {
    id: 'clothes03',
    description: 'ミリタリーインスピレーションのカーゴパンツ',
    brand: 'A.P.C.',
    size: [
      {
        category: 'ウエスト',
        centimeters: 86,
      },
      {
        category: 'ヒップ',
        centimeters: 104.5,
      },
      {
        category: '股下',
        centimeters: 78,
      },
      {
        category: '股上',
        centimeters: 31.5,
      },
      {
        category: '腿回り',
        centimeters: 71,
      },
    ],
    materials: [{
      material: '毛',
      percentage: 100,
    }],
    washingInstructions: ['BleachProhibited', 'DryCleaning', 'Iron110C', 'NoWashing', 'TumbleDryProhibited', 'WetCleaningProhibited'],
    countryOfOrigin: '中国',
  },
  {
    id: 'clothes04',
    description: '大きなA.P.C.ロゴ刺繍入りコットンTシャツ',
    brand: 'A.P.C.',
    size: [
      {
        category: '胸囲',
        centimeters: 110,
      },
      {
        category: '袖丈',
        centimeters: 21.5,
      },
      {
        category: '肩幅',
        centimeters: 47,
      },
      {
        category: '着丈',
        centimeters: 71.5,
      },
    ],
    materials: [{
      material: '綿',
      percentage: 100,
    }],
    washingInstructions: ['BleachProhibited', 'DryCleaning', 'Iron110C', 'NoWashing', 'TumbleDryProhibited', 'WetCleaningProhibited'],
    countryOfOrigin: 'ポルトガル',
  },
  {
    id: 'clothes05',
    description: '',
    brand: 'A.P.C.',
    size: [
      {
        category: '胸囲',
        centimeters: 116,
      },
      {
        category: '袖丈',
        centimeters: 60,
      },
      {
        category: '肩幅',
        centimeters: 55,
      },
      {
        category: '着丈',
        centimeters: 69,
      },
    ],
    materials: [{
      material: 'カシミヤ',
      percentage: 92,
    }, {
      material: '毛',
      percentage: 6,
    }, {
      material: 'ナイロン',
      percentage: 1,
    }, {
      material: 'その他',
      percentage: 1,
    }],
    washingInstructions: ['BleachProhibited', 'DryCleaning', 'Iron110C', 'NoWashing', 'TumbleDryProhibited', 'WetCleaningProhibited'],
    countryOfOrigin: 'イタリア',
  },
  {
    id: 'clothes06',
    description: 'ウールの細ストライプ入りダークネイビーのオーバーシャツスタイルジャケット',
    brand: 'A.P.C.',
    size: [
      {
        category: '胸囲',
        centimeters: 113.5,
      },
      {
        category: '袖丈',
        centimeters: 66,
      },
      {
        category: '肩幅',
        centimeters: 47,
      },
      {
        category: '着丈',
        centimeters: 72.5,
      },
    ],
    materials: [{
      material: '毛',
      percentage: 60,
    }, {
      material: 'ナイロン',
      percentage: 40,
    }],
    washingInstructions: ['BleachProhibited', 'DryCleaning', 'Iron110C', 'NoWashing', 'TumbleDryProhibited', 'WetCleaningProhibited'],
    countryOfOrigin: 'ブルガリア',
  },
]
