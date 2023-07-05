const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');
const toggle = document.querySelector('.header__toggle');
const header = document.querySelector('.header');

toggle.addEventListener('click', function () {
  const displayMenu = menu.style.display;
  const displayOverlay = overlay.style.display;

  if (displayMenu === 'flex' && displayOverlay === 'block') {
    overlay.style.display = 'none';
    header.classList.remove('open');
    menu.style.display = 'none';
  }
  else {
    overlay.style.display = 'block';
    header.classList.add('open');
    menu.style.display = 'flex';
  }
});

const testimonials = [
  {
    name: "Anisha Li",
    quote: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    image: "../../images/avatar-anisha.png"
  },
  {
    name: "Ali Bravo",
    quote: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    image: "../../images/avatar-ali.png"
  },
  {
    name: "Richard Watts",
    quote: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    image: "../../images/avatar-richard.png"
  },
  {
    name: "Shanai Gough",
    quote: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    image: "../../images/avatar-shanai.png"
  }
];

const radioButtons = document.querySelectorAll('input[type="radio"][name="radio"]');
const image = document.querySelector('#menuImg img');
const name = document.querySelector('#avatarName');
const description = document.querySelector('#avatarDescription');

// Add event listeners to the radio buttons
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', () => {
    if (radioButton.checked) {
      const index = radioButton.value;
      image.src = testimonials[index].image;
      name.innerHTML = testimonials[index].name;
      description.innerHTML = testimonials[index].quote;
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  radioButtons[1].checked = true;
  radioButtons[1].dispatchEvent(new Event('change'));
});