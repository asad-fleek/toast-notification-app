let toastBox = document.getElementById('toastBox');
let successMsg = 'Sucessfully submitted';
let errorMsg = 'Please fix the error';
let invalidMsg = 'Invalid input, check again';


function showToast(msg) {
    
    let toast =document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('Sucessfully')) {
        toast.classList.add('success')
    }

    if (msg.includes('error')) {
        toast.classList.add('error')
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('Invalid')
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
