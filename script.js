const submitIdButtonTxt = 'submit-btn';

function verifyProfile() {
  const buttonLogin = document.getElementById('input-button-login');
  buttonLogin.addEventListener('click', () => {
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    if ((inputEmail.value !== 'tryber@teste.com')
      && (inputPassword !== '123456')) {
      alert('Email ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }

    inputEmail.value = '';
    inputPassword.value = '';
  });
}

verifyProfile();

document.getElementById(submitIdButtonTxt).disabled = true;
document.getElementById(submitIdButtonTxt).style.backgroundColor = 'rgb(106, 82, 122)';

function enableSubmitButton() {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
      const submitIdButtonOn = document.getElementById(submitIdButtonTxt);
      submitIdButtonOn.disabled = false;
      submitIdButtonOn.style.backgroundColor = 'rgb(99, 0, 170)';
    } else {
      const submitIdButtonOff = document.getElementById(submitIdButtonTxt);
      submitIdButtonOff.disabled = true;
      submitIdButtonOff.style.backgroundColor = 'rgb(106, 82, 122)';
    }
  });
}

enableSubmitButton();

const countChar = () => {
  const textArea = document.getElementById('textarea');
  textArea.addEventListener('keyup', () => {
    const counter = document.getElementById('counter');
    const text = textArea.value;
    const charQuantity = text.length;
    counter.innerHTML = 500 - charQuantity;
  });
};

countChar();

// --------------------------------------------------------------------------------------------------------------------------

const funcContents = (contents) => {
  const theContent = [];
  for (let i = 0; i < contents.length; i += 1) {
    theContent.push(` ${contents[i].value}`);
  }
  return theContent;
};

// ----------------------------------------------------------------

const replaceForm = () => {
  const formID = 'evaluation-form';
  const form = document.getElementById(formID);
  form.parentNode.removeChild(form);
  const main = document.getElementsByClassName('container');
  const newForm = document.createElement('form');
  newForm.id = formID;
  main[0].appendChild(newForm);
  const img = document.getElementById('img-container');
  img.style.order = '2';
  const form2 = document.getElementById(formID);
  const newH2 = document.createElement('h2');
  newH2.id = 'finalForm';
  newH2.innerText = 'Formulário Preenchido:';
  form2.appendChild(newH2);

  const mainDiv = document.createElement('div');
  mainDiv.id = 'main-final-info';
  form2.appendChild(mainDiv);
};

// ----------------------------------------------------------------

const mainDivId = 'main-final-info';

const addRefreshButton = () => {
  const formID = 'evaluation-form';
  const form = document.getElementById(formID);
  const newBottom = document.createElement('button');
  newBottom.id = 'refresh-bottom';
  newBottom.innerText = '⏎';
  form.appendChild(newBottom);
};

const addContent = (formData) => {
  formData.forEach((element) => {
    const getMainDiv = document.getElementById(mainDivId);
    const p = document.createElement('p');
    p.classList.add('form-content');
    p.innerText = `${Object.keys(element)}: ${Object.values(element)}`;
    getMainDiv.appendChild(p);
  });
  addRefreshButton();
};

// -------------------------------------------------------------

const setFormData = () => {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const house = document.getElementById('house').value;
    const family = document.querySelector('input[name="family"]:checked').value;
    const checkedContents = funcContents(document.querySelectorAll('[name=conteudo]:checked'));
    const rate = document.querySelector('input[name="rate"]:checked').value;
    const textArea = document.getElementById('textarea').value;
    const allFormData = [{ Nome: `${firstName} ${lastName}` }, { Email: email }, { Casa: house },
      { Família: family }, { Matérias: checkedContents }, { Avaliação: rate },
      { Observações: textArea },
    ];
    replaceForm();
    addContent(allFormData);
  });
};

setFormData();
