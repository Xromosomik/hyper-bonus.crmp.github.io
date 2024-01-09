const select = document.querySelector('.select');
const selectActive = document.querySelector('.select__active');
const selectOptions = document.querySelector('.select__options');
const ServerField = document.querySelector('input[name="server"]');

selectActive.addEventListener('click', function() {
    if (selectOptions.style.display === 'block') {
    selectOptions.style.display = 'none';
    select.classList.remove('select--opened');
  } else {
    selectOptions.style.display = 'block';
    select.classList.add('select--opened');
  }
});

const serverOptions = document.querySelectorAll('.server-select-option');

serverOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    const serverName = option.querySelector('.server-select-option__name name').textContent.trim();
    const serverGenre = option.querySelector('.server-select-option__name span').textContent.trim();
    const serverIcon = option.querySelector('.server-select-option__icon').src;
    
    selectActive.innerHTML = `
    <div class="server-select-option">
      <div class="server-select-option__name">${serverName} <span>${serverGenre}</span></div>
      <img src="${serverIcon}" width="18" height="16" alt="" class="server-select-option__icon">
      </div>
    `;
    ServerField.value = option.getAttribute('value');
    selectOptions.style.display = 'none';
    select.classList.remove('select--opened');
  });
});