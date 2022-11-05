//ES6 Module
// Module - group of codes or logics or function
// library is a module based coding
// We can re-use library as needed and here the module comes to play
// In a program we can export and import modules
// Import: class import, function import, variable import
// Export: class export, function export, variable export
// 👉Named Import: use same name for export and import (like: China exports "Samsung" and in Bangladesh we import as "Samsung")
// 👉Default: import by using any name (like: if Australia exports "Cow", in Bangladesh we import as "Goru")

class chinaToBd {
	defaultModuleTesting() {
		console.log("Default Module Practice");
	}
}

export default chinaToBd;