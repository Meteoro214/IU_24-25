class validacionesatomicas{

	constructor(){
		
	}
	
	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar
	
	min_size(id, minsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length<minsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	//max_size()
	//@param id Id objeto dom
	//@param minsize tamaño maximo a validar
	
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length>maxsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	format(id, exprreg){
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}

	max_size_file(objfile, minsize){
		alert(objfile.size);
		return true;
	}

	type_file(objfile, array_tipos){
		alert(objfile.type);
		return true;
	}

	format_name_file(objfile, exprreg){
		alert(objfile.name);
		return true;
	}

}
