document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
    const msg = document.getElementById('msg');
    const acceptBtn = document.getElementById('accept');
    const rejectBtn = document.getElementById('reject');

    acceptBtn.addEventListener("click", function() {
        msg.innerText = 'You are now friends';
        msg.style.color = "green"
        msg.style.fontSize = '40px'
        const deleteElement = document.querySelector('.btn');
        deleteElement.remove();
    });

    rejectBtn.addEventListener("click", function() {
        msg.innerText = 'The request has been rejected';
        msg.style.color = "red"
        msg.style.fontSize = '40px'
        msg.style.textAlign = 'center'
        const deleteElement = document.querySelector('.btn');
        deleteElement.remove();
    });
});
