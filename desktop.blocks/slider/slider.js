const className = 'slider__btn';
const classNameActive = className + '_active';
const buttons = document.querySelectorAll('.' + className);

buttons.forEach((item) => {
  const targetClass = item.parentNode.dataset.target;
  const targetElem = document.querySelector('.' + targetClass);

  item.addEventListener('click', (event) => {
    const activeElem = item.parentNode.querySelector('.' + classNameActive);
    activeElem.classList.remove(classNameActive);

    targetElem.dataset.current = item.dataset.position;
    item.classList.add(classNameActive)
  });
})
