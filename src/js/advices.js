import * as PNotify from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

const advices = {
  onSpecifyRequest() {
    PNotify.notice({
      title: 'Слишком много совпадений',
      text: 'Пожалуйста, уточните запрос',
    });
  },
  onNotFound() {
    PNotify.notice({
      title: 'Совпадений не найдено',
      text: 'Пожалуйста, проверьте введенную информацию',
    });
  },
  onError() {
    PNotify.notice({
      title: 'Произошла ошибка',
    });
  },
};

export default advices;
