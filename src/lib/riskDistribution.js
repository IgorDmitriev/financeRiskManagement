const categoriesDistribution = {
  '1': {
    'cash': 70,
    'bonds': 20,
    'gold': 10,
    'options': 0,
    'stocks': 0
  },

  '2': {
    'cash': 60,
    'bonds': 20,
    'gold': 20,
    'options': 0,
    'stocks': 0
  },

  '3': {
    'cash': 50,
    'bonds': 30,
    'gold': 20,
    'options': 0,
    'stocks': 0
  },

  '4': {
    'cash': 40,
    'bonds': 30,
    'gold': 30,
    'options': 0,
    'stocks': 0
  },

  '5': {
    'cash': 30,
    'bonds': 30,
    'gold': 30,
    'options': 10,
    'stocks': 0
  },

  '6': {
    'cash': 20,
    'bonds': 30,
    'gold': 30,
    'options': 20,
    'stocks': 0
  },

  '7': {
    'cash': 0,
    'bonds': 30,
    'gold': 40,
    'options': 20,
    'stocks': 10
  },

  '8': {
    'cash': 0,
    'bonds': 20,
    'gold': 40,
    'options': 20,
    'stocks': 20
  },

  '9': {
    'cash': 0,
    'bonds': 0,
    'gold': 20,
    'options': 50,
    'stocks': 30
  },

  '10': {
    'cash': 0,
    'bonds': 0,
    'gold': 0,
    'options': 50,
    'stocks': 50
  }
};

export const getCategoriesDistribution = riskLevel => (
  categoriesDistribution[riskLevel]
);
