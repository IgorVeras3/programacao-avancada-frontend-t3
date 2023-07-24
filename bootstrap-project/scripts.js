let containerA = new ProgressBar.Circle(circleA, {
  color: '#00447c',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1600,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#00447c', width: 1 },
  to: { color: '#002746', width: 4 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 500);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
  

  
  let containerB = new ProgressBar.Circle(circleB, {
    color: '#00447c',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1600,
    text: {
      autoStyleContainer: true
    },
    from: { color: '#00447c', width: 1 },
    to: { color: '#002746', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 500);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });

  
  let containerC = new ProgressBar.Circle(circleC, {
    color: '#00447c',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1600,
    text: {
      autoStyleContainer: true
    },
    from: { color: '#00447c', width: 1 },
    to: { color: '#002746', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 500);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });

  let containerD = new ProgressBar.Circle(circleD, {
    color: '#00447c',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1600,
    text: {
      autoStyleContainer: true
    },
    from: { color: '#00447c', width: 1 },
    to: { color: '#002746', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 500);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  


  containerA.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  containerA.text.style.fontSize = '2rem';

  containerB.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  containerB.text.style.fontSize = '2rem';

  containerC.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  containerC.text.style.fontSize = '2rem';

  containerD.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  containerD.text.style.fontSize = '2rem';
  
  let stop = 0;
  let dataAreaOffset = $('#data-area').offset();

  $(window).scroll(function(e){

    let scroll = $(window).scrollTop()

    if(scroll>(dataAreaOffset.top) && stop==0){
    containerA.animate(1.0);
    containerB.animate(1.0);
    containerC.animate(1.0);
    containerD.animate(1.0);
    stop = 1;
    }
    
  })



  //Parallax
  $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
  $('#apply-content').parallax({imageSrc: 'img/pattern.png'})

