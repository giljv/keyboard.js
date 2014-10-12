/*
 *
 * keyboard.js
 *
 * Created by Gilbert Virgo
 *
*/



var Keyboard = {
    // Keys 
    A: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 65) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 65) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 65) { func.call() }
    		}, false);
    	}
    },
    B: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 66) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 66) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 66) { func.call() }
    		}, false);
    	}
    },
    C: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 67) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 67) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 67) { func.call() }
    		}, false);
    	}
    },
    D: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 68) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 68) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 68) { func.call() }
    		}, false);
    	}
    },
    E: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 69) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 69) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 69) { func.call() }
    		}, false);
    	}
    },
    F: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 70) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 70) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 70) { func.call() }
    		}, false);
    	}
    },
    G: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 71) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 71) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 71) { func.call() }
    		}, false);
    	}
    },
    H: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 72) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 72) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 72) { func.call() }
    		}, false);
    	}
    },
    I: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 73) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 73) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 73) { func.call() }
    		}, false);
    	}
    },
    J: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 74) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 74) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 74) { func.call() }
    		}, false);
    	}
    },
    K: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 75) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 75) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 75) { func.call() }
    		}, false);
    	}
    },
    L: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 76) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 76) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 76) { func.call() }
    		}, false);
    	}
    },
    M: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 77) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 77) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 77) { func.call() }
    		}, false);
    	}
    },
    N: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 78) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 78) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 78) { func.call() }
    		}, false);
    	}
    },
    O: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 79) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 79) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 79) { func.call() }
    		}, false);
    	}
    },
    P: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 80) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 80) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 80) { func.call() }
    		}, false);
    	}
    },
    Q: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 81) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 81) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 81) { func.call() }
    		}, false);
    	}
    },
    R: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 82) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 82) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 82) { func.call() }
    		}, false);
    	}
    },
    S: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 83) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 83) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 83) { func.call() }
    		}, false);
    	}
    },
    T: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 84) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 84) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 84) { func.call() }
    		}, false);
    	}
    },
    U: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 85) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 85) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 85) { func.call() }
    		}, false);
    	}
    },
    V: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 86) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 86) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 86) { func.call() }
    		}, false);
    	}
    },
    W: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 87) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 87) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 87) { func.call() }
    		}, false);
    	}
    },
    X: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 88) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 88) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 88) { func.call() }
    		}, false);
    	}
    },
    Y: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 89) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 89) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 89) { func.call() }
    		}, false);
    	}
    },
    Z: {
    	getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 90) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 90) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 90) { func.call() }
    		}, false);
    	}
    },
    LEFT: {
        getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 37) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 37) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 37) { func.call() }
    		}, false);
    	} 
    },
    RIGHT: {
        getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 39) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 39) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 39) { func.call() }
    		}, false);
    	}
    },
    UP: {
        getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 38) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 38) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 38) { func.call() }
    		}, false);
    	}
    },
    DOWN: {
        getKeyCode: function(e) { return e.which; },
    	getKeyChar: function(e) {
    		return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode);
    	},
    	down: function(func) {
    		document.addEventListener("keydown", function(e) {
    			if(e.which == 40) { func.call() }
    		}, false);
    	},
    	up: function(func) {
    		document.addEventListener("keyup", function(e) {
    			if(e.which == 40) { func.call() }
    		}, false);
    	},
    	press: function(func) {
    		document.addEventListener("keypress", function(e) {
    			if(e.which == 40) { func.call() }
    		}, false);
    	}
    },

    // General listeners
    down: function(func) {
        document.addEventListener("keydown", func, false);
    },
    up: function(func) {
        document.addEventListener("keyup", func, false);
    },
    press: function(func) {
        document.addEventListener("keypress", func, false);
    },
    getKeyCode: function(e) {
        return e.which;
    },
    getKeyChar: function(e) {
        return (e.which) ? String.fromCharCode(e.which) : String.fromCharCode(e.keyCode); 
    }
}; 
