let allSlider = document.querySelectorAll('.slider__item');
let points = document.querySelectorAll('.slider__dot'); 
allSlider = Array.from(allSlider);
points = Array.from(points);
let count = 0;

function listSlider(array, logic = false) {
  if (logic) {
    count++;
    if (count >= array.length) count = 0;
  } else {
    count--;
    if (count < 0) count = array.length - 1;
  }

  array.forEach((item) => {
    item.className = item.className.replace('slider__item_active', '')
  });
  array[count].className += ' slider__item_active';
}

function listPoint() {

  points.forEach((item) => {
    item.className = item.className.replace('slider__dot_active', '')
  });

  this.className += ' slider__dot_active';

  points.forEach((item, index) => {
    if (item.className.includes( 'slider__dot_active' )) {
      count = index;
    }
  });

  allSlider.forEach((item) => {
    item.className = item.className.replace('slider__item_active', '')
  });
  allSlider[count].className += ' slider__item_active';
}

document.querySelector('.slider__arrow_next').onclick = () => { listSlider(allSlider, true) };
document.querySelector('.slider__arrow_prev').onclick = () => { listSlider(allSlider) };


points.forEach((item) => {
  item.onclick = listPoint;
});
