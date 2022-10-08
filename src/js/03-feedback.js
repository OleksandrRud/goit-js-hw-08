import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

initPage();

const onFormInput = event => {
  const { name, value } = event.target;

  try {
    let saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saveData) {
      saveData = JSON.parse(saveData);
    } else {
      saveData = {};
    }
    saveData[name] = value;
    const stringData = JSON.stringify(saveData);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringData);
  } catch (error) {
    console.log(error);
  }
};
const throttleOnFormInput = throttle(onFormInput, 500);
formRef.addEventListener('input', throttleOnFormInput);

function initPage() {
  const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!saveData) {
    return;
  }
  try {
    const parceData = JSON.parse(saveData);
    Object.entries(parceData).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  } catch (error) {
    console.error(error);
  }
}

const handlySubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log(message.value);
  console.log(email.value);
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
formRef.addEventListener('submit', handlySubmit);
