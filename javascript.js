$(function() {

  const fullWidth = 300;
  const fullHeight = 300;
  const thumbnailWidth = 75;
  const thumbnailHeight = 75;

  // image 1

  $('#picture1').css({
    'width': thumbnailWidth + 'px',
    'height': thumbnailHeight + 'px'
  })

  $('#full1').hide();

  $('#picture1').click(() => {
    $('#thumbnail1').toggle();
    $('#full1').toggle();
  })

  $('#picture1').mousemove(e => {

    let mouseX = e.pageX - 70;
    let mouseY = e.pageY - 60;

    let posX = ( Math.round((mouseX / thumbnailWidth ) * 100 ) / 100) * (fullWidth - thumbnailWidth );
    let posY = ( Math.round((mouseY / thumbnailHeight) * 100 ) / 100) * (fullHeight - thumbnailHeight );

    $('#full1').css({
      'left': '-' + posX + 'px',
      'top': '-' + posY + 'px'
    });

  });
  
  // image 2

  $('#picture2').css({
    'width': thumbnailWidth + 'px',
    'height': thumbnailHeight + 'px'
  })

  $('#full2').hide();

  $('#picture2').click(() => {
    $('#thumbnail2').toggle();
    $('#full2').toggle();
  })

  $('#picture2').mousemove(e => {

    let mouseX = e.pageX - 160;
    let mouseY = e.pageY - 60;

    let posX = ( Math.round((mouseX / thumbnailWidth ) * 100 ) / 100) * (fullWidth - thumbnailWidth );
    let posY = ( Math.round((mouseY / thumbnailHeight) * 100 ) / 100) * (fullHeight - thumbnailHeight );

    $('#full2').css({
      'left': '-' + posX + 'px',
      'top': '-' + posY + 'px'
    });

  });

  // image 3

  $('#picture3').css({
    'width': thumbnailWidth + 'px',
    'height': thumbnailHeight + 'px'
  })

  $('#full3').hide();

  $('#picture3').click(() => {
    $('#thumbnail3').toggle();
    $('#full3').toggle();
  })

  $('#picture3').mousemove(e => {

    let mouseX = e.pageX - 250;
    let mouseY = e.pageY - 60;

    let posX = ( Math.round((mouseX / thumbnailWidth ) * 100 ) / 100) * (fullWidth - thumbnailWidth );
    let posY = ( Math.round((mouseY / thumbnailHeight) * 100 ) / 100) * (fullHeight - thumbnailHeight );

    $('#full3').css({
      'left': '-' + posX + 'px',
      'top': '-' + posY + 'px'
    });

  });

  // image 4

  $('#picture4').css({
    'width': thumbnailWidth + 'px',
    'height': thumbnailHeight + 'px'
  })

  $('#full4').hide();

  $('#picture4').click(() => {
    $('#thumbnail4').toggle();
    $('#full4').toggle();
  })

  $('#picture4').mousemove(e => {

    let mouseX = e.pageX - 350;
    let mouseY = e.pageY - 60;

    let posX = ( Math.round((mouseX / thumbnailWidth ) * 100 ) / 100) * (fullWidth - thumbnailWidth );
    let posY = ( Math.round((mouseY / thumbnailHeight) * 100 ) / 100) * (fullHeight - thumbnailHeight );

    $('#full4').css({
      'left': '-' + posX + 'px',
      'top': '-' + posY + 'px'
    });

  });

  // image 5

  $('#picture5').css({
    'width': thumbnailWidth + 'px',
    'height': thumbnailHeight + 'px'
  })

  $('#full5').hide();

  $('#picture5').click(() => {
    $('#thumbnail5').toggle();
    $('#full5').toggle();
  })

  $('#picture5').mousemove(e => {

    let mouseX = e.pageX - 450;
    let mouseY = e.pageY - 60;

    let posX = ( Math.round((mouseX / thumbnailWidth ) * 100 ) / 100) * (fullWidth - thumbnailWidth );
    let posY = ( Math.round((mouseY / thumbnailHeight) * 100 ) / 100) * (fullHeight - thumbnailHeight );

    $('#full5').css({
      'left': '-' + posX + 'px',
      'top': '-' + posY + 'px'
    });

  });

  // image 6

  $('#picture6').css({
    'width': thumbnailWidth + 'px',
    'height': thumbnailHeight + 'px'
  })

  $('#full6').hide();

  $('#picture6').click(() => {
    $('#thumbnail6').toggle();
    $('#full6').toggle();
  })

  $('#picture6').mousemove(e => {

    let mouseX = e.pageX - 540;
    let mouseY = e.pageY - 60;

    let posX = ( Math.round((mouseX / thumbnailWidth ) * 100 ) / 100) * (fullWidth - thumbnailWidth );
    let posY = ( Math.round((mouseY / thumbnailHeight) * 100 ) / 100) * (fullHeight - thumbnailHeight );

    $('#full6').css({
      'left': '-' + posX + 'px',
      'top': '-' + posY + 'px'
    });

  });

  $('#container').css({
    'display': 'flex'
  });

});