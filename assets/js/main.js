
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('demoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const studentClass = document.getElementById('studentClass').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const phoneInput = document.getElementById('phoneField').value.trim();

  const message =
    'Hi Dwarka Toppers,%0A%0AI want to book a free demo class.%0A%0A' +
    'Student Name: ' + encodeURIComponent(name) + '%0A' +
    'Class: ' + encodeURIComponent(studentClass) + '%0A' +
    'Subject: ' + encodeURIComponent(subject) + '%0A' +
    'Phone: ' + encodeURIComponent(phoneInput);

  window.open('https://wa.me/918920112146?text=' + message, '_blank');
});
