import FuncCompBio from "./components/FuncCompBio";
import ClassCompBio from "./components/ClassCompBio";
import BioPlainCssStyle from "./components/bio/PlainCss/BioPlainCssStyle";
import BioModuleCssStyle from "./components/bio/ModuleCss/BioModuleCssStyle";
import BioInlineCssStyle from "./components/bio/InlineCss/BioInlineCssStyle";

function App() {
	// * penulisan function

	// * cara pertama
	// function sayHello(nama) {
	// 	alert("My Name is " + nama);
	// }

	// * cara kedua
	const sayHello = (nama) => {
		alert("My Name is " + nama);
	};

	return (
		<div className="App">
			{/* <FuncCompBio /> */}
			{/* <ClassCompBio
				nama="ojan"
				umur={18}
				hobby={["Briding Ikan Cupang", "Makan", "Minum"]}
				menikah={false}
				sayHello={sayHello}
			/> */}

			{/* bio plain css component */}
			{/* <BioPlainCssStyle
				nama="ojan"
				umur={18}
				hobby={["Briding Ikan Cupang", "Makan", "Minum"]}
				menikah={false}
				sayHello={sayHello}
			/> */}

			{/* bio module css component */}
			{/* <BioModuleCssStyle
				nama="ojan"
				umur={18}
				hobby={["Briding Ikan Cupang", "Makan", "Minum"]}
				menikah={false}
				sayHello={sayHello}
			/> */}

			{/* bio inline css component */}
			<BioInlineCssStyle
				nama="ojan"
				umur={18}
				hobby={["Briding Ikan Cupang", "Makan", "Minum"]}
				menikah={false}
				sayHello={sayHello}
			/>
		</div>
	);
}

export default App;
