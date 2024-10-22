const _elements = {
	plaque: document.querySelector(".plaque"),
	button: document.querySelector(".button"),
	buttonPlay: document.querySelector(".button__play"),
	buttonRightBroken: document.querySelector(".button--right-broken"),
	channelNameInput: document.querySelector(".channel-name__input"),
	channelNameDescription: document.querySelector(".description__channel-name")
}

_elements.channelNameDescription.addEventListener("input", () => {
	_elements.channelNameInput.value = _elements.channelNameDescription.innerText;
});

_elements.channelNameInput.addEventListener("input", (e) => {
	_elements.channelNameDescription.innerText = _elements.channelNameInput.value;
});

_elements.button.addEventListener("click", () => {
	if(_elements.button.classList.contains("button--broken"))
			return;
	inks.fx.shake(_elements.plaque, 15, false).then(brakePlaque);
});

const brakePlaque = () => {
	_elements.button.classList.add("button--broken", "button--left-broken");
	_elements.buttonPlay.classList.add("button__play--left-broken");
	_elements.buttonRightBroken.classList.remove("button--hide");
}

_elements.channelNameInput.value = _elements.channelNameDescription.innerText;


