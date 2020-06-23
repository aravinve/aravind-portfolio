(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
  });

  $('#modal-close-btn').click(function () {
    $('#projectModalLabel').text('');
    $('.modal-body').text('');
    $('#github_uri').html('Link');
    $('#github_uri').attr('href', '#!');
    $('#demo_uri').html('Link');
    $('#demo_uri').attr('href', '#!');
  });

  $('#rv-labs').click(function () {
    $('#projectModalLabel').text('RV LABS');
    $('.modal-body').text(
      'Worked as a freelancer for an established pharmaceutical firm.Designed & Developed a responsive business website using HTML5, CSS,JavaScript, Figma & Bootstrap.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/rv-labs');
    $('#demo_uri').html('<i class="fas fa-eye"></i> Live Demo');
    $('#demo_uri').attr('href', '#!');
  });
  $('#rovereatz').click(function () {
    $('#projectModalLabel').text('Rovereatz');
    $('.modal-body').text(
      'A Travelogue. B2B & B2C type social platform connecting nomads, food freaks & the common. Techstack involved: Spring, Mongo DB,ElasticSearch, Bootstrap, React.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://gitlab.com/aravinve/rovereatz');
    $('#demo_uri').html('<i class="fas fa-eye"></i> Live Demo');
    $('#demo_uri').attr('href', '#!');
  });
  $('#bingebuffer').click(function () {
    $('#projectModalLabel').text('Bingebuffer');
    $('.modal-body').text(
      'An unbiased IMDB type webapp built with Django & Materialize. Moderator/Public type review platform for movies, anime, series & games.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/bingebuffer');
    $('#demo_uri').html('<i class="fas fa-eye"></i> Live Demo');
    $('#demo_uri').attr('href', '#!');
  });
  $('#uob').click(function () {
    $('#projectModalLabel').text('UOB One Design');
    $('.modal-body').text(
      'A Redefined Design Approach for United Overseas Bank (UOB). Structured Digital Innovation of services such as Member Onboarding, CRM, Merchant Services in the spheres of service process and design innovation. Used Figma And Materialize Design Standards'
    );
    $('#github_uri').html('<i class="fas fa-eye"></i> Live Demo - UOB One');
    $('#github_uri').attr(
      'href',
      'https://www.figma.com/proto/Az8bzCYpxBy81pr2lFiekH/UOB-DI?node-id=2%3A34&scaling=scale-down'
    );
    $('#demo_uri').html('<i class="fas fa-eye"></i> Live Demo - UOB CRM ');
    $('#demo_uri').attr(
      'href',
      'https://www.figma.com/proto/Az8bzCYpxBy81pr2lFiekH/UOB-DI?node-id=53%3A438&scaling=contain'
    );
  });
  $('#hangar').click(function () {
    $('#projectModalLabel').text('Hangar');
    $('.modal-body').text(
      "A multipurpose desktop application built using Electron and Bulma along with the integration of awesome REST API's."
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/hangar');
    $('#demo_uri').html('<i class="fas fa-eye"></i> Live Demo');
    $('#demo_uri').attr('href', '#!');
  });
  $('#fcc').click(function () {
    $('#projectModalLabel').text('FCC Projects');
    $('.modal-body').text(
      ' A dedicated website for FreeCodeCamp projects. Techstack involves HTML5, CSS, Javascript and Materialize.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/fcc-projects');
    $('#demo_uri').html('<i class="fas fa-eye"></i> Live Demo');
    $('#demo_uri').attr('href', '#!');
  });
})(jQuery); // End of use strict
