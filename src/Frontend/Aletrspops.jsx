import Swal from "sweetalert2";

Swal.fire({  
    title: 'Success',  
    type: 'success',  
    text: 'Your Request Has Been Accepted ,You can Contact the Owner for further Procedure.',  
  });

  Swal.fire({  
    title: 'Are you sure?',  
    text: 'Your Want To Accept The User ?',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonColor: '#3085d6',  
    cancelButtonColor: '#d33',  
    confirmButtonText: 'Yes!'  
  });