import { Injectable } from '@nestjs/common';

@Injectable()
export class EcommerceService {
  checkout() {
    const hargaBarang = 5000000;
    const diskon = 0.5;
    const voucherDigunakan = hargaBarang * diskon;
    const totalBayar = hargaBarang - voucherDigunakan;
    const point = voucherDigunakan * 0.02;

    return {
      hargaBarang,
      voucherDigunakan,
      totalBayar,
      pointDidapat: point,
    };
  }
}
