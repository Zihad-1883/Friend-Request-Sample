document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
    const msg = document.getElementById('msg');
    const acceptBtn = document.getElementById('accept');
    const rejectBtn = document.getElementById('reject');
    const btnContainer = document.getElementById('container')

    acceptBtn.addEventListener("click", function () {
        msg.innerText = 'You are now friends'
        msg.style.color = "green"
        msg.style.fontSize = '40px'
        const deleteElement = document.getElementById('btn');
        deleteElement.remove();

        
        const removeFriendButton = document.createElement('button');
        removeFriendButton.innerText = 'Remove Friend'
        btnContainer.appendChild(removeFriendButton);

        removeFriendButton.addEventListener("click",function(){
            msg.innerText = 'Removed from friend list'
            msg.style.color = "blue"
            msg.style.fontSize = '40px'
            removeFriendButton.remove();
        })
      
      
    });

    rejectBtn.addEventListener("click", function () {
        msg.innerText = 'The request has been rejected';
        msg.style.color = "red"
        msg.style.fontSize = '40px'
        msg.style.textAlign = 'center'
        const deleteElement = document.getElementById('btn');
        deleteElement.remove();

       
        const addFriendButton = document.createElement('button');
        addFriendButton.innerText = 'Send Friend Request'
        btnContainer.appendChild(addFriendButton);

            addFriendButton.addEventListener("click",function(){
            msg.innerText = 'Friend Request Sent'
            msg.style.color = "blue"
            msg.style.fontSize = '40px'
            addFriendButton.remove();
        })
    });
});
