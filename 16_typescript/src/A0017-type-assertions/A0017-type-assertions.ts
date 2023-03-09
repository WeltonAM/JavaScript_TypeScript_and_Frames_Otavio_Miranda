const body1 = document.querySelector('body');
if (body1) body1.style.background = 'blue';

const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'blue';
input.focus();
