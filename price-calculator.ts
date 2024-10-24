export const calculatePrice = (traffic: number): number => {
    if (traffic <= 100000) return 16.00;
    if (traffic <= 150000) return 20.00;
    return 24.00;
  };
  