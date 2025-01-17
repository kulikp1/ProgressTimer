### Опис

Цей таймер дозволяє вам легко відслідковувати час, витрачений на роботу над проектом, і зберігати інформацію про сесії для подальшого перегляду. Завдяки використанню технологій **HTML**, **CSS** і **JavaScript**, ви отримуєте інтуїтивно зрозумілий і стильний інтерфейс для відслідковування вашої продуктивності.

#### Основні можливості:

1. **Відслідковування часу**:

   - Таймер починається з кнопки "Розпочати", коли ви натискаєте її, таймер починає відліковувати час.
   - Кнопка "Зупинити" зупиняє лічильник, і показує кількість часу, витраченого за цей сеанс.

2. **Збереження даних сесій**:

   - Кожного разу, коли ви зупиняєте таймер, інформація про сесію зберігається у **localStorage** браузера.
   - Це означає, що навіть після того, як ви закриєте вкладку або браузер, ваш прогрес зберігається і ви можете повернутися до роботи з тим самим таймером в будь-який час.

3. **Відновлення часу**:

   - Коли ви відкриваєте таймер в майбутньому, він автоматично відновлює час, який ви витратили на попередню сесію. Це дозволяє вам продовжити з того місця, де ви зупинилися, без необхідності вручну вводити або відновлювати час.

4. **Перегляд історії сесій**:

   - Кожного разу, коли ви завершили сесію, її тривалість додається до історії.
   - Ви можете переглянути історію усіх сесій, побачити час кожної сесії та її тривалість. Це дозволяє вам бачити прогрес у роботі над проектом.

5. **Інтуїтивний інтерфейс**:

   - Створено стильний, сучасний інтерфейс, який легко зрозуміти і використовувати. Кнопки мають яскраві кольори, які змінюються, що дозволяє зрозуміти стан таймера (наприклад, коли таймер працює, кнопка має зелений колір, коли зупинено — червоний).

6. **Мобільна сумісність**:
   - Проект спроектовано так, щоб він виглядав добре на мобільних пристроях, тому ви можете використовувати таймер для відслідковування часу на ходу, незалежно від того, працюєте ви на ПК чи смартфоні.

### Як працює зберігання в **localStorage**:

- **localStorage** — це об'єкт JavaScript, який дозволяє зберігати дані в браузері без терміну дії. Це означає, що навіть після перезавантаження сторінки або закриття вкладки, дані не зникають, поки користувач не очистить локальне сховище вручну.
- У нашому випадку, коли користувач натискає кнопку "Зупинити", поточний час сесії зберігається у **localStorage** у вигляді об'єкта з інформацією про тривалість сесії та час початку.
- При наступному відкритті таймера, JavaScript перевіряє, чи є вже збережені сесії, і якщо є, то відновлює їх для продовження.

### Ключові переваги:

1. **Простота використання**: Інтерфейс мінімалістичний і зрозумілий. Все, що потрібно для роботи з таймером — це одна кнопка для початку роботи та одна для зупинки.
2. **Безпека даних**: Оскільки дані зберігаються в локальному сховищі браузера, вони не відправляються на сервери і доступні тільки вам. Це означає, що ваші дані приватні і безпечні.

3. **Гнучкість**: Ви можете використовувати цей таймер на будь-якому проекті, будь то розробка програмного забезпечення, навчання чи будь-яка інша діяльність, що потребує відслідковування часу.

### Структура даних:

- Кожна сесія зберігається як об'єкт з двома основними властивостями:

  - **start** — час початку сесії.
  - **duration** — тривалість сесії, виміряна в мілісекундах.

  Вся історія сесій зберігається як масив об'єктів у **localStorage**.

---

Цей таймер є чудовим інструментом для тих, хто хоче відслідковувати свій час на проекті, мати історію та ефективно управляти своїм робочим процесом!
