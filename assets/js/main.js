import { GOST } from './gost.js';
import { CHAR_SIZE } from './constants.js';

const messageEncryptInput = document.querySelector('#messageEncryptInput');
const messageDecryptInput = document.querySelector('#messageDecryptInput');
const keyInput = document.querySelector('#keyInput');

const encryptButton = document.querySelector('#encryptButton');
const decryptButton = document.querySelector('#decryptButton');
const decryptResultButton = document.querySelector('#decryptResultButton');

const result = document.querySelector('#result');

const gost = new GOST();
let outputValue = '';

const keyLength = 256 / CHAR_SIZE;

const gostCipher = (gostObj, message, key, isEncrypt, outputNode) => {
  let answer = '';
  isEncrypt ? (answer = gostObj.encrypt(message, key)) : (answer = gostObj.decrypt(message, key));
  outputNode.innerText = answer;
  return answer;
};

keyInput.setAttribute('maxlength', keyLength.toString());

encryptButton.addEventListener('click', () => {
  outputValue = gostCipher(gost, messageEncryptInput.value, keyInput.value, true, result);
});

decryptButton.addEventListener('click', () => {
  outputValue = gostCipher(gost, messageDecryptInput.value, keyInput.value, false, result);
});

decryptResultButton.addEventListener('click', () => {
  outputValue = gostCipher(gost, outputValue, keyInput.value, false, result);
});
