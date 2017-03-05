const categoriesDistribution = {
  '1':
    [
      {name: 'cash', value: 70},
      {name:'bonds', value: 20},
      {name:'gold', value: 10},
      {name:'options', value: 0},
      {name:'stocks', value: 0}
    ],
  '2':
    [
      {name: 'cash', value: 60},
      {name:'bonds', value: 20},
      {name:'gold', value: 20},
      {name:'options', value: 0},
      {name:'stocks', value: 0}
    ],
  '3':
    [
      {name: 'cash', value: 50},
      {name:'bonds', value: 30},
      {name:'gold', value: 20},
      {name:'options', value: 0},
      {name:'stocks', value: 0}
    ],
  '4':
    [
      {name: 'cash', value: 40},
      {name:'bonds', value: 30},
      {name:'gold', value: 30},
      {name:'options', value: 0},
      {name:'stocks', value: 0}
    ],
  '5':
    [
      {name: 'cash', value: 30},
      {name:'bonds', value: 30},
      {name:'gold', value: 30},
      {name:'options', value: 10},
      {name:'stocks', value: 0}
    ],
  '6':
    [
      {name: 'cash', value: 20},
      {name:'bonds', value: 30},
      {name:'gold', value: 30},
      {name:'options', value: 20},
      {name:'stocks', value: 0}
    ],
  '7':
    [
      {name: 'cash', value: 0},
      {name:'bonds', value: 30},
      {name:'gold', value: 40},
      {name:'options', value: 20},
      {name:'stocks', value: 10}
    ],
  '8':
    [
      {name: 'cash', value: 0},
      {name:'bonds', value: 20},
      {name:'gold', value: 40},
      {name:'options', value: 20},
      {name:'stocks', value: 20}
    ],
  '9':
    [
      {name: 'cash', value: 0},
      {name:'bonds', value: 0},
      {name:'gold', value: 20},
      {name:'options', value: 50},
      {name:'stocks', value: 30}
    ],
  '10':
    [
      {name: 'cash', value: 0},
      {name:'bonds', value: 0},
      {name:'gold', value: 0},
      {name:'options', value: 50},
      {name:'stocks', value: 50}
    ]
};

export const getCategoriesDistribution = riskLevel => (
  categoriesDistribution[riskLevel]
);
