import Fund from '@/types/fund';

export default {
  convertToFund(data:any):Fund {
    const {
      code, name, category, fund_type, fund_category, returns, plan,
    } = data;
    return {
      name,
      category,
      code,
      plan,
      type: fund_type,
      yearOne: returns.year_1,
      yearThree: returns.year_3,
    };
  },
};
