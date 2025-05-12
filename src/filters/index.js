import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

const filters = {
  formatDate(value) {
    return (value instanceof Date || dayjs.isDayjs(value))
      ? dayjs(value).format('DD [de] MMM [de] YYYY')
      : '--';
  },
  resultFilter(result) {
    return result.name ? result.name : '--';
  },
};

export default filters;
