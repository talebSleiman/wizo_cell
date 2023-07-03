import api from '../axioInst';

const getAll = () => {
    return api.get("products/");
}


const ProductServices = {
    getAll,
}

export default ProductServices;