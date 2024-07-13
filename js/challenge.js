document.addEventListener('DOMContentLoaded', () =>{
  const counterElement  = document.getElementById('counter');
  const minusBtn = document.getElementById("minus");
  const plusBtn = document.getElementById("plus");
  const heartBtn = document.getElementById("heart");
  const pauseBtn = document.getElementById("pause");


  let counter = 0;
    let isPaused = false;
    let likes = {};


    let timer = setInterval(() => {
        if (!isPaused) {
            counter++;
            counterElement.textContent = counter;
        }
    }, 1000);

    plusBtn.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
    });

    minusBtn.addEventListener('click', () => {
        counter--;
        counterElement.textContent = counter;
    });

    heartBtn.addEventListener('click', () => {
        likes[counter] = (likes[counter] || 0) + 1;
        let likeItem = document.getElementById(`like-${counter}`);
        if (!likeItem) {
            likeItem = document.createElement('li');
            likeItem.id = `like-${counter}`;
            likeItem.textContent = `${counter} has been liked ${likes[counter]} times`;
            document.querySelector('#likes').appendChild(likeItem);
        } else {
            likeItem.textContent = `${counter} has been liked ${likes[counter]} times`;
        }
    });

    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
            pauseBtn.textContent = 'resume';
            plusBtn.disabled = true;
            minusBtn.disabled = true;
            heartBtn.disabled = true;
        } else {
            pauseBtn.textContent = 'pause';
            plusBtn.disabled = false;
            minusBtn.disabled = false;
            heartBtn.disabled = false;
        }
    });

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = document.getElementById('comment').value;
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentsList.appendChild(commentItem);
        commentForm.reset();
    });
})