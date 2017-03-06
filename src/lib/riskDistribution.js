const categoriesDistributions = {
  '1':
    [
      {name: 'cash', value: 0.70},
      {name:'bonds', value: 0.20},
      {name:'gold', value: 0.10},
      {name:'options', value: 0.0},
      {name:'stocks', value: 0.0}
    ],
  '2':
    [
      {name: 'cash', value: 0.60},
      {name:'bonds', value: 0.20},
      {name:'gold', value: 0.20},
      {name:'options', value: 0.0},
      {name:'stocks', value: 0.0}
    ],
  '3':
    [
      {name: 'cash', value: 0.50},
      {name:'bonds', value: 0.30},
      {name:'gold', value: 0.20},
      {name:'options', value: 0.0},
      {name:'stocks', value: 0.0}
    ],
  '4':
    [
      {name: 'cash', value: 0.40},
      {name:'bonds', value: 0.30},
      {name:'gold', value: 0.30},
      {name:'options', value: 0.0},
      {name:'stocks', value: 0.0}
    ],
  '5':
    [
      {name: 'cash', value: 0.30},
      {name:'bonds', value: 0.30},
      {name:'gold', value: 0.30},
      {name:'options', value: 0.10},
      {name:'stocks', value: 0.0}
    ],
  '6':
    [
      {name: 'cash', value: 0.20},
      {name:'bonds', value: 0.30},
      {name:'gold', value: 0.30},
      {name:'options', value: 0.20},
      {name:'stocks', value: 0.0}
    ],
  '7':
    [
      {name: 'cash', value: 0.0},
      {name:'bonds', value: 0.30},
      {name:'gold', value: 0.40},
      {name:'options', value: 0.20},
      {name:'stocks', value: 0.10}
    ],
  '8':
    [
      {name: 'cash', value: 0.0},
      {name:'bonds', value: 0.20},
      {name:'gold', value: 0.40},
      {name:'options', value: 0.20},
      {name:'stocks', value: 0.20}
    ],
  '9':
    [
      {name: 'cash', value: 0.0},
      {name:'bonds', value: 0.0},
      {name:'gold', value: 0.20},
      {name:'options', value: 0.50},
      {name:'stocks', value: 0.30}
    ],
  '10':
    [
      {name: 'cash', value: 0.0},
      {name:'bonds', value: 0.0},
      {name:'gold', value: 0.0},
      {name:'options', value: 0.50},
      {name:'stocks', value: 0.50}
    ]
};

export const getCategoriesDistribution = riskLevel => (
  categoriesDistributions[riskLevel]
);

export const getRecommendedDistribution =
  (categoriesDistribution, moneyInCategories) => {
    const totalMoney = Object.values(moneyInCategories)
                             .reduce((acc, el) => acc + el);
    let recommendedDistribution = {};

    categoriesDistribution.forEach( cat => {
      recommendedDistribution[cat.name] = (totalMoney * cat.value).toFixed(2);
    });

    return recommendedDistribution;
  };

export const calculateTransactions =
  (moneyInCategories, recommendedDistribution) => {
    console.log('current distrib', moneyInCategories);
    console.log(recommendedDistribution);
    const withdrawals = [];
    const deposits = [];
    let amount;

    for (let category in moneyInCategories) {
      if (moneyInCategories.hasOwnProperty(category)) {
        amount = recommendedDistribution[category] - moneyInCategories[category];
        if (amount < 0) {
          withdrawals.push({ category, amount });
        } else if (amount > 0) {
          deposits.push({ category, amount });
        }
      }
    }
    console.log(withdrawals, deposits);
    return { withdrawals, deposits };

  };
