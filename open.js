window.addEventListener('scroll', () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    const progressPercentage = (scrollPosition / totalHeight) ;

    const prgper = document.querySelector(".prgpercent");

    const percentageValue = Math.round(progressPercentage * 100);
    prgper.textContent = percentageValue + '%';

    const color = `hsl( 240 , ${progressPercentage * 100}% , 30%)`;
     prgper.style.color = color;

    if(percentageValue > 100){
        openNextPage();
     }

     function openNextPage() {
        // You can add an animation here, like fading out the current page
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '0';
    
        setTimeout(() => {
            window.location.href = 'game.html'; // Change this to your target page
        }, 1000); 
    }
})