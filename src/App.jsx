import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";




function App() {
  const [isAuth, setIsAuth] = useState(false);

  
  // const [products, setProducts] = useState([]);

  // const [account, setAccount] = useState({
  //   username: "example@test.com",
  //   password: "example",
  // });


  // const defaultModalState = {
  //   imageUrl: "",
  //   title: "",
  //   category: "",
  //   unit: "",
  //   origin_price: "",
  //   price: "",
  //   description: "",
  //   content: "",
  //   is_enabled: 0,
  //   imagesUrl: [""]
  // };

  // const handleInputChange = (e) => {
  //   const { value, name } = e.target;

  //   setAccount({
  //     ...account,
  //     [name]: value,
  //   });
  // };

  // const getProducts = async (page = 1) => {
  //   try {
  //     const res = await axios.get(
  //       `${BASE_URL}/v2/api/${API_PATH}/admin/products?page=${page}`
  //     );

  //     const products = res.data.products;
  //     const filterProducts = products.map((product)=>{
  //       return {
  //         ...product,
  //         imagesUrl: Array.isArray(product.imagesUrl) ? product.imagesUrl.filter((image) => image !== ''): [],
  //       }
  //     });

  //     // console.log(filterProducts);
  //     setProducts(filterProducts);

  //     setPageInfo(res.data.pagination);

  //     console.log(pageInfo);


  //   } catch (error) {
  //     alert("取得產品失敗");
  //     console.log(error);
  //   }
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(`${BASE_URL}/v2/admin/signin`, account);

  //     const { token, expired } = res.data;
  //     document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;

  //     axios.defaults.headers.common["Authorization"] = token;

  //     getProducts();

  //     setIsAuth(true);
  //   } catch (error) {
  //     alert("登入失敗",error);
  //   }
  // };

  // const checkUserLogin = async () => {
  //   try {
  //     await axios.post(`${BASE_URL}/v2/api/user/check`);
  //     getProducts();
  //     setIsAuth(true);
  //     // alert("使用者已登入");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(()=>{
  //   const token = document.cookie.replace(
  //     /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
  //     "$1",
  //   );
  //   axios.defaults.headers.common["Authorization"] = token;
  //   checkUserLogin();

  // },[]);

//   const productModalRef = useRef(null);
//   const delProductModalRef = useRef(null);
//   const [modalmode, setModalMode] = useState(null);

//   useEffect(()=>{
//     // console.log(productModalRef.current);
//     new Modal(productModalRef.current,{
//       backdrop: false,
//     });

//     new Modal(delProductModalRef.current,{
//       backdrop: false,
//     });
//     // console.log(Modal.getInstance(productModalRef.current));
//     // Modal.getInstance(productModalRef.current);
//   }, []);

//   const handleOpenModal = (mode, product)=>{
//     setModalMode(mode);

//     switch(mode){
//       case 'create':
//         setTempProduct(defaultModalState);
//         break;
//       case 'edit':
//         setTempProduct(product);
//         break;
//       default: 
//         break;
//     }

//     const modalInstance = Modal.getInstance(productModalRef.current);

//     modalInstance.show();

//   }


//   const handleCloseModal = ()=>{
//     const modalInstance = Modal.getInstance(productModalRef.current);

//     modalInstance.hide();

//   }

//   const handleOpenDelProductModal = (product)=>{
//     setTempProduct(product);
//     const modalInstance = Modal.getInstance(delProductModalRef.current);

//     modalInstance.show();

//   }

//   const handleCloseDelProductModal = ()=>{
//     const modalInstance = Modal.getInstance(delProductModalRef.current);

//     modalInstance.hide();

//   }


//   const [tempProduct, setTempProduct] = useState(defaultModalState);


//   const handleModalInputChange = (e)=>{
//     const { name, value, checked, type } = e.target;
//     setTempProduct({
//       ...tempProduct,
//       [name]: type === 'checkbox' ? checked: value, 
//     })
//   }


//   const handleImageChange = (e, index)=>{
//     const {value} = e.target;

//     const newImages = [...tempProduct.imagesUrl];

//     newImages[index] = value;

//     setTempProduct({
//       ...tempProduct,
//       imagesUrl: newImages
//       }
//     )

//   }

//   const handleAddImage = ()=>{
//     const newImages = [...tempProduct.imagesUrl, ''];

//     setTempProduct({
//       ...tempProduct,
//       imagesUrl: newImages
//       }
//     )

//   }

//   const handleRemoveImage = ()=>{

//     const newImages = [...tempProduct.imagesUrl];

//     newImages.pop(); //移除陣列最後一個

//     setTempProduct({
//       ...tempProduct,
//       imagesUrl: newImages
//       }
//     )


//   }


//   const createProduct = async()=>{
//     try {
//       await axios.post(`${BASE_URL}/v2/api/${API_PATH}/admin/product`,{
//         data: {
//           ...tempProduct,
//           origin_price: Number(tempProduct.origin_price),
//           price: Number(tempProduct.price),
//           is_enabled: tempProduct.is_enabled ? 1 : 0,          
//         },
//       });
//     } catch (error) {
//       alert('新增產品失敗');
//       console.log(error);
//     }
//   };

//   const updateProduct = async()=>{
//     try {
//       await axios.put(`${BASE_URL}/v2/api/${API_PATH}/admin/product/${tempProduct.id}`,{
//         data: {
//           ...tempProduct,
//           origin_price: Number(tempProduct.origin_price),
//           price: Number(tempProduct.price),
//           is_enabled: tempProduct.is_enabled ? 1 : 0,          
//         },
//       });
//     } catch (error) {
//       alert('新增產品失敗');
//       console.log(error);
//     }
//   };
  
//   const delProduct = async()=>{
//     try {
//       await axios.delete(`${BASE_URL}/v2/api/${API_PATH}/admin/product/${tempProduct.id}`);
//     } catch (error) {
//       alert('刪除產品失敗');
//       console.log(error);
//     }
//   };

//   const handleUpdateProduct = async()=>{
//     const apiCall = modalmode === 'create' ? createProduct: updateProduct
//     try {
//       await apiCall();

//       getProducts();

//       handleCloseModal();
//     } catch (error) {
//       alert('更新產品失敗');
//       console.log(error);
//     };
//   };


//   const handleDelProduct = async()=>{
//     try {
//       await delProduct();

//       getProducts();

//       handleCloseDelProductModal();
//     } catch (error) {
//       alert('刪除產品失敗');
//       console.log(error);
//     }
//   }

//  const [pageInfo, setPageInfo] = useState({});

//  const handlePageChange =(page)=>{
//   getProducts(page)
//  }

//  const handleFileChange = async (e)=>{
//   console.dir(e.target);

//   const file = e.target.files[0];

//   console.log(file);  
//   const formData = new FormData();

//   formData.append('file-to-upload', file);
//   console.log(formData);
//   console.log([...formData.entries()]);
//   // const upFormData = [...formData.entries()]

//   try {
//     const res = await axios.post(`${BASE_URL}/v2/api/${API_PATH}/admin/upload`,  formData);

//     const uploadImageUrl = res.data.imageUrl;
//     console.log(uploadImageUrl);

//     setTempProduct({...tempProduct,
//       imageUrl: uploadImageUrl
//     })
//   } catch (error) {
//     console.log(error);
//   }
//  }

  return (
    <>
      {isAuth ? <ProductPage  /> : 
        <LoginPage setIsAuth={setIsAuth}/>
      }
    </>
  );
}

export default App;
