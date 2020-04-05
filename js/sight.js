class SVGElement {
	constructor(type) {
		this.type = type;
		this.namespace = 'http://www.w3.org/2000/svg';
		this.node = document.createElementNS(this.namespace, this.type);
		return this;
	}
	
	attr(attrs) {
		console.log('Begin: attr() method');
		for (const [key, value] of Object.entries(attrs)) {
			console.log(key, value);
			this.node.setAttributeNS(null, key, value);
		}
		console.log('End: attr() method');
		return this;
	}
	
	append(element) {
		const parent = (typeof element === 'string') ? 
		document.querySelector(element) : element.node;
		parent.appendChild(this.node);
		return this;
	}
}

class Sight {
	constructor(selector, width, height) {
		this.svg = new SVGAElement('svg').attr({viewbox: `0 0 ${width} ${height}`}).append(selector);
	}

	draw(type, attrs) {
		return new SVGElement(type).attrs(attrs).append(this.svg);
	}
}

