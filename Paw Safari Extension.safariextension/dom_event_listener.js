function handleContextMenuDOMEvent(event) {
	var dict = {'nodeName':event.target.nodeName, 'href':event.target.href};
	safari.self.tab.setContextMenuEventUserInfo(event, dict);
}

document.addEventListener("contextmenu", handleContextMenuDOMEvent, false);
