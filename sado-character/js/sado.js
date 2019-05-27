function sadoCounter(options) {
	// Defaults
	const defaults = {
        separator: options.separator || "of",
        errorColor: options.errorColor || "#ff0037",
        okColor: options.okColor || "#1cb35b",
        errorCallback: options.errorCallback,
        okCallback: options.okCallback,
        wordCounter: options.wordCounter || false,
		wordSeparator: options.wordSeparator || " ",
		disableSubmit: options.disableSubmit || false
    };

    // CSS Style Element
    var css_el = document.createElement('style');
	css_el.setAttribute('type', 'text/css');

	var css_styles = ".size-okay+.c_container {color: "+defaults.okColor+";}.size-large+.c_container {color: "+defaults.errorColor+";}";

	if ('textContent' in css_el) {
	  css_el.textContent = css_styles;
	} else {
	  css_el.styleSheet.cssText = css_styles;
	}

	document.getElementsByTagName('head')[0].appendChild(css_el);
    
	// Find Nodes
	document.querySelectorAll('[data-toggle="counter"]').forEach(function(node) {
		var d_limit = node.getAttribute('data-limit');
		var d_value = node.value.length;
		var c_container = document.createElement("div");
		c_container.classList.add('c_container');
		var c_typed = document.createElement("span");
		c_typed.classList.add('c_typed');
		var d_value_node = document.createTextNode(d_value);
		c_typed.appendChild(d_value_node);
		var c_limit = document.createElement("span");
		c_limit.classList.add('c_limit');
		var d_limit_node = document.createTextNode(d_limit);
		c_limit.appendChild(d_limit_node);
		var c_of = document.createTextNode(" "+defaults.separator+" ");
		c_container.appendChild(c_typed);
		c_container.appendChild(c_of);
		c_container.appendChild(c_limit);

		node.parentNode.insertBefore(c_container, node.nextSibling);

		// Keyup Event Listener
	    node.addEventListener('keyup', function() {
	    	var node_value = node.value;
	    	if (defaults.wordCounter) {
	    		var node_length = node_value.trim().split(defaults.wordSeparator).length;
	    	}
	    	else {
	    		var node_length = node_value.length;
	    	}
	    	
	    	c_typed.innerText = node_length;
    		if (node_length > d_limit) {
	    		if (!node.classList.contains('size-large')) {
	    			node.classList.add('size-large');
	    		}
	    		if (node.classList.contains('size-okay')) {
	    			node.classList.remove('size-okay');
		    		if (defaults.errorCallback) {
		    			defaults.errorCallback();
		    		}
		    		if (defaults.disableSubmit) {
		    			var submit = node.closest('form').querySelector('[type="submit"]');
		    			submit.setAttribute("disabled", "disabled");
		    		}
	    		}
	    	}

	    	else if (node_length <= d_limit) {
	    		if (node.classList.contains('size-large')) {
	    			node.classList.remove('size-large');
	    			if (defaults.okCallback) {
	    				defaults.okCallback();
	    			}
	    			if (defaults.disableSubmit) {
	    				var submit = node.closest('form').querySelector('[type="submit"]');
		    			submit.removeAttribute("disabled");
		    		}
	    		}
	    		if (!node.classList.contains('size-okay')) {
	    			node.classList.add('size-okay');
	    		}
	    	}

	    	
	    });
	});

	
}