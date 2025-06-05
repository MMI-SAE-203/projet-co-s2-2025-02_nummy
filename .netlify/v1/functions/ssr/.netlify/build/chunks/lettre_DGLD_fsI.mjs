const ImageLettre = new Proxy({"src":"/_astro/lettre.BtCzBCVN.webp","width":324,"height":324,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/cardimg/lettre.webp";
							}
							
							return target[name];
						}
					});

export { ImageLettre as I };
