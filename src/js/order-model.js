import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { baseURL } from "./pets-list/pets-list-api";
import { modal } from "./animal-detail";
export const form = document.querySelector('.order-form')
form.addEventListener('submit',async e=>{
    e.preventDefault();
    const animalId = e.target.dataset.animalId;
    const { name ,phone, comment } = e.target.elements;
    const formData = {
        name: name.value,
        phone: phone.value,
        comment: comment.value,
        animalId,
    };
    
    try{
        const response= await axios.post(
            `${baseURL}/orders`,
            formData
        );
        const orderData = response.data;
        console.log('orderData>>>', orderData);
        Swal.fire({
            title: "Хороша робота!",
            text: "Ваше замовлення відправлено!",
            icon: "success"
        });
        e.target.reset();
        modal.classList.add('hidden');
    }catch(error){
        Swal.fire({
            title: "Ой ой?",
            text: "Якась помилка - спробуй ще",
            icon: "question"
            });
    }
})