var feedbackButton = document.querySelector(".contacts .button");
var feedbackModal = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-feedback .close-button");
var feedbackForm = feedbackModal.querySelector(".feedback-form");
var feedbackNameInput = feedbackModal.querySelector("#feedback-name");
var feedbackEmailInput = feedbackModal.querySelector("#feedback-email");
var feedbackMessageInput = feedbackModal.querySelector("#feedback-message");
var storage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-feedback-show");
  if (storage) {
    feedbackNameInput.value = storage;
    feedbackEmailInput.focus();
  } else {
    feedbackNameInput.focus();
  }
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-feedback-show");
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackNameInput.value || !feedbackEmailInput.value || !feedbackMessageInput.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", feedbackNameInput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackModal.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      feedbackModal.classList.remove("modal-feedback-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});
