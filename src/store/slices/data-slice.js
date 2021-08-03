import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [
    {
      id: 1,
      name: 'Борис Иванов',
      plus: 'мощность, внешний вид',
      minus: 'Слабые тормозные колодки (пришлось заменить)',
      comment:
        'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
      rating: 3,
    },
    {
      id: 2,
      name: 'Марсель Исмагилов',
      plus: 'Cтиль, комфорт, управляемость',
      minus: 'Дорогой ремонт и обслуживание',
      comment:
        'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
      rating: 3,
    },
  ],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addReview(state, { payload }) {
      state.reviews.push(payload);
    },
  },
});

export const { addReview } = dataSlice.actions;
export default dataSlice.reducer;
